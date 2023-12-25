/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
// You can delete this file if you're not using it

/**
 * You can uncomment the following line to verify that
 * your plugin is being loaded in your site.
 *
 * See: https://www.gatsbyjs.org/docs/creating-a-local-plugin/#developing-a-local-plugin-that-is-outside-your-project
 */

const axios = require("axios")
exports.onPreInit = () => console.log("Loaded gatsby-starter-plugin")

const getDevGroupSessions = () => {
   return axios.get("https://gsfcdevgroup.azurewebsites.net/api/GetGSFCDevGroupSessions").then(function (res) {
      return res.data
   })
}

const getPodcasts = () => {
   return axios.get("https://andrewebsitedata.azurewebsites.net/api/PodcastInfo").then(function (res) {
      return res.data.podcasts
   })
}

// constants for your GraphQL Post and Author types
const SESSION_TYPE = "DevGroupSession"
const PODCAST_TYPE = "Podcast"

exports.sourceNodes = async ({ actions, createContentDigest, createNodeId, getNodesByType }) => {
   const { createNode } = actions

   // loop through data and create Gatsby nodes
   const sessions = await getDevGroupSessions()
   sessions.forEach(session =>
      createNode({
         ...session,
         id: createNodeId(`${SESSION_TYPE}-${session.id}`),
         parent: null,
         children: [],
         internal: {
            type: SESSION_TYPE,
            content: JSON.stringify(session),
            contentDigest: createContentDigest(session),
         },
      })
   )

   // loop through data and create Gatsby nodes
   const podcasts = await getPodcasts()
   podcasts.forEach(podcast =>
      createNode({
         ...podcast,
         id: createNodeId(`${PODCAST_TYPE}-${podcast.uuid}`),
         parent: null,
         children: [],
         internal: {
            type: PODCAST_TYPE,
            content: JSON.stringify(podcast),
            contentDigest: createContentDigest(podcast),
         },
      })
   )

   return
}

/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import "@babel/polyfill"
import "./src/styles/global.css"

// eslint-disable-next-line import/prefer-default-export
export const onClientEntry = () => {
  // Without this function body the import will not be picked up.
}

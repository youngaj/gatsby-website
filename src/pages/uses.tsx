import React from 'react'
import { makeStyles, useTheme, Theme } from '@material-ui/core/styles'

import { sharedStyles, colors } from '../styles/global'
import Layout from '../components/layout'
import Nav from '../components/nav'

const useStyles = makeStyles((theme: Theme) => ({
   ...sharedStyles(theme),
   header: {
      color: colors.accent,
      marginTop: theme.spacing(5),
      marginBottom: theme.spacing(5),
   },
   category: {
      border: `2px solid ${theme.palette.primary}`,
      borderRadius: '2rem',
      margin: '2rem',
      '& h2': {
         marginBottom: theme.spacing(2),
         textTransform: 'uppercase',
      },
   },
   configuration: {
      '& dt': {
         marginTop: theme.spacing(2),
         paddingLeft: theme.spacing(2),
      },
      '& dd': {
         color: colors.muted,
         paddingLeft: theme.spacing(4),
         marginBottom: theme.spacing(2),
      },
   },
   divider: {
      display: 'block',
      marginTop: '1rem',
      marginBottom: '15px',
      backgroundColor: theme.palette.secondary.main,
      height: '2px',
      width: '150px',
   },
   strikeThrough: { textDecoration: 'line-through' },
}))

const Uses = () => {
   const theme = useTheme()
   const css = useStyles(theme)

   const links = {
      home: { title: 'Home', target: '/' },
      profile: { title: 'Profile', target: '/#profile' },
      resume: { title: 'Resume', target: '/#resume' },
      podcasts: { title: 'Podcasts', target: '/#podcastQueue' },
      devGroup: { title: 'Dev Group', target: '/#devGroup' },
      blog: { title: 'Blog', target: '/#blog' },
   }

   return (
      <Layout>
         <Nav active="uses" links={links} />
         <div className={css.content}>
            <h1 className={[css.pt40, css.header].join(' ')}>
               Andre Young Uses
            </h1>
            <p className={css.mutedText}>
               This is a list of the technologies I use and prefer along with
               configurations
            </p>

            <div className={css.divider}></div>
            <div className={css.category}>
               <h2>
                  Hardware
                  <span className={css.divider}></span>
               </h2>
               <p className={css.mutedText}>
                  I'm not very knowledgeable when it comes to hardware but here
                  is what I use.
               </p>
               <dl className={css.configuration}>
                  <dt>Dell XPS 15 9560</dt>
                  <dd>
                     This computer is a few years old but still works great.
                     <ul>
                        <li>32 GB of Ram</li>
                        <li>Intel i7-7700HQ</li>
                        <li>1 TB Solid State Drive</li>
                        <li>NVIDIA GeForce GTX 1050</li>
                     </ul>
                  </dd>
                  <dt>Monitors</dt>
                  <dd>
                     I run a 3 monitor setup with a 32-inch Samsung in the
                     center and 2 17-inch Dell flipped vertically on both sides.
                     All 3 monitors are mounted on a 3 arm vesa mount.
                  </dd>
                  <dt>Logitech -MK550 Wireless Wave Keyboard and Mouse</dt>
                  <dd>
                     The MK550 Combo includes the K350 keyboard and M510 mouse.
                     Ergonomic wave design: The MK550 uses Logitech’s Constant
                     Curve layout for reduced stress and better, more natural
                     typing
                  </dd>
                  <dt>Logitech Webcam C930e</dt>
                  <dd></dd>
                  <dt>Blue Yei and Blue Yeti X</dt>
                  <dd>
                     I own both a Blue Yeti and a{' '}
                     <a
                        href="https://www.bluemic.com/en-us/products/yeti-x/"
                        target="_blank"
                     >
                        Blue Yeti X
                     </a>
                     . Blue Yeti is a good quality microphone at an affordable
                     price. You can control the gain, headphone level, blend,
                     metering and mute from the microphone directly. It also
                     comes with nice software from Logitech (
                     <a
                        href="https://www.bluemic.com/en-us/products/blue-voice/"
                        target="_blank"
                     >
                        Blue Voice
                     </a>
                     ) that can be used to adjust your sound even more.
                  </dd>
                  <dt>
                     <a href="https://www.sony.com/ug/electronics/headband-headphones/wh-1000xm3">
                        Sony WH-100X M3
                     </a>
                  </dt>
                  <dd>
                     I bought this headphone for my daughter and had to buy
                     another one for myself. It is extremely comfortable, has
                     great noise cancelling properties and good audio quality.
                  </dd>
               </dl>
            </div>

            <div className={css.category}>
               <h2>
                  Editor
                  <span className={css.divider}></span>
               </h2>
               <p className={css.mutedText}>
                  My editor of choice is VS Code. Below are a few of the
                  extensions I recommend using with VS Code.
               </p>
               <dl className={css.configuration}>
                  <dt>GitLens</dt>
                  <dd>
                     GitLens supercharges the Git capabilities built into Visual
                     Studio Code. It helps you to visualize code authorship at a
                     glance via Git blame annotations and code lens, seamlessly
                     navigate and explore Git repositories, gain valuable
                     insights via powerful comparison commands, and so much
                     more.
                  </dd>
                  <dt>Live Share Extension Pack</dt>
                  <dd>
                     This extension pack includes everything you need to start
                     collaboratively editing and debugging in real time,
                     including integrated audio and text chat. This provides you
                     and your team/class with a one-click installation, in order
                     to begin pair programming, performing remote code reviews,
                     driving interactive lectures, and more, without needing to
                     leave Visual Studio Code.
                  </dd>
                  <dt>Docker</dt>
                  <dd>
                     The Docker extension makes it easy to build, manage, and
                     deploy containerized applications from Visual Studio Code.
                     It also provides one-click debugging of Node.js, Python,
                     and .NET Core inside a container.
                  </dd>
                  <dt>Prettier</dt>
                  <dd>
                     An opinionated code formatter.
                     {/* <code>
                          {
                            "arrowParens": "avoid",
                            "semi": false,
                            "tabWidth": 3,
                            "printWidth": 120
                          }
                      </code> */}
                  </dd>
                  <dt>ES Lint</dt>
                  <dd></dd>
                  <dt>
                     <a
                        href="https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker"
                        target="_blank"
                     >
                        Code Spell Checker
                     </a>
                  </dt>
                  <dd>
                     I was introduced to this extension by one of the engineers
                     on my team. For someone with constant spelling mistakes
                     this extension has been a game changer. The goal of this
                     spell checker is to help catch common spelling errors while
                     keeping the number of false positives low.
                  </dd>
                  <dt>Better Comments</dt>
                  <dd>
                     The Better Comments extension will help you create more
                     human-friendly comments in your code. With this extension,
                     you will be able to categorize your annotations into:
                     Alerts Queries TODOs Highlights Commented out code can also
                     be styled to make it clear the code shouldn't be there Any
                     other comment styles you'd like can be specified in the
                     settings
                  </dd>
                  <dt>Remote Development</dt>
                  <dd>
                     The Remote Development extension pack allows you to open
                     any folder in a container, on a remote machine, or in the
                     Windows Subsystem for Linux (WSL) and take advantage of VS
                     Code's full feature set. Since this lets you set up a
                     full-time development environment anywhere, you can:
                     <ul>
                        <li>
                           Develop on the same operating system you deploy to or
                           use larger, faster, or more specialized hardware than
                           your local machine.
                        </li>
                        <li>
                           Quickly swap between different, isolated development
                           environments and safely make updates without worrying
                           about impacting your local machine.
                        </li>
                        <li>
                           Help new team members / contributors get productive
                           quickly with easily spun up, consistent development
                           containers.
                        </li>
                        <li>
                           Take advantage of a Linux based tool-chain right from
                           the comfort of Windows from a full-featured
                           development tool.
                        </li>
                     </ul>
                  </dd>
                  <dt>Import Cost</dt>
                  <dd>
                     This extension will display inline in the editor the size
                     of the imported package. The extension utilizes webpack
                     with babili-webpack-plugin in order to detect the imported
                     size.
                  </dd>
               </dl>
            </div>

            <div className={css.category}>
               <h2>
                  Languages
                  <span className={css.divider}></span>
               </h2>
               <p className={css.mutedText}>
                  "Right" language for the "right" job. Right may mean different
                  things in different scenarios. For example it depends on the
                  knowledge on the team, the problem at hand, the existing
                  ecosystem, the time constraints, etc.
               </p>
               <dl className={css.configuration}>
                  <dt>TypeScript / JavaScript</dt>
                  <dd>
                     JavaScript is eating the world and TypeScript just makes it
                     even better. I've recently dove deeper into TypeScript and
                     think this is an awesome choice.
                  </dd>
                  <dt>C#</dt>
                  <dd>
                     I think C# is an excellent backend language. The language
                     features, tooling, platform support, ecosystem, etc. makes
                     it my #2 choice behind Typescript for anything that's not
                     in the browser.
                  </dd>
               </dl>
            </div>

            <div className={css.category}>
               <h2>
                  Docker
                  <span className={css.divider}></span>
               </h2>
               <p className={css.mutedText}>
                  Docker makes it possible and easier to run applications
                  locally in the same (or similar) to the way it would be run in
                  a production deployed environment.
               </p>
               <dl className={css.configuration}></dl>
            </div>
         </div>
      </Layout>
   )
}

export default Uses

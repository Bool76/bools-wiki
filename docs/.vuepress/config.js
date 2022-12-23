const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Bools Wiki',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Guide',
        link: '/guide/',
      },
      {
        text: 'Git',
        link: '/git/',
      },
      {
        text: 'GitHub',
        link: '/github/',
      },
      {
        text: 'SRAM Dev',
        link: '/sram-dev/'
      },
      {
        text: 'VuePress',
        link: 'https://v1.vuepress.vuejs.org'
      }
    ],
    sidebar: [
      {
        title: 'Home',   // required
        path: '/',      // optional, link of the title, which should be an absolute path and must exist
        collapsable: false, // optional, defaults to true
        sidebarDepth: 1    // optional, defaults to 1
      },
      {
        title: 'C#',
        path: "/c-sharp/",
        children: [ 
          {
            title: "Any Method",
            path: "/c-sharp/any-method/"
          }
        ],
        initialOpenGroupIndex: -1 // optional, defaults to 0, defines the index of initially opened subgroup
      },
      {
        title: 'Git',
        path: "/git/",
        children: [ 
          {
            title: "Clone Repo | Specific Branch",
            path: "/git/clone-repo-specific-branch/"
          },
          {
            title: "Rebase",
            path: "/git/rebase/"
          }
        ],
        initialOpenGroupIndex: -1 // optional, defaults to 0, defines the index of initially opened subgroup
      },
      {
        title: 'SRAM Dev',   // required
        path: '/sram-dev/',      // optional, link of the title, which should be an absolute path and must exist
        children: [ 
          {
            title: "SRAM | .COM",
            path: "/sram-dev/sram-com/",
            children: [ 
              {
                title: ".COM | Start Local",
                path: "/sram-dev/sram-com/start-local/",
                
              }
            ],
          }
        ],
      },
    ],
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}

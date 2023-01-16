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
        title: 'Frontend Development',
        path: "/frontend-development/",
        children: [ 
          {
            title: "Block Elements",
            path: "/frontend-development/block-elements/"
          },
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
            title: 'Commit',
            path: '/git/commit/'
          },
          {
            title: 'Commit Log',
            path: '/git/commit-log/'
          },
          {
            title: 'Delete Branch',
            path: '/git/delete-branch/'
          },
          {
            title: 'Discard File Changes',
            path: '/git/discard-file-changes/'
          },
          {
            title: 'Gitignore',
            path: '/git/gitignore/'
          },
          {
            title: "Rebase",
            path: "/git/rebase/"
          },
          {
            title: 'Reset',
            path: '/git/reset/'
          }
        ],
        initialOpenGroupIndex: -1 // optional, defaults to 0, defines the index of initially opened subgroup
      },
      {
        title: 'SRAM Dev',   // required
        path: '/sram-dev/',      // optional, link of the title, which should be an absolute path and must exist
        children: [ 
          {
            title: "Azure | Deployment",
            path: "/sram-dev/azure-deployment/",
            
          },
          {
            title: "Epi",
            path: "/sram-dev/epi/",
            children: [ 
              {
                title: "Find object",
                path: "/sram-dev/epi/epi-find-object/",
              }
            ]
          },
          {
            title: 'slr2',
            path: '/sram-dev/slr2/',
            children: [
              {
                title: 'Model View Controller',
                path:'/sram-dev/slr2/model-view-controller/'
              }
            ]
          },
          {
            title: 'Sramconnect',
            path: "/sram-dev/sramconnect/",
            initialOpenGroupIndex: -1,
            children: [ 
              {
                title: "Compile C#",
                path: "/sram-dev/sramconnect/compile-c-sharp/"
              },
              {
                title: "Compile chtml",
                path: "/sram-dev/sramconnect/compile-chtml/"
              },
              {
                title: "Compile CSS+JS",
                path: "/sram-dev/sramconnect/compile-css/"
              },
              {
                title: "Debug",
                path: "/sram-dev/sramconnect/debug/",
                
              },
              {
                title: "Start Environment",
                path: "/sram-dev/sramconnect/start-environment/"
              }
            ], // optional, defaults to 0, defines the index of initially opened subgroup
          },
          {
            title: "Sram-ui",
            path: "/sram-dev/sram-ui/",
            initialOpenGroupIndex: -1,
            children: [
              {
                title: "Install Package",
                path: "/sram-dev/sram-ui/install-package/"
              },
              {
                title: "Start Project",
                path: "/sram-dev/sram-ui/start-project/"
              }
            ]
          }
        ],
      },
      {
        title: 'Storybook',
        path: '/storybook/',
        children: [
          {
            title: 'Importing JSON',
            path: '/storybook/importing-json/'
          }
        ]
      },
      {
        title: 'VS Code',
        path: "/vscode/",
        children: [ 
          {
            title: "Debugging",
            path: "/vscode/debugging/"
          }
        ],
        initialOpenGroupIndex: -1 // optional, defaults to 0, defines the index of initially opened subgroup
      },
      {
        title: "Vue",
        path: "/vue/",
        children: [
          {
            title: "Custom Props",
            path: "/vue/custom-props/"
          },
          {
            title: 'Custom Prop Inheritance',
            path: '/vue/custom-prop-inheritance/'
          }
        ]
      }
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

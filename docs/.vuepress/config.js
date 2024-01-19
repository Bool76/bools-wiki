const { description } = require("../../package");

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: "Bools Wiki",
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
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: "",
    editLinks: false,
    docsDir: "",
    editLinkText: "",
    lastUpdated: false,
    nav: [
      {
        text: "Guide",
        link: "/guide/",
      },
      {
        text: "Git",
        link: "/git/",
      },
      {
        text: "GitHub",
        link: "/github/",
      },
      {
        text: "SRAM Dev",
        link: "/sram-dev/",
      },
      {
        text: "VuePress",
        link: "https://v1.vuepress.vuejs.org",
      },
    ],
    sidebar: [
      {
        title: "Home", // required
        path: "/", // optional, link of the title, which should be an absolute path and must exist
        collapsable: false, // optional, defaults to true
        sidebarDepth: 1, // optional, defaults to 1
      },
      {
        title: "C#",
        path: "/c-sharp/",
        children: [
          {
            title: "Any Method",
            path: "/c-sharp/any-method/",
          },
          {
            title: "Class and Objects",
            path: "/c-sharp/class-objects/",
          },
          {
            title: "Constructor",
            path: "/c-sharp/constructor/",
          },
          {
            title: "List Class",
            path: "/c-sharp/list-class/",
          },
          {
            title: "Model View Controller",
            path: "/c-sharp/model-view-controller/",
            children: [
              {
                title: "View",
                path: "/c-sharp/model-view-controller/view/",
                children: [
                  {
                    title: "Import a Model",
                    path: "/c-sharp/model-view-controller/view/view-import-model/",
                  },
                ],
              },
              {
                title: "View Model",
                path: "/c-sharp/model-view-controller/view-model/",
              },
              {
                title: "Controller",
                path: "/c-sharp/model-view-controller/controller/",
                children: [
                  {
                    title: "ActionResult + IActionResult",
                    path: "/c-sharp/model-view-controller/controller/actionResult-iactionResult/",
                  },
                ],
              },
              {
                title: "MVC Example",
                path: "/c-sharp/model-view-controller/mvc-example/",
              },
            ],
          },
          {
            title: "Namespace",
            path: "/c-sharp/namespace/",
          },
        ],
      },
      {
        title: "Chrome",
        path: "/chrome/",
        children: [
          {
            title: "Dev Tools",
            path: "/chrome/dev-tools/",
            children: [
              {
                title: "Move Style Window",
                path: "/chrome/dev-tools/move-style-window/",
              },
            ],
          },
          {
            title: "Lighthouse",
            path: "/chrome/lighthouse/",
            children: [
              {
                title: "Clear Cache",
                path: "/chrome/lighthouse/clear-cache/",
              },
            ],
          },
        ],
      },
      {
        title: "Command Line",
        path: "/command-line/",
        initialOpenGroupIndex: -1, // optional, defaults to 0, defines the index of initially opened subgroup
      },
      {
        title: "CSS",
        path: "/css/",
        initialOpenGroupIndex: -1, // optional, defaults to 0, defines the index of initially opened subgroup
        children: [
          {
            title: "Box Model",
            path: "/css/box-model/",
          },
          {
            title: "Box-Sizing",
            path: "/css/box-sizing/",
          },
          {
            title: "Close Icon",
            path: "/css/close-icon/",
          },
          {
            title: "Container Queries",
            path: "/css/container-queries/",
          },
          {
            title: "Flexbox",
            path: "/css/flexbox/",
            children: [
              {
                title: "Flex Direction",
                path: "/css/flexbox/flex-direction/",
              },
              {
                title: "Flex Grow",
                path: "/css/flexbox/flex-grow/",
              },
              {
                title: "Margin Left + Right",
                path: "/css/flexbox/margin-left-right/",
              },
              {
                title: "Single item per Row",
                path: "/css/flexbox/flex-single-item-row/",
              },
              {
                title: "Two items per Row",
                path: "/css/flexbox/flex-two-items-row/",
              },
            ],
          },
          {
            title: "Grid",
            path: "/css/grid/",
          },
          {
            title: "Limit Text Rows",
            path: "/css/limit-text-rows/",
          },
          {
            title: "min-width + max-width",
            path: "/css/min-width-max-width/",
          },
          {
            title: "Truncate with Ellipsis",
            path: "/css/truncate-with-ellipsis/",
          },
        ],
      },
      {
        title: "Frontend Development",
        path: "/frontend-development/",
        children: [
          {
            title: "Accessibility",
            path: "/frontend-development/accessibility/",
            children: [
              {
                title: "For Attribute",
                path: "/frontend-development/accessibility/for-attribute/",
              },
            ],
          },
          {
            title: "Aspect Ratio",
            path: "/frontend-development/aspect-ratio/",
          },
          {
            title: "Container Queries",
            path: "/frontend-development/container-queries/",
          },
          {
            title: "HTML",
            path: "/frontend-development/html/",
            children: [
              {
                title: "Block Elements",
                path: "/frontend-development/html/block-elements/",
              },
              {
                title: "Video Element",
                path: "/frontend-development/html/video-element/",
              },
            ],
          },
          {
            title: "Node",
            path: "/frontend-development/node/",
            children: [
              {
                title: "nvm",
                path: "/frontend-development/node/nvm/"
              }
            ]
          },
          {
            title: "Tailwind",
            path: "/frontend-development/tailwind/",
          },
          {
            title: "Testing",
            path: "/frontend-development/testing/",
          },
          {
            title: "Typescript",
            path: "/frontend-development/typescript/",
          },
        ],
        initialOpenGroupIndex: -1, // optional, defaults to 0, defines the index of initially opened subgroup
      },
      {
        title: "Git",
        path: "/git/",
        children: [
          {
            title: "Add Git",
            path: "/git/add-git/",
          },
          {
            title: "Clone Repo | Specific Branch",
            path: "/git/clone-repo-specific-branch/",
          },
          {
            title: "Commit",
            path: "/git/commit/",
          },
          {
            title: "Commit Log",
            path: "/git/commit-log/",
          },
          {
            title: "Delete Branch",
            path: "/git/delete-branch/",
          },
          {
            title: "Discard File Changes",
            path: "/git/discard-file-changes/",
          },
          {
            title: "Exclude",
            path: "/git/exclude/",
          },
          {
            title: "Find + Replace",
            path: "/git/find-replace/",
          },
          {
            title: "Gitignore",
            path: "/git/gitignore/",
          },
          {
            title: "Merge Conflicts",
            path: "/git/merge-conflicts/",
          },
          {
            title: "Permission Denied Error",
            path: "/git/permission-denied-error/",
          },
          {
            title: "Rebase",
            path: "/git/rebase/",
          },
          {
            title: "Rebase Explained",
            path: "/git/rebase-explained/",
          },
          {
            title: "Reset",
            path: "/git/reset/",
          },
          {
            title: "SSH",
            path: "/git/ssh/",
            children: [
              {
                title: "Create SSH Key",
                path: "/git/ssh/create-ssh-key/",
              },
            ],
          },
          {
            title: "Squash Commits",
            path: "/git/squash-commits/",
          },
          {
            title: "Track Branch",
            path: "/git/track-branch/",
          },
        ],
        initialOpenGroupIndex: -1, // optional, defaults to 0, defines the index of initially opened subgroup
      },
      {
        title: "Github",
        path: "/github/",
        children: [
          {
            title: "Add SSH Key",
            path: "/github/add-ssh-key/",
          },
          {
            title: "SSH Keys",
            path: "/github/ssh-keys/",
          },
        ],
      },
      {
        title: "Javascript",
        path: "/javascript/",
        children: [
          {
            title: "Arrays",
            path: "/javascript/arrays/",
          },
          {
            title: "Basics",
            path: "/javascript/basics/",
          },
          {
            title: "Functions",
            path: "/javascript/functions/",
          },
          {
            title: "Javascript JQuery Book",
            path: "/javascript/javascript-jquery/",
          },
          {
            title: "Operators",
            path: "/javascript/operators/",
          },
          {
            title: "Variables",
            path: "/javascript/variables/",
          },
        ],
      },
      {
        title: "Markdown",
        path: "/markdown/",
        children: [
          {
            title: "Code Block",
            path: "/markdown/code-block/",
          },
          {
            title: "Escape HTML tag",
            path: "/markdown/escape-html-tag/",
          },
          {
            title: "Footnotes",
            path: "/markdown/footnotes/",
          },
          {
            title: "Hyperlink",
            path: "/markdown/hyperlink/",
          },
          {
            title: "Insert Image",
            path: "/markdown/insert-image/",
          },
          {
            title: "Warning + Notes Message",
            path: "/markdown/warning-and-notes/",
          },
        ],
      },
      {
        title: "Music",
        path: "/music/",
        children: [
          {
            title: "Chord Progression",
            path: "/music/chord-progression/",
          },
          {
            title: "Vocal Range",
            path: "/music/vocal-range/",
          },
        ],
      },
      {
        title: "Project Management",
        path: "/pm/",
        children: [
          {
            title: "Project Management Journal",
            path: "/pm/pm-journal/",
            children: [
              {
                title: "pm-2024-01-02",
                path: "/pm/pm-journal/pm-2024-01-02/",
              },
              {
                title: "pm-2023-11-30",
                path: "/pm/pm-journal/pm-2023-11-30/",
              },
              {
                title: "pm-2023-11-21",
                path: "/pm/pm-journal/pm-2023-11-21/",
              },
              {
                title: "pm-2023-11-09",
                path: "/pm/pm-journal/pm-2023-11-09/",
              },
              {
                title: "pm-2023-11-06",
                path: "/pm/pm-journal/pm-2023-11-06/",
              },
              {
                title: "pm-2023-10-30",
                path: "/pm/pm-journal/pm-2023-10-30/",
              },
              {
                title: "pm-2023-10-26",
                path: "/pm/pm-journal/pm-2023-10-26/",
              },
            ],
          },
        ],
      },
      {
        title: "PMP",
        path: "/pmp/",
        children: [
          {
            title: "Agile",
            path: "/pmp/agile/",
            children: [
              {
                title: "Agile Key Concepts",
                path: "/pmp/agile/agile-key-concepts/",
              },
              {
                title: "Ceremonies + Reports + Tools",
                path: "/pmp/agile/ceremonies-reports-tools/",
              },
              {
                title: "Agile Stages",
                path: "/pmp/agile/agile-stages",
                children: [
                  {
                    title: "Agile Project Initiation",
                    path: "/pmp/agile/agile-stages/agile-project-initiation/",
                  },
                  {
                    title: "Agile Planning",
                    path: "/pmp/agile/agile-stages/agile-planning/",
                  },
                ],
              },
              {
                title: "Agile Types",
                path: "/pmp/agile/agile-types/",
                children: [
                  {
                    title: "Scrum",
                    path: "/pmp/agile/agile-types/scrum/",
                  },
                  {
                    title: "Kanban",
                    path: "/pmp/agile/agile-types/kanban/",
                  },
                ],
              },
            ],
          },
          {
            title: "Predictive",
            path: "/pmp/predictive/",
            children: [
              {
                title: "Phases",
                path: "/pmp/predictive/phases/",
                children: [
                  {
                    title: "Initalize",
                    path: "/pmp/predictive/phases/initalize/",
                  },
                  {
                    title: "Build",
                    path: "/pmp/predictive/phases/planning/",
                    children: [
                      {
                        title: "Build a Team",
                        path: "/pmp/predictive/phases/build/build-a-team/",
                      },
                    ],
                  },
                  {
                    title: "Planning",
                    path: "/pmp/predictive/phases/planning/",
                    children: [
                      {
                        title: "Requirements",
                        path: "/pmp/predictive/phases/planning/requirements/",
                      },
                      {
                        title: "Schedule",
                        path: "/pmp/predictive/phases/planning/schedule/",
                      },
                      {
                        title: "Cost Management",
                        path: "/pmp/predictive/phases/planning/cost-management/",
                      },
                      {
                        title: "Cost Estimates",
                        path: "/pmp/predictive/phases/planning/cost-estimates/",
                      },
                      {
                        title: "Determine Budget",
                        path: "/pmp/predictive/phases/planning/determine-budget/",
                      },
                      {
                        title: "Control Costs",
                        path: "/pmp/predictive/phases/planning/control-costs/",
                      },
                      {
                        title: "Earned Value",
                        path: "/pmp/predictive/phases/planning/earned-value/",
                      },
                      {
                        title: "Configuration",
                        path: "/pmp/predictive/phases/planning/configuration/",
                      },
                      {
                        title: "Quality",
                        path: "/pmp/predictive/phases/planning/quality/",
                      },
                      {
                        title: "Procurement",
                        path: "/pmp/predictive/phases/planning/procurement/",
                      },
                      {
                        title: "Integration",
                        path: "/pmp/predictive/phases/planning/integration/",
                      },
                    ],
                  },
                  {
                    title: "Execute",
                    path: "/pmp/predictive/phases/execute/",
                    children: [
                      {
                        title: "Change",
                        path: "/pmp/predictive/phases/execute/change/",
                      },
                      {
                        title: "Communcation",
                        path: "/pmp/predictive/phases/execute/communication/",
                      },
                      {
                        title: "Risk",
                        path: "/pmp/predictive/phases/execute/risk/",
                      },
                      {
                        title: "Stakeholder Engagement",
                        path: "/pmp/predictive/phases/execute/stakeholder-engagement/",
                      },
                    ],
                  },
                  {
                    title: "Monitor",
                    path: "/pmp/predictive/phases/monitor/",
                    children: [
                      {
                        title: "Conflicts",
                        path: "/pmp/predictive/phases/monitor/conflicts/",
                      },
                      {
                        title: "Lead a Team",
                        path: "/pmp/predictive/phases/monitor/lead-a-team/",
                      },
                      {
                        title: "Remove Blockers",
                        path: "/pmp/predictive/phases/monitor/remove-blockers/",
                      },
                      {
                        title: "Team Performance",
                        path: "/pmp/predictive/phases/monitor/team-performance/",
                      },
                    ],
                  },
                  {
                    title: "Grow",
                    path: "/pmp/predictive/phases/grow/",
                    children: [
                      {
                        title: "Benefits + Value",
                        path: "/pmp/predictive/phases/grow/benefits-value/",
                      },
                      {
                        title: "Compliance",
                        path: "/pmp/predictive/phases/grow/compliance/",
                      },
                      {
                        title: "Organizational Change",
                        path: "/pmp/predictive/phases/grow/org-change/",
                      },
                    ],
                  },
                  {
                    title: "Close the Project",
                    path: "/pmp/predictive/phases/close/",
                  },
                ],
              },
              {
                title: "Plans + Documents + Tools",
                path: "/pmp/predictive/plans-documents-tools/",
              },
              {
                title: "Calculations",
                path: "/pmp/predictive/calculations/",
              },
            ],
          },
          {
            title: "Situational Strategies",
            path: "/pmp/situational-strategies/",
            children: [
              {
                title: "Methodology Strategies",
                path: "/pmp/situational-strategies/methodology-strategies/",
              },
              {
                title: "Planning Strategies",
                path: "/pmp/situational-strategies/planning-strategies/",
              },
              {
                title: "Requirements Strategies",
                path: "/pmp/situational-strategies/requirements-strategies/",
              },
              {
                title: "Team Strategies",
                path: "/pmp/situational-strategies/team-strategies/",
              },
              {
                title: "Stakeholder Strategies",
                path: "/pmp/situational-strategies/stakeholder-strategies/",
              },
              {
                title: "Risk Strategies",
                path: "/pmp/situational-strategies/risk-strategies/",
              },
              {
                title: "Quality Strategies",
                path: "/pmp/situational-strategies/quality-strategies/",
              },
              {
                title: "Close Project Strategies",
                path: "/pmp/situational-strategies/close-project-strategies/",
              },
            ],
          },
          {
            title: "Test Question Strategies",
            path: "/pmp/test-question-strategies/",
          },
          {
            title: "Concepts to Remember",
            path: "/pmp/concepts-to-remember/",
          },
        ],
      },
      {
        title: "Random Thoughts",
        path: "/random-thoughts/",
        children: [
          {
            title: "2023-12-22",
            path: "/random-thoughts/2023-12-22/"
          }
        ]
      },
      {
        title: "SCSS",
        path: "/scss/",
        children: [
          {
            title: "Media Query",
            path: "/scss/media-query/",
          },
          {
            title: "Psuedo Elements",
            path: "/scss/psuedo-elements/",
          },
        ],
      },
      {
        title: "SRAM Dev", // required
        path: "/sram-dev/", // optional, link of the title, which should be an absolute path and must exist
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
              },
              {
                title: "Locate Content Instance",
                path: "/sram-dev/epi/locate-content-instance/",
              },
            ],
          },
          {
            title: "slr2",
            path: "/sram-dev/slr2/",
            children: [
              {
                title: "Model View Controller",
                path: "/sram-dev/slr2/model-view-controller/",
              },
              {
                title: "Start Environment",
                path: "/sram-dev/slr2/start-environment/",
              },
              {
                title: "Test Custom Javascript",
                path: "/sram-dev/slr2/test-custom-js/",
              },
              {
                title: "URL and PubID",
                path: "/sram-dev/slr2/url-and-pubId/",
              },
            ],
          },
          {
            title: "Sramconnect",
            path: "/sram-dev/sramconnect/",
            initialOpenGroupIndex: -1,
            children: [
              {
                title: "Compile C#",
                path: "/sram-dev/sramconnect/compile-c-sharp/",
              },
              {
                title: "Compile chtml",
                path: "/sram-dev/sramconnect/compile-chtml/",
              },
              {
                title: "Compile CSS+JS",
                path: "/sram-dev/sramconnect/compile-css/",
              },
              {
                title: "Debug",
                path: "/sram-dev/sramconnect/debug/",
              },
              {
                title: "Start Environment",
                path: "/sram-dev/sramconnect/start-environment/",
              },
            ], // optional, defaults to 0, defines the index of initially opened subgroup
          },
          {
            title: "Sram-ui",
            path: "/sram-dev/sram-ui/",
            initialOpenGroupIndex: -1,
            children: [
              {
                title: "Display Code Changes",
                path: "/sram-dev/sram-ui/display-code-changes/",
              },
              {
                title: "Frontend Pipeline",
                path: "/sram-dev/sram-ui/frontend-pipeline/",
              },
              {
                title: "Install Package",
                path: "/sram-dev/sram-ui/install-package/",
              },
              {
                title: "Start Environment",
                path: "/sram-dev/sram-ui/start-environment/",
              },
            ],
          },
        ],
      },
      {
        title: "Storybook",
        path: "/storybook/",
        children: [
          {
            title: "Arguments",
            path: "/storybook/arguments/",
          },
          {
            title: "Doc Blocks",
            path: "/storybook/doc-blocks/",
            children: [
              {
                title: "Canvas Block",
                path: "/storybook/doc-blocks/canvas-block/",
              },
              {
                title: "Meta Block",
                path: "/storybook/doc-blocks/meta-block/",
              },
              {
                title: "Source Block",
                path: "/storybook/doc-blocks/source-block/",
              },
              {
                title: "Story Block",
                path: "/storybook/doc-blocks/story-block/",
              },
            ],
          },
          {
            title: "Importing JSON",
            path: "/storybook/importing-json/",
          },
          {
            title: "Story",
            path: "/storybook/storybook-story/",
          },
          {
            title: "Vue Slots",
            path: "/storybook/vue-slots/",
          },
        ],
      },
      {
        title: "VS Code",
        path: "/vscode/",
        children: [
          {
            title: "Code Wrap",
            path: "/vscode/code-wrap/",
          },
          {
            title: "Debugging",
            path: "/vscode/debugging/",
          },
          {
            title: "Eslint + Prettier",
            path: "/vscode/eslint-prettier/",
          },
          {
            title: "Eslint",
            path: "/vscode/eslint/",
          },
          {
            title: "Merge Conflicts",
            path: "/vscode/merge-conflicts/",
          },
          {
            title: "Prettier",
            path: "/vscode/prettier/",
          },
          {
            title: "Shortcuts",
            path: "/vscode/shortcuts/",
          },
        ],
        initialOpenGroupIndex: -1, // optional, defaults to 0, defines the index of initially opened subgroup
      },
      {
        title: "Vue",
        path: "/vue/",
        children: [
          {
            title: "Components",
            path: "/vue/vue-components/",
          },
          {
            title: "Container Queries",
            path: "/vue/container-queries/",
          },
          {
            title: "Custom Props",
            path: "/vue/custom-props/",
          },
          {
            title: "Custom Prop Inheritance",
            path: "/vue/custom-prop-inheritance/",
          },
          {
            title: "Directives",
            path: "/vue/directives/",
          },
          {
            title: "Nuxt",
            path: "/vue/nuxt/",
          },
          {
            title: "Ref() + Reactive()",
            path: "/vue/ref-n-reactive/",
          },
          {
            title: "slots",
            path: "/vue/slots/",
          },
          {
            title: "variables",
            path: "/vue/variables/",
          },
          {
            title: "v-bind",
            path: "/vue/v-bind/",
          },
          {
            title: "v-model",
            path: "/vue/v-model/",
          },
        ],
      },
      {
        title: "VuePress",
        path: "/vue-press/",
        children: [
          {
            title: "VuePress Styling",
            path: "/vue-press/vue-press-styling/",
          },
        ],
      },
    ],
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: ["@vuepress/plugin-back-to-top", "@vuepress/plugin-medium-zoom"],
};

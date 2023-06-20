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
        initialOpenGroupIndex: -1, // optional, defaults to 0, defines the index of initially opened subgroup
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
            title: "Limit Text Rows",
            path: "/css/limit-text-rows/",
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
            title: "Block Elements",
            path: "/frontend-development/block-elements/",
          },
          {
            title: "Flexbox",
            path: "/frontend-development/flexbox/",
            children: [
              {
                title: "Margin Left + Right",
                path: "/frontend-development/flexbox/margin-left-right/",
              },
            ],
          },
        ],
        initialOpenGroupIndex: -1, // optional, defaults to 0, defines the index of initially opened subgroup
      },
      {
        title: "Git",
        path: "/git/",
        children: [
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
        ],
      },
      {
        title: "Markdown",
        path: "/markdown/",
        children: [
          {
            title: "Escape HTML tag",
            path: "/markdown/escape-html-tag/",
          },
          {
            title: "Insert Image",
            path: "/markdown/insert-image/",
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
                    title: "Planning",
                    path: "/pmp/predictive/phases/planning/",
                    children: [
                      {
                        title: "Cost Management",
                        path: "/pmp/predictive/phases/planning/cost-management/",
                      },
                      {
                        title: "Estimate Costs",
                        path: "/pmp/predictive/phases/planning/estimate-costs/",
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
                        title: "Schedule",
                        path: "/pmp/predictive/phases/planning/schedule/",
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
              {
                title: "Key Terms + Concepts",
                path: "/pmp/predictive/key-terms-concepts/",
              },
            ],
          },
          {
            title: "Test Strategies",
            path: "/pmp/test-strategies/",
          },
        ],
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
                title: "Code Changes",
                path: "/sram-dev/sram-ui/code-changes/",
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
            title: "Importing JSON",
            path: "/storybook/importing-json/",
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
            title: "Shortcuts",
            path: "/vscode/shortcuts/",
          },
          {
            title: "Merge Conflicts",
            path: "/vscode/merge-conflicts/",
          },
        ],
        initialOpenGroupIndex: -1, // optional, defaults to 0, defines the index of initially opened subgroup
      },
      {
        title: "Vue",
        path: "/vue/",
        children: [
          {
            title: "Custom Props",
            path: "/vue/custom-props/",
          },
          {
            title: "Custom Prop Inheritance",
            path: "/vue/custom-prop-inheritance/",
          },
          {
            title: "Ref() + Reactive()",
            path: "/vue/ref-n-reactive/",
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

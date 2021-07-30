export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "6103e3e7e8288d521291949a",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-z54b5jvb",
                  apiId: "26f314ad-eab6-4434-b0b6-ce3a8123c011",
                },
                {
                  buildHookId: "6103e3e7b5a66e3b4a9acdc7",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-s19cexyx",
                  apiId: "11f52bcb-e094-446c-b364-b744f6975d18",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/daviemola/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-s19cexyx.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};

export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '613c4e437ec3e21c9d8a0f84',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-e792qqvr',
                  apiId: '53392c59-c9d8-4b67-a0c9-a7d184951dab'
                },
                {
                  buildHookId: '613c4e43c187a62ab5a624d9',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-pvrfpda3',
                  apiId: 'e9726095-a270-40f5-bb16-5ceb8df9b028'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/N-dike/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-pvrfpda3.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}

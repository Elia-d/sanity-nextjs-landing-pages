export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5f325c0b76f264b2a5570e94',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-8svbgkds',
                  apiId: '37c2621e-5f29-478c-bb1a-ce3981b3efc3'
                },
                {
                  buildHookId: '5f325c0b3a5cbbd17793bb9c',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-m5anqj7h',
                  apiId: '4e36f0bc-1167-4fd9-9f1f-47799ec2791e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Elia-d/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-m5anqj7h.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}

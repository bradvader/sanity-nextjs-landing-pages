export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
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
                  buildHookId: '6286a420a0e4bc288cada162',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-rsber7df',
                  apiId: 'd2aa8c0d-6cfe-4007-92b9-c04688261adb'
                },
                {
                  buildHookId: '6286a421f8260e24b0b8ec67',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-z4d689hb',
                  apiId: 'fa270157-2179-44de-bf3a-fb9638a34f35'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/bradvader/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-z4d689hb.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}

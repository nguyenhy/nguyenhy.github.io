const { description } = require('../../package.json')

const createMeta = (name, content) => {
  return ['meta', { name, content }]
}

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Nguyen Hy - Official Website',
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
    createMeta("google-site-verification", "BWLTK_FQxlt8fKFkBfdd3zpXAaCD1Pym3ZTkByMmEnQ"),
    createMeta("msvalidate.01", "773D2B99270FB6481587E375BAAC5D99"),
  ],


  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    [
      'vuepress-plugin-container', {
        type: 'tip',
      }
    ],
    [
      'vuepress-plugin-container', {
        type: 'warning',
      }
    ],
    [
      'vuepress-plugin-container', {
        type: 'danger',
      }
    ],
    [
      'vuepress-plugin-container', {
        type: 'details',
      }
    ],
    [
      '@vuepress/blog',
      {
        directories: [
          {
            // Unique ID of current classification
            id: 'blog',
            // Target directory
            dirname: '_blog',
            // Path of the `entry page` (or `list page`)
            path: '/blog/',
            layout: 'Blog',
            itemLayout: 'BlogPost',
            pagination: {
              lengthPerPage: 10,
              layout: 'Blog',
            },
          },
        ],
        frontmatters: [
          {
            // Unique ID of current classification
            id: 'tag',
            // Decide that the frontmatter keys will be grouped under this classification
            keys: ['tag'],
            // Path of the `entry page` (or `list page`)
            path: '/tag/',
            // Layout of the `entry page`
            layout: 'Tags',
            // Layout of the `scope page`
            scopeLayout: 'Tag'
          },
        ],
        sitemap: {
          hostname: 'https://nguyenhy.github.io/'
        },
        feed: {
          canonical_base: 'https://nguyenhy.github.io/'
        }
      },
    ],
  ],
}

const { description } = require('../../package.json')

const createTag = (tag, option) => [tag, option]

const createLink = (option) => {
  return createTag('link', option)
}

const createMeta = (option) => {
  return createTag('meta', option)
}


const head = [
  createMeta({ name: "google-site-verification", content: "BWLTK_FQxlt8fKFkBfdd3zpXAaCD1Pym3ZTkByMmEnQ" }),
  createMeta({ name: "msvalidate.01", content: "773D2B99270FB6481587E375BAAC5D99" }),

  createMeta({ property: "twitter:card", content: "summary_large_image" }),
  createMeta({ property: "twitter:url", content: "https://nguyenhy.github.io/" }),
  createMeta({ property: "twitter:title", content: "Nguyen Hy - Official Website" }),
  createMeta({ property: "twitter:description", content: "Personal blog for daily life, web, frontend" }),
  createMeta({ property: "twitter:image", content: "" }),

  // <!-- Optional Meta Tags-->
  createMeta({ name: "distribution", content: "web" }),
  createMeta({ name: "web_author", content: "Nguyen Hy" }),
  createMeta({ name: "rating", content: "general" }),
  createMeta({ name: "subject", content: "Personal" }),
  createMeta({ name: "title", content: "Nguyen Hy - Official Website" }),
  createMeta({ name: "copyright", content: "Copyright 2022" }),
  createMeta({ name: "reply-to", content: "nguyenhy311@gmail.com" }),
  createMeta({ name: "abstract", content: "Personal blog for daily life, web, frontend" }),
  createMeta({ name: "city", content: "Hochiminh" }),
  createMeta({ name: "country", content: "Vietnam" }),
  createMeta({ name: "distribution", content: "global" }),
  createMeta({ name: "classification", content: "" }),

  // <!-- Meta Tags for HTML pages on Mobile-->
  createMeta({ name: "format-detection", content: "telephone=yes" }),
  createMeta({ name: "HandheldFriendly", content: "true" }),
  createMeta({ name: "viewport", content: "width=device-width, initial-scale=1.0" }),

  // <!-- http-equiv Tags-->
  createMeta({ 'http-equiv': "Content-Style-Type", content: "text/css" }),
  createMeta({ 'http-equiv': "Content-Script-Type", content: "text/javascript" }),

  // <!-- manifest -->
  createLink({ rel: 'icon', href: 'favicon.ico', type: 'image/x-icon' }),
  createLink({ rel: "apple-touch-icon", sizes: "57x57", href: "/manifest/apple-icon-57x57.png" }),
  createLink({ rel: "apple-touch-icon", sizes: "60x60", href: "/manifest/apple-icon-60x60.png" }),
  createLink({ rel: "apple-touch-icon", sizes: "72x72", href: "/manifest/apple-icon-72x72.png" }),
  createLink({ rel: "apple-touch-icon", sizes: "76x76", href: "/manifest/apple-icon-76x76.png" }),
  createLink({ rel: "apple-touch-icon", sizes: "114x114", href: "/manifest/apple-icon-114x114.png" }),
  createLink({ rel: "apple-touch-icon", sizes: "120x120", href: "/manifest/apple-icon-120x120.png" }),
  createLink({ rel: "apple-touch-icon", sizes: "144x144", href: "/manifest/apple-icon-144x144.png" }),
  createLink({ rel: "apple-touch-icon", sizes: "152x152", href: "/manifest/apple-icon-152x152.png" }),
  createLink({ rel: "apple-touch-icon", sizes: "180x180", href: "/manifest/apple-icon-180x180.png" }),
  createLink({ rel: "icon", type: "image/png", sizes: "192x192", href: "/manifest/android-icon-192x192.png" }),
  createLink({ rel: "icon", type: "image/png", sizes: "32x32", href: "/manifest/favicon-32x32.png" }),
  createLink({ rel: "icon", type: "image/png", sizes: "96x96", href: "/manifest/favicon-96x96.png" }),
  createLink({ rel: "icon", type: "image/png", sizes: "16x16", href: "/manifest/favicon-16x16.png" }),
  createLink({ rel: "manifest", href: "/manifest/manifest.json" }),
  createMeta({ name: "msapplication-TileColor", content: "#ffffff" }),
  createMeta({ name: "msapplication-TileImage", content: "/ms-icon-144x144.png" }),
  createMeta({ name: "theme-color", content: "#ffffff" }),

]

const pluginBlog = [
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
]

const pluginPWA = [
  '@vuepress/pwa',
  {
    serviceWorker: true,
    generateSWConfig: {}
  }
]

const pluginContainer = [
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
]

module.exports = {
  title: 'Nguyen Hy - Official Website',
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: head,


  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [

    ...pluginContainer,
    pluginBlog,
    pluginPWA
  ],
}

import React from 'react'
import DirectoryEntriesOne from './DirectoryEntriesOne'

type Props = {}

let allPosts = [
  {
    "slug": "bento-ui",
    "data": {
      "websiteName": "Bento UI",
      "description": "Bento UI is a design system for modern web applications. It is a set of reusable React components that are designed to be composable and extensible.",
      "pubDate": "2022-01-01",
      "thumbnail": {
        "url": "https://carbon.lexingtonthemes.com/2.png"
      }
    }
  },
  {
    "slug": "bento-starter",
    "data": {
      "websiteName": "Bento Starter",
      "description": "Bento Starter is a Next.js starter template that comes with a set of pre-configured tools and settings to help you build your next project.",
      "pubDate": "2022-01-01",
      "thumbnail": {
        "url": "https://carbon.lexingtonthemes.com/1.png"
      }
    }
  },
  {
    "slug": "bento-landing",
    "data": {
      "websiteName": "Bento Landing",
      "description": "Bento Landing is a collection of landing page templates that are built with Bento UI and Bento Starter.",
      "pubDate": "2022-01-01",
      "thumbnail": {
        "url": "https://carbon.lexingtonthemes.com/9.png"
      }
    }
  },
  {
    "slug": "bento-directory",
    "data": {
      "websiteName": "Bento Directory",
      "description": "Bento Directory is a collection of websites and web applications that are built with Bento UI and Bento Starter.",
      "pubDate": "2022-01-01",
      "thumbnail": {
        "url": "https://carbon.lexingtonthemes.com/7.png"
      }
    }
  },
  {
    "slug": "bento-blog",
    "data": {
      "websiteName": "Bento Blog",
      "description": "Bento Blog is a blog template that is built with Bento UI and Bento Starter.",
      "pubDate": "2022-01-01",
      "thumbnail": {
        "url": "https://carbon.lexingtonthemes.com/6.png"
      }
    }
  },
]

export default function BentoGrid({}: Props) {
  return (
    <section x-data="{ open: false }">
    <div className="w-full mx-auto max-w-screen-2xl px-8 py-24">
      <div
        className="grid grid-cols-1 gap-px gap-y-12 lg:gap-y-24 sm:grid-cols-2 lg:grid-cols-3 mt-6 mx-auto"
      >
      {
        allPosts
          .slice()
          .map((directory:any) => (
            <DirectoryEntriesOne
              visitUrl={"/directory/" + directory.slug}
              websiteName={directory.data.websiteName}
              description={directory.data.description}
              alt={directory.data.websiteName}
              pubDate={directory.data.pubDate.toString().slice(0, 10)}
              thumbnail={directory.data.thumbnail.url}
            />
          ))
      }
  

  </div>
</div>
</section>
  )
}
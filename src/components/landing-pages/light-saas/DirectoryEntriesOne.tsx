import React from 'react'

type Props = {
    visitUrl: string,
    websiteName: string,
    pubDate: string,
    thumbnail: string
    description: string
    alt: string
}

export default function DirectoryEntriesOne({visitUrl,websiteName,pubDate,thumbnail,description,alt}: Props) {
  return (
    <div>
        <div className="group">
  <a href={visitUrl} className="hover:opacity-80 duration-200">
    <div
      className="border border-zinc-800 group-hover:grayscale overflow-hidden rounded-4xl"
    >
      <img  src={thumbnail} alt={websiteName} />
    </div>
  </a>
  <div className="flex flex-col uppercase mt-2 text-center">
    <p className="text-white text-sm">{websiteName}</p>
    <p className="text-zinc-400 text-xs mt-1">
      Added on {pubDate}
    </p>
  </div>
</div>

    </div>
  )
}
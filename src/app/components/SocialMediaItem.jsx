import React from 'react'

export default function  SocialMediaItem({ href=null,className,children }) {
  return (
    <a
      className={`${className}  socialItem flex items-center gap-2 rounded-xl bg-gray-800 px-2 py-2 hover:scale-110 transition-all  `}
      href={href}
      target="_blank"
    >
      {children}
    </a>
  )
}

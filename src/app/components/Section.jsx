import React from 'react'

export const Section = ({ id, className, children, props, lgW = 'max-w-4xl', mdW = 'max-w-4xl' }) => {
  return (
    <section
      id={id}
      className={`mx-auto w-full ${lgW ? `lg:${lgW}` : 'lg:max-w-4xl'} ${mdW ? `md:${mdW}` : 'md:max-w-4xl'} container ${className}`}
      {...props}
    >
      {children}
    </section>
  )
}

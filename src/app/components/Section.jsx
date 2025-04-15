import React from 'react'

export const Section = ({ id, className, children, props, lgW ='max-w-4xl', mdW ='max-w-4xl'}) => {
  return (
    <section id={id} className={`mx-auto w-full lg:${lgW} md:${mdW} container ${className}`} {...props}> 
        {children}
    </section>
  )
}

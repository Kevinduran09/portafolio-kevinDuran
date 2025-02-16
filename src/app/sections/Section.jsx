import React from 'react'

export const Section = ({id,className,children,props}) => {
  return (
      <section id={id} className={`mx-auto w-full lg:max-w-4xl md:max-w-2xl container ${className}`} {...props}> 
        {children}
    </section>
  )
}

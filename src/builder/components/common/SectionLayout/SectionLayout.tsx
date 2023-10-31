// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'
React
import sectionStyles from './sectionLayout.module.css'

type SectionLayoutProps = {
  children: JSX.Element[] | JSX.Element
  layoutComponentClasses?: string
}

function SectionLayout({
  children,
  layoutComponentClasses
}: SectionLayoutProps) {
  return (
    <section
      className={`${sectionStyles.sectionLayout} ${layoutComponentClasses}`}
    >
      {children}
    </section>
  )
}

export default SectionLayout

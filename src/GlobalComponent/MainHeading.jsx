import React from 'react'

const MainHeading = ({headingTag, headingTagClass, headingFirst, headingLast,  subHeading}) => {
  return (
    <>
    <div className={`sub-heading ${headingTagClass}`}><span></span>{headingTag}</div>
    <h2 className="heading">{headingFirst} <span>{subHeading}</span> {headingLast}</h2>
    </>
  )
}

export default MainHeading
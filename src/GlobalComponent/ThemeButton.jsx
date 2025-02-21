import React from 'react'
import { Link } from 'react-router-dom'

const ThemeButton = ({btnText = 'Discover More', btnLink = '/', hoverClass = ''}) => {
  return (
    <>
        <Link to={btnLink} className={`themebtn ${hoverClass}`}>{btnText}</Link>
    </>
  )
}

export default ThemeButton
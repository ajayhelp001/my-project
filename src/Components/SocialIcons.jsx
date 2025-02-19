import React from 'react'
import Facebook from '../images/icon/facebook.svg'
import Twiter from '../images/icon/twiter.svg'
import Linkdine from '../images/icon/linkdine.svg'
import Instagram from '../images/icon/instagram.svg'
import { Link } from 'react-router-dom'


const SocialIcons = ({socialIconClass}) => {
    const socialLink = [
        { link: 'https://facebook.com', linkImg: Facebook },
        { link: 'https://twitter.com', linkImg: Twiter },
        { link: 'https://linkedin.com', linkImg: Linkdine },
        { link: 'https://instagram.com', linkImg: Instagram }
    ]
  return (
    <>
        <ul className={socialIconClass}>
            {
                socialLink.map((val, i) => 
                    <li key={i}>
                        <Link to={val.link}><img src={val.linkImg} alt={val.link} /></Link>
                    </li>
                )
            }
        </ul>
    </>
  )
}

export default SocialIcons
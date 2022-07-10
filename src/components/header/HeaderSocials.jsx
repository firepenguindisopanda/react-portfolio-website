import React from 'react'
import { BsLinkedin, BsFacebook, BsInstagram, BsTwitter, BsDiscord } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'


const HeaderSocials = () => {
    return (
        <div className="header__socials">
            <a href="https://www.instagram.com/nicholas1403/" target="_blank" rel="noopener noreferrer"><BsInstagram /></a>
            <a href="https://www.facebook.com/profile.php?id=100069755109524" target="_blank" rel="noopener noreferrer"><BsFacebook /></a>
            <a href="https://twitter.com/NicholasDefrei2" target="_blank" rel="noopener noreferrer"><BsTwitter /></a>
            <a href="https://www.linkedin.com/in/nicholas-smith-933125148/" target="_blank" rel="noopener noreferrer"><BsLinkedin /></a>
            <a href="https://github.com/firepenguindisopanda" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            <a href="https://discord.com/" target="_blank" rel="noopener noreferrer"><BsDiscord /></a>
        </div>
    )
}

export default HeaderSocials
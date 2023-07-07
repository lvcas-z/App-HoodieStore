import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import {AiFillGithub} from 'react-icons/ai'
const Footer = () => {
    return (
        <footer>
            <p className='copyright'> © Made by Lucas Zelaya</p>
            <Link to={'https://github.com/lvcas-z'}><li className='github-icon'><AiFillGithub /></li></Link>
        </footer>
    )
}

export default Footer
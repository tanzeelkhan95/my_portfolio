import React from 'react'
import Resume from '../../assets/Resume.pdf'
import cv from '../../assets/CV.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={Resume} download className='btn'>Download Resume</a>
        <a href={cv} id='cv' className='btn'>Download CV</a>
        <a href="#contact" id='lc' className='btn btn-primary'>Let's Chat</a>
    </div>
  )
}

export default CTA
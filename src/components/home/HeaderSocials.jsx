import React from 'react'

const HeaderSocials = () => {
  return (
    <div>
      <div className="home__socials">
        <a href="https://www.linkedin.com/in/chih-yu-huang/" className="home__social-link" target="_blank">
        <i class="fa-brands fa-linkedin"></i>
        </a>

        <a href="https://github.com/chihyu-huang" className="home__social-link" target="_blank">
        <i class="fa-brands fa-github"></i>
        </a>

        <a href="https://www.youtube.com/" className="home__social-link" target="_blank">
        <i class="fa-brands fa-youtube"></i>
        </a> 
      
        <a href="mailto:chihyu.huang.joy@gmail.com" className="home__social-link" target="_blank">
        <i class="fa-solid fa-envelope"></i>
        </a>

      </div>
    </div>
  )
}

export default HeaderSocials

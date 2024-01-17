import Link from "next/link";
import {useEffect, useState} from 'react';
const navLinks = [
  {label: 'Home', slug: '/'},
  {label: 'About Me', slug: '/about-me'},
  // {label: 'Work', slug: '/work'},
  {label: 'Experience', slug: '/experience'},
  {label: 'Technologies', slug: 'technologies'},
  {label: 'Hobbies', slug: 'hobbies'},
  {label: 'Contact', slug: 'contact'}
]

const Nav = () => {

  const [mobileNavOpen, setMobileNavOpen] = useState(false)

  function toggleNav() {
    setMobileNavOpen(!mobileNavOpen)
  }

  useEffect(() => {
    const navElm = document.getElementById('main-nav')

    function handleOuterClicks(e) {
      const clickedInside = navElm.contains(e.target);
      if (!clickedInside) {
        setMobileNavOpen(false)
      }
    }

    window.addEventListener('click', handleOuterClicks)

    return () => {
      window.removeEventListener('click', handleOuterClicks)
    }
  }, []);

  return (
    <div className={'nav-wrap'} id={"main-nav"}>
      <nav className={`nav-main`}>
        <button className={"mobile-menu-toggle hide-lg"} onClick={toggleNav}>
          <span className="menu-icon">
            <span className={"menu-line"}></span>
            <span className={"menu-line"}></span>
            <span className={"menu-line"}></span>
          </span>
          <span>Menu</span>
        </button>
        <div className={`nav-main-links ${mobileNavOpen ? 'active' : ''}`}>
          {navLinks.map((link, i) => {
            return (
              <Link onClick={toggleNav} key={i} className={'nav-main-link'} href={link.slug}>{link.label}</Link>
            )
          })}
        </div>
        <Link className={"main-nav-link blue-pink"} href={'/'}>
          <span className={"show-md"}>Matt Robinson</span>
          <span className={"hide-md"}>MR</span>
        </Link>
      </nav>
    </div>
  )
}

export default Nav
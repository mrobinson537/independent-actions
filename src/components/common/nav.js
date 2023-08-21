import Link from "next/link";
const navLinks = [
  {label: 'Home', slug: '/'},
  {label: 'About Me', slug: '/about-me'},
  {label: 'Work', slug: '/work'},
  {label: 'Technologies', slug: 'technologies'},
  {label: 'Hobbies', slug: 'hobbies'},
  {label: 'Contact', slug: 'contact'}
]

const Nav = () => {
  return (
    <div className={'nav-wrap'}>
      <nav className={`nav-main`}>
        {navLinks.map((link, i) => {
          return (
            <Link key={i} className={'nav-main-link'} href={link.slug}>{link.label}</Link>
          )
        })}
      </nav>
    </div>
  )
}

export default Nav
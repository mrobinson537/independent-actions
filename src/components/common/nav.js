import Link from "next/link";
const navLinks = [
  {label: 'Home', slug: '/'}
]

const Nav = () => {
  return (
    <div className={'nav-wrap'}>
      <nav className={`nav-main container`}>
        {navLinks.map((link, i) => {
          return (
            <Link href={link.slug}>{link.label}</Link>
          )
        })}
      </nav>
    </div>
  )
}

export default Nav
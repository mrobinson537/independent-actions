

const Footer = () => {

  const date = new Date();

  return (
    <div className="footer-wrap">
      <footer>
        Independent Actions &copy; {date.getFullYear()}
      </footer>
    </div>
  )
}

export default Footer
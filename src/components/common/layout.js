import Nav from '@/components/common/nav';
import Footer from '@/components/common/footer';

const Layout = ({children}) => {
  return (
    <div className={'layout'}>
      <Nav/>
      {children}
      <Footer />
    </div>
  )
}

export default Layout
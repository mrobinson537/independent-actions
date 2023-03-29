import Nav from '@/components/common/nav';

const Layout = ({children}) => {
    return (
        <div className={'layout'}>
            <Nav />
            {children}
        </div>
    )
}

export default Layout
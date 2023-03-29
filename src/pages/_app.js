import '@/styles/global.scss'
import Layout from '@/components/common/layout';

export default function App({ Component, pageProps }) {
  return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
  )
}

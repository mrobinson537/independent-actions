import '@/styles/common.scss'
import Layout from '@/components/common/layout';
import {Montserrat} from 'next/font/google';
const font = Montserrat({ subsets: ['latin'], preload: true, weight: ['200', '400', '700'] })

export default function App({ Component, pageProps }) {
  return (
      <>
        <style jsx global>{`
            html, input, textarea, button {
              font-family: ${font.style.fontFamily}, "Proxima Nova";
              font-weight: 400;
            }
            h1, h2, h3, h4, h5, h6 {
              font-weight: 700;
            }
        `}
        </style>
          <Layout>
              <Component {...pageProps} />
          </Layout>
      </>
  )
}

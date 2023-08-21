import '@/styles/common.scss'
import Layout from '@/components/common/layout';
import {Montserrat} from "next/font/google";
const font = Montserrat({ subsets: ['latin'], preload: true })

export default function App({ Component, pageProps }) {
  return (
      <>
        <style jsx global>{`
            html, input, textarea, button {
              font-family: ${font.style.fontFamily}, "Proxima Nova";
            }
        `}
        </style>
          <Layout>
              <Component {...pageProps} />
          </Layout>
      </>
  )
}

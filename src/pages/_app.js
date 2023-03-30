import '@/styles/common.scss'
import Layout from '@/components/common/layout';
import {Montserrat} from "next/font/google";
const font = Montserrat({ subsets: ['latin'] })

export default function App({ Component, pageProps }) {
  return (
      <>
        <style jsx global>{`
            html {
              font-family: ${font.style.fontFamily};
            }
        `}
        </style>
          <Layout>
              <Component {...pageProps} />
          </Layout>
      </>
  )
}

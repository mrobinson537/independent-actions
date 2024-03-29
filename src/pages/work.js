import Head from 'next/head'


// excluding for now

const myWork = [
  {
    label: 'Logitech',
    url: '//www.logitech.com',
    description: 'Several e-commerce websites focused on selling consumer electronics.',
    urls: [
      {label: 'Logitech', url: '//www.logitech.com'},
      {label: 'Logitech Gaming', url: '//www.logitechg.com'},
      {label: 'Astro', url: '//www.astrogaming.com'},
      {label: 'Ultimate Ears', url: '//www.ultimateears.com'},
      {label: 'Jaybird', url: '//www.jaybirdsport.com'},
    ],
    live: true
  },
  {
    label: 'Ikon Pass',
    url: '//www.ikonpass.com',
    description: 'A marketing website built to sell ski passes to the masses. Built with React, Redux, and Contentful.',
    live: true
  },
  {
    label: 'CMH Heli Skiing',
    url: '//www.cmhheli.com/',
    description: 'A marketing website built to sell and book helicopter driven adventures. Built with Vanilla JS and Contentful.',
    live: true
  },
  {
    label: 'EvansHunt',
    url: '//www.evanshunt.com',
    description: 'A marketing website built to showcase a digital agencies services. Built with React (NextJS) and Contentful.',
    live: true
  },
  {
    label: 'Live Out There',
    url: '//www.liveoutthere.com',
    description: 'An E-Commerce website focused on selling outdoor apparel and gear. Built with Magento and utilized some Angular and React.',
    live: false
  }
]

export default function Work() {
  return (
    <>
      <Head>
        <title>Work | MR</title>
        <meta name="description" content="Generated by create next app"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <main>
        <div className="container-flex-full">
          <div className={`copy-max-width`}>
            <h1 className={"blue-pink"}>Work</h1>
            <p className={"text-center"}>Some of the projects I have worked on.</p>
            {myWork.map((item, i) => {
              return (
                <div key={i}>
                  <h2>{item.label}</h2>
                  <p>{item.description}</p>
                  <div className="link-list">
                    {item.urls && item.urls.map((url, k) => {
                      return (
                        <div key={k} className={"link-list-item"}>
                          <a href={url.url} rel="noopener noreferrer" title={url.label}
                             target={"_blank"}>{url.label}</a>
                        </div>
                      )
                    })}
                    {!item.urls && item.url && (
                      <a href={item.url} title={item.label}
                         target={"_blank"}>{item.label}{item.live === false ? ' (No longer live)' : ''}</a>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </main>
    </>
  )
}

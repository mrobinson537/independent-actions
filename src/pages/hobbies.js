import Head from 'next/head'
import FlexCards from '@/components/flex-cards'

const myHobbies = [
  {name: 'Rock climbing'},
  {name: 'Ice climbing'},
  {name: 'Mountaineering'},
  {name: 'Snowboarding'},
  {name: 'Backcountry Skiing'}
]

export default function Hobbies() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <main>
        <div className="container">
          <div className={`copy-max-width`}>
            <h1 className={"text-center main-title"}>Hobbies</h1>
          </div>
        </div>

        <div className="container">
          <FlexCards myHobbies={myHobbies} bordered={false} />
        </div>
      </main>
    </>
  )
}

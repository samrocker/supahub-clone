import Link from 'next/link'
import React from 'react'

const FooterSection = () => {
  return (
    <section>
        <main className='max-w-[1200px] m-auto'> 
            <div className='py-5 px-5 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-content-between border-t-[1px] boder-[#0B3D79]/50'>
              <div className='py-5 w-full flex-center flex-col gap-3'>
                <Link href='/'></Link>
                <Link href='/'></Link>
                <Link href='/'></Link>
                <Link href='/'></Link>
              </div>
              <div className='py-5 w-full flex-center flex-col gap-3'></div>
              <div className='py-5 w-full flex-center flex-col gap-3'></div>
              <div className='py-5 w-full flex-center flex-col gap-3'></div>
            </div>
        </main>
    </section>
  )
}

export default FooterSection
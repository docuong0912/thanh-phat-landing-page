import Head from 'next/head'
import Hero from '@/components/Home/Hero'
import Project from '@/components/Home/Project'
import Image from 'next/image'
import Partner from '@/components/Home/Partner'
import Services from '@/components/Home/Services'
export default function Home() {
  return (
    <>
      <Head>
        <title>CÔNG TY TNHH THIẾT KẾ XÂY DỰNG THÀNH PHÁT</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
      </Head>
    
      <Hero/>
      <Services/>
      <Project/>
      <Partner/>
    </>
  )
}

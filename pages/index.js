import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '../comps/Navbar'
import Footer from '../comps/Footer'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
    <Head>
    <title>User List | Home</title>
    <meta name="keywords" content="LMD webdevelopment"/>
    </Head>
    <div>
      <h1 className={styles.title}>Homepage</h1>
      
      <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Suspendisse imperdiet finibus justo non aliquam. Aliquam sit amet sem eros. 
            Nulla placerat tortor vitae nisi sollicitudin, ac pretium justo ultrices. 
            Nulla efficitur posuere mauris vulputate dignissim. Cras quis rutrum lectus. 
            Mauris tincidunt volutpat augue, vitae posuere enim pellentesque eu. 
            Cras in luctus purus. Etiam luctus lectus ex, non ullamcorper elit interdum vitae.</p>
        <p className={styles.text}>Nulla aliquet arcu sem, sit amet facilisis libero ultrices sed. Nunc ut quam sit 
            amet erat malesuada scelerisque. Nunc posuere enim eget dui luctus, ut elementum 
            mi euismod. Donec vulputate dolor vehicula congue sollicitudin. Curabitur ac lacus 
            a velit hendrerit imperdiet. Vivamus eu libero nec felis interdum sodales. 
            Aenean magna tellus, consectetur id massa pharetra, gravida lacinia odio. 
            Integer dignissim molestie pharetra. Fusce nec iaculis ipsum, a fringilla est.</p>

      <Link href="/users">
        <a className={styles.btn}>See User Listing</a></Link> 
    </div>
    </>
  )
}

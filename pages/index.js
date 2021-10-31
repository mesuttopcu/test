import Head from 'next/head'
import Image from 'next/image'
import Footer from '../comps/Footer'
import Navbar from '../comps/Navbar'
import styles from '../styles/Home.module.css'
import Link from 'next/dist/client/link'

export default function Home() {
  return (
    <>
    <Head>
      <title>Mesut List | Home</title>
      <meta name="keywords" content="mesut"/>
    </Head>
   <div>
     <h1 className={styles.title}>Homepage</h1>
     <p className={styles.text}>Occaecat amet anim excepteur laboris magna mollit excepteur veniam velit fugiat fugiat sit commodo. Ex anim amet cillum cillum aliquip. Laboris amet aute sint dolor commodo ullamco magna ex. Laboris dolor dolore eu reprehenderit duis qui exercitation nostrud. Culpa cupidatat officia officia minim incididunt eu duis aute. Ea nostrud tempor adipisicing labore irure deserunt cupidatat eu exercitation dolore. Proident cillum nostrud duis officia adipisicing.</p>
     <p className={styles.text}>Aliqua consequat ut ut do quis sit ullamco. Fugiat quis magna aliqua dolore exercitation quis. Dolore ex labore ea exercitation consectetur adipisicing tempor voluptate Lorem consequat laborum. Lorem sunt irure id duis ipsum tempor occaecat occaecat ad quis dolor aliqua. Et ipsum voluptate proident cupidatat qui commodo elit cupidatat. Anim velit est proident qui exercitation ad nisi aliquip quis nostrud.</p>
     <Link href="/mesut">
    <a className={styles.btn}>See Mesut Listing</a> 
     </Link>
   </div>
   </>
  )
}

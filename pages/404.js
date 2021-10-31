import Link from 'next/link'
import { useEffect } from 'react';
import { useRouter } from 'next/dist/client/router';
import Head from 'next/dist/shared/lib/head';

const NotFound = () => {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            //router.go(1)
            router.push('/');
      }, 3000)
    }, [])

    return ( 
        <>
        <Head>
          <title>Mesut List | 404</title>
          <meta name="keywords" content="mesut"/>
        </Head>
        <div className="not-found">
            <h1>Oooops...</h1>
            <h2>That page cannot be found.</h2>
            <p> Go back to the <Link href="/"><a>Homepage</a></Link></p>
        </div>
        </>
     );
}
 
export default NotFound;
import Link from "next/dist/client/link";
import Image from 'next/image'

const Navbar = () => {
    return ( 
        <nav>
            <div className="logo">
                <Image src="/logo.png" width={128} height={128}/>
            </div>
            <Link href="/"><a>Home</a></Link>
            <Link href="/about"><a>About</a></Link>
            <Link href="/mesut"><a>Mesut Listing</a></Link>
        </nav>
     );
}

export default Navbar;
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                <Image src="/logoipsum-logo-54.svg" alt="this is a logo" width={128} height={77}/>
            </div>
            <Link href="/"><a>Home</a></Link>
            <Link  href="/about"><a>About</a></Link>  
            <Link href="/users"><a>User listing</a></Link>    
        </nav>
    );
}
 
export default Navbar;
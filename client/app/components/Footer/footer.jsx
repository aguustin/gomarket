import './footer.css'
import Link from 'next/link'
import { Instagram, Facebook, AtSign, Phone } from 'lucide-react';

const Footer = () => {
    return(
        <>
        <footer className="flex items-center justify-between mx-auto bg-slate-800 w-screen" style={{width:'100%', height:'150px', paddingLeft:'5vw', paddingRight:'5vw'}}>
            <div className="foo-img flex justify-between" style={{width:'230px'}}>
                <Link href="https://www.facebook.com/share/166hGSSomu/"> <Facebook  className='icon'/></Link>
                <Link href="https://wa.me/5492616608477"><Phone className='icon' /></Link>
                <Link href="https://www.instagram.com/go_market.digital?igsh=cmZtbHp6eXdzMjBt"><Instagram className='icon'/></Link>
                <Link href="Gomarketdigital24@gmail.com"><AtSign className='icon'/></Link>
            </div>
            <p className="text-lg max-[1175px]:text-sm">Copyright GoMarket©  – Todo los derechos reservados</p>
        </footer>
        </>
    )
}

export default Footer
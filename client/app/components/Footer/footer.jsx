import Link from 'next/link'
import facebookPng from '@/app/assets/facebook.png'
import wppPng from '@/app/assets/whatsapp.png'
import instagramPng from '@/app/assets/instagram.png'
import gmailPng from '@/app/assets/gmail.png'

const Footer = () => {
    return(
        <>
        <footer className="flex items-center justify-between mx-auto bg-slate-800 w-screen" style={{width:'100%', height:'150px', paddingLeft:'5vw', paddingRight:'5vw'}}>
            <div className="foo-img flex justify-between" style={{width:'230px'}}>
                <Link href="/facebook"><img src={facebookPng.src} alt="" width="45" height="45"></img></Link>
                <Link href="/whatsapp"><img src={wppPng.src} alt="" width="45" height="45"></img></Link>
                <Link href="/instagram"><img src={instagramPng.src} alt="" width="45" height="45"></img></Link>
                <Link href="/instagram"><img src={gmailPng.src} alt="" width="45" height="45"></img></Link>
            </div>
            <p className="text-lg">Copyright GoMarket©  – Todo los derechos reservados</p>
        </footer>
        </>
    )
}

export default Footer
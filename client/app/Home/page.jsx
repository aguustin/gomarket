import '@/app/Home/home.css'
import prueba from '@/app/assets/prueba.jpg';
import seopng from '@/app/assets/seo.png';
import installationPng from '@/app/assets/installation.png';
import networkPng from '@/app/assets/network.png';
import emailMarketingPng from '@/app/assets/emailmarketing.png';
import announcementPng from '@/app/assets/announcement.png';
import marketAnalysisPng from '@/app/assets/marketanalysis.png';

const Home = () => {
    return(
        <>
            <div className='go-image-container mx-auto pt-20 pb-20'>
                <img src={prueba.src}></img>
            </div>
            <div className='text-center'>
                <h2 className='text-3xl text-violet-500 font-medium'>TRANSFORMA TU PRESENCIA DIGITAL CON NOSOTROS</h2>
                <br></br>
                <p className='text-2xl'>Creamos estrategias únicas y a medida para potenciar tu inversión y llevar tu negocio al siguiente nivel en el mundo digital.</p>
                <button className='bg-violet-900 pt-4 pb-4 pl-7 pr-7 rounded-lg mt-7'><p className='text-lg'>Saber mas</p></button>
            </div>
            <div className='ds text-center mt-20 border-b-2 pb-12 mx-auto'>
                <h3 className='text-3xl'>¡Descubre lo que tenemos preparado para ti!</h3>
            </div>
            <div className='estrategies-container flex flex-wrap mx-auto justify-between mt-12'>
                <div className='estrategies p-4 mt-10'>
                    <div>
                        <img className='mx-auto' src={seopng.src} alt=""></img>
                    </div>
                    <div className='mt-6'>
                        <h2 className='text-3xl text-violet-500'>Posicionamiento órganico</h2>
                        <p className='text-lg mt-5'>
                        El SEO es fundamental para tu marca, ya que impulsa tu visibilidad en línea y facilita que más personas te encuentren. Esto no solo aumenta tu credibilidad, sino que también te posiciona como un líder en tu industria. Además, te permite conectar de manera directa con tu público objetivo, generando más ventas sin depender tanto de la publicidad paga.
                        </p>
                    </div>
                </div>
                <div className='estrategies p-4 mt-10'>
                    <div>
                        <img className='mx-auto' src={installationPng.src} alt=""></img>
                    </div>
                    <div className='mt-6'>
                        <h2 className='text-3xl text-violet-500'>Posicionamiento órganico</h2>
                        <p className='text-lg mt-5'>
                        El SEO es fundamental para tu marca, ya que impulsa tu visibilidad en línea y facilita que más personas te encuentren. Esto no solo aumenta tu credibilidad, sino que también te posiciona como un líder en tu industria. Además, te permite conectar de manera directa con tu público objetivo, generando más ventas sin depender tanto de la publicidad paga.
                        </p>
                    </div>
                </div>
                <div className='estrategies p-4 mt-10'>
                    <div>
                        <img className='mx-auto' src={networkPng.src} alt=""></img>
                    </div>
                    <div className='mt-6'>
                        <h2 className='text-3xl text-violet-500'>Posicionamiento órganico</h2>
                        <p className='text-lg mt-5'>
                        El SEO es fundamental para tu marca, ya que impulsa tu visibilidad en línea y facilita que más personas te encuentren. Esto no solo aumenta tu credibilidad, sino que también te posiciona como un líder en tu industria. Además, te permite conectar de manera directa con tu público objetivo, generando más ventas sin depender tanto de la publicidad paga.
                        </p>
                    </div>
                </div>
                <div className='estrategies p-4 mt-10'>
                    <div>
                        <img className='mx-auto' src={emailMarketingPng.src} alt=""></img>
                    </div>
                    <div className='mt-6'>
                        <h2 className='text-3xl text-violet-500'>Posicionamiento órganico</h2>
                        <p className='text-lg mt-5'>
                        El SEO es fundamental para tu marca, ya que impulsa tu visibilidad en línea y facilita que más personas te encuentren. Esto no solo aumenta tu credibilidad, sino que también te posiciona como un líder en tu industria. Además, te permite conectar de manera directa con tu público objetivo, generando más ventas sin depender tanto de la publicidad paga.
                        </p>
                    </div>
                </div>
                <div className='estrategies p-4 mt-10'>
                    <div>
                        <img className='mx-auto' src={announcementPng.src} alt=""></img>
                    </div>
                    <div className='mt-6'>
                        <h2 className='text-3xl text-violet-500'>Posicionamiento órganico</h2>
                        <p className='text-lg mt-5'>
                        El SEO es fundamental para tu marca, ya que impulsa tu visibilidad en línea y facilita que más personas te encuentren. Esto no solo aumenta tu credibilidad, sino que también te posiciona como un líder en tu industria. Además, te permite conectar de manera directa con tu público objetivo, generando más ventas sin depender tanto de la publicidad paga.
                        </p>
                    </div>
                </div>
                <div className='estrategies p-4 mt-10'>
                    <div>
                        <img className='mx-auto' src={marketAnalysisPng.src} alt=""></img>
                    </div>
                    <div className='mt-6'>
                        <h2 className='text-3xl text-violet-500'>Posicionamiento órganico</h2>
                        <p className='text-lg mt-5'>
                        El SEO es fundamental para tu marca, ya que impulsa tu visibilidad en línea y facilita que más personas te encuentren. Esto no solo aumenta tu credibilidad, sino que también te posiciona como un líder en tu industria. Además, te permite conectar de manera directa con tu público objetivo, generando más ventas sin depender tanto de la publicidad paga.
                        </p>
                    </div>
                </div>
            </div>
            <div className='text-center mt-28 mx-auto' style={{width:'80vw'}}>
                <h2 className='text-3xl text-violet-500'>DONDE LA ESTRATEGIA SE CONVIERTE EN RESULTADOS</h2>
                <br></br>
                <p className='text-xl'>Nos especializamos en generar resultados tangibles y sostenibles a corto, mediano y largo plazo. En Go Market, fusionamos creatividad e innovación con un enfoque basado en datos, optimizando al máximo tus campañas de marketing. Adaptamos las últimas tendencias globales, desarrollando una metodología única que potencia tu marca y asegura el retorno de tu inversión.</p>
                <br></br>
                <p className='text-xl'>Somos un equipo comprometido con tu crecimiento. Nos enfocamos en los objetivos de tu negocio y en las expectativas de tus clientes, convirtiéndonos en tu Aliado Estratégico para impulsar tu presencia digital y alcanzar resultados escalables y medibles.</p>
            </div>
            <div  className='mx-auto mt-12 mb-6' style={{width: '80%'}}><iframe width="100%" height="300" src="https://maps.google.com/maps?width=100%25&amp;height=300&amp;hl=en&amp;q=F%C3%A9lix%20Bogado%20326+(Go%20Market)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe></div>
            <form>
                
            </form>
        </>
    )
}

export default Home
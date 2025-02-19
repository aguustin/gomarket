
import socialMediaPng from '@/app/assets/socialMedia.png'
import deligencePng from '@/app/assets/diligence.png'
import happyfacePng from '@/app/assets/happyface.png'
import fondoAPng from '@/app/assets/fondoA.png'
//desarrollo imgs
import desarrolloPng from '@/app/assets/desarrollo.png'

import desarrolloBPng from '@/app/assets/web developmentB.png'

//marketing
import marketingPng from '@/app/assets/content-strategy.png'

import marketingBPng from '@/app/assets/marketingB.png'

//branding
import brandingPng from '@/app/assets/brand.png'

//publicidad
import publicityPng from '@/app/assets/publicity.png'
import publicityBPng from '@/app/assets/publicidadB.png'

//redes
import networkPng from '@/app/assets/network.png'

//analisis de mercado
import marketAnalisysPng from '@/app/assets/market-analysis.png'

//seo
import seoPng from '@/app/assets/seo.png'

import Link from 'next/link'
import '../../Servicios/servicios.css'

const TipoServicio = async ({params}) => {

    const par = await params.tipoServicio

    return(
        <>
          <div className="ss flex items-center justify-around" style={{padding:'80px'}}>
                <div className='serv-first-secundary'>
                    <img className="ml-20" src={
                        par === "desarrollo" ? desarrolloBPng.src :
                        par === "marketing" ? marketingBPng.src :
                        par === "branding" ? brandingPng.src :
                        par === "publicidad" ? publicityBPng.src :
                        par === "redes" ? networkPng.src :
                        par === "mercado" ? marketAnalisysPng.src :
                        par === "seo" ? seoPng.src : ''
                    } alt="" width={350} height={350}></img>
                </div>
                <div className='serv-first-secundary mr-20'>
                    <h3 className='text-3xl text-center mb-3'>Tus resultados son nuestra razón</h3>
                    <p>Somos Lemon: Agencia de Marketing Digital enfocada en tus resultados. Hemos desarrollado nuestra fórmula de Estrategias de Marketing Digital pensada para atraer, retener y fidelizar a tus clientes potenciales! Esto nos identifica y nos diferencia!</p><br></br>
                    <p>Considera esto: tener un website que no genere conversiones es como tener una tienda en el piso 15º de un edificio sin carteles ni ascensor. Si tienes un local comercial, ¿no deberías tenerlo a pie de calle con un cartel grande y visible?</p><br></br>
                    <img src={happyfacePng.src} alt="" className='mx-auto'></img>
                </div>
            </div>
            {par === "desarrollo" && 
                <div className="text-center pt-20 pb-20" style={{paddingLeft:'200px', paddingRight: '200px'}}>
                    <h1 className='text-5xl'>Creamos tu aplicacion web para que crezcas</h1><br></br>
                    <p className='text-xl'>Desarrollamos soluciones web a medida, optimizadas para ofrecerte una experiencia de usuario única y escalable, que te permita llevar tu negocio al siguiente nivel y alcanzar nuevos horizontes de crecimiento.</p><br></br>
                </div>
            }
            {par === "marketing" && 
                <div className="text-center pt-20 pb-20" style={{paddingLeft:'200px', paddingRight: '200px'}}>
                    <h1 className='text-5xl'>Estrategias de Marketing con resultados impresionantes</h1><br></br>
                    <p className='text-xl'>Implementar campañas personalizadas y aprovechar las herramientas digitales más avanzadas permite a las empresas maximizar su alcance, conectar de manera efectiva con su audiencia y generar un impacto significativo en sus resultados.</p><br></br>
                </div>
            }
             {par === "branding" && 
                <div className="text-center pt-20 pb-20" style={{paddingLeft:'200px', paddingRight: '200px'}}>
                    <h1 className='text-5xl'>Impulsa tu marca con un branding memorable</h1><br></br>
                    <p className='text-xl'>Con estrategias de branding innovadoras, creamos una identidad sólida y única que conecta emocionalmente con tu audiencia y posiciona tu marca para un éxito duradero.</p><br></br>
                </div>
            }
             {par === "publicidad" && 
                <div className="text-center pt-20 pb-20" style={{paddingLeft:'200px', paddingRight: '200px'}}>
                    <h1 className='text-5xl'>Publicidad que transforma tu negocio</h1><br></br>
                    <p className='text-xl'>A través de campañas publicitarias creativas y enfocadas, ayudamos a aumentar tu visibilidad, captar nuevos clientes y fortalecer la relación con tu audiencia para generar resultados reales.</p><br></br>
                </div>
            }
              {par === "redes" && 
                <div className="text-center pt-20 pb-20" style={{paddingLeft:'200px', paddingRight: '200px'}}>
                    <h1 className='text-5xl'>Manejo de redes que conecta con el mundo haciendo crecer tu marca</h1><br></br>
                    <p className='text-xl'>Gestionamos tus redes sociales de manera estratégica, creando contenido relevante y fomentando la interacción para aumentar tu presencia online y fidelizar a tu comunidad.</p><br></br>
                </div>
            }
             {par === "mercado" && 
                <div className="text-center pt-20 pb-20" style={{paddingLeft:'200px', paddingRight: '200px'}}>
                    <h1 className='text-5xl'>Análizamos tu mercado para tomar decisiones estratégicas</h1><br></br>
                    <p className='text-xl'>Realizamos estudios profundos del mercado para brindarte datos clave que te permitan entender a tu audiencia, identificar oportunidades y tomar decisiones informadas que impulsen tu crecimiento.</p><br></br>
                </div>
            }
            {par === "seo" && 
                <div className="text-center pt-20 pb-20" style={{paddingLeft:'200px', paddingRight: '200px'}}>
                    <h1 className='text-5xl'>SEO que posiciona tu negocio en los primeros lugares</h1><br></br>
                    <p className='text-xl'>Optimizamos tu presencia en línea con estrategias SEO efectivas, mejorando tu visibilidad en los motores de búsqueda y atrayendo tráfico cualificado que convierte en resultados tangibles.</p><br></br>
                </div>
            }
            {par === "desarrollo" && 
                <div className='as'>
                    <div className='p-12'>
                        <h1 className='text-5xl text-center'>¿Cómo lo Hacemos?</h1><br></br>
                        <p className='text-3xl text-center'>Creamos tu sitio web, diseñamos tu éxito digital.</p>
                    </div>
                    <div className='servicios-container flex flex-wrap justify-between mx-auto'>
                        <div className='servicios mt-6 mb-12'>
                            <img src={socialMediaPng.src} alt="" className='mx-auto'></img><br></br>
                            <p className='text-center text-2xl'>1️⃣ Planificación y análisis de requerimientos</p><br></br>
                            <p> En esta etapa, se define el propósito y los objetivos de la aplicación. Se realiza un análisis detallado de los requerimientos del cliente y las expectativas del usuario final, estableciendo las funcionalidades clave que debe tener la aplicación.</p><br></br>
                        </div>
                        <div className='servicios mt-6 mb-12'>
                            <img src={socialMediaPng.src} alt="" className='mx-auto'></img><br></br>
                            <p className='text-center text-2xl'>2️⃣ Diseño de la interfaz y experiencia de usuario (UI/UX)</p><br></br>
                            <p>El diseño visual y la experiencia del usuario son cruciales para una aplicación exitosa. Se crean wireframes y prototipos interactivos para definir la estructura, flujo y apariencia de la interfaz, asegurando que sea intuitiva y atractiva para el usuario.</p><br></br>
                        </div>
                        <div className='servicios mt-6 mb-12'>
                            <img src={socialMediaPng.src} alt="" className='mx-auto'></img><br></br>
                            <p className='text-center text-2xl'>3️⃣ Desarrollo del backend</p><br></br>
                            <p>El backend se encarga de la lógica, bases de datos y servidores de la aplicación. Durante esta fase, se crean las funcionalidades que gestionan la información, como bases de datos, autenticación de usuarios, y la integración de APIs necesarias para el funcionamiento adecuado.</p><br></br>
                        </div>
                        <div className='servicios mt-6 mb-12'>
                            <img src={socialMediaPng.src} alt="" className='mx-auto'></img><br></br>
                            <p className='text-center text-2xl'>4️⃣ Desarrollo del frontend</p><br></br>
                            <p>El frontend es la parte visible de la aplicación con la que el usuario interactúa. En este paso, se codifican las interfaces utilizando tecnologías como HTML, CSS y JavaScript para asegurar que la aplicación sea responsiva, fácil de usar y visualmente atractiva en cualquier dispositivo..</p><br></br>
                        </div>
                        <div className='servicios mt-6 mb-12'>
                            <img src={socialMediaPng.src} alt="" className='mx-auto'></img><br></br>
                            <p className='text-center text-2xl'>5️⃣ Pruebas y aseguramiento de calidad</p><br></br>
                            <p>Se realizan pruebas exhaustivas para detectar errores o problemas de usabilidad. Esto incluye pruebas funcionales, de rendimiento y de seguridad para garantizar que la aplicación cumpla con los estándares de calidad y sea segura antes de su lanzamiento.</p><br></br>
                        </div>
                        <div className='servicios mt-6 mb-12'>
                            <img src={socialMediaPng.src} alt="" className='mx-auto'></img><br></br>
                            <p className='text-center text-2xl'>6️⃣ Despliegue y mantenimiento </p><br></br>
                            <p>Finalmente, la aplicación se despliega en el entorno de producción, haciéndola accesible a los usuarios. Después del lanzamiento, se realiza un seguimiento constante para corregir errores, realizar actualizaciones y añadir nuevas funcionalidades según las necesidades del usuario.</p><br></br>
                        </div>                   
                    </div>
                </div>
            }
            {par === "marketing" && 
                <div className='as'>
                    <div className='p-12'>
                        <h1 className='text-5xl text-center'>¿Cómo lo Hacemos?</h1><br></br>
                        <p className='text-3xl text-center'>Nuestra fórmula de Estrategias de Marketing Digital</p>
                    </div>
                    <div className='servicios-container flex flex-wrap justify-between mx-auto'>
                        <div className='servicios mt-6 mb-12'>
                            <img src={socialMediaPng.src} alt="" className='mx-auto'></img><br></br>
                            <p className='text-center text-2xl'>1️⃣ Análisis y Diagnóstico 📊</p><br></br>
                            <p>Cada negocio es único, por eso comenzamos con un análisis profundo de tu marca, tu mercado y tu competencia. Identificamos oportunidades, desafíos y trazamos un punto de partida sólido para la estrategia.</p><br></br>
                        </div>
                        <div className='servicios mt-6 mb-12'>
                            <img src={socialMediaPng.src} alt="" className='mx-auto'></img><br></br>
                            <p className='text-center text-2xl'>2️⃣ Definición de Objetivos 🎯</p><br></br>
                            <p>Sin objetivos claros, no hay dirección. Establecemos metas alcanzables y medibles, alineadas con el crecimiento de tu negocio: más tráfico, más leads, más ventas o más reconocimiento de marca.</p><br></br>
                        </div>
                        <div className='servicios mt-6 mb-12'>
                            <img src={socialMediaPng.src} alt="" className='mx-auto'></img><br></br>
                            <p className='text-center text-2xl'>3️⃣ Creación de la Estrategia 🚀</p><br></br>
                            <p>Diseñamos un plan de acción personalizado que combina branding, contenido, publicidad y posicionamiento digital. Nos aseguramos de que cada táctica sume valor y se enfoque en obtener resultados reales.</p><br></br>
                        </div>
                        <div className='servicios mt-6 mb-12'>
                            <img src={socialMediaPng.src} alt="" className='mx-auto'></img><br></br>
                            <p className='text-center text-2xl'>4️⃣ Implementación y Ejecución 🔥</p><br></br>
                            <p>Ponemos en marcha la estrategia con campañas publicitarias, generación de contenido y optimización de plataformas. Cada acción está enfocada en atraer y convertir clientes potenciales en clientes reales.</p><br></br>
                        </div>
                        <div className='servicios mt-6 mb-12'>
                            <img src={socialMediaPng.src} alt="" className='mx-auto'></img><br></br>
                            <p className='text-center text-2xl'>5️⃣ Monitoreo y Optimización 📈</p><br></br>
                            <p>Medimos el rendimiento de cada estrategia en tiempo real. Analizamos métricas clave, ajustamos tácticas y optimizamos campañas para mejorar el rendimiento y reducir costos.</p><br></br>
                        </div>
                        <div className='servicios mt-6 mb-12'>
                            <img src={socialMediaPng.src} alt="" className='mx-auto'></img><br></br>
                            <p className='text-center text-2xl'>6️⃣ Escalamiento y Crecimiento 📢</p><br></br>
                            <p>Una vez que encontramos la fórmula ganadora, la escalamos. Potenciamos lo que funciona y expandimos las estrategias para lograr un crecimiento continuo y sostenible en el mercado digital.</p><br></br>
                        </div>                   
                    </div>
                </div>
            }
             {par === "branding" && 
                <div className='as'>
                    <div className='p-12'>
                        <h1 className='text-5xl text-center'>¿Cómo lo Hacemos?</h1><br></br>
                        <p className='text-3xl text-center'>Creamos una imagen positiva segun tus intereses</p>
                    </div>
                    <div className='servicios-container flex flex-wrap justify-between mx-auto'>
                        <div className='servicios mt-6 mb-12'>
                            <img src={socialMediaPng.src} alt="" className='mx-auto'></img><br></br>
                            <p className='text-center text-2xl'>1️⃣ Investigación y definición de la marca</p><br></br>
                            <p>En esta fase se analiza a fondo la marca, su público objetivo y la competencia. Se identifican los valores, la misión y la visión de la empresa para asegurarse de que la identidad visual esté alineada con la esencia de la marca y sus objetivos.</p><br></br>
                        </div>
                        <div className='servicios mt-6 mb-12'>
                            <img src={socialMediaPng.src} alt="" className='mx-auto'></img><br></br>
                            <p className='text-center text-2xl'>2️⃣ Diseño de elementos visuales clave</p><br></br>
                            <p>Se crea el logotipo, la paleta de colores, tipografía y otros elementos gráficos que representen visualmente la marca. Todo se diseña para asegurar una imagen coherente y memorable que se adapte a diferentes plataformas y contextos.</p><br></br>
                        </div>
                        <div className='servicios mt-6 mb-12'>
                            <img src={socialMediaPng.src} alt="" className='mx-auto'></img><br></br>
                            <p className='text-center text-2xl'>3️⃣ Desarrollo del manual de identidad visual</p><br></br>
                            <p>Se crea un manual que detalla cómo usar correctamente todos los elementos visuales de la marca. Este documento asegura la coherencia en todas las aplicaciones de la identidad visual, desde el sitio web hasta la papelería y la publicidad.</p><br></br>
                        </div>
                        <div className='servicios mt-6 mb-12'>
                            <img src={socialMediaPng.src} alt="" className='mx-auto'></img><br></br>
                            <p className='text-center text-2xl'>4️⃣ Implementación y monitoreo continuo</p><br></br>
                            <p>La identidad visual se implementa en todos los puntos de contacto de la marca. Se realiza un seguimiento constante para asegurar que la marca mantenga una imagen consistente y que pueda adaptarse según sea necesario en el futuro.</p><br></br>
                        </div>                  
                    </div>
                </div>
            }
             {par === "publicidad" && 
                <div className='as'>
                    <div className='p-12'>
                        <h1 className='text-5xl text-center'>¿Cómo lo Hacemos?</h1><br></br>
                        <p className='text-3xl text-center'>Haz conocer tu emprendimiento con go market</p>
                    </div>
                    <div className='servicios-container flex flex-wrap justify-between mx-auto'>
                        <div className='servicios mt-6 mb-12'>
                            <img src={socialMediaPng.src} alt="" className='mx-auto'></img><br></br>
                            <p className='text-center text-2xl'>1️⃣ Definición de objetivos y público objetivo</p><br></br>
                            <p>Se establecen los objetivos de la campaña publicitaria (aumentar ventas, mejorar visibilidad, generar leads) y se define el público al que se desea llegar, basándose en datos demográficos, comportamientos e intereses.</p><br></br>
                        </div>
                        <div className='servicios mt-6 mb-12'>
                            <img src={socialMediaPng.src} alt="" className='mx-auto'></img><br></br>
                            <p className='text-center text-2xl'>2️⃣ Selección de canales y formatos publicitarios</p><br></br>
                            <p>Se eligen los canales más adecuados (redes sociales, Google Ads, medios tradicionales, etc.) y los formatos de anuncios que mejor se adapten a los objetivos, como anuncios de display, videos, carruseles o anuncios en buscadores.</p><br></br>
                        </div>
                        <div className='servicios mt-6 mb-12'>
                            <img src={socialMediaPng.src} alt="" className='mx-auto'></img><br></br>
                            <p className='text-center text-2xl'>3️⃣ Creación de contenido atractivo y persuasivo</p><br></br>
                            <p>Se diseña el contenido del anuncio, desde los elementos visuales hasta el mensaje, asegurándose de que sea relevante, atractivo y que motive a la acción, como hacer clic, comprar o registrarse.</p><br></br>
                        </div>
                        <div className='servicios mt-6 mb-12'>
                            <img src={socialMediaPng.src} alt="" className='mx-auto'></img><br></br>
                            <p className='text-center text-2xl'>4️⃣ Lanzamiento y gestión de la campaña</p><br></br>
                            <p>Se ejecuta la campaña en los canales seleccionados, monitoreando constantemente el rendimiento y ajustando las pujas, segmentación o presupuesto según sea necesario para optimizar los resultados.</p><br></br>
                        </div> 
                        <div className='servicios mt-6 mb-12'>
                            <img src={socialMediaPng.src} alt="" className='mx-auto'></img><br></br>
                            <p className='text-center text-2xl'>5️⃣ Análisis y optimización de resultados</p><br></br>
                            <p>Al finalizar la campaña, se analizan las métricas clave como CTR, conversiones y retorno de inversión (ROI). Con base en estos datos, se realizan ajustes para mejorar futuras campañas, maximizar la efectividad y alcanzar los objetivos establecidos.</p><br></br>
                        </div>                     
                    </div>
                </div>
            }
            {par === "redes" && 
                <div className='as'>
                    <div className='p-12'>
                        <h1 className='text-5xl text-center'>¿Cómo lo Hacemos?</h1><br></br>
                        <p className='text-3xl text-center'>Conectamos tu marca con el mundo, un post a la vez.</p>
                    </div>
                    <div className='servicios-container flex flex-wrap justify-between mx-auto'>
                        <div className='servicios mt-6 mb-12'>
                            <img src={socialMediaPng.src} alt="" className='mx-auto'></img><br></br>
                            <p className='text-center text-2xl'>1️⃣ Estrategia y planificación</p><br></br>
                            <p>Se define una estrategia de redes sociales basada en los objetivos de la marca, el público objetivo y las plataformas más adecuadas. Esto incluye el tipo de contenido, frecuencia de publicación y la forma de interactuar con la audiencia.</p><br></br>
                        </div>
                        <div className='servicios mt-6 mb-12'>
                            <img src={socialMediaPng.src} alt="" className='mx-auto'></img><br></br>
                            <p className='text-center text-2xl'>2️⃣ Creación de contenido atractivo</p><br></br>
                            <p>Se diseña y produce contenido visual y escrito relevante para la audiencia, asegurándose de que sea creativo, coherente con la identidad de la marca y adaptable a cada plataforma social. El contenido puede incluir publicaciones, imágenes, videos y más.</p><br></br>
                        </div>
                        <div className='servicios mt-6 mb-12'>
                            <img src={socialMediaPng.src} alt="" className='mx-auto'></img><br></br>
                            <p className='text-center text-2xl'>3️⃣ Gestión de comunidad y engagement</p><br></br>
                            <p> Se monitorean las interacciones en redes sociales, respondiendo a comentarios, mensajes y creando conversaciones con los seguidores. Esto ayuda a construir una comunidad leal y mejorar la relación con la audiencia.</p><br></br>
                        </div>
                        <div className='servicios mt-6 mb-12'>
                            <img src={socialMediaPng.src} alt="" className='mx-auto'></img><br></br>
                            <p className='text-center text-2xl'>4️⃣ Análisis y optimización</p><br></br>
                            <p>Se realiza un seguimiento continuo de las métricas de rendimiento, como la interacción, el alcance y el crecimiento de seguidores. Basado en estos datos, se ajusta la estrategia y el contenido para mejorar los resultados y alcanzar los objetivos establecidos.</p><br></br>
                        </div>                  
                    </div>
                </div>
            }
               {par === "mercado" && 
                <div className='as'>
                    <div className='p-12'>
                        <h1 className='text-5xl text-center'>¿Cómo lo Hacemos?</h1><br></br>
                        <p className='text-3xl text-center'>Transformamos datos en decisiones, para que tu marca crezca en el mercado.</p>
                    </div>
                    <div className='servicios-container flex flex-wrap justify-between mx-auto'>
                        <div className='servicios mt-6 mb-12'>
                            <img src={socialMediaPng.src} alt="" className='mx-auto'></img><br></br>
                            <p className='text-center text-2xl'>1️⃣ Investigación de mercado</p><br></br>
                            <p>Se realiza una recopilación de datos sobre la industria, la competencia y las tendencias del mercado. Esto incluye el análisis de fuentes primarias (encuestas, entrevistas) y secundarias (informes, estadísticas) para obtener una visión clara del entorno.</p><br></br>
                        </div>
                        <div className='servicios mt-6 mb-12'>
                            <img src={socialMediaPng.src} alt="" className='mx-auto'></img><br></br>
                            <p className='text-center text-2xl'>2️⃣ Segmentación y perfilado del público objetivo</p><br></br>
                            <p>Se identifican y definen los diferentes segmentos de clientes a los que se desea llegar. Esto incluye comprender sus necesidades, comportamientos y características demográficas para crear perfiles detallados que guíen las decisiones estratégicas.</p><br></br>
                        </div>
                        <div className='servicios mt-6 mb-12'>
                            <img src={socialMediaPng.src} alt="" className='mx-auto'></img><br></br>
                            <p className='text-center text-2xl'>3️⃣ Análisis competitivo</p><br></br>
                            <p> Se estudian las fortalezas, debilidades, oportunidades y amenazas (FODA) de los competidores. Este análisis permite identificar los puntos fuertes y las áreas de mejora para posicionar la marca de manera más efectiva en el mercado.</p><br></br>
                        </div>
                        <div className='servicios mt-6 mb-12'>
                            <img src={socialMediaPng.src} alt="" className='mx-auto'></img><br></br>
                            <p className='text-center text-2xl'>4️⃣ Informe y recomendaciones estratégicas</p><br></br>
                            <p>Se elabora un informe con los hallazgos clave del análisis, acompañado de recomendaciones estratégicas basadas en los datos. Esto ayuda a tomar decisiones informadas sobre precios, posicionamiento, productos y estrategias de marketing para aprovechar las oportunidades del mercado.</p><br></br>
                        </div>                  
                    </div>
                </div>
            }
               {par === "seo" && 
                <div className='as'>
                    <div className='p-12'>
                        <h1 className='text-5xl text-center'>¿Cómo lo Hacemos?</h1><br></br>
                        <p className='text-3xl text-center'>Posicionamos tu marca donde importa: en la cima de los resultados de búsqueda.</p>
                    </div>
                    <div className='servicios-container flex flex-wrap justify-between mx-auto'>
                        <div className='servicios mt-6 mb-12'>
                            <img src={socialMediaPng.src} alt="" className='mx-auto'></img><br></br>
                            <p className='text-center text-2xl'>1️⃣ Investigación de palabras clave</p><br></br>
                            <p>Se realiza un análisis profundo de las palabras clave más relevantes para el negocio, considerando el volumen de búsqueda y la competencia. Esto ayuda a identificar términos que atraerán tráfico cualificado y se alineen con los intereses de la audiencia.</p><br></br>
                        </div>
                        <div className='servicios mt-6 mb-12'>
                            <img src={socialMediaPng.src} alt="" className='mx-auto'></img><br></br>
                            <p className='text-center text-2xl'>2️⃣ Optimización on-page </p><br></br>
                            <p>Se optimizan los elementos dentro de la página web, como títulos, meta descripciones, contenido, URLs y la estructura interna de enlaces. Todo esto se ajusta para mejorar la relevancia y la accesibilidad de la página, facilitando su indexación por los motores de búsqueda.</p><br></br>
                        </div>
                        <div className='servicios mt-6 mb-12'>
                            <img src={socialMediaPng.src} alt="" className='mx-auto'></img><br></br>
                            <p className='text-center text-2xl'>3️⃣ Mejora de la experiencia del usuario (UX)</p><br></br>
                            <p>Se optimizan aspectos como la velocidad de carga, la navegación móvil y la usabilidad en general. Un sitio web fácil de usar y rápido contribuye significativamente a la mejora del ranking SEO.</p><br></br>
                        </div>
                        <div className='servicios mt-6 mb-12'>
                            <img src={socialMediaPng.src} alt="" className='mx-auto'></img><br></br>
                            <p className='text-center text-2xl'>4️⃣ Link building y autoridad de dominio</p><br></br>
                            <p>Se implementan tácticas de obtención de enlaces externos de calidad para aumentar la autoridad del dominio. Estos enlaces mejoran la visibilidad y el ranking en los motores de búsqueda, generando tráfico orgánico adicional.</p><br></br>
                        </div>
                        <div className='servicios mt-6 mb-12'>
                            <img src={socialMediaPng.src} alt="" className='mx-auto'></img><br></br>
                            <p className='text-center text-2xl'>5️⃣ Monitoreo y ajustes continuos</p><br></br>
                            <p>Se realiza un seguimiento constante del rendimiento SEO a través de herramientas analíticas, midiendo métricas como el tráfico orgánico y la tasa de conversión. A partir de estos datos, se ajustan las estrategias para seguir mejorando los resultados a lo largo del tiempo.</p><br></br>
                        </div>                    
                    </div>
                </div>
            }

            <div className='relative'>
                         <img className='publicidad-online w-full' src={fondoAPng.src} alt="" style={{height:'500px'}}></img>
                         <div className='publicidad-online-text absolute text-center'>
                             <h1 className='text-4xl'>Somos la Agencia de Marketing Digital</h1><br></br>
                             <label className="text-xl">Que pone a tu empresa en el Mapa</label>
                             <p className='text-2xl mt-2'>¿Quieres ser revelante en el entorno digital?</p>
                             <button className='bg-red-800 rounded-lg text-2xl p-4 pl-9 pr-9 mt-8'>Contáctanos</button>
                         </div>
            </div>
            <div className='p-16'>
                <div className='mx-auto text-center' style={{width:'60vw'}}>
                    <h3 className='text-4xl text-center mb-7'>¿Tu sitio web no aparece en Google?</h3>
                </div>
            </div>
            <div className="ssb flex items-center justify-center p-20">
                {par === "desarrollo" &&
                <div className='m-10 text-lg/9'>
                    <p>El desarrollo web es esencial en la era digital actual, ya que un sitio web bien diseñado y funcional puede ser la diferencia entre el éxito y el fracaso de un negocio.</p><br></br>
                    <p>Invertir en un desarrollo web de calidad es crucial para mantener la atención de los usuarios y garantizar una experiencia satisfactoria.</p>
                </div>
                }
                 {par === "marketing" &&
                <div className='m-10 text-lg/9'>
                    <p>Un servicio de marketing es esencial para las empresas que buscan mejorar su presencia en el mercado y alcanzar sus objetivos comerciales. Según un estudio de HubSpot, las empresas que externalizan sus estrategias de marketing digital reportan un aumento del 35% en su eficiencia operativa.</p>
                </div>
                }
                 {par === "branding" &&
                <div className='m-10 text-lg/9'>
                    <p>Contratar un servicio de branding es fundamental para establecer una identidad sólida y coherente que conecte emocionalmente con los consumidores.</p><br></br>
                    <p>un branding efectivo contribuye a la diferenciación en el mercado, permitiendo que una empresa se destaque entre sus competidores y sea reconocida por su público objetivo.</p>
                </div>
                }
                 {par === "publicidad" &&
                <div className='m-10 text-lg/9'>
                    <p>La publicidad es esencial para las empresas que buscan aumentar su visibilidad y conectar eficazmente con su público objetivo. Según Elio Estudio, "una estrategia de comunicación bien definida es clave tanto para las grandes empresas, como para pymes y autónomos"</p>
                </div>
                }
                 {par === "redes" &&
                <div className='m-10 text-lg/9'>
                    <p>El manejo de redes sociales es esencial para las empresas que buscan fortalecer su presencia en línea y conectar eficazmente con su audiencia.</p><br></br>
                    <p>Estas prácticas permiten a las empresas mantenerse al día con las tendencias, adaptarse a nuevos formatos y conocer todas las plataformas</p>
                </div>
                }
                 {par === "mercado" &&
                <div className='m-10 text-lg/9'>
                    <p>Contratar un servicio de análisis de mercado es esencial para que las empresas comprendan las dinámicas de su sector y tomen decisiones informadas.</p><br></br>
                    <p> Además, este tipo de estudios prepara a la empresa para conocer lo que se encontrará en el mercado, evitando lanzarse sin conocimiento previo, lo que incrementa las posibilidades de fracaso por falta de estructura y preparación.</p>
                </div>
                }
                 {par === "seo" &&
                <div className='m-10 text-lg/9'>
                    <p>El SEO es esencial para mejorar la visibilidad en línea de una empresa y atraer tráfico cualificado a su sitio web. Este servicio contribuye al aumento del tráfico orgánico, lo que se traduce en una mayor oportunidad de conversión y crecimiento del negocio.</p>
                </div>
                }
                {par === "desarrollo" && 
                <div className='m-10 text-lg'>
                    <div className="flex items-center">
                        <img src={socialMediaPng.src} alt=""></img>
                        <p className='ml-3'>Se definen los objetivos del sitio y se crea un diseño intuitivo y atractivo que refleje la identidad de la marca.</p>
                    </div>
                    <div className="flex items-center ml-16">
                        <img src={socialMediaPng.src} alt=""></img>
                        <p className='ml-3'>Se construye la estructura del sitio web utilizando tecnologías adecuadas, asegurando funcionalidad y experiencia de usuario.</p>
                    </div>
                    <div className="flex items-center">
                        <img src={socialMediaPng.src} alt=""></img>
                        <p className='ml-3'>Se realizan pruebas exhaustivas para garantizar el rendimiento, la seguridad y la compatibilidad, antes de lanzar el sitio al público.</p>
                    </div>
                </div>
                }
                 {par === "marketing" && 
                <div className='m-10 text-lg'>
                    <div className="flex items-center">
                        <img src={socialMediaPng.src} alt=""></img>
                        <p className='ml-3'>Se estudian el público objetivo y la competencia para definir estrategias efectivas que conecten con los consumidores.</p>
                    </div>
                    <div className="flex items-center ml-16">
                        <img src={socialMediaPng.src} alt=""></img>
                        <p className='ml-3'>Se diseñan campañas creativas y contenido relevante que atraigan la atención del público y generen engagement.</p>
                    </div>
                    <div className="flex items-center">
                        <img src={socialMediaPng.src} alt=""></img>
                        <p className='ml-3'>Se miden los resultados de las campañas, ajustando las tácticas según el rendimiento para maximizar el impacto y alcanzar los objetivos.</p>
                    </div>
                </div>
                }
                {par === "branding" && 
                <div className='m-10 text-lg'>
                    <div className="flex items-center">
                        <img src={socialMediaPng.src} alt=""></img>
                        <p className='ml-3'>Se establecen los valores, misión y visión de la marca para crear una identidad sólida y auténtica que resuene con el público.</p>
                    </div>
                    <div className="flex items-center ml-16">
                        <img src={socialMediaPng.src} alt=""></img>
                        <p className='ml-3'>Se desarrolla un logotipo, paleta de colores y elementos visuales coherentes que refuercen la personalidad de la marca en todos los puntos de contacto.</p>
                    </div>
                </div>
                }
                {par === "publicidad" && 
                <div className='m-10 text-lg'>
                    <div className="flex items-center">
                        <img src={socialMediaPng.src} alt=""></img>
                        <p className='ml-3'>Se establecen los objetivos de la campaña y se segmenta el público para crear mensajes que resuenen con las necesidades específicas de cada grupo.</p>
                    </div>
                    <div className="flex items-center ml-16">
                        <img src={socialMediaPng.src} alt=""></img>
                        <p className='ml-3'>Se diseña el contenido publicitario y se lanza la campaña en los canales adecuados, monitoreando su rendimiento para optimizar resultados en tiempo real.</p>
                    </div>
                </div>
                }
                {par === "redes" && 
                <div className='m-10 text-lg'>
                    <div className="flex items-center">
                        <img src={socialMediaPng.src} alt=""></img>
                        <p className='ml-3'>Se define una estrategia de publicaciones y se planifican contenidos que atraigan, eduquen y conecten con la audiencia en cada plataforma.</p>
                    </div>
                    <div className="flex items-center ml-16">
                        <img src={socialMediaPng.src} alt=""></img>
                        <p className='ml-3'>Se gestiona la interacción con los seguidores, respondiendo comentarios y mensajes, mientras se analizan métricas para ajustar la estrategia y mejorar el alcance.</p>
                    </div>
                </div>
                }
                {par === "mercado" && 
                <div className='m-10 text-lg'>
                    <div className="flex items-center">
                        <img src={socialMediaPng.src} alt=""></img>
                        <p className='ml-3'>Se recopilan datos del mercado, identificando tendencias clave, necesidades del consumidor y comportamientos de la competencia.</p>
                    </div>
                    <div className="flex items-center ml-16">
                        <img src={socialMediaPng.src} alt=""></img>
                        <p className='ml-3'>Se divide el mercado en segmentos específicos, entendiendo las características, intereses y problemas de cada grupo para enfocarse mejor en ellos.</p>
                    </div>
                    <div className="flex items-center ml-16">
                        <img src={socialMediaPng.src} alt=""></img>
                        <p className='ml-3'>Se evalúan las fortalezas y debilidades de los competidores, identificando oportunidades para posicionar mejor la marca y destacar en el mercado.</p>
                    </div>
                </div>
                }
                {par === "seo" && 
                <div className='m-10 text-lg'>
                    <div className="flex items-center">
                        <img src={socialMediaPng.src} alt=""></img>
                        <p className='ml-3'>Se identifican las palabras clave más relevantes para el negocio, analizando volumen de búsqueda, competencia y relevancia para atraer tráfico cualificado.</p>
                    </div>
                    <div className="flex items-center ml-16">
                        <img src={socialMediaPng.src} alt=""></img>
                        <p className='ml-3'>Se ajustan los elementos internos del sitio web, como contenido, metadatos y estructura de URL, para mejorar la indexación en los motores de búsqueda.</p>
                    </div>
                    <div className="flex items-center ml-16">
                        <img src={socialMediaPng.src} alt=""></img>
                        <p className='ml-3'>Se implementan estrategias de link building para obtener enlaces de calidad, lo que aumenta la autoridad del sitio web y mejora su posicionamiento en los resultados de búsqueda.</p>
                    </div>
                </div>
                }
            </div>
            <div className='ss p-16 text-black-500'>
                <div className='mx-auto text-center' style={{width:'60vw'}}>
                    <img className='mx-auto mb-12' src={socialMediaPng.src} alt=""></img>
                    <h3 className='text-4xl text-center mb-7'>Mi website está integrado a Analytics</h3>
                    <h3 className='mb-8 text-2xl'>¿Por qué necesito de un especialista?</h3>
                    <p>¿Tienes un website DIVINO, pero aún así tu página web no te está generando ingresos?. Hay muchas razones por las que un sitio web no genera "conversiones", lo que se traduce en ingresos.</p><br></br>
                    <p>Lo primero que debes pensar es si tu estrategia de marketing digital es efectiva (si es que tienes una). Una buena estrategia de e-marketing debe llevar a tus clientes potenciales a visitar tu web, y estando allí, a generar acciones valiosas para tu negocio: comprar productos/servicios, ponerse en contacto, pedir una cotización, descargar un material...Depende de tus objetivos.</p><br></br>
                </div>
            </div>
        </>
    )
}

export default TipoServicio
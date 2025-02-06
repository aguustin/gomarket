import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion';

export const AnimationTi = ({ children }) => {

    const { ref, inView } = useInView({
        triggerOnce: true,  // Se ejecuta solo una vez cuando el elemento entra en la vista
        threshold: 0.2,     // Se activa cuando al menos el 10% del elemento es visible
    });


    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 70 }}  // Inicialmente oculto y desplazado
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 70 }}  // Animación de opacidad y desplazamiento
            transition={{ duration: 0.8 }}    // Duración de la animación
        >
            {children}
        </motion.div>
    )
}

export const AnimationA = ({ children }) => {

    const { ref, inView } = useInView({
        triggerOnce: true,  // Se ejecuta solo una vez cuando el elemento entra en la vista
        threshold: 0.2,     // Se activa cuando al menos el 10% del elemento es visible
    });


    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 70 }}  // Inicialmente oculto y desplazado
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 70 }}  // Animación de opacidad y desplazamiento
            transition={{ duration: 0.8 }}    // Duración de la animación
            className='negocio-img'>
            {children}
        </motion.div>
    )
}

export const AnimationB = ({ children }) => {
    const { ref: ref2, inView: inView2 } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <>

            <motion.section
                ref={ref2}
                initial={{ opacity: 0, y: -70 }}  // Inicialmente oculto y desplazado
                animate={{ opacity: inView2 ? 1 : 0, y: inView2 ? 0 : 70 }}  // Animación de opacidad y desplazamiento
                transition={{ duration: 0.8 }}    // Duración de la animación
            >
                {children}
            </motion.section>
        </>
    )
}

export const AnimationC = ({ children }) => {
    const { ref: ref3, inView: inView3 } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <motion.div
            ref={ref3}
            initial={{ opacity: 0, x: -100 }}  // Inicialmente oculto y desplazado
            animate={{ opacity: inView3 ? 1 : 0, x: inView3 ? 0 : 100 }}  // Animación de opacidad y desplazamiento
            transition={{ duration: 0.8 }}    // Duración de la animación
            className='negocio-img'>
            {children}
        </motion.div>
    )
}

export const AnimationD = ({ children }) => {
    const { ref: ref4, inView: inView4 } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <motion.div
            ref={ref4}
            initial={{ opacity: 0, x: 100 }}  // Inicialmente oculto y desplazado
            animate={{ opacity: inView4 ? 1 : 0, x: inView4 ? 0 : -100 }}  // Animación de opacidad y desplazamiento
            transition={{ duration: 0.8 }}    // Duración de la animación
            >
            {children}
        </motion.div>
    )
}

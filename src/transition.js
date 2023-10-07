import { motion as m } from 'framer-motion'

const transition = (Defaultcomponent) => {
  return () => (
    <>
      <Defaultcomponent />
      <m.div
        className="slide-in"
        initial={{ y: '-100%' }}
        animate={{ y: 0 }}
        exit={{ y: 0 }}
        transition={{ duration: 3, ease: [0.22, 2, 0.36, 2] }}
      />
      <m.div
        className="slide-out"
        initial={{ y: 0 }}
        animate={{ y: '-100%' }}
        exit={{ y: '100%' }}
        transition={{ duration: 3, ease: [0.22, 2, 0.36, 2] }}
      />
    </>
  )
}

export default transition

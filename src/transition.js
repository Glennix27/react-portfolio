import { motion as m } from 'framer-motion'

const transition = (Defaultcomponent) => {
  return () => (
    <>
      <Defaultcomponent />
      <m.div
        className="slide-in"
        initial={{ y: '-100%' }}
        animate={{ y: '100%' }}
        exit={{ y: 0 }}
        transition={{ duration: 2, ease: 'easeInOut' }}
      />
    </>
  )
}

export default transition

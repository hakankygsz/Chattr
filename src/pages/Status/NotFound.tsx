import { motion } from 'framer-motion'
import { FaGhost } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center pt-14 px-4">
      <motion.div
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex flex-col items-center text-center"
      >
        <FaGhost size={100} className="text-black dark:text-white animate-bounce" />

        <h1 className="text-9xl font-extrabold leading-tight tracking-wide text-black dark:text-white drop-shadow-md">404</h1>

        <p className="text-2xl mt-4 font-semibold text-black dark:text-white">Burada bir şeyler kaybolmuş...</p>

        <p className="text-lg mt-2 text-opacity-75 max-w-md text-black dark:text-white">
          Aradığın sayfayı bulamadık, belki de kaybolmuştur. Ama endişelenme, seni ana sayfaya geri gönderebiliriz.
        </p>

        <Link
          to="/"
          className="mt-16 px-12 py-4 bg-black dark:bg-white text-white dark:text-black rounded-xl text-lg font-medium shadow-xl transform hover:scale-105 transition-all duration-300"
        >
          Ana Sayfa'ya Dön
        </Link>
      </motion.div>
    </div>
  )
}

export default NotFound

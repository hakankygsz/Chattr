import PageMeta from '@/components/common/PageMeta'
import { motion } from 'framer-motion'
import { FaGhost } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center pt-14 px-4">
      <PageMeta title='Hakan Kaygusuz - Sayfa Bulunamadı' description='Hakan Kaygusuz Sayfa Bulunamadı' />

      <motion.div
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex flex-col items-center text-center"
      >
        <FaGhost size={120} className="text-white dark:text-gray-300 animate-bounce mb-8" />

        <h1 className="text-9xl font-extrabold leading-tight tracking-wide text-white drop-shadow-md">404</h1>

        <p className="text-2xl mt-8 font-semibold">Burada bir şeyler kaybolmuş...</p>

        <p className="text-lg mt-4 text-opacity-75 max-w-md">
          Aradığın sayfayı bulamadık, belki de kaybolmuştur. Ama endişelenme, seni ana sayfaya geri gönderebiliriz.
        </p>

        <Link
          to="/"
          className="mt-16 px-12 py-4 bg-gradient-to-r from-teal-400 to-blue-600 text-white rounded-xl text-lg font-medium shadow-xl transform hover:scale-105 transition-all duration-300"
        >
          Ana Sayfa'ya Dön
        </Link>
      </motion.div>
    </div>
  )
}

export default NotFound

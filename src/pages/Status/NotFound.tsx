import PageMeta from '@/components/common/PageMeta'
import { motion } from 'framer-motion'
import { FaGhost } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center pt-8 px-4 text-center bg-white dark:bg-[#080816]">
      <PageMeta title='Hakan Kaygusuz - Sayfa Bulunamadı' description='Hakan Kaygusuz Sayfa Bulunamadı' />
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex flex-col items-center"
      >
        <FaGhost size={120} className="text-zinc-400 dark:text-zinc-600 animate-pulse mb-4" />
        <h1 className="text-8xl font-extrabold text-zinc-800 dark:text-zinc-100 tracking-wide">404</h1>
        <p className="text-2xl mt-12 text-zinc-600 dark:text-zinc-300">Burada bir şeyler yok...</p>
        <p className="text-md mt-2 text-zinc-500 dark:text-zinc-400 max-w-md">
          Aradığın sayfayı bulamadık. Ama üzülme seni ana sayfaya ışınlayabiliriz
        </p>
        <Link
          to="/"
          className="mt-24 px-8 py-3 bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 rounded-xl text-lg font-medium shadow-md opacity-100 hover:opacity-80 transition-opacity"
        >
          Ana Sayfa'ya Dön
        </Link>
      </motion.div>
    </div>
  )
}

export default NotFound
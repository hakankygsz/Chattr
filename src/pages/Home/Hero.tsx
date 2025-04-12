import useTheme from '@/hooks/useTheme';
import { motion } from 'framer-motion';

const Hero = () => {
    const { theme } = useTheme();

    return (
        <div className="relative w-full min-h-screen flex flex-col md:flex-row justify-between px-6 lg:px-44 py-24 text-black dark:text-white">
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="flex-1 text-center md:text-left space-y-6"
            >
                <p className="text-sm font-semibold uppercase tracking-wider text-gray-600 dark:text-gray-300">
                    Yazılımın gücüyle <span className="text-teal-500">dijital dünyayı şekillendiriyorum</span>
                </p>
                <h1 className="text-5xl md:text-7xl py-4 font-extrabold text-transparent bg-gradient-to-r from-teal-400 via-indigo-500 to-fuchsia-600 bg-clip-text">
                    Hakan Kaygusuz
                </h1>
                <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300">
                    Her satır kodda mükemmeliyeti hedefliyorum.
                    Teknoloji, inovasyon ve kullanıcı odaklı çözümlerle sürdürülebilir projeler geliştiriyor, yazılımın gücünü iş dünyasına entegre ediyorum.
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0.4 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 2.5 }}
                className="flex flex-1 justify-center items-center"
            >
                <div className={`hidden dark:inline animate-floating relative w-72 h-72 md:w-[28rem] md:h-[28rem]`}>
                    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-teal-500 via-indigo-400 to-fuchsia-500 blur-2xl opacity-25"></div>
                </div>
            </motion.div>
        </div>
    )
}

export default Hero

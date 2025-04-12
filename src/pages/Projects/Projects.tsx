import PageMeta from "@/components/common/PageMeta";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";

const projectItems = [
    {
        title: "Xristal",
        description: "Xristal şirketinin web sitesini tamamen yeniledim, modern tasarım ve işlevsellik ile kullanıcı deneyimini geliştirdim.",
        links: {
            site: "https://xristal.com.tr"
        }
    },
    {
        title: "Artificial Intelligence Pack",
        description: "Python'un güçlü görüntü işleme kütüphaneleri ile video analizi ve yapay zeka tabanlı sistemler geliştirdim.",
        links: {
            github: "https://github.com/hakankygsz/Artificial-Intelligence-Pack"
        }
    },
    {
        title: "City Borders In Turkey",
        description: "Pandas, GeoPandas ve Matplotlib kullanarak Türkiye'deki şehir sınırlarını görselleştirip coğrafi verileri daha anlaşılır hale getirdim.",
        links: {
            github: "https://github.com/hakankygsz/City-Borders-in-Turkey"
        }
    },
    {
        title: "Tdk Dictionary",
        description: "Tdk'nın resmi veritabanındaki veriler ile bir sözlük yaptım",
        links: {
            github: "https://github.com/hakankygsz/TdkDictionary"
        }
    }
];

const Projects = () => {
    return (
        <div className='w-full min-h-screen flex flex-col items-center pb-24 bg-white dark:bg-[#080816]'>
            <PageMeta title='Hakan Kaygusuz - Projelerim' description='Hakan Kaygusuz Proje Sayfası' />
            <div className='flex flex-col items-center justify-center w-full max-w-screen-2xl mx-auto pt-8'>
                <h2 className='text-5xl sm:text-6xl md:text-7xl font-extrabold text-black dark:text-white mb-8'>
                    Projelerim
                </h2>

                <p className='max-w-4xl text-lg sm:text-xl font-light leading-relaxed text-center px-8 text-neutral-800 dark:text-neutral-300'>
                    Teknolojiyle olan yolculuğumda geliştirdiğim projeler, her biri yeni bir öğrenme deneyimi ve yaratıcı bir süreç oldu. Her bir proje, beni daha iyisini yapmaya ve sınırlarımı zorlamaya itti. Kod yazmak, bu projelerle hayat buldu, her biri birer hikaye, birer adım daha ileriye gitme çabasıydı.
                </p>

                <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-24 px-4 sm:px-8 w-full'>
                    {projectItems.map((item, i) => (
                        <motion.li
                            key={i}
                            className='w-full max-w-lg h-[320px] flex flex-col justify-between px-6 py-4 bg-white dark:bg-black/25 border rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out'
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.7, duration: 0.5 }}
                        >
                            <div className='w-full flex flex-col justify-between'>
                                <h2 className='text-2xl font-semibold text-black dark:text-white mt-4'>{item.title}</h2>
                                <p className='text-sm text-neutral-800 dark:text-neutral-400 mt-4'>{item.description}</p>
                            </div>
                            <div className='flex gap-4 mt-4'>
                                {item.links.github && (
                                    <a href={item.links.github} target="_blank" rel="noopener noreferrer" className='w-14 h-14 flex items-center justify-center border rounded-lg hover:ring-2 text-3xl bg-white text-black dark:bg-black dark:text-neutral-500 duration-300 transition-all'>
                                        <FaGithub />
                                    </a>
                                )}
                                {item.links.site && (
                                    <a href={item.links.site} target="_blank" rel="noopener noreferrer" className='w-14 h-14 flex items-center justify-center border rounded-lg hover:ring-2 text-3xl bg-white text-black dark:bg-black dark:text-neutral-500 duration-300 transition-all'>
                                        <TbWorldWww />
                                    </a>
                                )}
                            </div>
                        </motion.li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Projects;

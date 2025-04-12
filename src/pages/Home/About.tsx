import {
  FaNodeJs,
  FaPython,
  FaReact,
  FaRegClock,
  FaRegHandshake,
  FaRegLightbulb
} from 'react-icons/fa'
import { IoLogoJavascript } from 'react-icons/io5'
import { RiNextjsFill } from 'react-icons/ri'
import { SiMysql } from 'react-icons/si'
import { TbBrandCSharp } from 'react-icons/tb'

const sections = [
  {
    icon: FaRegLightbulb,
    iconColor: 'text-yellow-500',
    title: 'Ne Yapıyorum?',
    description:
      'Yazılım geliştirme alanında uçtan uca çözümler sunuyorum. Hem frontend hem backend konularında uzmanlaştım. Amacım, işlevsel ve sürdürülebilir projeler üretmek.'
  },
  {
    icon: FaRegHandshake,
    title: 'Çalışma Yaklaşımım',
    iconColor: 'text-green-500',
    description:
      'İletişime ve ekip çalışmasına değer veririm. Müşteri ihtiyaçlarını doğru analiz ederek, sonuç odaklı ve esnek çözümler üretmeye odaklanırım.'
  },
  {
    icon: FaRegClock,
    iconColor: 'text-blue-500',
    title: 'Gelecek Vizyonum',
    description:
      'Teknolojiyi sadece takip etmiyorum, şekillendirme niyetindeyim. Sürekli öğreniyor, yeni trendleri projelerime entegre ediyorum.'
  }
]

const techIcons = [
  FaNodeJs,
  FaReact,
  FaPython,
  TbBrandCSharp,
  RiNextjsFill,
  IoLogoJavascript,
  SiMysql
]

const About = () => (
  <div className='w-full min-h-screen grid grid-cols-1 lg:grid-cols-2 gap-16 px-4 lg:px-32 py-24 place-items-center lg:place-items-start'>
    <div className='flex flex-col items-center lg:items-start text-center lg:text-start'>
      <h2 className='text-5xl sm:text-6xl md:text-7xl font-extrabold text-black dark:text-white mb-8'>
        Hakkımda
      </h2>
      <p className='max-w-3xl text-lg sm:text-xl font-light leading-8 text-neutral-800 dark:text-neutral-100'>
        Ben Hakan Kaygusuz. Yazılıma 7 yaşında merakla başladım, bugünse tam kapsamlı çözümler üreten bir fullstack geliştirici olarak devam ediyorum. React, Node.js, veritabanları ve yapay zekâ gibi alanlarda deneyimliyim. Amacım, sadece kod değil; değer üretmek.
      </p>
      <ul className='flex flex-wrap items-center justify-center lg:justify-start gap-6 sm:gap-8 mt-16'>
        {techIcons.map((Icon, i) => (
          <li key={i} className='h-16 w-16 sm:h-20 sm:w-20 ${iconColor} flex items-center justify-center text-3xl sm:text-4xl bg-neutral-100 dark:bg-black text-neutral-900 dark:text-white bg-opacity-45 dark:bg-opacity-45 hover:bg-opacity-100 dark:hover:bg-opacity-100 border dark:border-0 rounded-full transition-colors cursor-pointer' >
            <Icon />
          </li>
        ))}
      </ul>
    </div>
    <ul className='space-y-8 select-none w-full'>
      {sections.map(({ icon: Icon, iconColor, title, description }, i) => (
        <li
          key={i}
          className='bg-neutral-100 dark:bg-black/35 dark:hover:bg-black dark:hover:bg-opacity-100 p-8 rounded-lg transition-colors duration-300 cursor-pointer'
        >
          <Icon className={`text-4xl mb-4 ${iconColor}`} />
          <h3 className='text-2xl font-semibold text-neutral-800 dark:text-neutral-100'>
            {title}
          </h3>
          <p className='mt-4 text-md sm:text-lg font-light text-neutral-800 dark:text-neutral-300'>
            {description}
          </p>
        </li>
      ))}
    </ul>
  </div>
)

export default About

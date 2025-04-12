import PageMeta from '@/components/common/PageMeta'
import About from './About'
import Hero from './Hero'
import Plans from './Plans'

const Home = () => {

  return (
    <div className='min-h-screen w-full'>
      <PageMeta title='Hakan Kaygusuz - Ana Sayfa' description='Hakan Kaygusuz Anasayfası' />
      <Hero />
      <About />
      <Plans />
    </div>
  )
}

export default Home
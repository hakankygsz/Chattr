import PageMeta from '@/components/common/PageMeta'
import Hero from './Hero'

const Home = () => {

  return (
    <div className='min-h-screen w-full'>
      <PageMeta title='Hakan Kaygusuz - Ana Sayfa' description='Hakan Kaygusuz Anasayfası' />
      <Hero />
    </div>
  )
}

export default Home
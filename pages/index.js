import Layout from '../components/Layout'
import HomeHero from '../components/home/HomeHero'
import HomePlans from '../components/home/HomePlans'
import HomeCountDown from '../components/home/HomeCountDown'

export default function Home() {
  return (
    <Layout>
      <HomeHero />      
      <HomePlans />
      <HomeCountDown isStatic={true} />
    </Layout>
  )
}

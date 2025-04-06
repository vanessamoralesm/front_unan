import Banner from '@/components/landing/Banner'
import Events from '@/components/landing/main/Events'
import Hero from '@/components/landing/main/Hero'
import Learning from '@/components/landing/main/Learning'
import Masters from '@/components/landing/main/Masters'
import Projects from '@/components/landing/main/Projects'
import Sponsors from '@/components/landing/main/Sponsors'
import Video from '@/components/landing/main/Video'
import BannerSection from '@/components/landing/main/BannerSection'
export default function Main() {
  return (
    <div>
      <Hero/>
       <Sponsors/>
      <Learning/>
      <Projects/>
      <Masters/>
      <Video/>
      <Events/>
      <BannerSection/>
    </div>
  )
}

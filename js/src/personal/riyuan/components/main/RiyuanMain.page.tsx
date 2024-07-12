import { Home } from '@/personal/riyuan/components/home/Home.tsx'
import { About } from '@/personal/riyuan/components/about/About.tsx'
import { Experience } from '@/personal/riyuan/components/experience/Experience.tsx'

/** Function that layout the Main pages structure ->
 *    Renders the landing page of the website with the hero section, about, and experience
 *      Provides an overview of myself and my professional background to visitors */
export function RiyuanMainPage() {
  return (
    <div>
      <Home />
      <About />
      <Experience />
    </div>
  )
}

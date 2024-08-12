import { Home } from '@/personal/riyuan/pages/about/home/Home.tsx'
import { About } from '@/personal/riyuan/pages/about/headline/About.tsx'
import { Experience } from '@/personal/riyuan/pages/about/experience/Experience.tsx'

/** Function that layout the Main pages structure ->
 *  Renders the landing page of the website with the hero section, about, and experience
 *  Provides an overview of myself and my professional background to visitors
 */
export function AboutPage() {
  return (
    <div>
      <Home />
      <About />
      <Experience />
    </div>
  )
}

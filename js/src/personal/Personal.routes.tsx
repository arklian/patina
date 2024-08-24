import { AmandaRoutes } from './amanda/Amanda.routes.tsx'
import { BryanRoutes } from './bryan/Bryan.routes.tsx'
import { HaokingPage } from './haoking/Haoking.page.tsx'
import { HenryPage } from './_henry/Henry.page.tsx'
import { PersonalPage } from './Personal.page.tsx'
import { JionghaoPage } from './jionghao/Jionghao.page.tsx'
import { KaziPage } from './kazi/Kazi.page.tsx'
import { KellyPage } from './kelly/Kelly.page.tsx'
import { MalihaPage } from './maliha/Temp.tsx'
import { MartinRoutes } from '@/personal/martin/Martin.routes.tsx'
import { RiyuanRoutes } from './riyuan/RiyuanRoutes.tsx'
import { TonyPage } from './tony/Tony.page.tsx'
import { MannyRoutes } from '@/personal/manny/Manny.routes.tsx'

/** When adding new routes, please follow the following paradigm:
 * path: 'bryan',
 * description: "XYZ",
 * element: <homepage element />,
 * -----------------------------------------------------------------
 * If you have multiple sites on your homepage, please put them all as children
 * of a single element (check personal/bryan/Bryan.routes.tsx for reference)
 * *simply remove the 'element: <BryanPage />' line if you have no global page framework
 */
export const PersonalRoutes = [
  {
    index: true,
    description: 'Directory of Personal Websites',
    element: <PersonalPage />,
  },
  {
    path: 'henry',
    description: "Henry's Page",
    element: <HenryPage />,
  },
  AmandaRoutes,
  BryanRoutes,
  {
    path: 'haoking',
    description: "Haoking's Page",
    element: <HaokingPage />,
  },
  {
    path: 'jionghao',
    description: "Jionghao's Page",
    element: <JionghaoPage />,
  },
  {
    path: 'kazi',
    description: "Kazi's Page",
    element: <KaziPage />,
  },
  {
    path: 'kelly',
    description: "Kelly's Page",
    element: <KellyPage />,
  },
  {
    path: 'maliha',
    description: "Maliha's Page",
    element: <MalihaPage />,
  },
  MannyRoutes,
  MartinRoutes,
  RiyuanRoutes,
  {
    path: 'tony',
    description: "Tony's Page",
    element: <TonyPage />,
  },
]

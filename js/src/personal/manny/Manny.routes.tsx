import { MannyPage } from '@/personal/manny/Manny.page.tsx'
// import { ResumePage as MannyResume } from '@/personal/manny/pages/Resume.tsx'
// import { About as MannyAboutMePage } from '@/personal/manny/pages/About.tsx'
// import { Contact as MannyContactMePage } from '@/personal/manny/pages/Contact.tsx'

export const MannyRoutes = {
  path: 'manny',
  description: "Manny's Page",
  element: <MannyPage />,
  children: [
    {
      index: true,
      description: "Manny's Home Page",
      element: <MannyPage />,
    },
  ],
}

// {
//   path: 'manny',
//     description: "Manny's Page",
//   element: <MannyPage />,
// },
// {
//   path: 'manny/resume',
//     description: "Manny's Resume Page",
//   element: <MannyResume />,
// },
// {
//   path: 'manny/aboutme',
//     description: "Manny's About Me Page",
//   element: <MannyAboutMePage />,
// },
// {
//   path: 'manny/contact',
//     description: "Manny's Contact Me Page",
//   element: <MannyContactMePage />,
// },

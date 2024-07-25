import { HomePage } from '@/patina/home/Home.page.tsx'
import { MissionPage } from '@/patina/about/mission/Mission.page.tsx'
import { MentorshipPage } from '@/patina/mentorship/Mentorship.page.tsx'
import { ScholarshipPage } from '@/patina/scholarship/Scholarship.page.tsx'
import { CommunityPage } from '@/patina/community/Community.page.tsx'
import { MentorPage } from '@/patina/mentor/Mentor.page.tsx'
/**
 * Routes for the Patina Website
 */
export const PatinaRoutes = [
  {
    index: true,
    description: 'Home',
    element: <HomePage />,
  },
  {
    path: 'mission',
    description: 'Mission',
    element: <MissionPage />,
  },
  {
    path: 'team',
    description: 'Team',
    element: <MissionPage />,
  },
  {
    path: 'community',
    description: 'Community',
    element: <CommunityPage />,
  },
  {
    path: 'mentorship',
    description: 'Mentorship',
    element: <MentorshipPage />,
  },
  {
    path: 'scholarship',
    description: 'Scholarship',
    element: <ScholarshipPage />,
  },
  {
    path: 'mentor',
    description: 'Mentor',
    element: <MentorPage />,
  },
]

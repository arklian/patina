import { HomePage } from '@/patina/pages/home/Home.page.tsx'
import { MissionPage } from '@/patina/pages/about/mission/Mission.page.tsx'
import { TeamPage } from '@/patina/pages/about/team/Team.page.tsx'
import { MentorshipPage as MentorshipFa24Page } from '@/patina/pages/mentorship/Mentorship.page.tsx'
import { MentorshipPage as MentorshipSp25Page } from '@/patina/pages/mentorship-sp25/Mentorship.page.tsx'
import { CommunityPage } from '@/patina/pages/community/Community.page.tsx'
import { MentorPage as MentorFa24Page } from '@/patina/pages/mentor/Mentor.page.tsx'
import { MentorPage as MentorSp25Page } from '@/patina/pages/mentor-sp25/Mentor.page.tsx'
import { VolunteerPage } from '@/patina/pages/volunteer/Volunteer.page.tsx'
import { ScholarshipPage } from '@/patina/pages/scholarship/Scholarship.page.tsx'
import { LoginPage } from '@/patina/login/Login.page.tsx'
import { InternshipPage } from '@/patina/pages/internship/Internship.page.tsx'
import { BlogRoutes } from '@/patina/pages/blog/Blog.routes.tsx'
import { Blog } from '@/patina/pages/blog/Blog.tsx'

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
    element: <TeamPage />,
  },
  {
    path: 'events',
    description: 'Events',
    element: <CommunityPage />,
  },
  {
    path: 'mentorship-fa24',
    description: "Mentorship Fall '24",
    element: <MentorshipFa24Page />,
  },
  {
    path: 'mentorship',
    description: "Mentorship Spring '25",
    element: <MentorshipSp25Page />,
  },
  {
    path: 'scholarship',
    description: 'Scholarship',
    element: <ScholarshipPage />,
  },
  {
    path: 'mentor-fa24',
    description: 'Mentor',
    element: <MentorFa24Page />,
  },
  {
    path: 'mentor',
    description: "Mentor Spring '25",
    element: <MentorSp25Page />,
  },
  {
    path: 'volunteer',
    description: 'Volunteering Opportunities',
    element: <VolunteerPage />,
  },
  {
    path: 'login',
    description: 'Login Page',
    element: <LoginPage />,
  },
  {
    path: 'blog',
    description: 'blog',
    element: <Blog />,
    children: BlogRoutes,
  },
  {
    path: 'internship',
    description: 'Internship Page',
    element: <InternshipPage />,
  },
]

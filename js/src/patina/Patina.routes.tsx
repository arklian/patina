import { HomePage } from '@/patina/pages/home/Home.page.tsx'
import { MissionPage } from '@/patina/pages/about/mission/Mission.page.tsx'
import { TeamPage } from '@/patina/pages/about/team/Team.page.tsx'
import { MentorshipPage as MentorshipFa24Page } from '@/patina/pages/past-programs/mentorship-fa24/Mentorship.page.tsx'
import { MentorshipPage as MentorshipSp25Page } from '@/patina/pages/past-programs/mentorship-sp25/Mentorship.page.tsx'
import { MentorshipPage as MentorshipFa25Page } from '@/patina/pages/mentorship-fa25/Mentorship.page.tsx'
import { CommunityPage } from '@/patina/pages/community/Community.page.tsx'
import { MentorPage as MentorFa24Page } from '@/patina/pages/past-programs/mentor-fa24/Mentor.page.tsx'
import { MentorPage as MentorSp25Page } from '@/patina/pages/past-programs/mentor-sp25/Mentor.page.tsx'
import { MentorPage as MentorFa25Page } from '@/patina/pages/mentor-fa25/Mentor.page.tsx'
import { VolunteerPage } from '@/patina/pages/volunteer/Volunteer.page.tsx'
import { ScholarshipPage } from '@/patina/pages/scholarship/Scholarship.page.tsx'
import { LoginPage } from '@/patina/login/Login.page.tsx'
import { InternshipPage } from '@/patina/pages/past-programs/internship-su24/Internship.page.tsx'
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
    path: 'mentorship-sp25',
    description: "Mentorship Spring '25",
    element: <MentorshipSp25Page />,
  },
  {
    path: 'mentorship',
    description: "Mentorship Fall '25",
    element: <MentorshipFa25Page />,
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
    path: 'mentor-sp25',
    description: "Mentor Spring '25",
    element: <MentorSp25Page />,
  },
  {
    path: 'mentor',
    description: "Mentor Fall '25",
    element: <MentorFa25Page />,
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

import { HomePage } from '@/patina/admin/home/Home.page.tsx'
import { BlogAdminPage } from '@/patina/admin/blog/AdminBlog.page.tsx'
import { AdminEventPage } from '@/patina/admin/event/AdminEvent.page.tsx'

export const AdminRoutes = [
  {
    index: true,
    description: 'Home',
    element: <HomePage />,
  },
  {
    path: 'blog',
    description: 'Blog Post',
    element: <BlogAdminPage />,
  },
  {
    path: 'event',
    description: 'Event',
    element: <AdminEventPage />,
  },
]

import { BlogPage } from '@/patina/pages/blog/Blog.page.tsx'
import { FocusedBlog } from '@/patina/pages/blog/FocusedBlog.tsx'

export const BlogRoutes = [
  {
    index: true,
    description: 'Home',
    element: <BlogPage />,
  },
  {
    path: ':id',
    description: 'Specific blog',
    element: <FocusedBlog />,
  },
]

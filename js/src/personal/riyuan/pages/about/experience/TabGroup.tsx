import { Tabs } from '@mantine/core'
import { TabPanel } from '@/personal/riyuan/pages/about/experience/TabPanel.tsx'
import { TabLabel } from '@/personal/riyuan/pages/about/experience/TabLabel.tsx'

export function TabGroup() {
  const tabData = [
    {
      value: 'Patina Network',
      title: 'Software Development Intern',
      label: 'Patina Network',
      items: [
        'Developed a secure endpoint for user authentication with Google and GitHub using Spring Boot, managing credential verification and session tokens to enhance security and reliability.',
        'Experienced in designing and implementing secure RESTful APIs, enhancing backend performance, and collaborating with cross-functional teams to deliver high-quality software solutions.',
        "Collaborated cross-functionally with UI/UX designers to render the front end of Patina Network's website using React, TypeScript, and Mantine UI from Figma mocks, ensuring a responsive and mobile-friendly design.",
        'Designed the backend of the blog page to connect with the database, leveraging pgAdmin for management, and developed the frontend to deliver an engaging and responsive user experience.',
        'Broke down projects into tasks tracked in the Linear project Management app and worked in an Agile environment with frequent standups, retros and 1:1s.',
        'Participated in code reviews to ensure high code quality, adherence to best practices, and seamless integration across the development team.',
      ],
    },
    {
      value: 'Google+ Basta',
      title: 'Google Software Engineering Program | Mentee',
      label: 'Google+ Basta',
      items: [
        'Participated in a 10-week Google-led technical mentoring program, enhancing backend development capabilities through advanced data structure optimization and algorithm refinement, achieving a 20% improvement in system performance benchmarks.',
        'Refined project collaboration using Git with streamlined branch management and integration of continuous integration pipelines, which reduced merge conflicts by 35% and expedited feature deployment cycles.',
      ],
    },
    {
      value: 'Hunter College CS Department',
      title: 'Undergraduate Teaching Assistant',
      label: 'Hunter College CS Department',
      items: [
        'Facilitated daily tutoring sessions for 300 students on MIPS and Python, created a solution guide for 60+ assignments and 10 labs used by 95% of the class, and explored visualizing GitHub collaboration.',
      ],
    },
  ]
  return (
    <Tabs
      color="cyan"
      orientation="vertical"
      defaultValue="Patina Network"
      placement="left"
      pt="md"
    >
      <Tabs.List>
        {tabData.map((tab) => (
          <TabLabel key={tab.value} value={tab.value} label={tab.label} />
        ))}
      </Tabs.List>
      {tabData.map((tab) => (
        <TabPanel
          key={tab.value}
          value={tab.value}
          title={tab.title}
          items={tab.items}
        />
      ))}
    </Tabs>
  )
}

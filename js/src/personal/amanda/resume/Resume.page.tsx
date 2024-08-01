import { ScrollArea } from '@mantine/core'
import { ResumeSection } from '../Types.tsx'
import data from '../Data.json'
import { ResumeSectionContent } from '@/personal/amanda/resume/ResumeSectionContent.tsx'
import styles from '@/personal/amanda/main/Main.module.css'

export function ResumePage() {
  const resume = data.resume as ResumeSection[]
  return (
    <>
      <ScrollArea
        type="scroll"
        offsetScrollbars
        scrollbars="y"
        className={styles.scrollArea}
      >
        {resume.map((section, index) => (
          <ResumeSectionContent key={index} section={section} />
        ))}
      </ScrollArea>
    </>
  )
}

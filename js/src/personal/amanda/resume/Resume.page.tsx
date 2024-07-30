import { ScrollArea } from '@mantine/core'
import { ResumeSection } from '../Types.tsx'
import data from '../Data.json'
import { ResumeSectionContent } from '@/personal/amanda/resume/ResumeSectionContent.tsx'

export function ResumePage() {
  const resume = data.resume as ResumeSection[]
  return (
    <>
      <ScrollArea type="scroll" offsetScrollbars w="150rem" pl="5rem">
        {resume.map((section) => (
          <ResumeSectionContent section={section} />
        ))}
      </ScrollArea>
    </>
  )
}

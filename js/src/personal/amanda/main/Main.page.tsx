import { ScrollArea } from '@mantine/core'
import { SectionContent } from './SectionContent.tsx'
import { Section } from '../Types.tsx'
import data from '../Data.json'

export function MainPage() {
  const info = data.info as Section[]
  return (
    <>
      <ScrollArea type="scroll" offsetScrollbars w="150rem" pl="5rem">
        {info.map((section) => (
          <SectionContent section={section} />
        ))}
      </ScrollArea>
    </>
  )
}

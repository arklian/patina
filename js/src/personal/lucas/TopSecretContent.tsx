import { Text, Paper, Image, Group, Card } from '@mantine/core'
import stockImgUrl from '@/personal/lucas/stock_image.jpg'

const SimpleCardWithImage = ({
  imgUrl,
  imgAlt,
  text,
}: {
  imgUrl: string
  imgAlt: string
  text: string
}) => (
  <Card
    withBorder
    radius="md"
    p="md"
  >
    <Card.Section>
      <Image
        src={imgUrl}
        alt={imgAlt}
        height={180}
      />
    </Card.Section>
    <Card.Section>
      <Text>{text}</Text>
    </Card.Section>
  </Card>
)

const RickrollVideo = ({ text }: { text: string }) => (
  <Card
    withBorder
    radius="md"
    p="md"
  >
    <Card.Section>
      <iframe
        onLoad={() => console.log('on loaded')}
        src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=CJRM6urNkGDHoYES&amp;controls=0&autoplay=1"
        title="YouTube video player"
        allow="autoplay; encrypted-media; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    </Card.Section>
    <Card.Section>
      <Text>{text}</Text>
    </Card.Section>
  </Card>
)

export const TopSecretContent = () => {
  return (
    <>
      <Paper
        radius="md"
        withBorder
        p="xl"
      >
        <Text>Top Secret Content</Text>
        <Group justify="center">
          <SimpleCardWithImage
            imgUrl="/stock_image.jpg"
            imgAlt="public/stock_image.jpg"
            text='Image from the "public" folder.'
          />
          <SimpleCardWithImage
            imgUrl={stockImgUrl}
            imgAlt="imported stock_image.jpg"
            text="Image from importing image directly into tsx."
          />
          <SimpleCardWithImage
            imgUrl="https://www.stockvault.net/data/2016/03/08/186315/preview16.jpg"
            imgAlt="stock image from internet"
            text="Image by specifying external url."
          />
          <RickrollVideo text="Embedded YT video since I can't get a raw mp4 url." />
        </Group>
      </Paper>
    </>
  )
}

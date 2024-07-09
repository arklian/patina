import { Image, AspectRatio } from '@mantine/core'
import styles from './Maliha.module.css'

/** All images */
export function Images() {
  return (
    <div className={styles.images}>
      <AspectRatio
        ratio={1 / 2}
        maw={400}
        left={146}
        mx="auto"
        pos="absolute"
        opacity={0.6}
      >
        <Image src="https://i.pinimg.com/originals/d1/cd/67/d1cd674f52a517795ebe4731d960a47c.jpg" />
      </AspectRatio>
      <AspectRatio
        ratio={1}
        maw={400}
        mx="auto"
        pos="absolute"
        opacity={1}
        left={850}
        style={{ transform: 'rotate(-20deg)' }}
      >
        <Image src="https://i.pinimg.com/originals/80/65/50/806550f5c3406ec20e04a5b7ce1bf987.png" />
      </AspectRatio>
      <AspectRatio
        ratio={1 / 2}
        maw={400}
        mx="auto"
        pos="absolute"
        opacity={0.87}
        left={1440}
      >
        <Image src="https://i.pinimg.com/originals/c5/af/52/c5af52b3b08a9c24e3493cb8ee997da0.jpg" />
      </AspectRatio>
      <AspectRatio
        ratio={1}
        maw={400}
        w={300}
        h={300}
        mx="auto"
        pos="absolute"
        opacity={0.9}
        left={2600}
        top={-50}
      >
        <Image src="https://i.pinimg.com/originals/0d/29/46/0d294617920919575a73a9b6237bf794.jpg" />
      </AspectRatio>
      <AspectRatio
        ratio={3 / 5}
        maw={400}
        w={300}
        h={300}
        mx="auto"
        pos="absolute"
        opacity={0.89}
        top={500}
        left={2070}
      >
        <Image src="https://i.pinimg.com/originals/c0/36/b2/c036b2f6b2eb61e5dbc839ea907420a5.jpg" />
      </AspectRatio>
      <AspectRatio
        ratio={1 / 2}
        maw={400}
        w={300}
        h={300}
        mx="auto"
        pos="absolute"
        opacity={0.89}
        left={3000}
      >
        <Image src="https://i.pinimg.com/originals/6e/90/4b/6e904b358a71d92228b59622d555904e.jpg" />
      </AspectRatio>
      <AspectRatio
        ratio={1 / 2}
        maw={400}
        w={200}
        h={300}
        mx="auto"
        pos="absolute"
        opacity={0.6}
        left={1230}
        bottom={100}
      >
        <Image src="https://i.pinimg.com/originals/7e/bb/8b/7ebb8bf4d4c85d689a86718e0b076134.png" />
      </AspectRatio>
      <AspectRatio
        ratio={1}
        maw={400}
        w={300}
        h={300}
        mx="auto"
        pos="absolute"
        opacity={0.8}
        left={1700}
        bottom={120}
      >
        <Image src="https://i.pinimg.com/564x/12/e5/57/12e5572de6fb97deaa855f2c8568b267.jpg" />
      </AspectRatio>
      <AspectRatio
        ratio={1 / 2}
        maw={400}
        mx="auto"
        pos="absolute"
        opacity={0.87}
        left={3450}
      >
        <Image src="https://i.pinimg.com/originals/27/19/7e/27197e6048184aaad26307558234cd78.jpg" />
      </AspectRatio>
    </div>
  )
}

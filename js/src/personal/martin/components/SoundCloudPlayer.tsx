import classes from '@/personal/martin/Martin.module.css'

type scProps = {
  src: string
  width: string
  height: string
}

export function SoundCloudPlayer(props: scProps) {
  return (
    <>
      <iframe
        title="SC mmatsudaira"
        width={props.width}
        height={props.height}
        allow="autoplay"
        src={props.src}
      />
      <div className={classes.scPlayer}>
        <a
          href="https://soundcloud.com/mmatsudaira"
          rel="noreferrer"
          title="mmatsudaira"
          target="_blank"
          style={{ color: '#cccccc' }}
        >
          {'mmatsudaira'}
        </a>
        <a
          href="https://soundcloud.com/mmatsudaira/sets/spotlight"
          rel="noreferrer"
          title="Spotlight"
          target="_blank"
          style={{ color: '#cccccc' }}
        >
          {'Spotlight'}
        </a>
      </div>
    </>
  )
}

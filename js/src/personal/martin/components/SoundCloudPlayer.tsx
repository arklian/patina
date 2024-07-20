import classes from "@/personal/martin/Martin.module.css";

type scProps ={
  src: string;
  width: string;
  height: string;
}

export function SoundCloudPlayer(props: scProps) {
  return (
    <>
      <iframe
        width={props.width}
        height={props.height}
        scrolling="no"
        frameBorder="no"
        allow="autoplay"
        src={props.src}
      />
      <div className={classes.scPlayer}>
        <a
          href="https://soundcloud.com/mmatsudaira"
          title="mmatsudaira"
          target="_blank"
          style={{color: '#cccccc'}}>mmatsudaira</a> · <a
        href="https://soundcloud.com/mmatsudaira/sets/spotlight" title="Spotlight" target="_blank"
        style={{color: '#cccccc'}}>Spotlight</a>
      </div>
    </>
  )
}

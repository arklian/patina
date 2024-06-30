import classes from './AboutMe.module.css'

export function AboutMePictures() {
  return (
    <>
      <iframe
        className={classes.playlist}
        title="playlist"
        src="https://open.spotify.com/embed/playlist/3ffIenWiy0XmHvnamjA3qT?utm_source=generator&theme=0"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
        loading="lazy"
      >
        {'Hello :)'}
      </iframe>
    </>
  )
}

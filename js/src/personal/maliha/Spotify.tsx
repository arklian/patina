import styles from './Maliha.module.css'

/* Component for Spotify */
export function Spotify() {
  return (
    <iframe
      className={styles.playlist}
      title="playlist"
      src="https://open.spotify.com/embed/playlist/4mdLDndEW9wNur74omMsN4?utm_source=generator"
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
    />
  )
}

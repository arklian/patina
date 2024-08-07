import { Button, ButtonProps } from '@mantine/core'
import React from 'react'

function GithubIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      style={{ width: '0.9rem', height: '0.9rem' }}
      {...props}
    >
      <path
        fill="currentColor"
        d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.37 7.83 10.88.57.1.78-.25.78-.55 0-.27-.01-.97-.01-1.9-3.18.69-3.85-1.49-3.85-1.49-.52-1.33-1.27-1.68-1.27-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.67 1.24 3.32.95.1-.74.4-1.24.73-1.52-2.54-.29-5.22-1.27-5.22-5.68 0-1.25.45-2.27 1.18-3.07-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.17.92-.26 1.9-.39 2.88-.39.98 0 1.96.13 2.88.39 2.18-1.48 3.15-1.17 3.15-1.17.62 1.59.24 2.76.12 3.05.74.8 1.18 1.82 1.18 3.07 0 4.43-2.68 5.38-5.23 5.66.41.35.77 1.05.77 2.12 0 1.53-.01 2.76-.01 3.13 0 .3.2.66.79.55 4.54-1.52 7.83-5.81 7.83-10.88 0-6.27-5.23-11.5-11.5-11.5z"
      />
    </svg>
  )
}

export function GithubButton(
  props: ButtonProps & React.ComponentPropsWithoutRef<'button'>,
) {
  const handleGithubLogin = () => {
    // Redirect to the GitHub OAuth2 authorization endpoint
    window.location.href = '/oauth2/authorization/github'
  }

  return (
    <Button
      leftSection={<GithubIcon />}
      variant="default"
      onClick={handleGithubLogin}
      {...props}
    />
  )
}

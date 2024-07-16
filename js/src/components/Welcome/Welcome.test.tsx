import { render } from '@test-utils/test-utils.ts'
import { MantineProvider } from '@mantine/core'
import { Welcome } from './Welcome'
import { theme } from '@/personal/theme.ts'

/**
 *  This test serves as an example for writing front end unit tests.
 *
 *  Vitest tests can be run directly in IntelliJ through the gutter icons.
 *  Tests can also be run through `pnpm run vitest` and are also included in `pnpm run test`
 *
 *  Test Runner: vitest -> describe/it/expect
 *  - Test runners define each test and run them.
 *  - {@link https://vitest.dev/guide/}
 *  Rendering Engine: React Testing Library -> render(<Welcome />)
 *  - Rendering engines provide rendering of React components into DOM nodes without a full browser.
 *  - {@link https://testing-library.com/docs/react-testing-library/intro}
 *  Matchers: testing-library/jest-dom -> screen.getByText('Home')
 *  - Matchers let you interact with the rendered DOM and allow you to find expected elements on the page.
 *  - {@link https://github.com/testing-library/jest-dom?tab=readme-ov-file#table-of-contents}
 */

describe('Welcome component', () => {
  it('has correct Vite guide link', () => {
    render(
      <MantineProvider theme={theme}>
        <Welcome />
      </MantineProvider>,
    )
    // expect(screen.getByText('Home')).toBeInTheDocument()
  })
})

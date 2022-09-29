import React from 'react'
import {
  Page,
  Text,
  Image,
  Display,
  Button,
  Grid,
  Note,
  useMediaQuery,
} from '@geist-ui/react'

const App: React.FC<unknown> = () => {
  const isSM = useMediaQuery('xs')
  const gh = 'https://github.com/nashhq/token-icons'
  const redirect = (url: string) => {
    window.open(url)
  }

  return (
    <Page dotBackdrop width="800px" padding={0}>
      <Display title="TokenIcons" style={{ marginTop: '10rem' }}>
        <Image src="/tokenicons.png" draggable={false} />
      </Display>
      <Grid.Container alignItems="center" justify="center" gap={1} direction="column">
        <Text h1 style={{ fontSize: isSM ? '3rem' : '5rem' }}>
          Token Icons
        </Text>
      </Grid.Container>
      <Display
        caption={
          <>
            Token Icons is a comprehensive, up-to-date collection of ERC20 icons across
            Ethereum and other EVMs. This package includes a JSON schema and TypeScript
            utilities for using these assets on any dapp.
          </>
        }></Display>
      <Grid.Container
        alignItems="center"
        justify="center"
        gap={1}
        mt="100px"
        direction="column">
        <>
          <Grid xs={20} sm={7} justify="center">
            <Button
              shadow
              type="secondary-light"
              width="100%"
              onClick={() => redirect(gh)}>
              GitHub Repo
            </Button>
          </Grid>
        </>
        <Note type="warning" style={{ width: 'fit-content' }} mt="50px">
          🚧 Project is still under construction 🚧
        </Note>
      </Grid.Container>
    </Page>
  )
}

export default App

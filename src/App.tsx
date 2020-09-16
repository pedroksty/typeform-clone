import React from 'react'

import GlobalStyle from './styles/global'

import { Main, Section, Sticky } from './styles'

import FirstAndSecond from './components/FirstAndSecond'

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />

      <Main style={{ height: '1610vh' }}>
        <h1>dale</h1>
        <Section style={{ height: '72.7%' }}>
          <FirstAndSecond />
        </Section>
        <Section style={{ height: '9.7%' }}>
          <Sticky className="third" />
        </Section>
        <Section style={{ height: '10.1%' }}>
          <Sticky className="fourth" />
        </Section>
      </Main>
    </>
  )
}

export default App

import React from 'react'
import Search from '../../components/Search'

import { Container, Title } from './styles'

const Home: React.FC = () => {
  return (
    <Container>
      <Title>Search Dev</Title>
      <Search />
    </Container>
  )
}

export default Home

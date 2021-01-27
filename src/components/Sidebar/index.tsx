import React from 'react'
import { useHistory } from 'react-router-dom'

import { Container } from './styles'

const Sidebar: React.FC = () => {
  const history = useHistory()
  return (
    <Container>
      <button onClick={() => history.goBack()}>Voltar</button>
    </Container>
  )
}

export default Sidebar

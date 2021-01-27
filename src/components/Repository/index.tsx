import React from 'react'
import { GithubRepoType } from '../../contexts/types'

import { Container } from './styles'

type PropsType = {
  repo: GithubRepoType
}

const Repository: React.FC<PropsType> = ({ repo }) => {
  return (
    <Container>
      <p>{repo.name}</p>
      <p>{repo.description}</p>
      <span>{repo.stargazers_count}</span>
      <span>{repo.updated_at}</span>
    </Container>
  )
}

export default Repository

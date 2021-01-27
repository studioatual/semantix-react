import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import Swal from 'sweetalert2'
import Repository from '../../components/Repository'
import Sidebar from '../../components/Sidebar'
import { useGlobal } from '../../contexts/global'
import { GithubRepoType } from '../../contexts/types'
import api from '../../services/api'

import { Container, Main } from './styles'

const Profile: React.FC = () => {
  const { user, repos, setRepos } = useGlobal()
  const history = useHistory()

  if (!user) {
    history.push('/')
    return null
  }

  useEffect(() => {
    const getRepos = async () => {
      try {
        const response = await api.get(`${user.login}/repos`)
        setRepos(response.data.map((item: GithubRepoType) => ({
          id: item.id,
          name: item.name,
          description: item.description,
          stargazers_count: item.stargazers_count,
          updated_at: item.updated_at
        })))
      } catch (err) {
        if (err.response.status === 404) {
          Swal.fire(
            'Repositorio não encontrado!',
            'Por favor, efetue a consulta novamente.',
            'warning'
          )
        }
      }
    }
    getRepos()
  }, [])

  return (
    <Container>
      <Sidebar />
      <Main>
        {repos.map(repo => (
          <Repository key={repo.id} repo={repo} />
        ))}
      </Main>
    </Container>
  )
}

export default Profile

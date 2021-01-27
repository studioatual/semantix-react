import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Swal from 'sweetalert2'
import { useGlobal } from '../../contexts/global'
import api from '../../services/api'

import {
  Container,
  InputText,
  BtnSearch,
  BtnSearchIcon,
  BtnSearchText
} from './styles'

const Search: React.FC = () => {
  const [inputSearch, setInputSearch] = useState<string>('')
  const { setUser, lastResults, setLastResults, setIsLoaderVisible } = useGlobal()
  const history = useHistory()

  const changeInput = (event: any) => {
    setInputSearch(event.target.value)
  }

  const submitForm = (event: any) => {
    event.preventDefault()
    if (!inputSearch.trim()) {
      Swal.fire(
        'Atenção!',
        'É Necessário preencher o campo de pesquisa.',
        'warning'
      )
      return
    }
    setIsLoaderVisible(true)
    getUser()
  }

  const getUser = async () => {
    try {
      const response = await api.get(inputSearch.trim())
      setUser({
        id: response.data.id,
        login: response.data.login,
        name: response.data.name,
        email: response.data.email,
        company: response.data.company,
        avatar_url: response.data.avatar_url,
        bio: response.data.bio,
        blog: response.data.blog,
        location: response.data.location,
        twitter_username: response.data.twitter_username,
        url: response.data.url,
        followers: response.data.followers,
        following: response.data.following
      })
      if (!lastResults.find(item => item === inputSearch)) {
        setLastResults([
          ...lastResults,
          inputSearch
        ])
      }
      history.push('/profile')
    } catch (err) {
      if (err.response.status === 404) {
        Swal.fire(
          'Usuário não encontrado!',
          'Por favor, verifique o texto digitado e tente novamente.',
          'warning'
        )
      }
    } finally {
      setIsLoaderVisible(false)
    }
  }

  return (
    <Container onSubmit={submitForm}>
      <InputText
        type="text"
        placeholder="Type the username here..."
        onChange={changeInput}
        value={inputSearch} />
      <BtnSearch type="submit">
        <BtnSearchIcon />
        <BtnSearchText>Buscar</BtnSearchText>
      </BtnSearch>
    </Container>
  )
}

export default Search

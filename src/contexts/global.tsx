import React, { useState, useEffect, createContext, useContext } from 'react'
import { GithubRepoType, GithubUserType, GlobalContextType, GlobalPropsType } from './types'

export const GlobalContext = createContext<GlobalContextType>({} as GlobalContextType)

export const GlobalProvider: React.FC<GlobalPropsType> = ({ children }) => {
  const [isLoaderVisible, setIsLoaderVisible] = useState<boolean>(false)
  const [user, setUser] = useState<GithubUserType | undefined>()
  const [repos, setRepos] = useState<GithubRepoType[]>([])
  const [lastResults, setLastResults] = useState<string[]>([])

  useEffect(() => {
    const getLastResults = () => {
      const lastResultsStorage = localStorage.getItem('lastResults')
      if (lastResultsStorage) {
        setLastResults(JSON.parse(lastResultsStorage))
      }
    }
    getLastResults()
  }, [])

  return (
    <GlobalContext.Provider
      value={{
        isLoaderVisible,
        setIsLoaderVisible,
        user,
        setUser,
        repos,
        setRepos,
        lastResults,
        setLastResults
      }}>
      {children}
    </GlobalContext.Provider>
  )
}

export const useGlobal = () => {
  return useContext<GlobalContextType>(GlobalContext)
}

import { ReactNode, Dispatch, SetStateAction } from 'react'

export type GithubRepoType = {
  id: number
  name: string
  description: string
  stargazers_count: number
  updated_at: Date
}

export type GithubUserType = {
  id: number
  login: string
  name: string
  email: string
  company: string
  avatar_url: string
  bio: string
  blog: string
  location: string
  twitter_username: string
  url: string
  followers: number
  following: number
}

export type GlobalContextType = {
  isLoaderVisible: boolean
  setIsLoaderVisible: Dispatch<SetStateAction<boolean>>,
  user: GithubUserType | undefined,
  setUser: Dispatch<SetStateAction<GithubUserType | undefined>>
  repos:GithubRepoType[],
  setRepos: Dispatch<SetStateAction<GithubRepoType[]>>,
  lastResults: string[],
  setLastResults: Dispatch<SetStateAction<string[]>>
}

export type GlobalPropsType = {
  children: ReactNode
}

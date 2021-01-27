import styled from 'styled-components'
import { BsSearch } from 'react-icons/bs'

export const Container = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`

export const InputText = styled.input`
  padding-left: 23px;
  width: 400px;
  height: 50px;
  font-size: 18px;
  color: #06C;
  line-height: 50px;
  background-color: #FFFFFF;
  border: 1px solid #3B4252;
  border-radius: 5px;
  outline: none;

  &::placeholder {
    font-style: italic;
    color: #8190A5;
  }
`

export const BtnSearch = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 118px;
  height: 50px;
  background-color: #47525E;
  border: none;
  outline: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    
  }
`

export const BtnSearchIcon = styled(BsSearch).attrs({
  color: '#ECEFF4',
  size: 22
})`
  margin-right: 5px;
`

export const BtnSearchText = styled.span`
  color: #ECEFF4;
  font-size: 22px;
  font-style: italic;
  font-weight: normal;
  line-height: 50px;
`

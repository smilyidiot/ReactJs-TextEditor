import styled from 'styled-components'

export const MainContainer = styled.div`
  padding: 30px;
  background-color: #25262c;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Card = styled.div`
  background-color: #1b1c22;
  border-radius: 20px;
  display: flex;
  padding: 20px;
  height: 100vh;
  width: 110vh;
`

export const LeftContainer = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
`

export const Head = styled.h1`
  font-size: 30px;
  color: #ffffff;
  text-align: center;
  margin-bottom: 30px;
`

export const Image = styled.img`
  margin: 10px;
  margin-top: 50px;
  height: 280px;
  align-self: center;
`

export const RightContainer = styled.div`
  background-color: #25262c;
  width: 60%;
`

export const ButtonContainer = styled.ul`
  list-style-type: none;
  padding: 20px;
  display: flex;
  align-items: center;
  font-size: 30px;
`

export const ListButton = styled.li`
  margin-right: 20px;
`

export const UnderlineButton = styled.button`
  cursor: pointer;
  background-color: transparent;
  color: #ffffff;
  border: 0px solid;
  color: ${props => (props.underlineStyle ? '#faff00' : '#f1f5f9')};
`
export const BoldButton = styled.button`
  cursor: pointer;
  background-color: transparent;
  color: #ffffff;
  border: 0px solid;
  color: ${props => (props.boldStyle ? '#faff00' : '#f1f5f9')};
`

export const ItalicButton = styled.button`
  cursor: pointer;
  background-color: transparent;
  color: #ffffff;
  border: 0px solid;
  color: ${props => (props.italicStyle ? '#faff00' : '#f1f5f9')};
`

export const TextInput = styled.textarea`
  border: 0px solid;
  background-color: #25262c;
  color: #ffffff;
  padding: 10px;
  font-size: 20px;
  font-weight: ${props => (props.boldStyle ? 'bold' : 'normal')};
  font-style: ${props => (props.italicStyle ? 'italic' : 'normal')};
  text-decoration: ${props => (props.underlineStyle ? 'underline' : 'normal')};
`

import {Component} from 'react'

import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'

import {
  MainContainer,
  Card,
  LeftContainer,
  Head,
  Image,
  RightContainer,
  ButtonContainer,
  ListButton,
  BoldButton,
  ItalicButton,
  UnderlineButton,
  TextInput,
} from './components/styledComponents'

import './App.css'

// Replace your code here
class App extends Component {
  state = {words: '', bold: false, italic: false, underline: false}

  inputText = event => {
    this.setState({words: event.target.value})
  }

  onClickBold = () => {
    this.setState(prev => ({bold: !prev.bold}))
  }

  onClickItalic = () => {
    this.setState(prev => ({italic: !prev.italic}))
  }

  onClickUnderline = () => {
    this.setState(prev => ({underline: !prev.underline}))
  }

  render() {
    const {words, bold, italic, underline} = this.state

    return (
      <MainContainer>
        <Card>
          <LeftContainer>
            <Head>Text Editor</Head>
            <Image
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
              className="image"
            />
          </LeftContainer>
          <RightContainer>
            <ButtonContainer>
              <ListButton>
                <BoldButton
                  boldStyle={bold}
                  type="button"
                  onClick={this.onClickBold}
                  data-testid="bold"
                >
                  <VscBold size={26} />
                </BoldButton>
              </ListButton>
              <ListButton>
                <ItalicButton
                  italicStyle={italic}
                  type="button"
                  onClick={this.onClickItalic}
                  data-testid="italic"
                >
                  <GoItalic size={25} />
                </ItalicButton>
              </ListButton>
              <ListButton>
                <UnderlineButton
                  underlineStyle={underline}
                  type="button"
                  onClick={this.onClickUnderline}
                  data-testid="underline"
                >
                  <AiOutlineUnderline size={25} />
                </UnderlineButton>
              </ListButton>
            </ButtonContainer>
            <TextInput
              boldStyle={bold}
              italicStyle={italic}
              underlineStyle={underline}
              onChange={this.inputText}
              cols="40"
              rows="25"
              className="input"
              value={words}
            >
              {words}
            </TextInput>
          </RightContainer>
        </Card>
      </MainContainer>
    )
  }
}

export default App

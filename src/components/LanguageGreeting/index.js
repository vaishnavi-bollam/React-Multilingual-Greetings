import {Component} from 'react'
import LanguageGreetingsItem from '../ListItems/index'
import './index.css'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

class LanguageGreeting extends Component {
  constructor(props) {
    super(props)
    // Initial state with the first language selected
    this.state = {
      currentLanguageId: languageGreetingsList[0].id,
    }

    this.handleButtonClick = this.handleButtonClick.bind(this)
  }

  // Event handler for button click to change the current language
  handleButtonClick(id) {
    this.setState({currentLanguageId: id})
  }

  render() {
    // Find the currently selected language details
    const {currentLanguageId} = this.state
    const currentLanguage = languageGreetingsList.find(
      language => language.id === currentLanguageId,
    )

    return (
      <div className="LanguageGreeting">
        <h1>Multilingual Greetings</h1>
        <ul className="buttons">
          {languageGreetingsList.map(language => (
            <LanguageGreetingsItem
              key={language.id}
              language={language}
              isActive={currentLanguageId === language.id}
              onClick={this.handleButtonClick}
            />
          ))}
        </ul>
        <div className="image">
          <img
            src={currentLanguage.imageUrl}
            alt={currentLanguage.imageAltText}
          />
        </div>
      </div>
    )
  }
}

export default LanguageGreeting

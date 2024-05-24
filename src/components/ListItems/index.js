import React from 'react'

class LanguageGreetingsItem extends React.Component {
  render() {
    const {language, isActive, onClick} = this.props

    return (
      <li>
        <button
          type="button"
          onClick={() => onClick(language.id)}
          className={isActive ? 'active' : ''}
        >
          {language.buttonText}
        </button>
      </li>
    )
  }
}

export default LanguageGreetingsItem

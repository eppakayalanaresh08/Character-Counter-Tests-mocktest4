import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import EachItemName from '../EachItemName'

import './index.css'

class CounterCharacter extends Component {
  state = {searchInput: '', listNames: []}

  onChangeText = event => {
    this.setState({searchInput: event.target.value})
  }

  onClickAddButton = event => {
    event.preventDefault()
    const {searchInput} = this.state
    const updateInput = {
      id: uuidv4(),
      searchInput,
      lengthInput: searchInput.length,
    }

    this.setState(prevState => ({
      listNames: [...prevState.listNames, updateInput],
      searchInput: '',
    }))
  }

  renderListItem = () => {
    const {listNames} = this.state
    console.log(listNames)
    return (
      <ul className="lists-names">
        {listNames.map(eachObject => (
          <EachItemName eachObjectList={eachObject} key={eachObject.id} />
        ))}
      </ul>
    )
  }

  render() {
    const {searchInput, listNames} = this.state
    // console.log(listNames)
    const lengthBossLike = listNames.length > 0
    return (
      <div className="bg-container">
        <div className="card-left">
          <div className="heading-container-leftCounter">
            <h1 className="heading-count">
              Count the characters like a Boss..
            </h1>
          </div>

          {lengthBossLike ? (
            this.renderListItem()
          ) : (
            <div className="container-image">
              <img
                src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
                alt="no user inputs"
                className="user-input"
              />
            </div>
          )}
        </div>
        <div className="card-right">
          <div className="container-heading">
            <h1 className="counter-heading">Character Counter</h1>
            <form className="input-container" onSubmit={this.onClickAddButton}>
              <input
                type="text"
                className="input-Element"
                placeholder="Enter the Characters here"
                onChange={this.onChangeText}
                value={searchInput}
              />
              <button type="submit" className="add-button">
                Add
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default CounterCharacter

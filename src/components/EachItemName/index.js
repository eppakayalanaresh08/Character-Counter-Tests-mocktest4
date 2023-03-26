import './index.css'

const EachItemName = props => {
  const {eachObjectList} = props
  //   console.log(eachObjectList)
  const {searchInput, lengthInput} = eachObjectList
  return (
    <li className="list-Element">
      <p className="name-Element">
        {searchInput} : {lengthInput}
      </p>
    </li>
  )
}

export default EachItemName

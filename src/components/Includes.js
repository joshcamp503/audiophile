// STYLES
import './component-styles/Includes.css'

const Includes = ({ includes }) => {
  const capitalize = (str) => {
    const arr = str.split(" ")
    return arr.map(str => {
      return str[0].toUpperCase() + str.substring(1)
    }).join(" ")
  }

  capitalize(includes[3].item)

  return (
    <div className="includes">
      <h1 className="includes-headline">IN THE BOX</h1>
      <ul className="included-list">
        {includes && includes.map(item => (
        <li className="included-list-item" key={item.item}>
          <span className="included-amount">{item.quantity}x</span>
          <span className="included-item">{capitalize(item.item)}</span>
        </li>
        ))}
      </ul>
    </div>
  )
};

export default Includes;

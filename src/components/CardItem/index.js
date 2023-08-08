// Write your code here.
import './index.css'

const CardItem = props => {
  const {cardItemDetails} = props
  const {title, description, imgUrl, className} = cardItemDetails
  return (
    <li className={`${className} card-item`}>
      <h1 className="card-item-heading">{title}</h1>
      <p className="card-item-description">{description}</p>
      <div className="img-container">
        <img src={imgUrl} className="card-item-img" alt={title} />
      </div>
    </li>
  )
}

export default CardItem

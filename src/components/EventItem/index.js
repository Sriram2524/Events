// Write your code here
import './index.css'

const EventItem = props => {
  const {eachEventDetails, clickchange} = props
  const {id, imageUrl, name, location} = eachEventDetails
  const onClickChange = () => {
    clickchange(id)
  }
  return (
    <li className="list">
      <img onClick={onClickChange} className="img" alt="event" src={imageUrl} />
      <p className="name">{name}</p>
      <p className="location">{location}</p>
    </li>
  )
}
export default EventItem

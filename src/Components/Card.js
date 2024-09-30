import './Card.css'

const Card = ({ title, description, imageUrl }) => {
    return ( 
      <div className="descriptive-card-container">
      <div className="card-content">
        <h2 className="card-titleee">{title}</h2><br />
        <center>

        <div className="card-image-container">
          <img src={imageUrl} alt={title} className="card-image" />
        </div><br />
        </center>
        <p className="card-description">{description}</p><br />
        <center>
          <button className="know-more-btn">
            Know More
          </button>
        </center>
      </div>
    </div>
     );
}
 
export default Card;
import './Card.css'

const Card = ({ title, description, imageUrl, link }) => {
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
          <a href={link} target="_blank" rel="noopener noreferrer">
            <button className="know-more-btn">
              Know More
            </button>
          </a>
        </center>
      </div>
    </div>
     );
}

 
export default Card;
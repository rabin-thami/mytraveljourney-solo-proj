function Card(props){
    return (
        <div className="card">
            <div className="card_image">
                <img src={props.imageUrl} alt={props.location} />
            </div>
            <div className="card_data_container">
                <div className="location_data">
                    <i className="fa-sharp fa-solid fa-location-dot"></i>
                    <p className="location_name">{props.location}</p>
                    <a href={props.googleMapsUrl} className="location_google">View on Google Maps</a>
                </div>
                <div className="card_title_description">
                    <h1>{props.title}</h1>
                    <p className="card_meta_data">{`${props.startDate} - ${props.endDate}`}</p>
                    <p className="card_description">{props.description}</p>
                </div>
            </div>
        </div>
    )
}

export default Card
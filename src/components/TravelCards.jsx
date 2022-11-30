import './TravelCards.css'

const TravelCards = (props) => {

    return (
        <main>
            <div className='int-container'>
                <section className='cards'>
                 
                        <img className='img-card' src={props.imageUrl} />
                   
                    <div className='info-card'>
                        <i className="fa-solid fa-location-dot"></i> <span>{props.location}</span> <span><a href={props.googleMapsUrl}>View on Google Maps</a></span>

                        <h1>{props.title}</h1>
                        <p>{props.startDate} - {props.endDate}</p>
                        <p>{props.description}</p>
                    </div>
                </section>
            </div>
        </main>
    )
}

export default TravelCards
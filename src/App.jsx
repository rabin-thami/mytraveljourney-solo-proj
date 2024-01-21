import Card from "./Card"
import data from "./data"

function App(){
    const cardData = data.map(item => {
        return (
            <Card 
                key = {item.id}
                title = {item.title}
                location = {item.location}
                googleMapsUrl = {item.googleMapsUrl}
                startDate = {item.startDate}
                endDate = {item.endDate}
                description = {item.description}
                imageUrl = {item.imageUrl}
            />
        )
    })

    return (
        <section className="card_container">
            {cardData}
        </section>
    )
}

export default App
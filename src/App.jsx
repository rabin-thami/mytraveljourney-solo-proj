function App(){
    return (
       <section className="card_container">
        <div className="card">
            <div className="card_image">
                <img src="https://source.unsplash.com/WLxQvbMyfas" alt="" />
            </div>
            <div className="card_data_container">
                <div className="location_data">
                    <i class="fa-sharp fa-solid fa-location-dot"></i>
                    <p className="location_name">japan</p>
                    <a href="#" className="location_google">View on Google Maps</a>
                </div>
                <div className="card_title_description">
                    <h1>Mount Fuji</h1>
                    <p className="card_meta_data">12 Jan, 2021 - 24 Jan, 2021</p>
                    <p className="card_description">Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
                </div>
            </div>
        </div>
       </section>
    )
}

export default App
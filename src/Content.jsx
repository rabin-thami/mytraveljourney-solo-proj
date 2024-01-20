

function Content() {

    return(
        <section className="card__container">
            <div>
                <img className="content__image" src="./japan.jpg" alt="image" />
            </div>
            <div className="info__contianer">
                <div className="location__info">
                    <i class="fa-sharp fa-solid fa-location-dot"></i>
                    <span className="place__name">JAPAN</span>
                    <span className="view__map">View on Google Maps</span>
                </div>
                <div className="meta__info__continer">
                    <h1 className="content__title">Mount Fuji</h1>
                    <p className="content__date">12 Jan, 2021 - 24 Jan, 2021</p>
                    <p className="content__description">
                        Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.
                    </p>
                </div>
            </div>
            <hr className="border__line"/>
        </section>
    )
}

export default Content
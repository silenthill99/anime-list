import "../css/Portfolio.scss"
import {PortfolioImages} from "../Utils/PortfolioImages";

export const Portfolio = () => {
    document.title="Portfolio"
    return(
        <main>
            <div className="portfolio">
                {PortfolioImages.map((image) => (
                    <a href={image.image} rel="noreferrer" target="_blank" key={image.name} className="lien-conteneur-photo">
                        <img src={image.image} alt={image.name}/>
                        <div className="photo-hover">{image.name}</div>
                    </a>
                ))}
            </div>
        </main>
    )
}
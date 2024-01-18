import "../css/Portfolio.scss"

export const Portfolio = () => {
    document.title="Portfolio"
    return(
        <main>
            <div className="portfolio">
                <a href="k-on_1039492.jpg" target="_blank" className="lien-conteneur-photo">
                    <img src="k-on_1039492.jpg" alt="K-on!"/>
                    <div className="photo-hover">K-on!</div>
                </a>
                <a href="No game no life.jpg" target="_blank" className="lien-conteneur-photo">
                    <img src="No game no life.jpg" alt="No game no life"/>
                    <div className="photo-hover">No game No life</div>
                </a>
                <a href="suzume-film.jpg" target="_blank" className="lien-conteneur-photo">
                    <img src="suzume-film.jpg" alt="Suzume"/>
                    <div className="photo-hover">Suzume</div>
                </a>
                <a href="bocchi-the-rock-hitori-gotou.gif" target="_blank" className="lien-conteneur-photo">
                    <img src="bocchi-the-rock-hitori-gotou.gif" alt="Bocchi the rock"/>
                    <div className="photo-hover">Bocchi the rock</div>
                </a>
                <a href="le voyage de chihiro.jpg" target="_blank" className="lien-conteneur-photo">
                    <img src="le voyage de chihiro.jpg" alt="Chihiro"/>
                    <div className="photo-hover">Le voyage de Chihiro</div>
                </a>
                <a href="lost-song.jpg" target="_blank" className="lien-conteneur-photo">
                    <img src="lost-song.jpg"/>
                    <div className="photo-hover">Lost song</div>
                </a>
            </div>
        </main>
    )
}
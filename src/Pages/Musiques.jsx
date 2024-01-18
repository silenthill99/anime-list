import "../css/Musiques.scss"

export const Musiques = () => {
    document.title = "Mes musiques"
    return(
        <main>
            <h1>Les musiques</h1>
            <div className="musiques">
                <iframe title="deezer-widget" src="https://widget.deezer.com/widget/auto/track/1505394172" width="400"
                        height="300" allowTransparency="true" allow="encrypted-media; clipboard-write"></iframe>
                <iframe width="400" height="300" src="https://www.youtube.com/embed/kJ04dMmimn8" title="This game"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen></iframe>
                <iframe title="deezer-widget" src="https://widget.deezer.com/widget/auto/album/59804632" width="400"
                        height="300" allowTransparency="true" allow="encrypted-media; clipboard-write"></iframe>
            </div>
        </main>
    )
}
import "../css/Critiques.scss"

export const Critiques = () => {
    return (
        <main>
            <section className="silent-voice">
                <div className="sv-infos">
                    <img src="a-silent-voice.jpg" alt="A silent voice" width={300}/>
                    <div>
                        <h2>A silent voice</h2>
                        <p><u>Note</u> : 17/20</p>
                        <br/>
                        <p><u><strong>Résumé</strong></u> : Shoya Ishida était autrefois un vrai caïd. Terreur de
                            l'école, les choses vont prendre un tournant lors de l'arrivée de Shoko Nishimiya dans sa
                            classe,
                            une jeune fille sourde. Shoko va alors être prise d'affection par tous ces camarades de
                            classe,
                            sauf Shoya qui va se mettre à harceler et intimider la jeune fille. Ce harcèlement va pousser
                            la jeune fille à changer d'école, et Shoya passe aussitôt de harceleur à harcelé.<br/><br/>
                            Cinq ans plus tard, les rumeurs de ce qu'a fait Shoya dans le passé ont fait le tour du lycée.
                            Shoya a donc désormais le status de paria, a développé une forme de phobie sociale, et a plus
                            qu'une seule ambition : Retrouver Shoko afin de s'excuser et de réparer les erreurs du passé.
                        </p>
                    </div>
                </div>
                <h2 className="sv-critique">Critique</h2>
            </section>
        </main>
    )
}
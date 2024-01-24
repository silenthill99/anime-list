import "../css/Critiques.scss"

export const Critiques = () => {
    document.title = "Critiques"
    return (
        <main>
            <h1>Quelques critiques</h1>
            <section className="sommaire">
                <h2>Sommaire</h2>
                <h3>A</h3>
                <ul>
                    <li><a href="#silent-voice">A silent voice</a> </li>
                </ul>
            </section>
            <section className="silent-voice" id="silent-voice">
                <div className="sv-infos">
                    <img src="a-silent-voice.jpg" alt="A silent voice" width={300}/>
                    <div>
                        <h2>A silent voice</h2>
                        <p><u>Réalisation</u> : Naoko Yamada</p>
                        <br/>
                        <p><u>Note</u> : 17/20</p>
                        <br/>
                        <p><u><strong>Résumé</strong></u> : Shoya Ishida était autrefois un vrai caïd. Terreur de
                            l'école, les choses vont prendre un tournant lors de l'arrivée de Shoko Nishimiya dans sa
                            classe,
                            une jeune fille sourde. Shoko va alors être prise d'affection par tous ces camarades de
                            classe,
                            sauf Shoya qui va se mettre à harceler et intimider la jeune fille. Ce harcèlement va
                            pousser
                            la jeune fille à changer d'école, et Shoya passe aussitôt de harceleur à harcelé.<br/><br/>
                            Cinq ans plus tard, les rumeurs de ce qu'a fait Shoya dans le passé ont fait le tour du
                            lycée.
                            Shoya a donc désormais le status de paria, a développé une forme de phobie sociale, et a
                            plus
                            qu'une seule ambition : Retrouver Shoko afin de s'excuser et de réparer les erreurs du
                            passé.
                        </p>
                    </div>
                </div>
                <h2 className="sv-critique">Critique</h2>
                <p>Adaptation d'un manga du même nom, "A Silent Voice" est un film vraiment très intéréssant, évoquant
                    plusieurs sujets délicats tels que le harcèlement, l'acceptation de soi, le handicap ou encore le
                    suicide. En effet, le film commence alors que Shoya s'apprête à mettre fin à ces jours, ne
                    supportant plus la situation dans laquelle il vit actuellement. Néanmoins, il finit par se rendre
                    compte de la stupidité de son geste et finit par rebrousser chemin. Le film cherche aussi à nous
                    faire passer un message : certaines actions qu'on a commit dans le passé peuvent marquer à viie,
                    malgré les efforts effectués pour aller de l'avant et pour changer de comportement.</p>
                <h3><u>Les personnages</u></h3>
                <div className="personnages">
                    <img src="ishida.jpg" alt="Shoya Ishida"/>
                    <div>
                        <h4>Shoya Ishida</h4>
                        <p>Personnage principal de l'oeuvre, Ishida est décrit au début du film comme étant un véritable caïd, n'hésitant pas à causer du tort autour de lui. Arrivé au lycée, il est passé du status de chef de style à celui de paria, il a bien changé. Ayant développé une sorte de phobie sociale, les choses commencent à évoluer lors de sa rencontre avec Nagatsuka. Il est intéressant de souligner l'évolution de ce dernnier, finissat par éprouver du regret sur son comportement du passé."</p>
                    </div>
                    <img src="shoko.jpg" alt="Shoko Nishimiya"/>
                    <div>
                        <h4>Shoko Nishimiya</h4>
                        <p>Shoko Nishimiya est une jeune fille sourde. Attendrissante et gentille, elle ne veut pas être considérée comme un fardeau par la société et tente toujours d'apporeter de l'aide, même envers ceux qui lui font du mal. Néanmoins, sa surdité fait qu'elle a beaucoup de mal avec la communication, mais tente tant bien que mal de s'intégrer dans la société. De plus, cela fait aussi qu'elle peut avoir beaucoup de mal à comprendre les autres. <br/><br/>Au début du film, nous la voyons beacou avec son cahier de communication dans les mains, mais petit à petit, son entourage va apprendre la langue des signes, et elle va apprendre à communiquer oralement.</p>
                        <p>Mais, on peut aussi faire le constat qu'elle est malheureuse de sa situation. Lorsque Yuzuru décide de la filmer en cachette dans la grande roue avec Naoka, elle révèle se détester.</p>
                    </div>
                    <img src="yuzuru.jpg" alt="Yuzuru Nishimiya"/>
                    <div>
                        <h4>Yuzuru Nishimiya</h4>
                        <p>Petite soeur de Shoko, la première chose que nous pouvons constater sur son sujet est sa forte personnalité et son côté très protecteur envers sa grande soeur, allant jusqu'à sécher les cours pour se soucier d'avantage de Shoko.</p>
                        <p>En effet, elle n'hésite pas à se faire passer pour un garçon envers ceux à qui elle ne fait pas confiance. C'est exactement ce qui s'est passé avec Shoya, ayant conscience de ce qu'il a fait à Shoko durant leur enfance. Elle va même encore plus loin, faisant croire qu'elle est en couple avec SHoko en voyant Shoya très insistant pour revoir la jeune femme. En revanche, dès lors qu'elle voit que Shoya a vraiment l'intention de changer, elle révèle sa véritable personnalité, douce et gentille.</p>
                        <p>Passionnée par la photographie, elle porte presque partout avec elle son appareil photo, notamment pour surveiller Shoya lorsqu'il arrive à rentrer en contact avec Shoko, ou encore sa soeur dans la scène mentionnée plus tôt, pour prendre Shoya en photo en train de sauter d'un pont alors que c'est interdit, pour la publier ensuite sur internnet, ou encore pour prendre sdes photos d'animaux morts pour dissuader sa soeur de mettre fin à ses jours.</p><br/>
                        <p className="spoiler">Malheureusement, cela ne marchera pas. Un soir, lors q'une sortie en famille, Shoko décide de rentrer chez elle plus tôt, afin de pouvoir sauter de son balcon. fort heureusement, elle est sauvée à tant par Shoya, envoyé par Yuzuru qui a oublié son appareil, mais cela tourna quand même au drame. Lorsque Shoya arrive à remonter Shoko, c'est finalement lui-même qui fini parr chuter du balcon et finit dans le coma.</p>
                    </div>
                </div>
            </section>
        </main>
    )
}

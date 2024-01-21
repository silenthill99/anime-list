import "../css/Contacts.scss"
import {useState} from "react";

export const Contacts = () => {
    const [inputValue, setInputValue] = useState("Nom")
    return(
        <main>
            <h1>Nous contacter</h1>
            <form className="contact">
                <input type="text" placeholder="Nom"/>
                <input type="text" placeholder="Prénom"/><br/>
                <input type="email" placeholder="Adresse email" className="email"/><br/>
                <textarea placeholder="Votre message"/>
                <button type="submit">Envoyer</button>
            </form>
        </main>
    )
}
import './App.scss';
import {Home} from "./Pages/Home";
import {NavLink, Route, Routes} from "react-router-dom";
import {Musiques} from "./Pages/Musiques";
import {Portfolio} from "./Pages/portfolio";
import { SiMyanimelist } from "react-icons/si";
import {Actualités} from "./Pages/Actualités";
import { SiCrunchyroll } from "react-icons/si";
import {Critiques} from "./Pages/Critiques";

function App() {
  return (
    <div>
        <header>
            <nav>
                <NavLink to="">Accueil</NavLink>
                <NavLink to="musiques">Musiques</NavLink>
                <NavLink to="portfolio">Portfolio</NavLink>
                <NavLink to="news">Actualités</NavLink>
                <NavLink to="critiques">Critiques</NavLink>
            </nav>
        </header>
        <Routes>
            <Route path="" element={<Home/>}/>
            <Route path="musiques" element={<Musiques/>}/>
            <Route path="portfolio" element={<Portfolio/>}/>
            <Route path="news" element={<Actualités/>}/>
            <Route path="critiques" element={<Critiques/>}/>
        </Routes>
        <footer>
            <a href="https://myanimelist.net/animelist/silenthill99" target="_blank" rel="noreferrer"><SiMyanimelist className="my-anime-list"/></a>
            <SiCrunchyroll className="crunchyroll"/>
        </footer>
    </div>
  );
}

export default App;

import React from "react";
import "./Header.css";
import emojiSymbolToSrc from "./utils";

// Czegoś takiego nigdy po kursie nie zobaczysz, tak się nie robi.
const HeaderV6 = (personToGreet) => {
    // Wywołanie HeaderV6 w App.js wygląda tak:
    // <HeaderV6 personToGreet={person}/>
    // w linii 27 widać, że React opakował sobie jeszcze raz personToGreet w personToGreet. Nasz argument wygląda więc tak:
    // {
    //     "personToGreet": {
    //         "name": "Kamil",
    //         "greeting": "Cześć",
    //         "favouriteEmojiSymbol": "🍕"
    //     }
    // }
    // i nazywa się personToGreet.
    // Możesz spróbować wymienić sobie w tym pliku personToGreet na whatever i też zadziała. Wtedy argument nazywa się
    // whatever.
    // Po co takie opakowania:
    // Nasze HeaderV6 jest zwyczajną javascriptową funkcją. Ma dostać jakiś parametr, jeden. Wywołanie jednak nie
    // przypomina wywołania typowej funkcji. Tutaj twórcy Reacta musieli wymyślić jak chcą traktować takie wywołania.
    // Komponenty funkcyjne są w React'cie nowe i powinny odzwierciedlać jak najbliżej zachowanie starszych,
    // niefunkcyjnych komponentów. Tamte z kolei ZAWSZE opakowują wszystko w props. Same z siebie, nie podajemy im nigdy
    // <ComponentX props={...} />. Implementując komponenty funkcyjne, ziomeczki z Reacta najwyraźniej chcieli to
    // odtworzyć, dlatego komponent funkcyjny również ZAWSZE opakuje sobie parametry podane przy wywołaniu w nazwę
    // parametru przyjmowanego do funkcji (w tym przypadku w personToGreet).
    const { name, greeting, favouriteEmojiSymbol } = personToGreet.personToGreet;
    const src = emojiSymbolToSrc(favouriteEmojiSymbol);

    return (
        <header className="component-header">
            <div className="line-1">
                <img
                    src={src}
                    width="32"
                    height="32"
                    alt=""
                />
                {greeting}, {name}
                <img
                    src={src}
                    width="32"
                    height="32"
                    alt=""
                />
            </div>
            <div className="line-2">
                This is an emoji search!
            </div>
        </header>
    );
}

export default HeaderV6;

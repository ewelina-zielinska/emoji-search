import React from "react";
import "./Header.css";
import emojiSymbolToSrc from "./utils";

// To jest sensowne i takie konstrukcje się pojawiają.
const HeaderV7 = ({ personToGreet }) => {
    // Tutaj mamy wartości zdestrukturyzowanie przy odbieraniu. Cały przyjmowany argument nie ma nazwy. Należy pamiętać,
    // że to, co nam przychodzi jako argument, wygląda tak:
    // {
    //     "personToGreet": {
    //         "name": "Kamil",
    //         "greeting": "Cześć",
    //         "favouriteEmojiSymbol": "🍕"
    //     }
    // }
    // przy wywołaniu z App.js <HeaderV7 personToGreet={person}/>
    const { name, greeting, favouriteEmojiSymbol } = personToGreet;
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

export default HeaderV7;

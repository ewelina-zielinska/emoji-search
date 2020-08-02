import React from "react";
import "./Header.css";
import emojiSymbolToSrc from "./utils";

// Czegoś takiego nigdy po kursie nie zobaczysz, tak się nie robi.
const HeaderV5 = (personToGreet) => {  // działa z jakąkolwiek nazwą, ale i tak zawsze nazywamy to props (powody zobaczysz później)
    const src = emojiSymbolToSrc(personToGreet.favouriteEmojiSymbol);

    return (
        <header className="component-header">
            <div className="line-1">
                <img
                    src={src}
                    width="32"
                    height="32"
                    alt=""
                />
                {personToGreet.greeting}, {personToGreet.name}
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

export default HeaderV5;

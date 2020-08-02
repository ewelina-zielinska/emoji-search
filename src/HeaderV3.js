import React from "react";
import "./Header.css";
import emojiSymbolToSrc from "./utils";

// To jest sensowne i takie konstrukcje się pojawiają.
export default function HeaderV3(props) {
    const src = emojiSymbolToSrc(props.favouriteEmojiSymbol);

    return (
      <header className="component-header">
        <div className="line-1">
          <img
            src={src}
            width="32"
            height="32"
            alt=""
          />
            {props.greeting}, {props.name}
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

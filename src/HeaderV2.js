import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import "./Header.css";
import emojiSymbolToSrc from "./utils";

// To jest sensowne i takie konstrukcje się pojawiają.
export default class HeaderV2 extends PureComponent {

  static propTypes = {
      persona: PropTypes.object
  };

  render() {
    const { name, greeting, favouriteEmojiSymbol } = this.props.persona;
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
}

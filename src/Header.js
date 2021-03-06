import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import "./Header.css";
import emojiSymbolToSrc from "./utils";

// To jest sensowne i takie konstrukcje się pojawiają.
export default class Header extends PureComponent {

  static propTypes = {
      name: PropTypes.string,
      greeting: PropTypes.string,
      favouriteEmojiSymbol: PropTypes.string
  };

  render() {
    const src = emojiSymbolToSrc(this.props.favouriteEmojiSymbol);

    return (
      <header className="component-header">
        <div className="line-1">
          <img
            src={src}
            width="32"
            height="32"
            alt=""
          />
            {this.props.greeting}, {this.props.name}
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

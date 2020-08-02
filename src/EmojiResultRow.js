import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import "./EmojiResultRow.css";
import emojiSymbolToSrc from "./utils";

export default class EmojiResultsRow extends PureComponent {
  static propTypes = {
    title: PropTypes.string,
    symbol: PropTypes.string
  };

  render() {
    return (
      <div
        className="component-emoji-result-row copy-to-clipboard"
        data-clipboard-text={this.props.symbol}
      >
        <img alt={this.props.title} src={emojiSymbolToSrc(this.props.symbol)} />
        <span className="title">{this.props.title}</span>
        <span className="info">Click to copy emoji</span>
      </div>
    );
  }
}

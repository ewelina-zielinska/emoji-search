import React, { PureComponent } from "react";
import Header from "./Header";
import HeaderV2 from "./HeaderV2";
import HeaderV3 from "./HeaderV3";
import HeaderV4 from "./HeaderV4";
import HeaderV5 from "./HeaderV5";
import HeaderV6 from "./HeaderV6";
import HeaderV7 from "./HeaderV7";
import SearchInput from "./SearchInput";
import EmojiResults from "./EmojiResults";
import filterEmoji from "./filterEmoji";
import person from "./person.json"

export default class App extends PureComponent {
  state = { filteredEmoji: filterEmoji("", 20) }

  handleSearchChange = event => {
    this.setState({
      filteredEmoji: filterEmoji(event.target.value, 20)
    });
  };

  render() {
    return (
      <div>
        <Header name={person.name} greeting={person.greeting} favouriteEmojiSymbol={person.favouriteEmojiSymbol}/>
        <Header {...person}/>
        <HeaderV2 persona={person}/>
        <HeaderV3 {...person}/>
        <HeaderV3 name={person.name} greeting={person.greeting} favouriteEmojiSymbol={person.favouriteEmojiSymbol}/>
        <HeaderV4 {...person}/>
        <HeaderV4 name={person.name} greeting={person.greeting} favouriteEmojiSymbol={person.favouriteEmojiSymbol}/>
        <HeaderV5 {...person}/>
        {/*UWAGA: poniższe nie działa. HeaderV6 i V7 są działającymi odpowiednikami (inaczej odbierają dane)*/}
        {/*<HeaderV5 personToGreet={person}/>*/}
        <HeaderV6 personToGreet={person}/>
        <HeaderV7 personToGreet={person}/>
        <SearchInput textChange={this.handleSearchChange} />
        <EmojiResults emojiData={this.state.filteredEmoji} />
      </div>
    );
  }
}

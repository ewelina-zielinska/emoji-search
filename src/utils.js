export default function emojiSymbolToSrc(symbol) {
    const codePointHex = symbol.codePointAt(0).toString(16);
    return `//cdn.jsdelivr.net/emojione/assets/png/${codePointHex}.png`;
}

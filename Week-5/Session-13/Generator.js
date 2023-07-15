function* stringToSymbolIterator(stringsArray) {
    for (let str of stringsArray) {
        yield Symbol(str);
    }
}

const strings = ['hello', 'world', 'test'];
const symbolIterator = stringToSymbolIterator(strings);

const symbols = [...symbolIterator];
const output = symbols.map(symbol => symbol.toString()).join(', ');

console.log(output);
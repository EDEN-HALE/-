function trim(string, symbol) {
    if (symbol === undefined) {
        return string.replace(/^\s|\s$/g, '');
    } else {
        const reg = new RegExp(`^[${symbol}]+|[${symbol}]+$`, 'gi');
        return string.replace(reg, '');
    }
}


console.log(trim("LLLHello Worldlll", "l"));
console.log(trim("   Hello World   "));
console.log(trim("XVisca ElbarcaxX", "X"));
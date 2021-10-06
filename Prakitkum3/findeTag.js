function findTag(text) {
    let header = ""

    for (let i = 0; i < text.length; i++) {
        if (text[i] === '<') {
            for (let s = i + 1; text.length; s++) {
                if (text[s] === '>') {
                    break
                }
                header += text[s]
            }
            break
        }
    }
    return header
}

console.log("hallo")
console.log(findTag("<header>Text</header"))
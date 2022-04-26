export default function getTranslitText(word) {
    const converter = {
        'й': 'q',
        'ц': 'w',
        'у': 'e',
        'к': 'r',
        'е': 't',
        'н': 'y',
        'г': 'u',
        'ш': 'i',
        'щ': 'o',
        'з': 'p',
        'ф': 'a',
        'ы': 's',
        'в': 'd',
        'а': 'f',
        'п': 'g',
        'р': 'h',
        'о': 'j',
        'л': 'k',
        'д': 'l',
        'я': 'z',
        'ч': 'x',
        'с': 'c',
        'м': 'v',
        'и': 'b',
        'т': 'n',
        'ь': 'm',
    }

    if (isString(word) === false)
        return ''

    let answer = ''
    for (let i = 0; i < word.length; i++) {
        const findLetter = converter[word[i]]
        if (findLetter === undefined)
            answer += word[i]
        else
            answer += findLetter
    }

    return answer
}

function isString(val) {
    return (typeof val === "string" || val instanceof String);
}
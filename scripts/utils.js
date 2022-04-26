export function firstLetterToUppercase(str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
}

export function copyTextToClipboard(text) {
    navigator.clipboard.writeText(text).then(function() {
        // successful
    }, function(err) {
        console.error('Async: Could not copy text: ', err)
    })
}

export function clearElementsInCarList() {
    const $carList = document.querySelector('#car-list-add')
    while($carList.lastChild) {
        $carList.lastChild.remove()
    }
}
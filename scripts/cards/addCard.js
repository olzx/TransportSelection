import { firstLetterToUppercase } from '../utils.js'

function createDiv(class_name) {
    if (class_name) {
        const $div = document.createElement('div')
        $div.className = class_name
        return $div
    } else {
        return document.createElement('div')
    }
}

function createImg(link = "", alt) {
    const $img = document.createElement('img')
    $img.classList = 'car-list__img'
    $img.setAttribute('src', link)
    if (alt) {
        $img.setAttribute('alt', alt)
    }
    return $img
}

function createCardCarDescription(description = "") {
    const $desc = createDiv('card-car__description')
    const $p = document.createElement('p')
    $p.innerText = description == 'Empty' ? "" : description
    $desc.appendChild($p)
    return $desc
}

function getElementForCardCar(carName) {
    let $card_car = ''
    if (carName === 'empty')
        $card_car = createDiv('card-car card-car_empty')
    else 
        $card_car = createDiv('card-car')

    const $card__car__image = createDiv('card-car__image')
    const $img = createImg(`./assets/img/cars/${carName}.png`, carName)
    if (carName === 'empty')
        $img.draggable = false
        
    const description = firstLetterToUppercase(carName)
    const $description = createCardCarDescription(description)

    $card__car__image.appendChild($img)
    $card_car.appendChild($card__car__image)
    $card_car.appendChild($description)

    return $card_car
}

function createCarListLine() {
    const $carListContainer = document.querySelector('#car-list-add')
    const $line = createDiv('car-list__line')
    $carListContainer.appendChild($line)
}

function addCardCarInCarListLine(carName) {
    const $card_car = getElementForCardCar(carName)
    const $carListLine = document.querySelector('.car-list__line:last-child')
    $carListLine.appendChild($card_car)
}

// проверка на существование .car-list__line
function isCarListLine() {
    const $carListLine = document.querySelector('.car-list__line:last-child')
    if ($carListLine) {
        return true
    } else {
        return false
    }
}

export default function addCardsInDocument(arrayObjects) {
    let counterInLine = 0

    createCarListLine()
    for (let i = 0; i < arrayObjects.length; i++) {
        addCardCarInCarListLine(arrayObjects[i].name)
        counterInLine++

        if (counterInLine === 4 && arrayObjects.length-1 !== i) {
            createCarListLine()
            counterInLine = 0
        }
    }

    if (counterInLine !== 0) {
        for (let i = 0; i < (4 - counterInLine); i++) {
            addCardCarInCarListLine('empty')
        }
    }
}
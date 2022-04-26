import addCardsInDocument from './cards/addCard.js'
import {clearElementsInCarList} from './utils.js'
import translitConverter from './translitConverter.js'

document.addEventListener('input', inputHandler)

function inputHandler(e) {
    const $target = e.target
    if (!$target.classList.contains('search-vehicles')) return

    const inputValue = $target.value
    if (inputValue.length === 0) {
        clearElementsInCarList()
        return
    }
    disableButtonActive()
    const vehicleData = vehicles_img_data
    let findVehicleArray = vehicleData.filter(item => item.name.indexOf(inputValue) === 0)

    if (findVehicleArray.length === 0) {
        const inputValueTranslit = translitConverter(inputValue)
        findVehicleArray = vehicleData.filter(item => item.name.indexOf(inputValueTranslit) === 0)
    }

    if (findVehicleArray.length === 0) {
        clearElementsInCarList()
        return 
    }

    clearElementsInCarList()
    addCardsInDocument(findVehicleArray)
}

function disableButtonActive() {
    const $buttonActive = document.querySelector('.button_active')
    if ($buttonActive)
        $buttonActive.classList.remove('button_active')
}
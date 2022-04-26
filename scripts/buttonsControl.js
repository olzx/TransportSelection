import getVehiclesSomeType from './getVehiclesType/getVehiclesType.js'
import addCard from './cards/addCard.js'
import toggleActiveButton from './button/toggleActiveButton.js'
import {clearElementsInCarList} from './utils.js'

(function buttonEvents() {
    document.addEventListener('click', buttonListener)

    function buttonListener(e) {
        const target = e.target

        if (!target.classList.contains('button'))
            return

        if (target.classList.contains('controls__button') && target.dataset.vehicleClass === 'show_random_vehicle') {
            autoHandlerClickShowRandom()
            toggleActiveButton(target)
            return 
        }

        if (target.classList.contains('controls__button') && target.dataset.vehicleClass === 'show_all_vehicles') {
            autoHandlerClickShowAll()
            toggleActiveButton(target)
            return 
        }

        if (target.classList.contains('controls__button')) {
            autoHandlerClickType(target)
            toggleActiveButton(target)
        }
    }
})();

// при нажатии на кнопку [Случайный транспорт]
function autoHandlerClickShowRandom() {
    const vehiclesJson = vehicles_img_data
    let randomVehicle = []
    for(let i = 0; i < 4; i++)
        randomVehicle.push(vehiclesJson[Math.floor(Math.random()*vehiclesJson.length)])
    clearElementsInCarList()
    addCard(randomVehicle)
}

// при нажатии на кнопку [Весь транспорт]
function autoHandlerClickShowAll() {
    const vehiclesJson = vehicles_img_data
    clearElementsInCarList()
    addCard(vehiclesJson)
}

function autoHandlerClickType(target) {
    const vehiclesArray = getVehiclesSomeType(target)
    if (vehiclesArray == false) {
        return
    }

    clearElementsInCarList()
    const vehiclesArrayNewType = getArrayVehiclesOfOldType(vehiclesArray)
    addCard(vehiclesArrayNewType)
}

function getArrayVehiclesOfOldType(vehiclesArray) {
    let arrayObjects = []
    for(const vehicle of vehiclesArray) {
        const getVehicleImgJson = getVehicleInVehicleImg(vehicle.Name.toLowerCase())
        if (getVehicleImgJson !== undefined) {
            arrayObjects.push(getVehicleImgJson)
        }
    }
    return arrayObjects
}

// возвращает объект из vehicle_img.json по имени переданного транспорта
function getVehicleInVehicleImg(vehicleName) {
    const vehiclesJson = vehicles_img_data
    return vehiclesJson.find(item => item.name === vehicleName)
}
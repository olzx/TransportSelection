/*
    Создает кнопки из buttons_control.json и помещает их в id="controls"
*/

(function loadButtonsControls() {
    const buttons = buttons_controls
    for(const button of buttons) {
        let $button = undefined
        if (button.data_vehicle_type) {
            $button = getButtonElement(button.classList, button.name, button.data_vehicle_class, button.data_vehicle_type)
        } else {
            $button = getButtonElement(button.classList, button.name, button.data_vehicle_class)
        }

        addButtonInControls($button)
    }
})();

function getButtonElement(classList, name, dataVehicleClass, dataVehicleType = false) {
    const $div = document.createElement('div')
    $div.classList = classList
    $div.innerText = name
    $div.dataset.vehicleClass = dataVehicleClass
    if (dataVehicleType) {
        $div.dataset.vehicleType = dataVehicleType
    }

    return $div
}

function addButtonInControls(buttonElement) {
    const $controls = document.querySelector('#controls')
    $controls.appendChild(buttonElement)
}
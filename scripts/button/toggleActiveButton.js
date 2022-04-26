let $activeButton = false

function setActiveButton(element) {
    element.classList.toggle('button_active')
}

export default function toggleActiveButton(target) {
    if ($activeButton) {
        if ($activeButton.classList.contains('button_active')) {
            setActiveButton($activeButton)
        }
        setActiveButton(target)
    } else {
        setActiveButton(target)
    }
    $activeButton = target
}
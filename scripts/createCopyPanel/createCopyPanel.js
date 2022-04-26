function getCreateCopyElement(clientX, clientY, name) {
    const $div = document.createElement('div')
    $div.classList = 'copy-plate'
    $div.innerText = name
    $div.style.color = "#fff"
    $div.style.position = "absolute"

    const $carList = document.querySelector('#car-list-add')
    const $parent = $carList.parentNode
    $carList.appendChild($div)

    changePositionCopyElement($div, clientX, clientY)
    return $div
}

function changePositionCopyElement($div, clientX, clientY) {
    const $carList = document.querySelector('#car-list-add')
    const $parent = $carList.parentNode

    const width = $div.offsetWidth
    const height = $div.offsetHeight

    const heightOffset = clientY - $parent.offsetTop + $parent.scrollTop
    const widthOffset = clientX - $parent.offsetLeft - 10

    let heightOffsetLast = (heightOffset - height - 5)
    let widthOffsetLast = (widthOffset - width / 2)

    if (heightOffsetLast < 0) {
        heightOffsetLast = 0
    }

    const endPosX = widthOffsetLast + width
    if (endPosX > $carList.offsetWidth) {
        const overflowX = (endPosX - $carList.offsetWidth)
        widthOffsetLast = widthOffsetLast - overflowX - 1
    }
    if (widthOffsetLast < 0) {
        widthOffsetLast = 0
    }
    $div.style.top = heightOffsetLast + 'px'
    $div.style.left = widthOffsetLast + 'px'
}

export default function createCopyPanel(e, name) {
    const $div = getCreateCopyElement(e.clientX, e.clientY, name)
    setTimeout(() => $div.remove(), 1100)
}
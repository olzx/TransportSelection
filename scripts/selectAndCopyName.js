import {copyTextToClipboard} from './utils.js'
import createCopyPanel from './createCopyPanel/createCopyPanel.js'

(function buttonEvents() {
    document.addEventListener('click', buttonListener)

    function buttonListener(e) {
        const target = e.target

        const $card = target.closest('.card-car')
        if (!$card) return
        if ($card.closest('.card-car_empty')) return

        const $descriptionName = $card.querySelector('.card-car__description p')
        const carName = $descriptionName.innerText
        copyTextToClipboard(carName.toLowerCase())

        if ($card.classList.contains('card-car_selected') === false) {
            $card.classList.add('card-car_selected')
            setTimeout(() => $card.classList.remove('card-car_selected'), 600)
        }

        createCopyPanel(e, `Скопировано ${carName}`)
    }
})();
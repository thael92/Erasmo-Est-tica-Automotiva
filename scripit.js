const modal = document.querySelector(".modal")
const mascara1 = document.querySelector(".mascara1")
const Sobre = document.querySelector(".caixa-sobre")
function MostraModal() {
    modal.style.left = '50%'
    mascara1.style.visibility = 'visible'

}
function EsconderModal() {
    modal.style.left = '-30%'
    mascara1.style.visibility = 'hidden'
}


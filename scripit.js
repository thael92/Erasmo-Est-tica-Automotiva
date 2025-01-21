const modal = document.querySelector(".modal")
const mascara1 = document.querySelector(".mascara1")
const Sobre = document.querySelector(".caixa-sobre")

function MostraModal() {
    modal.style.left = '50%'
    mascara1.style.visibility = 'visible'
}

function EsconderModal() {
    modal.style.left = '-109%'
    mascara1.style.visibility = 'hidden'
}

const menuHamburguer = document.querySelector('.menu-hamburguer')
const menuNav = document.querySelector('.menu-nav')
const menuLinks = document.querySelectorAll('.menu-nav a')

// Função para alternar menu
function toggleMenu() {
    menuHamburguer.classList.toggle('active')
    menuNav.style.display = menuNav.style.display === 'flex' ? 'none' : 'flex'
    menuNav.classList.toggle('active')
    
    // Anima os links com delay
    menuLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = ''
        } else {
            link.style.animation = `fadeIn 0.5s ease forwards ${index * 0.1 + 0.2}s`
        }
    })
}

// Event listeners
menuHamburguer.addEventListener('click', toggleMenu)

// Fecha o menu ao clicar em um link
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        toggleMenu()
    })
})

// Fecha o menu ao clicar fora
document.addEventListener('click', (e) => {
    if (!menuNav.contains(e.target) && !menuHamburguer.contains(e.target) && menuNav.classList.contains('active')) {
        toggleMenu()
    }
})

// Adicione esta keyframe animation ao seu CSS
const style = document.createElement('style')
style.textContent = `
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`
document.head.appendChild(style)

// Efeito de scroll suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault()
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        })
    })
})

// Adicionar efeito de água aos cards
const boxes = document.querySelectorAll('.box')
boxes.forEach(box => {
    const waterEffect = document.createElement('div')
    waterEffect.classList.add('water-effect')
    box.appendChild(waterEffect)
})


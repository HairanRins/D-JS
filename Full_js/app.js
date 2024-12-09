
// Navbar
const navbar = document.createElement('div')
navbar.style.display = 'flex'
navbar.style.justifyContent = 'space-between'
navbar.style.alignItems = 'center'
navbar.style.backgroundColor = '#333'
navbar.style.color = '#fff'
navbar.style.padding = '10px 20px'

// logo
const logo = document.createElement('img')
logo.src = '../img/pic_bulbon.gif'
logo.alt = 'Logo'
logo.style.height = '40px'

// Liens
const navLinks = document.createElement('ul')
navLinks.style.listStyle = 'none'
navLinks.style.margin = '0'
navLinks.style.padding = '0'
navLinks.style.display = 'flex'

// Création des élémennts des liens de navigation
const menuItems = ['Home', 'About','Contact', 'Blog']
menuItems.forEach(item => {
    const listItem = document.createElement('li')
    const link = document.createElement('a')
    link.href = '#'
    link.textContent = item
    link.style.textDecoration = 'none'
    link.style.color = 'yellow'
    listItem.appendChild(link)
    listItem.style.marginLeft = '20px'
    listItem.style.fontFamily = 'sans-serif'
    navLinks.appendChild(listItem)
})

// Ajout des éléments à la navbar
navbar.appendChild(logo)
navbar.appendChild(navLinks)

// Ajout de la navbar au body
document.body.appendChild(navbar)

// Création de l'élément 
const section = document.createElement('section')
section.style.margin = '0'
section.style.padding = '0'
section.style.fontFamily = 'sans-serif'
section.style.background = 'url(img/peakpx.jpg)'
section.style.backgroundSize = 'cover'
section.style.backgroundPosition = 'center'
section.style.color = '#fff'
section.style.height = '768px'

// Création de l'élément contenant le contenu
const content = document.createElement('div')
content.style.padding = '20px'

// Création du titre
const title = document.createElement('h1')
title.textContent = 'Sun Power'
title.style.fontSize = '36px'
title.style.textAlign = 'center'
title.style.marginBottom = '20px'
title.style.marginTop = '20%'

// Créaion de la paragraphe d'application
const explication = document.createElement('p')
explication.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti rem commodi soluta, iure veniam beatae optio nihil perferendis voluptas error, quae fugiat minima ipsum. Accusantium distinctio recusandae exercitationem doloribus nesciunt!'
explication.style.fontSize = '18px'
explication.style.lineHeight = '1.5'
explication.style.width = '50%'
explication.style.margin ='0 auto'
explication.style.textAlign = 'center'

// Ajout de l'élément au contenu 
content.appendChild(title)
content.appendChild(explication)

// Ajout du contenu à la section
section.appendChild(content)

// Ajout de la section au document
document.body.appendChild(section)

// Création de l'élément
const section1 = document.createElement('section')
section1.style.margin = '0'
section1.style.padding = '0'
section1.style.fontFamily = 'sans-serif'
section1.style.display = 'flex'
section1.style.flexWrap = 'wrap'
section1.style.justifyContent = 'space-around'
section1.style.alignItems = 'center'
section1.style.paddingTop = '10%'
section1.style.paddingBottom = '10%'
section1.style.background = 'linear-gradient(90deg, rgb(30, 4, 90), crimson)'

// Fonction pour créer l'article
function createAricle(parent) {
    // Création de l'article
    const article = document.createElement('div')
    article.style.width = '300px'
    article.style.margin = '20px'
    article.style.padding = '5px'
    article.style.border = '1px solid transparent'
    article.style.borderRadius = '5px'
    article.style.overflow = 'hidden'
    article.style.boxShadow = '10px 10px 10px rgba(0,0,0,.1)'

    // Création de l'image
    const image = document.createElement('img')
    image.src = 'img/d.jpg'
    image.style.width = '100%'
    image.style.borderRadius = '5px'
    image.style.display = 'block'
    image.style.marginTop = '10px'

    // le titre
    const title1 = document.createElement('h2')
    title1.textContent = 'Electric car'
    title1.style.fontSize = '18px'
    title1.style.textAlign ='center'
    title1.style.margin = '10px 0'
    title1.style.color = '#fff'

    // Explication 
    const explanation = document.createElement('p')
    explanation.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat autem animi alias voluptates atque expedita.'
    explanation.style.fontSize = '14px'
    explanation.style.textAlign = 'center'
    explanation.style.margin = '10px 0'
    explanation.style.color = '#fff'

    // les boutons
    const button1 = document.createElement('button')
    button1.textContent = 'Like'
    button1.style.marginRight = '5px'
    const button2 = document.createElement('button')
    button2.textContent = 'Discover'

    // Conteneur des boutons
    const buttonContainer = document.createElement('div')
    buttonContainer.style.display = 'flex'
    buttonContainer.style.justifyContent = 'flex-end'
    buttonContainer.style.paddingRight = '30px'
    buttonContainer.style.marginTop = '30px'
    buttonContainer.style.marginBottom = '30px'
    buttonContainer.style.cursor = 'pointer'
    buttonContainer.appendChild(button1)
    buttonContainer.appendChild(button2)

    // Ajout des éléments de l'article
    article.appendChild(image)
    article.appendChild(title1)
    article.appendChild(explanation)
    article.appendChild(buttonContainer)

    // Ajout de l'article au parent
    parent.appendChild(article)
}
// Création des 3 articles
for (let i = 0; i < 3; i++) {
    createAricle(section1);
    
}

// Ajout de la section au document
document.body.appendChild(section1)

// Conteneur du footer
const container = document.createElement('div')
container.style.margin = '0'
container.style.padding = '0'
container.style.fontFamily = 'sans-serif'

// Footer
const footer = document.createElement('footer')
footer.style.display = 'flex'
footer.style.justifyContent = 'space-around'
footer.style.alignItems = 'center'
footer.style.flexWrap = 'wrap'
footer.style.background = '#333'
footer.style.color = '#fff'
footer.style.padding = '20px'
footer.style.height = '120px'

const logo1 = document.createElement('img')
logo1.src = '../img/pic_bulbon.gif'
logo1.alt = 'Logo'
logo1.style.height = '40px'

// Contact
const contactInfo = document.createElement('div')
contactInfo.textContent = 'Contactez-nous : electric@gmail.com'
contactInfo.style.textAlign = 'center'
contactInfo.style.fontFamily = 'sans-serif'

// Les médias
const socialIcons = document.createElement('div')
socialIcons.style.display = 'flex'
const icons = ['fa-facebook', 'fa-twitter', 'fa-instagram', 'fa-linkedin']
icons.forEach(iconClass => {
    const icon = document.createElement('i')
    icon.className = `fab ${iconClass}`
    icon.style.fontSize = '20px'
    icon.style.marginLeft = '10px'
    socialIcons.appendChild(icon)
})

// Ajout des éléments
footer.appendChild(logo1)
footer.appendChild(contactInfo)
footer.appendChild(socialIcons)

container.appendChild(footer)
document.body.appendChild(footer)

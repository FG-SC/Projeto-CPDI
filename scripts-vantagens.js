const myObserver = new IntersectionObserver( (entries) => {
    entries.forEach( (entry) =>{
        if(entry.isIntersecting){
            entry.target.classList.add('show')
            entry.target.classList.add('rightOn')
            entry.target.classList.add('lefttOn')
            entry.target.classList.add('animation')
        } else {
            entry.target.classList.remove('show')
            entry.target.classList.remove('rightOn')
            entry.target.classList.remove('lefttOn')
            entry.target.classList.remove('animation')
        }
    })
})

const elements = document.querySelectorAll('.animationPair')

elements.forEach((element) => myObserver.observe(element))

let coco = document.querySelectorAll('.animationOdd')

coco.forEach((cocos) => myObserver.observe(cocos))

let direita = document.querySelectorAll('.right')

direita.forEach((direitas) => myObserver.observe(direitas))

let esquerda = document.querySelectorAll('.left')

esquerda.forEach((esquerdas) => myObserver.observe(esquerdas))

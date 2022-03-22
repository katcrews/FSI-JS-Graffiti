let header = document.querySelector('#page-header')
header.style.textAlign = 'center'
header.style.fontFamily = 'cursive'

let dogImages = document.querySelectorAll('.dog-image')
for(let i = 0; i < dogImages.length; i++){
	dogImages[i].style.borderRadius = '150px'
}
let footer = document.querySelector('.footer')
footer.style.borderStyle = 'solid'
footer.style.backgroundColor = 'beige'
footer.style.borderRadius = '5px'
footer.style.fontFamily = 'comic Sans'
footer.style.fontStyle = 'italic'

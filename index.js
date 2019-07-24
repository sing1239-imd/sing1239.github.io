const container = document.getElementById('container')

const NameOfImages = [
    'Algonquin college','College Architecture','Bank Street,Ottawa','College Bridge','college sunset','Niagra Falls','Minto','Parliament Hill','Parliament-eastside','Parliament-view','Rideau Canal','Niagra Tower']

const HTMLofImages =[]

for(let img of NameOfImages){
    HTMLofImages.push(`
<div class="grid">

<img src="./images/${img}.jpg" class="image" title="${img}" />

<span class="imagefont">Thumbnail</span>
</div>
`)
}

container.innerHTML = HTMLofImages.join(' ')

console.log(HTMLofImages)

var GridImages = document.getElementsByClassName('image')

var overlay = document.getElementById('overlay')

function makeBigger (){
    overlay.style.visibility = "visible";
    
    overlay.style.display = "block";
    
    overlay.style.backgroundColor = "silver";
   
   overlay.innerHTML = `<h1>${this.title}</h1>
<img src="${this.src}">`
}

for(let singleImage of GridImages){
singleImage.addEventListener('click', makeBigger)}

window.addEventListener('mouseup', closeMe)


function closeMe(fade){
    if( fade.target !== overlay && fade.target.parentNode !== overlay ){
        overlay.style.visibility = "hidden";
        overlay.style.display = "none";
    overlay.innerHTML = ``;
       }
}
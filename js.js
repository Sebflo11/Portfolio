const cursor = document.querySelector(".cursor");
const outline = document.querySelector('.outline')
const a = document.querySelector("a")

document.addEventListener('mousemove', function(e){
    
    cursor.style.left = e.x-25+"px"
    cursor.style.top = e.y-25+"px"
    // outline.style.left = e.x+"px"
    // outline.style.top = e.y+"px"
    
    
    
});

let links = Array.from(document.querySelectorAll('a'))

console.log(links)

links.forEach(link => {
    link.addEventListener('mouseover', () =>{
        cursor.classList.add('mini')
    })
    link.addEventListener('mouseout', () =>{
        cursor.classList.remove('mini')
    })
})


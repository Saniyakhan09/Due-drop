var h4 = document.querySelectorAll("#nav h4")
var purple = document.querySelector("#purple")
h4.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        purple.style.display = "block"   
        purple.style.opacity = "1"
    })
    elem.addEventListener("mouseleave",function(){
        purple.style.display = "none"   
        purple.style.opacity = "0"
    })
})

const img = document.querySelector('.right-column img');
// Select the image element
const img = document.querySelector('.img-fluid');

// Add event listeners for the accordion buttons

// Hobbies accordion button hover
document.querySelector('[data-bs-target="#flush-collapseOne"]').addEventListener('mouseover', () => {
    img.classList.add('hobbies-hover');
});
document.querySelector('[data-bs-target="#flush-collapseOne"]').addEventListener('mouseout', () => {
    img.classList.remove('hobbies-hover');
});

// Qualification accordion button hover
document.querySelector('[data-bs-target="#flush-collapseTwo"]').addEventListener('mouseover', () => {
    img.classList.add('qualification-hover');
});
document.querySelector('[data-bs-target="#flush-collapseTwo"]').addEventListener('mouseout', () => {
    img.classList.remove('qualification-hover');
});

// Dreams accordion button hover
document.querySelector('[data-bs-target="#flush-collapseThree"]').addEventListener('mouseover', () => {
    img.classList.add('dreams-hover');
});
document.querySelector('[data-bs-target="#flush-collapseThree"]').addEventListener('mouseout', () => {
    img.classList.remove('dreams-hover');
});

// Hobbies hover (header hover effect)
document.querySelector('.hobbies').addEventListener('mouseover', () => {
    img.classList.remove('qualification-hover', 'dreams-hover');
    img.classList.add('hobbies-hover');
});
document.querySelector('.hobbies').addEventListener('mouseout', () => {
    img.classList.remove('hobbies-hover');
});

// Qualification hover (header hover effect)
document.querySelector('.qualification').addEventListener('mouseover', () => {
    img.classList.remove('hobbies-hover', 'dreams-hover');
    img.classList.add('qualification-hover');
});
document.querySelector('.qualification').addEventListener('mouseout', () => {
    img.classList.remove('qualification-hover');
});

// Dreams hover (header hover effect)
document.querySelector('.dreams').addEventListener('mouseover', () => {
    img.classList.remove('hobbies-hover', 'qualification-hover');
    img.classList.add('dreams-hover');
});
document.querySelector('.dreams').addEventListener('mouseout', () => {
    img.classList.remove('dreams-hover');
});

// Accordion content hover effect (pop-up effect)
document.querySelectorAll('.accordion-content').forEach((content) => {
    content.addEventListener('mouseover', () => {
        img.style.transform = 'scale(1.05)';  // Pop-up animation
        img.style.boxShadow = '0 12px 24px rgba(0, 0, 0, 0.2)';
    });
    content.addEventListener('mouseout', () => {
        img.style.transform = '';  // Reset animation
        img.style.boxShadow = '';  // Reset shadow
    });
});

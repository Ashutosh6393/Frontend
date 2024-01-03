
// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// });

const project = document.querySelectorAll('.projects')
const fixed = document.querySelector('#fixed-image');

for (let index = 0; index < project.length; index++) {
    project[index].addEventListener('mouseenter', function(){
        fixed.style.display = 'block';
        fixed.style.backgroundImage = `url(${project[index].dataset.name})`

    })
    project[index].addEventListener('mouseleave', function(){
        fixed.style.display = 'none';
    })
    
}


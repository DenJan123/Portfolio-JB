let openButtons = document.querySelectorAll(".open-window");

for (let openButton of openButtons) {
    openButton.addEventListener('click', function(e){
        // e.target.nextElementSibling.style.display = 'block';
        openButton.style.display = 'none';
        openButton.style.visibility = 'none';
        e.target.parentNode.querySelector(".window").style.display = 'block';
        console.log('click')
        e.target.parentNode.querySelector(".close-btn").addEventListener('click', function(evenClose){
            openButton.style.display = 'block';
            openButton.style.visibility = 'visible';
            e.target.parentNode.querySelector(".window").style.display = 'none';
        })

    })
}
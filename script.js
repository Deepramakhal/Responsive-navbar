var expandButton = document.getElementById('expand-button')
var navSection =  document.getElementById('nav-2')
var menuIcon = document.getElementById('menu-icon')
var clickCounter = 0;

expandButton.addEventListener("click", function(){
    if (clickCounter == 0){
        navSection.style.display = 'block';
        menuIcon.setAttribute("style","rotate:90deg");
        clickCounter++;
    }
    else{
        navSection.style.display = 'none';
        menuIcon.setAttribute("style","rotate:0");
        clickCounter--;
    }
})
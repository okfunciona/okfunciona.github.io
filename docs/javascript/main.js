
function openMenu(){
    document.getElementById("menu").style.right = "0";
    document.getElementById("menu").style.transition = "all .3s linear";
}

function closeMenu(){
    document.getElementById("menu").style.right = "-101%";
    document.getElementById("menu").style.transition = "all .3s linear";
}
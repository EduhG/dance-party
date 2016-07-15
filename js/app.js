var width, height;
var banner, evtlocation, gallery;

function setHeights(){
    width = window.innerWidth;
    height = window.innerHeight;
    
    banner = document.getElementById('banner');
    banner.style.minHeight = height+'px';
}

setHeights();

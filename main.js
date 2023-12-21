//Logo
function cambiaLogo(src) {
    document.getElementById('logo-img').src = src;  
}  

// Banner 
var isMobile = window.innerWidth <= 768;

if (isMobile) {
    var imagenesBanner = [
        "/Banners Principales/Nueva navidad 360 x 391px..jpg",
        "/Banners Principales/Nuevos ingresos 360 x 391 px.jpg",
        "/Banners Principales/delivery Diciembre.jpg"
    ];  
} else {
    var imagenesBanner = [
        "/Banners Principales/DELIVERY.png",
        "/Banners Principales/NUEVOS INGRESOS.png",
        "/Banners Principales/PRODUCTOS NAVIDEÑOS 2.png"
    ];
}

var indiceImagenActual = 0;



function cambiarImagen(n) {
    indiceImagenActual += n;
    if (indiceImagenActual >= imagenesBanner.length) {
        indiceImagenActual = 0;
    } else if (indiceImagenActual < 0) {
        indiceImagenActual = imagenesBanner.length - 1;
    }
    document.getElementById('banner-img').src = imagenesBanner[indiceImagenActual];
}
cambiarImagen(1);
setInterval(function() {
    cambiarImagen(1);
}, 4000);

function toggleMenu() {
    var menu = document.querySelector(".menu");
    menu.style.display = menu.style.display === "block" ? "none" : "block";
}
document.getElementById("menuBtn").addEventListener("click", toggleMenu);

// Slider

var imagenesSlider = [
    "/Imágenes/Cuadros 1.png",
    "/Imágenes/Cuadros 2.png",
    "/Imágenes/Cuadros 3.png",
    "/Imágenes/Cuadros 4.png"
];

var indiceSlider = 0;


function cambiarSlider(n) {
    indiceSlider += n;
if (indiceSlider >= imagenesSlider.length) {
    indiceSlider = 0;
} else if (indiceSlider < 0) {
    indiceSlider = imagenesSlider.length - 1;
}
document.getElementById('slider-img').src = imagenesSlider[indiceSlider];
}
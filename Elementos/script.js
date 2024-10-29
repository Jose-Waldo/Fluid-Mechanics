const components = [
    {
        title: "Codos",
        image: "img/codo0.jpg",
        description: "Los codos son componentes esenciales que permiten cambios de dirección en sistemas de tuberías.",
        usos: "Los codos en sistemas de tuberías se utilizan para cambiar la dirección del flujo de agua, adaptarse a la geometría del espacio, evitar obstáculos, y conectar tramos de tubería en ángulos específicos.",
        materiales: "Acero inoxidable, cobre, PVC, hierro fundido y otros metales y plásticos resistentes.",
        tecnico: "Ángulos disponibles: 45°, 90°, 135°. Resistencia a la presión: hasta 16 bar. Temperatura máxima: 95°C.",
        images: ["img/codo0.jpg", "img/codo2.jpg", "img/codo3.webp", "img/codo4.jpg", "img/codos.jpg"] // Aquí puedes poner las URLs de las imágenes reales
    },
    {
        title: "Tubos",
        image: "img/tubo0.avif",
        description: "Los tubos son elementos fundamentales que transportan agua y otros fluidos en sistemas cerrados.",
        usos: "Transporte de fluidos en sistemas de distribución, drenaje y alcantarillado.",
        materiales: "PVC, metal, polietileno, acero galvanizado.",
        tecnico: "Diámetros: 15mm a 600mm. Presión nominal: PN6 a PN16. Longitudes estándar: 6m.",
        images: ["img/tubo0.avif", "img/tubo1.webp" , "img/tubo2.jpg", "img/tubo3.jpg"] // Aquí puedes poner las URLs de las imágenes reales
    },
    {
        title: "Bombas",
        image: "img/bomba1.webp",
        description: "Dispositivos mecánicos diseñados para mover fluidos mediante la conversión de energía mecánica en energía hidráulica",
        usos: "Suministro de agua potable, sistemas de riego, procesos industriales, sistemas de enfriamiento, drenaje y aguas residuales",
        materiales: "Hierro fundido, acero inoxidable, bronce, materiales compuestos, aleaciones especiales según el fluido",
        tecnico: "Capacidad: 0.5 a 500 HP, Presión: hasta 150 PSI, Flujo: 5 a 5000 GPM",
        images: ["img/bomba1.webp", "img/bomba2.jpg", "img/bomba3.jpg", "img/bomba4.jpg"] // Aquí puedes poner las URLs de las imágenes reales

    },
    {
        title: "Tanques de almacenamiento",
        image: "img/tanque0.jpg",
        description: "Recipientes diseñados para contener y almacenar fluidos de manera segura y eficiente",
        usos: "Almacenamiento de agua potable, combustibles, productos químicos, aguas residuales",
        materiales: "Acero al carbono, acero inoxidable, polietileno, fibra de vidrio, concreto",
        tecnico: "Capacidades: 500 a 1,000,000 galones, Presión: atmosférica o presurizada hasta 15 PSI",
        images: ["img/tanque0.jpg", "img/tanque1.webp", "img/tanqu2.png", "img/tanque3.jpg", "img/tanque4.jpg"] // Aquí puedes poner las URLs de las imágenes reales

    },
    {
        title: "Entradas de tanques",
        image: "img/entrada1.jpeg",
        description: "Conexiones y accesorios diseñados para la entrada y salida segura de fluidos en tanques",
        usos: "Control de flujo, conexión de tuberías, medición de nivel, ventilación",
        materiales: "Acero inoxidable, PVC, bronce, hierro fundido",
        tecnico: 'Diámetros: 1/2" a 24", Clasificación ANSI: 150 a 300',
        images: ["img/entrada1.jpeg", "img/entrada2.jpeg", "img/entrada3.jpeg", "img/entrada4.jpeg"] // Aquí puedes poner las URLs de las imágenes reales

    },
    {
        title: "Reducciones de agua",
        image: "img/reduccion1.jpg",
        description: "Accesorios que permiten la transición entre tuberías de diferentes diámetros",
        usos: "Cambios de sección en líneas de agua, control de presión, adaptación de equipos",
        materiales: "Acero inoxidable, cobre, PVC, hierro fundido y otros metales y plásticos resistentes.",
        tecnico: 'Reducciones: 4" a 1/2", Presión máxima: 150 PSI',
        images: ["img/reduccion1.jpg", "img/reduccion2.webp", "img/reduccion3.jpg", "img/reduccion4.webp"] // Aquí puedes poner las URLs de las imágenes reales
    },
    {
        title: "Uniones",
        image: "img/union1.jpg",
        description: "Accesorios que permiten la conexión y desconexión de tuberías de forma segura",
        usos: "Mantenimiento de líneas, conexión de equipos, expansión térmica",
        materiales: "Acero galvanizado, bronce, PVC, hierro maleable",
        tecnico: 'Diámetros: 1/2" a 12", Presión de trabajo: hasta 300 PSI',
        images: ["img/union1.jpg", "img/union2.png", "img/union3.jpg", "img/union4.jpg"] // Aquí puedes poner las URLs de las imágenes reales
    },
    {
        title: "Tes",
        image: "img/te1.jpg",
        description: "Accesorios en forma de T que permiten la derivación o unión de tres tuberías",
        usos: "Ramificaciones en líneas de agua, bypass, distribución de fluidos",
        materiales: "PVC, hierro galvanizado, acero inoxidable, cobre",
        tecnico: 'Diámetros: 1/2" a 24", Ángulos: 90°, Presión: hasta 150 PSI',
        images: ["img/te1.jpg", "img/te2.jpg", "img/te3.jpg"] // Aquí puedes poner las URLs de las imágenes reales

    },
    {
        title: "Válvulas",
        image: "img/valvula1.webp",
        description: "Dispositivos mecánicos que controlan el flujo de fluidos en sistemas de tuberías",
        usos: "Control de flujo, cierre/apertura, regulación de presión, anti-retorno",
        materiales: "Bronce, acero inoxidable, hierro fundido, PVC",
        tecnico: 'Diámetros: 1/2" a 36", Presión: hasta 300 PSI, Temperaturas: -20°C a 200°C',
        images: ["img/valvula1.webp", "img/valvula2.jpg", "img/valvula3.webp", "img/valvula4.webp"] // Aquí puedes poner las URLs de las imágenes reales

    },
    // ... otros componentes
];

let currentSlide = 0;
let currentImages = [];

function createComponentCard(component) {
    return `
        <article class="component-card" onclick="openModal('${component.title}')">
            <img src="${component.image}" alt="${component.title}" class="card-image">
            <div class="card-content">
                <h2 class="card-title">${component.title}</h2>
                <p class="card-description">${component.description}</p>
            </div>
        </article>
    `;
}

function openModal(title) {
    const component = components.find(c => c.title === title);
    if (!component) return;

    currentImages = component.images;
    currentSlide = 0;

    document.getElementById('modalTitle').textContent = component.title;
    document.getElementById('modalDescription').textContent = component.description;
    document.getElementById('modalUsos').textContent = component.usos;
    document.getElementById('modalMateriales').textContent = component.materiales;
    document.getElementById('modalTecnico').textContent = component.tecnico;

    // Generar slides del carrusel
    const carouselContainer = document.getElementById('carouselContainer');
    carouselContainer.innerHTML = component.images
        .map((img, index) => `
            <div class="carousel-slide">
                <img src="${img}" alt="${component.title} ${index + 1}">
            </div>
        `).join('');

    document.getElementById('componentModal').style.display = 'block';
    updateCarousel();
}

function closeModal() {
    document.getElementById('componentModal').style.display = 'none';
}

function updateCarousel() {
    const container = document.getElementById('carouselContainer');
    container.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % currentImages.length;
    updateCarousel();
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + currentImages.length) % currentImages.length;
    updateCarousel();
}

// Event Listeners
document.querySelector('.close-modal').addEventListener('click', closeModal);
document.querySelector('.carousel-button.next').addEventListener('click', nextSlide);
document.querySelector('.carousel-button.prev').addEventListener('click', prevSlide);

// Cerrar modal con ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
});

// Inicializar la página
document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('componentsGrid');
    grid.innerHTML = components.map(component => createComponentCard(component)).join('');
});
document.addEventListener('mousemove', (e) => {
    // Créer un cercle à la position de la souris
    const circle = document.createElement('div');
    circle.classList.add('circle');
    
    // Positionner le cercle là où est la souris
    circle.style.left = `${e.pageX - 25}px`; // Ajustement pour le centre du cercle
    circle.style.top = `${e.pageY - 25}px`;
    circle.style.width = '50px';
    circle.style.height = '50px';
    
    document.body.appendChild(circle);

    // Supprimer le cercle après l'animation
    setTimeout(() => {
        circle.remove();
    }, 1000); // 1 seconde pour correspondre à la durée de l'animation
});

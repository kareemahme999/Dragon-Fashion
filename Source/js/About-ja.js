const menu = document.getElementById('menu');
const toggle = document.getElementById('toggle');

toggle.addEventListener('click', (e) => {
    e.stopPropagation();
    menu.classList.toggle('active');
    toggle.classList.toggle('active');

    if (menu.classList.contains('active')) {
        toggle.innerHTML = '<i class="fas fa-times"></i>';
    } else {
        toggle.innerHTML = '<i class="fas fa-share-alt"></i>';
    }
});

document.addEventListener('click', (e) => {
    if (!menu.contains(e.target)) {
        menu.classList.remove('active');
        toggle.classList.remove('active');
        toggle.innerHTML = '<i class="fas fa-share-alt"></i>';
    }
});

document.querySelectorAll('.b2 ul li, .b3 ul li').forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'translateX(10px)';
    });

    item.addEventListener('mouseleave', function() {
        this.style.transform = 'translateX(0)';
    });
});

document.querySelectorAll('.menu li a').forEach(link => {
    link.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.3) rotate(5deg)';
    });

    link.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1) rotate(0deg)';
    });
});

document.querySelectorAll('.menu li a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.stopPropagation();
    });
});
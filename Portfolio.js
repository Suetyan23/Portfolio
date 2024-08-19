
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('About').scrollIntoView();
});


let button = document.getElementById('mode');
let isNightMode = localStorage.getItem('mode') === 'night';

button.addEventListener('click', function () {
    localStorage.setItem('mode', isNightMode ? 'night' : 'bright');
    if (isNightMode) {
        document.body.classList.remove('bright-mode');
        document.body.classList.add('night-mode');
        button.classList.add('fa-sun');
        button.classList.remove('fa-moon');
        button.style.color = '#FFD43B';
        isNightMode = false;
    } else {
        document.body.classList.remove('night-mode');
        document.body.classList.add('bright-mode');
        button.classList.remove('fa-sun');
        button.classList.add('fa-moon');
        button.style.color = '#FFD43B';
        isNightMode = true;
    }
});
button.click();


function openPDF() {
    window.location.href = "Chang Suet Yan CV.pdf"
}






document.addEventListener("DOMContentLoaded", function () {
    const text = document.querySelector('.name');
    const strText = text.textContent;
    const splitText = strText.split('');
    text.textContent = '';

    for (let i = 0; i < splitText.length; i++) {
        text.innerHTML += "<span>" + splitText[i] + "</span>";
    }

    let char = 0;
    let timer = setInterval(onTick, 50);

    function onTick() {
        const span = text.querySelectorAll('span')[char];
        span.classList.add('fade');
        char++;
        if (char === splitText.length) {
            complete();
            return;
        }
    }

    function complete() {
        clearInterval(timer);
        timer = null;
    }
});

//animation from lefet to right
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

let hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

let projects = document.querySelectorAll('.project1');

projects.forEach(project => {
    let gitHubIcon = project.querySelector('.fa-github');
    let gitHubTooltip = project.querySelector('.tooltip');

    // Add event listeners to show/hide the tooltip
    gitHubIcon.addEventListener('mouseenter', () => {
        gitHubTooltip.style.opacity = '1';
    });

    gitHubIcon.addEventListener('mouseleave', () => {
        gitHubTooltip.style.opacity = '0';
    });
});

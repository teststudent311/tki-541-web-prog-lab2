function changeHeading(size, font) {
    const h1 = document.querySelector('h1');
    let fontSize;

    switch(size) {
        case 'h6': fontSize = '1em'; break;
        case 'h5': fontSize = '1.25em'; break;
        case 'h4': fontSize = '1.5em'; break;
        case 'h3': fontSize = '1.75em'; break;
        case 'h2': fontSize = '2em'; break;
        default: fontSize = '3.42em'; // это значение по умолчанию для h1 в вашем CSS
    }

    h1.style.fontSize = fontSize;
    h1.style.fontFamily = font;

    const buttons = document.getElementById('buttons').querySelectorAll('button');
    buttons.forEach(btn => btn.removeAttribute('hidden'));
    
    const button = [...buttons].find(btn => btn.textContent.toUpperCase() === size.toUpperCase());
    if (button) button.setAttribute('hidden', true);
}

function resetHeading() {
    const h1 = document.querySelector('h1');
    h1.style.fontSize = '';
    h1.style.fontFamily = 'Fira Code, monospace';
    
    const buttons = document.getElementById('buttons').querySelectorAll('button');
    buttons.forEach(btn => btn.removeAttribute('hidden'));
}

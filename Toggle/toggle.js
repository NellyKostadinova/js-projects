function toggle(event){
    let button = document.getElementById('button');
    let text = document.getElementById('additionalText');

    if (button.textContent == 'More') {
        text.classList.remove('hidden');
        button.textContent = "Less";
    } else { 
        text.classList.add('hidden');
        button.textContent = "More";
    };
};
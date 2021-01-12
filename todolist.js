//const frame = document.getElementById('frame');
const ol = document.getElementById('ol');
const textbox = document.getElementById('textbox');
const button = document.getElementById('button');
button.addEventListener('click', () => {       //create li and the trash svg in li.
    let li = document.createElement('li');
    li.innerHTML = textbox.value;
    if (li.innerHTML === textbox.value) {
        textbox.value = '';         //Passes the value to li and deletes it from the textbox.
    }
    li.classList.add('list');
    let img = document.createElement('img');
    img.classList.add('ListTrash');
    (() => {
        img.setAttribute('src', 'trash black.svg');
    })();
    img.addEventListener('mousemove', () => {
        img.setAttribute('src', 'trash red.svg');
    });
    img.addEventListener('mouseleave', () => {
        img.setAttribute('src', 'trash black.svg');
    });
    ol.appendChild(li).appendChild(img);

    img.addEventListener('click', () => {       //remove the li.
        ol.removeChild(li)
    });
});
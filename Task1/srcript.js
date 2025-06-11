const head = document.getElementById('head');

head.addEventListener('click', () => {
    head.style.backgroundColor = "grey"
})

const button = document.getElementById('btn');
let x = 0;
btn.addEventListener('click',() => {
    const inner = document.getElementById('inner');
    x=x+10;
    if(x <= 100) {
        inner.style.width = x + "%"
    }
})
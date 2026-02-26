//aggiungere i nod
const endpoint = 'https://lanciweb.github.io/demo/api/pictures/'
const rowEl = document.querySelector('.row')
const btnEl = document.getElementById('btn')

const overlayEl = document.getElementById('overlay');
const overlayImg = document.querySelector('img');

//funzione per il markup
function markup(title, date, url) {
    return `<div class="col-12 col-md-6 col-lg-4">
                    <div class="card rounded-0 mx-auto" style="width: 18rem;">
                        <img src="./pthoto_blog_assets_day1/img/pin.svg" class="pin" alt="">
                        <div class="card-heder rounded-0 m-3 mb-0">
                            <img src="${url}" class="card-img-top rounded-0" alt="...">
                        </div>
                        <div class="card-body">
                            <span class="text-secondary">${date}</span>
                            <p class="card-text fs-3">${title}</p>
                        </div>
                    </div>
                </div>`
}

//funzione per destrutturare l'array, una volta analizzata l'API, e stampare in pagina
function renderCards() {
    fetch(endpoint)
        .then(res => res.json())
        .then(data => {
            data.forEach(element => {
                rowEl.innerHTML += markup(element.title, element.date, element.url)
            })
        
            //creo una variabile dentro then 
        const images = document.querySelectorAll('.card-img-top');
            images.forEach(img => {
                img.addEventListener('click', () => {
                    overlayEl.style.display = 'flex'; 
                });
            });
        })
}

//al click del bottone ovarly va in display none 
btnEl.addEventListener('click', () => {
    overlayEl.style.display = 'none';
});


renderCards()


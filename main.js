const endpoint = 'https://lanciweb.github.io/demo/api/pictures/'
const rowEl = document.querySelector('.row')

console.log(endpoint, rowEl);

let summerPics = ``

fetch (endpoint)
.then(res => res.json())
.then(data => {
    console.log(data);

   

    data.forEach(element => {
        console.log(element);
        const {title, date, url} = element
        const markup = `<div class="col-12 col-md-6 col-lg-4">
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
                </div> `

                console.log(markup);

                summerPics += markup
                rowEl.innerHTML = summerPics
    });
    
})


const searchFrom = document.querySelector('.search');
const input = document.querySelector('#search-terms');
const submit = document.querySelector('#submit');
const newsList = document.querySelector('.news-list');


searchFrom.addEventListener('submit', retrieve)

function retrieve(e){
    console.log('retrieve')
    if(input.value == ''){
        alert('Please enter a topic!')
        return
    }

    newsList.innerHTML = ''
    e.preventDefault()
    
    const apiKey = '0e1f0573923b4f80a447ec0fc730061c'
    let topic = input.value;


    let url = `https://newsapi.org/v2/everything?q=${topic}&apiKey=${apiKey}`

    fetch(url).then((response)=>{
        console.log('inside promise')
        return response.json()
    }).then((dataNews)=>{
        // console.log(dataNews.articles)
        for(var i = 0; i < dataNews.articles.length; i++){
            console.log(dataNews.articles[i])
            let li = document.createElement('li');
            let a = document.createElement('a');
            a.setAttribute('href', dataNews.articles[i].url);
            a.setAttribute('target', '_blank');
            a.innerHTML = dataNews.articles[i].title;
            li.appendChild(a);
            newsList.appendChild(li)
}
}).catch((error)=> {
    console.log(error)
})

}


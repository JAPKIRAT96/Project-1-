        console.log(dataNews.articles[i])
        
        for(var i = 0; i < dataNews.articles.length; i++){
            console.log(dataNews.articles[i])
            let a = document.createElement('a')
            a.setAttribute('href', dataNews.articles[i].url);
            a.setAttribute('target', '_blank');
            a.innerHTML = dataNews.articles[i].url;
            
            let li = document.createElement('li');
            let img = document.createElement('img');
            img.src = dataNews.articles[i].urlToImage
            li.appendChild(a)
            li.appendChild(img);
            ul.appendChild(li)
            
}
}).catch((error)=> {
    console.log(error)
})

    })
const searchFrom = document.querySelector('.search'); 
const input = document.querySelector("#search-terms");
const submit = document.querySelector("#submit");
const newsList = document.querySelector(".news-list");

searchFrom.addEventListener("submit", retrieve);

function retrieve(e) {
e.preventDefault();
console.log("retrieve");
if (input.value == "") {
    alert("Please enter a topic!");
    return;
}


const apiKey = '03t2vzx89s51l3pm63er9rpxw'
let topic = input.value;
newsList.innerHTML = "";
fetch(`http://api.datanews.io/v1/headlines?apiKey=${apiKey}&language=en&q=${topic}`)
.then(res => res.json()).then(dataNews => {
console.log(dataNews)

for (var i = 0; i < dataNews.hits.length; i++) {
        console.log(dataNews.hits[i]);
        let li = document.createElement("li");
        let a = document.createElement("a");
        a.setAttribute("href", dataNews.hits[i].url);
        a.setAttribute("target", "_blank");
        a.innerHTML = dataNews.hits[i].title;
        li.appendChild(a);
        newsList.appendChild(li);
}
})
.catch((error) => {
console.log(error);
    });
}



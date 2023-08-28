const data = fetch("./data.json");  
let rows = ["#first" , "#second" , "#third" ,"#fourth"]
data.then((resolve) => resolve.json())
.then((res) => {
    for(let i=0 ; i < rows.length ; i++){
        let img = document.querySelector(`${rows[i]} img`);
        let span = document.querySelector(`${rows[i]} .info span`);
        let text = document.querySelector(`${rows[i]} .info .text span:first-child`);
        img.setAttribute("src",res[i].icon);
        span.innerHTML = res[i].category;
        text.innerHTML = res[i].score ;
    }
    });


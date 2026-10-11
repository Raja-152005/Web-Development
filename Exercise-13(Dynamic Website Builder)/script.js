// function createCard(title,cname,views,monthsOld,duration,thumbnail){
//     //Finish this function (card should be like card.png)
// }
// createCard("Intorduction to Backend | Sigma Web Dev video #2","CodeWithHarry",560000,7,"31:22","image-url")
function createCard(title,cname,views,monthsOld,duration,thumbnail){
    let viewStr;
    if(views<1000){
        viewStr=views;
    }
    else if(views>1000000){
        viewStr=views/1000000+"M";
    }
    else{
        viewStr=views/1000+"K";
    }
    let html=`<div class="card">
            <div class="image">
                <img src="${thumbnail}" alt="">
                <div class="capsule">${duration}</div>
            </div>
            <div class="text">
                <h1>${title}</h1>
                <p>${cname} . ${viewStr} views . ${monthsOld} months ago</p>
            </div>
        </div>`
    document.querySelector(".container").innerHTML=document.querySelector(".container").innerHTML+html
}
createCard("Intorduction to Backend | Sigma Web Dev video #2","CodeWithHarry",560000,7,"31:22","https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw")
createCard("Intorduction to Express JS | Sigma Web Dev video #36","CodeWithHarry",76000000,4,"24:56","https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw")
createCard("Intorduction to JS | Sigma Web Dev video","CodeWithHarry",112,3,"12:23","https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw")
let btn=document.getElementById("btn")
// https://developer.mozilla.org/en-US/docs/Web/API/Element#mouse_events (List of all mouse events)
// There are so many type of events like keyboard events,form events (https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Events)
// addEventListener() used to listen events 
btn.addEventListener("click",()=>{    
    document.querySelector(".box").innerHTML="<b>Yayy You were clicked</b> Enjoy your click!"
})
btn.addEventListener("dblclick",()=>{ //dblclick->double cilck
    alert("I was clicked twice...")
})
btn.addEventListener("contextmenu",()=>{ //contextmenu-> when you right click
    alert("Don't hack us by Right Click Plzz...")
})
document.addEventListener("keydown",(e)=>{ //keydown(keyboard event)->when press any key of keyboard
    console.log(e,e.type,e.key,e.keyCode);
})

//removeEventListener() used to remove events

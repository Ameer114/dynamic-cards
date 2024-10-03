function add(){
    let image= document.getElementById("image").value;
    let title=document.getElementById("title").value
    let dur=document.getElementById("dur").value
    let channel=document.getElementById("channel").value
    let views=document.getElementById("views").value
    let mnth=document.getElementById("mnth").value
    let card= document.querySelector(".card");
    let clonecard=card.cloneNode(true)
    document.querySelector(".container").append(clonecard);
    clonecard.querySelector("img").setAttribute("src",image)
    clonecard.querySelector(".dur").innerHTML=dur
    clonecard.querySelector("b").innerHTML=title
    clonecard.querySelector(".channel").innerHTML=channel
    clonecard.querySelector(".tempmonth").innerHTML=mnth
    if (views>999){
        txt=views.toString()
        txt=txt.slice(0,txt.length-3)
        txt=txt+'k'
        console.log(txt); 
        clonecard.querySelector(".tempview").innerHTML=txt
    }
    else
    clonecard.querySelector(".tempview").innerHTML=views
   
}






let book11=document.getElementById("myb1")
let summary11=document.getElementById("sum1")
let show11=document.getElementById("myshow1")
let hide11=document.getElementById("myhide1")


let book22=document.getElementById("myb2")
let summary22=document.getElementById("sum2")
let show22=document.getElementById("myshow2")
let hide22=document.getElementById("myhide2")

let book33=document.getElementById("myb3")
let summary33=document.getElementById("sum3")
let show33=document.getElementById("myshow3")
let hide33=document.getElementById("myhide3")

let book44=document.getElementById("myb4")
let summary44=document.getElementById("sum4")
let show44=document.getElementById("myshow4")
let hide44=document.getElementById("myhide4")

show11.onclick=function(){
    book11.style.display="none"
    book22.style.display="none"
    book33.style.display="none"
    book44.style.display="none"
    show11.style.display="none"
    show22.style.display="none"
    show33.style.display="none"
    show44.style.display="none" 
    hide22.style.display="none"
    hide33.style.display="none"
    hide44.style.display="none"
    hide11.style.display="block"
    summary11.style.display="block"
}

hide11.onclick=function(){
    book11.style.display="block"
    book22.style.display="block"
    book33.style.display="block"
    book44.style.display="block"
    show11.style.display="block"
    show22.style.display="block"
    show33.style.display="block"
    show44.style.display="block" 
    hide11.style.display="none"
    summary11.style.display="none"
}

show22.onclick=function(){
    book11.style.display="none"
    book22.style.display="none"
    book33.style.display="none"
    book44.style.display="none"
    summary11.style.display="none"
    summary33.style.display="none"
    summary44.style.display="none"
    show11.style.display="none"
    show22.style.display="none"
    show33.style.display="none"
    show44.style.display="none" 
    hide11.style.display="none"
    hide33.style.display="none"
    hide44.style.display="none"
    hide22.style.display="block"
    summary22.style.display="block"
}

hide22.onclick=function(){
    book11.style.display="block"
    book22.style.display="block"
    book33.style.display="block"
    book44.style.display="block"
    show11.style.display="block"
    show22.style.display="block"
    show33.style.display="block"
    show44.style.display="block" 
    hide22.style.display="none"
    summary22.style.display="none"
}

show33.onclick=function(){
    book11.style.display="none"
    book22.style.display="none"
    book33.style.display="none"
    book44.style.display="none"
    summary11.style.display="none"
    summary22.style.display="none"
    summary44.style.display="none"
    show11.style.display="none"
    show22.style.display="none"
    show33.style.display="none"
    show44.style.display="none" 
    hide11.style.display="none"
    hide22.style.display="none"
    hide44.style.display="none"
    hide33.style.display="block"
    summary33.style.display="block"
}
hide33.onclick=function(){
    book11.style.display="block"
    book22.style.display="block"
    book33.style.display="block"
    book44.style.display="block"
    show11.style.display="block"
    show22.style.display="block"
    show33.style.display="block"
    show44.style.display="block" 
    hide33.style.display="none"
    summary33.style.display="none"
}

show44.onclick=function(){
    book11.style.display="none"
    book22.style.display="none"
    book33.style.display="none"
    book44.style.display="none"
    summary11.style.display="none"
    summary22.style.display="none"
    summary33.style.display="none"
    show11.style.display="none"
    show22.style.display="none"
    show33.style.display="none"
    show44.style.display="none" 
    hide11.style.display="none"
    hide22.style.display="none"
    hide33.style.display="none"
    hide44.style.display="block"
    summary44.style.display="block"
}
hide44.onclick=function(){
    book11.style.display="block"
    book22.style.display="block"
    book33.style.display="block"
    book44.style.display="block"
    show11.style.display="block"
    show22.style.display="block"
    show33.style.display="block"
    show44.style.display="block" 
    hide44.style.display="none"
    summary44.style.display="none"
}
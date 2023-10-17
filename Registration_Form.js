var name1=document.querySelector(".identity")
var email= document.querySelector(".emails")
var webLink= document.querySelector(".webLink")
var imgLink= document.querySelector(".imgLink")
var male=document.querySelector(".gender1")
var female=document.querySelector(".gender2")
var skill1=document.querySelector(".skill1")
var skill2=document.querySelector(".skill2")
var skill3=document.querySelector(".skill3")
var btnEnroll=document.querySelector(".enroll")
var btnClr=document.querySelector(".clr")
var dataContain=document.querySelector(".dataContain")
var text="Enrolled Student"

var head=document.createElement('h1')
head.className="heading"
var para1=document.createElement('p')
var para2=document.createElement('p')
var para3=document.createElement('p')
var para4=document.createElement('p')
var para5=document.createElement('p')
var paraf=document.createElement('p')
var img1=document.createElement('img')
paraf.className="imgContain"
paraf.append(para1)
paraf.append(img1)

btnEnroll.addEventListener("click",function(){

    head.innerHTML=text
    dataContain.appendChild(head)
    para1.innerHTML="Name: "+name1.value+"<br> <br>"
    img1.src=imgLink.value
    dataContain.appendChild(paraf)
    para1.innerHTML+="Email: "+email.value+"<br> <br>"
    //dataContain.appendChild(para2)
    para1.innerHTML+="WebLink: "+webLink.value+"<br> <br>"
   // dataContain.appendChild(para3)

   
    para1.innerHTML+="Gender: "
    if(male.checked){
        para1.innerHTML+=male.value
    }
    if(female.checked){
        para1.innerHTML+=female.value
    }

    //dataContain.appendChild(para4)

para1.innerHTML+="<br><br> Skills: "
if(skill1.checked){
    para1.innerHTML+=skill1.value
}

if(skill2.checked){
    para1.innerHTML+=" "+skill2.value
}
if(skill3.checked){
    para1.innerHTML+=" "+skill3.value
}

//dataContain.appendChild(para5)

});

btnClr.addEventListener("click",function(){
    
    name1.value=null
    email.value=null
    webLink.value=null
    imgLink.value=null
})

/* male.addEventListener("click",function(){
        if(this.checked){
            para4.innerHTML=male.value
        }
        else{
            para4.innerHTML=female.value
        }
    })

    female.addEventListener("click",function(){
        if(this.checked){
            para4.innerHTML=female.value
        }
        else{
            para4.innerHTML=male.value
        }
    })*/
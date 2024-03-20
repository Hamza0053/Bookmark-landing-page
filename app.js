let toggleButton=document.querySelector('.hamburger')
let ContactButton=document.querySelector('.pre__footer_button')
const navList=document.querySelector('.nav__nav')
let hamburger=document.querySelector('.ham')
let bookmark=document.querySelector('.header__logo')
let html=document.querySelector('html')
let Question=document.querySelectorAll('.ques')

let togglePara=document.querySelectorAll('.toggle__para')
let resultContainer=document.querySelectorAll('.result__container')
let input=document.querySelector('.input__line')


let fact=false
let previousAnswer
let previousImage

function ShowList(){
    navList.classList.toggle("show__List")
}
function HideScroll(){
    html.classList.toggle("hide__me")
}

function ChangeHamburger(){

if (hamburger.getAttribute("src") == "images/icon-close.svg") 
{
    hamburger.src="images/icon-hamburger.svg"
} 
else {
    hamburger.src="images/icon-close.svg"
}

}

function ChangeBookmark(){
    if (bookmark.getAttribute("src") == "images/logo-bookmark.svg") 
    {
        bookmark.src="images/logo 2.svg"
    } 
    else {
        bookmark.src="images/logo-bookmark.svg"
    }
}

toggleButton.addEventListener('click',()=>{

    ShowList()
    HideScroll()
    ChangeHamburger()
    ChangeBookmark()
})

// question answer setion designing
function checkClass(target){
    if (target.classList.contains("ques"))
    {
        myAnswer=target.parentNode.children[1];
    }
    else
    {
     myAnswer=target.parentNode.parentNode.children[1];
    }
    return myAnswer
}

function HideAnswer(myAnswer,image){
    if (fact) {
        console.log(previousAnswer)
        previousAnswer.style.display="none";
        previousImage.src="images/icon-arrow.svg"
        previousImage.style.transform="rotate(0deg)"
        previousAnswer=myAnswer
        previousImage=image
        
    }
    else
    {
        previousAnswer=myAnswer
        previousImage=image
        fact=true
    }
   
}
        
function ShowAnswer(target){
    let myAnswer=checkClass(target)
    let image=myAnswer.parentNode.children[0].children[1]
    HideAnswer(myAnswer,image)
    image.src="images/arrow-2 - Copy.svg"
    image.style.transform="rotate(180deg)"
    myAnswer.style.display="block";
    
    
    
}
Question.forEach((ques)=>{
    ques.addEventListener('click',(e)=>{
        ShowAnswer(e.target)
    })
})

// result container toggle button
function RemoveUnderLine(target){
  togglePara.forEach((para)=>{
     if(para === target){
        para.classList.add("underLine");
       }
       else
       {
        para.classList.remove("underLine")
       }
  })
}

function ShowResult(myIndex){
    resultContainer.forEach((cont,ind)=>{
        if (myIndex === ind) {
            cont.style.display="flex";
        }
        else
        {
            cont.style.display="none";
        }
     })
}


togglePara.forEach((btn,index)=>{
    btn.addEventListener('click',(e)=>{
        RemoveUnderLine(e.target)
        ShowResult(index)
    })
})

// email verification
const ValidEmail= ()=>{
    let label=document.querySelector('.email__labe')
const validEmail= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(input.value.match(validEmail))
{
    label.innerText="Email submit successfully";
    document.querySelector('.error').style.display="none"
}
else
{
    label.style.display="block"
    document.querySelector('.error').style.display="block"
    label.innerText="Whoops, make sure it's an email";
    console.log('not matched')
}
}

ContactButton.addEventListener('click',()=>{
ValidEmail()
})

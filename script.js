var image=document.querySelector("img")
var love=document.querySelector(".ri-heart-3-fill")

image.addEventListener("dblclick",function(){
    likeButton.style.color="#ee2a7b";
    love.style.transform= "translate(-50%,-50%) scale(2)";
    love.style.opacity="0.9";
    setTimeout(function(){
        console.log("Hello");
        love.style.opacity="0";
    },1000);
    setTimeout(function(){
        love.style.transform= "translate(-50%,-50%) scale(0)";
        console.log("Hello1");

    },1500)
})

var likeButton=document.querySelector(".ri-heart-fill");
var flag=1
likeButton.addEventListener("click",function(){
    if(flag==1){
        likeButton.style.color="#ee2a7b";
        flag=0
    }
    else{
        likeButton.style.color="#fff";
        flag=1
    }
})
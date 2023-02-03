




function f(){

    function f1(){
$('img').css({"margin-top": "100px" , "transition": "1s" , "margin-left" : "200px"})   
}
f1()

function f2(){
    $('img').css({"margin-top": "200px" , "transition": "1s" , "margin-left" : "400px"})}

setTimeout(f2 ,2800)

function f3(){
    $('img').css({"margin-top": "100px" , "transition": "1s" , "margin-left" : "600px"})  
}
setTimeout(f3 ,3000)

function f4(){
    $('img').css({"margin-top": "200px" , "transition": "1s" , "margin-left" : "800px"})  
}
setTimeout(f4 ,3200)

function f5(){
    $('img').css({"margin-top": "100px" , "transition": "1s" , "margin-left" : "14  00px"})  
}
setTimeout(f5 ,3400)

function f6(){
    $('img').css({"margin-top": "200px" , "transition": "1s" , "margin-left" : "1600px"})  
}
setTimeout(f6 ,3800)

}
f()
setInterval(f , 5000)
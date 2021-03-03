const card1 = document.getElementById("card1");
const card2 = document.getElementById("card2");
const card3 = document.getElementById("card3");
const card4 = document.getElementById("card4");
const card5 = document.getElementById("card5");
const card6 = document.getElementById("card6");
const card7 = document.getElementById("card7");
const card8 = document.getElementById("card8");
const card9 = document.getElementById("card9");
const card10 = document.getElementById("card10");
const card11 = document.getElementById("card11");
const card12 = document.getElementById("card12");
const card13 = document.getElementById("card13");
const card14 = document.getElementById("card14");
const card15 = document.getElementById("card15");
const card16 = document.getElementById("card16");
const card17 = document.getElementById("card17");
const card18 = document.getElementById("card18");
const card19 = document.getElementById("card19");
const card20 = document.getElementById("card20");

let arr=[];
let temp;
let arr1 = [card1,card2,card3,card4,card5,card6,card7,card8,card9,card10]
let arr2 = [card11,card12,card13,card14,card15,card16,card17,card18,card19,card20];
let flag = 0;
let arr3=[];
let element ;
let lockcard = false; 



function assign(){
while(arr.length != 10){
    temp=parseInt((Math.random()*10));
    if(arr.every(test))
    arr.push(temp);
}}

assign();

function test(value){
    return value !=temp;
}

for(let i=0;i<10;i++){
console.log(typeof arr[i],arr[i])
arr1[i].innerHTML = arr[i];

}

arr=[];
assign();
for(let i=0;i<10;i++){
arr2[i].innerHTML = arr[i];
console.log(typeof arr[i],arr[i])
}

for(let m = 0;m<10;m++)
console.log(typeof (arr1[m].textContent),arr1[m].textContent,typeof (arr2[m].textContent),arr2[m].textContent);


function flip(event){
        if(lockcard) return;
        element = event.currentTarget;
        if(element == arr3[0]) return;
        arr3.push(element);
        flag=flag+1;
	        if (element.className === "card" & flag != 2 ) {
                if(element.style.transform == "rotateY(180deg)"){
                     element.style.transform = "rotateY(0deg)";
                     console.log(element.textContent);
                }
                else {
                 element.style.transform = "rotateY(180deg)";
                 console.log(element.textContent);
                }
            }
            else{
                if(element.style.transform == "rotateY(180deg)"){
                        element.style.transform = "rotateY(0deg)";
                        console.log("doing");
                        checkformatch();
                }
                else {
                    element.style.transform = "rotateY(180deg)";
                    console.log("doing");
                    checkformatch();
                }
            }
                
            
}

function checkformatch(){
    if(parseInt(arr3[1].textContent) == parseInt(arr3[0].textContent)){
	arr3[0].onclick = null;
        arr3[1].onclick = null;
        console.log(typeof arr3[0].innerHTML,typeof arr3[1].innerHTML)
        arr3[0].removeEventListener("click", flip);
        arr3[1].removeEventListener("click", flip);
         flag = 0;
        arr3=[];
        console.log("matched");
    }
    else{
    flipboth();
    }
}

function flipboth(){
    lockcard = true;
    setTimeout(()=>{
        for(let w = 0;w<2;w++){
         if(arr3[w].style.transform == "rotateY(180deg)"){
         arr3[w].style.transform = "rotateY(0deg)";
         console.log(element.textContent);
         }
         else {
         arr[w].style.transform = "rotateY(180deg)";
         console.log(element.textContent);
         }
        }
        uninitialize();
        lockcard = false;

    },800);

}
 function uninitialize(){
    flag = 0;
    arr3=[];
    console.log("finish")
 }


            
        

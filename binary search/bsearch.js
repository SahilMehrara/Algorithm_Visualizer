//////////////////////  Creating Boxes   //////////////////////////////////////////////
var arr=[];
function createbar(lent=25){
    const bar = document.querySelector("#array");
    bar.innerHTML = '';

    for(var i=0;i<lent;i++){
        arr[i]=Math.floor((Math.random()*200)+1);
    }
     arr.sort(function(a,b){return a-b});
    for(var i=1;i<=lent;i++){
        var ele=document.createElement("DIV");
        document.getElementById("array").appendChild(ele);
        ele.classList.add("boxes");
    }
}
///////////////////////// fill Boxes /////////////////////////////////////////
function fillbar(){
    createbar();
    document.getElementById("output").innerHTML="";
    var ele=document.querySelectorAll(".boxes");
    for(var i=0;i<ele.length;i++){
        ele[i].innerHTML=arr[i];
    }
}

fillbar();
////////////////////////// wait function /////////////////////////////////////////
function waitforme(milisec) { 
    return new Promise(resolve => { 
        setTimeout(() => { resolve('') }, milisec); 
    }) 
}


/////////////////////////// New Array //////////////////////////////////////////////

var narr=document.querySelector('#narray');
narr.addEventListener('click',fillbar);

/////////////////////////// Binary Search //////////////////////////////////////////////
var delay=600;
async function bsearch(){
    var x=document.querySelector("#num");
    var num=parseInt(x.value);
    var ele=document.querySelectorAll(".boxes");
    for(var i=0;i<ele.length;i++){ele[i].style.backgroundColor="aliceblue";ele[i].style.opacity=1;}
    document.getElementById("output").innerHTML=""
    var low=0,high=ele.length-1;
    var ans=-1;
    while(low<=high){
        console.log('running');
        
        ele[low].style.backgroundColor="pink";
        ele[high].style.backgroundColor="pink";
        var mid=low+parseInt((high-low)/2);
        await waitforme(delay);
        ele[mid].style.backgroundColor="yellow";
        if(parseInt(ele[mid].innerHTML)==num){
            await waitforme(delay);
            ans=mid;
            ele[low].style.backgroundColor="aliceblue";
            ele[high].style.backgroundColor="aliceblue";
            ele[mid].style.backgroundColor="lightgreen";
            for(var i=0;i<ele.length;i++){if(i!=mid)ele[i].style.opacity=0.5;}
            break;
        }
        else{
            if(parseInt(ele[mid].innerHTML)>num){
                await waitforme(delay);
            ele[high].style.backgroundColor="aliceblue";
            ele[mid].style.backgroundColor="aliceblue";
            high=mid-1;
            }
            else{
                await waitforme(delay);
                ele[low].style.backgroundColor="aliceblue";
                ele[mid].style.backgroundColor="aliceblue";
                low=mid+1;
            }
            for(var i=0;i<low;i++){ele[i].style.opacity=0.5;}
            for(var i=high+1;i<ele.length;i++){ele[i].style.opacity=0.5;}
        }
    }
    if(ans==-1){
        document.getElementById("output").innerHTML="Number Not Found!!"
    }

}

var search=document.querySelector("#bsearch");
search.addEventListener('click',async function(){
       await bsearch();
       console.log(Math.random());
});

/////////////////////////// Linear search //////////////////////////////////////////////

async function lsearch(){
    var x=document.querySelector("#num");
    var num=parseInt(x.value);
    var ele=document.querySelectorAll(".boxes");
    for(var i=0;i<ele.length;i++){ele[i].style.backgroundColor="aliceblue";ele[i].style.opacity=1;}
    document.getElementById("output").innerHTML=""
    var ans=-1;
    for(var i=0;i<ele.length;i++){
        await waitforme(delay);
        ele[i].style.backgroundColor="pink";
        if(parseInt(ele[i].innerHTML)==num){
            await waitforme(delay);
            ans=i;
            ele[i].style.backgroundColor="lightgreen";
            
            break;
        }
    }
    if(ans==-1){
        document.getElementById("output").innerHTML="Number Not Found!!"
    }
}


var srch=document.querySelector("#lsearch");
srch.addEventListener('click',async function(){
       await lsearch();
       console.log(Math.random());
});

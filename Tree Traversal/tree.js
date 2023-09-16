const nodes=document.querySelectorAll('.node');
console.log(nodes[1].innerHTML);
class Node{
    constructor(data){
        this.data=data;
        this.left=null;
        this.right=null;
    };
};

const root=createtree(0,null);
console.log(root);
 function createtree(i,root){
     if(i>=nodes.length){ return null;}

         root=new Node(nodes[i].innerHTML);
         root.left=createtree(2*i+1,root.left);
         root.right=createtree(2*i+2,root.right);
     
     return root;
 }

 function waitforme(milisec) { 
    return new Promise(resolve => { 
        setTimeout(() => { resolve('') }, milisec); 
    }) 
}

function reset(){
    for(var i=0;i<nodes.length;i++){
        nodes[i].style.background="linear-gradient(to right,#90F7EC,#0396FF)";
    }
}
 async function inorder(root){
     if(root==null) return;
     await inorder(root.left);
     nodes[parseInt(root.data-1)].style.background="linear-gradient(to right,#FFF6B7,#F6416C)";
     var ele=document.createElement("DIV");
     ele.innerHTML=root.data
     document.querySelector(".output").appendChild(ele);
     ele.classList.add("node");
     ele.classList.add("flex");
     await waitforme(1000);
     await inorder(root.right);
 }

 async function preorder(root){
    if(root==null) return;
    nodes[parseInt(root.data-1)].style.background="linear-gradient(to right,#FFF6B7,#F6416C)";
     var ele=document.createElement("DIV");
     ele.innerHTML=root.data
     document.querySelector(".output").appendChild(ele);
     ele.classList.add("node");
     ele.classList.add("flex");
     await waitforme(1000);
    await preorder(root.left);
    await preorder(root.right);
}

async function postorder(root){
    if(root==null) return;
    await postorder(root.left);
    await postorder(root.right);
    nodes[parseInt(root.data-1)].style.background="linear-gradient(to right,#FFF6B7,#F6416C)";
     var ele=document.createElement("DIV");
     ele.innerHTML=root.data
     document.querySelector(".output").appendChild(ele);
     ele.classList.add("node");
     ele.classList.add("flex");
     await waitforme(1000);
}

 var srch=document.querySelector(".but");
 var select=document.querySelector('#select');
 srch.addEventListener('click',async function(){
    const bar = document.querySelector(".output");
    bar.innerHTML = '';
    var val=select.value;
     if(val=="inorder"){
        await reset();
        await waitforme(30)
        await inorder(root);
        console.log(Math.random());
     }
     if(val=="preorder"){
        await reset();
        await waitforme(30)
        await preorder(root);
        console.log(Math.random());
     }
     if(val=="postorder"){
    
        await reset();
        await waitforme(30)
        await postorder(root);
        console.log(Math.random());
     }
        
 });
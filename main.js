let str=`<h1>常用cmd npm git 命令行</h1>
<div id="cmd">
  <h1>cmd</h1>
  <img src="./images/cmd/1.png" alt="#">
  <img src="./images/cmd/2.png" alt="#">
  <img src="./images/cmd/3.png" alt="#">
</div>
<div>
  <h1>npm</h1>
  <img src="./images/npm/1.png" alt="#">
  <img src="./images/npm/2.png" alt="#">
  <img src="./images/npm/3.png" alt="#">
  <img src="./images/npm/4.png" alt="#">
  <img src="./images/npm/5.png" alt="#">
  <img src="./images/npm/6.png" alt="#">
</div>
<div>
  <h1>git</h1>
  <img src="./images/git/1.png" alt="#">
  <img src="./images/git/2.png" alt="#">
  <img src="./images/git/3.png" alt="#">
  <img src="./images/git/4.png" alt="#">
  <img src="./images/git/5.png" alt="#">
</div>`

let n=1
document.body.innerHTML=str.substring(0,n)

setInterval(()=>{
  if(n>str.length){
    return
  }
  n+=1 
  document.body.innerHTML=str.substring(0,n)
},20)
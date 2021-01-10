/*let myHeading = document.querySelector('h1');
myHeading.textContent = "Hello World";
/*
document.querySelector('html').onclick = function(){
    alert('bbbb');
}
*/
//切换图片
let myImage = document.querySelector('img');
myImage.onclick = function(){
    let mySrc = myImage.getAttribute('src');
    if(mySrc == 'imgs/1.jpg'){
        myImage.setAttribute('src','imgs/2.jpg');
    }
    else{
        myImage.setAttribute('src','imgs/1.jpg');
    }
}

//按钮切换用户
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');


function setUserName(){
    let myName = prompt('请输入你的名字:');//首先调用了 prompt() 函数， 与 alert() 类似会弹出一个对话框
    if(!myName || myName == null){//如果未添加用户名字，则对其进行出处理，即一直显示填空框，无论点击确定货值取消都无法消除
        setUserName();
    }else{
        localStorage.setItem('name', myName);//调用 localStorage API ，它可将数据存在浏览器
        myHeading.innerHTML = 'Hello  ' + myName; 
    }
   
}
//初始化代码
if(!localStorage.getItem('name')){  //未得到名字
    setUserName();
}else{
    let strongName = localStorage.getItem('name');
    myHeading.textContent = 'Hello  ' + strongName;
}

myButton.onclick = function(){
    setUserName();
}
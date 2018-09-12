var oUl = document.getElementsByTagName('ul')[0];
var oInput =document.getElementsByTagName('input')[0];
var oBox = document.getElementsByClassName('box')[0];
var oA = document.getElementsByTagName('a')[0];
oInput.oninput = function(){ 
    oA.href = 'https://www.baidu.com/s?&wd='+oInput.value;
    var oScript = document.createElement('script');
    oScript.src ='https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd='+oInput.value+'&cb=demo';
        document.body.appendChild(oScript);
        document.body.removeChild(oScript);
    }
    function demo(data){ 
        var value = data.s;
        var str = '';
        if(value.length>0){
            oBox.style.display='block';
            
    value.forEach(function(ele,index){
        str += '<li><a href=https://www.baidu.com/s?&wd='+ele +'>'+ele+'</a></li>';
         
    })
    oUl.innerHTML = str;
        }else{
            oBox.style.display='none';
        }   
}
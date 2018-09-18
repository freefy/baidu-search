var oInput = document.getElementsByTagName('input')[0];
var oUl = document.getElementsByTagName('ul')[0];
var oBox = document.getElementsByClassName('box')[0];
var oSBtn = document.getElementById('search-btn');

oInput.oninput = debounce(getUserAction, 150, false);

function getUserAction() {
    if (oInput) {
        var value = oInput.value;
        var oScript = document.createElement('script');
        oScript.src = 'https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=' + value + '&cb=doFunc';
        document.body.appendChild(oScript);
        document.body.removeChild(oScript);
    } else {
        oBox.style.display = 'none';
    }
}
//immediate-->false:先等待wait时间再执行，true，先执行一次再等待
function debounce(func, wait, immediate) {
    var timer = null;
    var debounced = function () {
        var _this = this;
        var argus = arguments;
        clearTimeout(timer);
        if (immediate) {
            if (!timer) {
                func.apply(_this, argus);
            }
            timer = setTimeout(function () {
                timer = null;
            }, wait);
        } else {
            timer = setTimeout(function () {
                func.apply(_this, argus);
            }, wait);
        }
    };
    debounced.cancel = function () {
        clearTimeout(timer);
        timer = null;
    }
    return debounced;
}

function doFunc(data) {
    var s = data.s;
    var str = '';
    if (s.length > 0) {
        oBox.style.display = 'block';
        s.forEach(function (ele, index) {
            str += '<li><a href = "https://www.baidu.com/s?wd=' + ele + '">' + ele + '</a></li>';
        })
        oUl.innerHTML = str;
    } else {
        oBox.style.display = 'none';
    }
}
oSBtn.onclick = function () {
    var oA = oSBtn.getElementsByTagName('a')[0];
    var value = oInput.value;
    oA.href = 'https://www.baidu.com/s?wd=' + value;
}
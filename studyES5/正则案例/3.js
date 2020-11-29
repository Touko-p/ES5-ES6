window.onload=function () {
    var telReg=/^1[3|4|5|7|8]\d{9}$/;
    var qqReg=/^[1-9]\d{4,}$/;
    var nameReg=/^[\u4e00-\u9fa5]{2,8}$/;
    var codeReg=/^\d{6}$/;
    var lReg=/^[\w-_]{6,16}$/;
    var cReg=/^$/;
    //表单验证函数
    function regexp(ele,reg) {
        ele.onblur=function (){
            if (reg.test(this.value)){
                this.parentNode.nextElementSibling.innerHTML='ture'
            }else
                this.parentNode.nextElementSibling.innerHTML='false'
        }
    }
    function getClass(cla) {
        return document.querySelector(cla)
    }
    regexp(getClass('.tel'),telReg);
    regexp(getClass('.qq'),qqReg);
    regexp(getClass('.name'),nameReg)
    regexp(getClass('.code'),codeReg)
    regexp(getClass('.lPsw'),lReg)
    getClass('.cPsw').onblur=function () {
        if (this.value==getClass('.lPsw').value){
            this.parentNode.nextElementSibling.innerHTML='ture'
        }else {
            this.parentNode.nextElementSibling.innerHTML='false'
        }
    }
}
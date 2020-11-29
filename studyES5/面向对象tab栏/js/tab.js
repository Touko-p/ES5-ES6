var that;
class Tab{
    constructor(id) {
        // 获取元素
        that=this;
        this.main=document.querySelector(id);
        this.add=this.main.querySelector('.tabAdd');
        this.ul=this.main.querySelector('.firstNav ul');
        this.tabsCon=this.main.querySelector('.tabsCon');
        this.init();
    }
    // init 初始化操作让相关的元素绑定事件
    init(){
        this.updateNode();
        for (var i=0;i<this.lis.length;i++){
            this.lis[i].index=i;
            this.lis[i].onclick=this.toggleTap;
            this.remove[i].onclick=this.removeTab;
            this.spans[i].ondblclick=this.editTab;
            this.sections[i].ondblclick=this.editTab;
        }
        this.add.onclick=this.addTab;
    }
    // 获取所有li和section 动态添加元素需要重新获取对应元素
    updateNode(){
        this.lis=this.main.querySelectorAll('li');
        this.sections=this.main.querySelectorAll('section');
        this.remove=this.main.querySelectorAll('.icon-guanbi');
        this.spans=this.main.querySelectorAll('.firstNav li span:first-child')
    }
    clearClass(){
        for (var i=0;i<this.lis.length;i++){
            this.lis[i].className='';
            this.sections[i].className='';
        }
    }
    // 1.切换功能
    toggleTap(){
        that.clearClass();
        this.className='liActive';
        that.sections[this.index].className='conActive';
    }
    // 2.添加功能
    addTab(){
        that.clearClass();
        // 1.创建li元素和section元素
        // that.updateNode();
        let length=that.lis.length+1;
        var li='<li  class="liActive"><span>新选项卡</span><span class="iconfont icon-guanbi"></span></li>';
        var section='<section class="conActive">message'+length+'</section>';
        // 2.把这两个元素追加到相应的父元素里面
        that.ul.insertAdjacentHTML('beforeend',li);
        that.tabsCon.insertAdjacentHTML('beforeend',section);
        that.init();
    }
    // 3.删除功能
    removeTab(e){
        e.stopPropagation();//阻止冒泡 防止触发li的点击事件
        var index=this.parentNode.index;
        that.lis[index].remove();
        that.sections[index].remove();
        that.init();
        // 删除不是选中状态的li的时候，原来选中状态li保持不变
        if(document.querySelector('.liActive')) return ;
        // 删除选中状态的li的时候，让前一个li处于选定状态
        index--;
        that.lis[index] && that.lis[index].click();
        that.sections[index] && that.sections[index].click();
    }
    // 4.修改功能
    editTab(){
        var str=this.innerHTML;
        //双击禁止选定文字
        window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
        this.innerHTML='<input type="text" value='+str+'>';
        var input=this.children[0];
        input.select();
        input.onblur=function () {
            this.parentNode.innerHTML=this.value;
        }
        input.onkeyup=function (e) {
            if(e.keyCode===13){
                this.blur();
            }
        }

    }
}
var tab=new Tab('#tab');
var date=[
    {
        id:1,
        name:'小米o',
        price:3999
    },
    {
        id:2,
        name:'onePlus',
        price:2999
    },
    {
        id:3,
        name:'华为',
        price:4999
    },
    {
        id:4,
        name:'魅族',
        price:2699
    }
];
let tbody=document.querySelector('tbody');
let search_price=document.querySelector('.search_price');
let start=document.querySelector('.start');
let end=document.querySelector('.end');
let product=document.querySelector('.product');
let seartch_pro=document.querySelector('.search_pro');
setDate(date);
//数据渲染
function setDate(myDate){
    //先清空tbody里面的数据
    tbody.innerHTML='';
    myDate.forEach(function (value) {
        let tr='<tr><td>'+value.id+'</td><td>'+value.name+'</td><td>'+value.price+'</td></tr>';
        tbody.insertAdjacentHTML('beforeend',tr)
    })
}
//价格筛选
search_price.addEventListener('click',function () {
    let newDate=date.filter(function (value) {
        return value.price>=start.value&&value.price<=end.value;
    })
    setDate(newDate)
})
//名称筛选
// seartch_pro.addEventListener('click',function () {
//     let newDate=date.filter(function (value) {
//         return value.name.indexOf(product.value)!=-1;
//     })
//     setDate(newDate)
// })
seartch_pro.addEventListener('click',function (){
    let arr=[];
    date.some(function (value) {
        if (value.name===product.value){
            arr.push(value);
            return true;
        }
    })
    setDate(arr)
})

const items= [...document.querySelectorAll('.number')]


const updateCount=(el)=>{
const value=parseInt(el.dataset.value)
const increment=Math.ceil(value/1000)
let initialValue=0

const increaseCount=setInterval(()=>{
    initialValue +=increment
if(value< initialValue){
    el.textContent= `${value}+`
    clearInterval(increaseCount)
    return;
}


    el.textContent=`${initialValue}+`
})
}
items.forEach((item)=>{
updateCount(item)

})
const menu=document.querySelector('.menu');
const sidebar=document.querySelector('.sidebar')
console.log(menu)
menu.addEventListener('click',function()
{
    sidebar.classList.toggle('show-sidebar');
})
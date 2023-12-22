/* let   menu_items=document.getElementById('menu_items');
let menu_bar=document.getElementById('menu_bar');

menu_bar .addEventListener('click' , ()=>
{
    if(menu_bar.style.opacity==='0'){
        menu_bar.style.opacity='1';
    }else{
        menu_bar.style.opacity='0';
    }
}) */
let menu_items = document.getElementById('menu_items');
let menu_bar = document.getElementById('menu_bar');

menu_bar.addEventListener('click', () => {
    if (menu_items.style.opacity === '0') {
        menu_items.style.opacity = '1';
    } else {
        menu_items.style.opacity = '0';
    }
})
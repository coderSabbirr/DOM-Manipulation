const div1 = document.getElementById('first');
const div2 = document.getElementById('second');
const div3 = document.getElementById('third');

const img = document.getElementById('art')

const desc = document.getElementById('desc');
const price = document.getElementById('price');

const free = document.getElementById('free');
const express = document.getElementById('express');
const shippingFiled = document.getElementById('shipping');
const total = document.getElementById('total');

function containSelected(element) {
   return element.classList.contains('selected')
}

free.addEventListener('click',function(){
    if(!containSelected(free)){
        free.classList.add('selected')
        express.classList.remove('selected')
    }
    shippingFiled.innerText ='5';
    updateTotal()
    
});
express.addEventListener('click',function(){
    if(!containSelected(express)){
        express.classList.add('selected')
        free.classList.remove('selected')
    }
    

    shippingFiled.innerText ='30';
    updateTotal()
});
// update total
function updateTotal(){
    const shippingCharge = parseInt(shippingFiled.innerText);
    const productPrice = parseInt(price.innerText);
    const totalPrice = shippingCharge + productPrice;
    total.innerText = totalPrice;
}

div1.addEventListener('click',function(){
    if(!containSelected(express)){
        div1.classList.add('selected')
        div2.classList.remove('selected')
        div3.classList.remove('selected')
    }
    
    img.src = 'images/1.jpg';
    desc.innerText = "First, Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum beatae laboriosam, commodi quis tempore necessitatibus.Voluptatibus minima aut non doloremque?"
    price.innerText = "750"
    updateTotal()
});
div2.addEventListener('click',function(){
    if(!containSelected(express)){
        div1.classList.remove('selected')
        div2.classList.add('selected')
        div3.classList.remove('selected')
    }
    img.src = 'images/2.jpg';
    desc.innerText = "second, Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum beatae laboriosam, commodi quis tempore necessitatibus.Voluptatibus minima aut non doloremque?"
    price.innerText = "550"
    updateTotal()
});
div3.addEventListener('click',function(){
    if(!containSelected(express)){
        div1.classList.remove('selected')
        div2.classList.remove('selected')
        div3.classList.add('selected')
    }
    img.src = 'images/3.jpg';
    desc.innerText = "Third, Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum beatae laboriosam, commodi quis tempore necessitatibus.Voluptatibus minima aut non doloremque?"
    price.innerText = "330"
    updateTotal()
});
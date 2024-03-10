
let div = document.querySelector('#productlist');
let cartlist = document.querySelector('ul');
let clrbtn = document.querySelector('#clr_cart_btn');


cartlist.addEventListener('click', removecart);
clrbtn.addEventListener('click', clearcart);


productlist.addEventListener("click", function (e) {
  if (e.target.tagName === "INPUT" && e.target.value === "Add To Cart") {
    addcart(e);
  }
});

function addcart(e) {
  let productDiv = e.target.parentElement;
  let productName = productDiv.querySelector("span:first-child").textContent;
  let productPrice = productDiv.querySelector("span:nth-child(2)").textContent;

  let li = document.createElement('li');
  li.appendChild(document.createTextNode(`${productName} - ${productPrice}`));
  cartlist.appendChild(li);
  let link = document.createElement('a');
  link.setAttribute('href', '#');
  link.innerHTML = 'x';
  li.appendChild(link);
}



function removecart(e) {
  if (e.target.hasAttribute('href')) {
    if (confirm('Are you sure')) {
      let ele = e.target.parentElement;
      ele.remove();
    }
  }
}

function clearcart(e) {

  while (cartlist.firstChild) {
    cartlist.removeChild(cartlist.firstChild);
  }
}
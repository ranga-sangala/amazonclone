
let productsHtml = '';
 products.map((product)=> {
    productsHtml += `
    <div class="product-container">
    <div class="product-image-container">
        <img  class="product-image"
        src= "${product.image}" alt="">
    </div>
    <div class="product-name limit-next-to-2-lines">
       ${product.name}
    </div>
    <div class="product-rating-container">
        <img src="images/ratings/rating-${product.rating.stars*10}.png" alt="">
        <div class="product-rating-count link-primary">${product.rating.count}</div>
    </div>
    <div class="product-price">
        Rs ${product.priceCents/10}
    </div>
    <div class="product-quantity-container">
        <select>
            <option selected value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
        </select>
        </div>
        <div class="product-spacer"></div>

        <div class="added-to-cart">
        <img src="images/icons/checkmark.png">
        Added
        </div>

        <button class="add-to-cart-button button-primary js-add-to-cart" >
        Add to Cart
        </button>
    </div>
`
 })

document.querySelector('.js-products-grid').innerHTML = productsHtml
document.querySelectorAll('.js-add-to-cart')
  .forEach((button) => {
    button.addEventListener('click', () => {
      console.log("clicked")
    });
  });


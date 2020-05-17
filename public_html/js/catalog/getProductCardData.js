document.querySelector('.products-block').addEventListener('click', async function(event) {
  let product = event.target.closest('div');
  let product_id = product.getAttribute('product_id');
  let productCard = document.querySelector('#product-card');
  let request = await fetch('/utils/getProductInfo.php', {
    method: 'POST',
    body: product_id
  });
  if (request) {
    let data = await request.json();
    for (el of productCard.querySelectorAll('.product-card-name')) {
      el.textContent = data.name;
    }
    productCard.querySelector('#product-card-image').setAttribute('src', data.imagePath);
    productCard.querySelector('#product-lifetime').textContent = data.lifetime + ' суток';
    productCard.querySelector('#product-weight').textContent = data.weight + 'кг';
    productCard.querySelector('#product-min-temp').textContent = data.min_temp;
    productCard.querySelector('#product-max-temp').textContent = data.max_temp;
    productCard.querySelector('#product-composition').textContent = data.composition;
    productCard.querySelector('#product-calorie').textContent = data.calorie_amount;
    productCard.querySelector('#product-joul').textContent = data.calorie_amount * 4;
    productCard.querySelector('#product-proteins').textContent = data.proteins;
    productCard.querySelector('#product-fats').textContent = data.fats;
    productCard.querySelector('#product-carbohydrates').textContent = data.carbohydrates;
    productCard.querySelector('#product-type').textContent = data.type;
  }
});
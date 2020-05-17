const pageElementsAmount = 8;
let notFirstOpen = false;
let counter = 1;
let prevText = '';
let prevType = '';
let prevFilter = null;
let prevOrder = null;

document.querySelector('.products-sorting').addEventListener('click', function(event) {
  let filter = event.target.closest('div');
  let filterText = filter.querySelector('h4').textContent;
  let filterType = filter.querySelector('img:first-child').src;
  
  if (counter == 0) {
    if (filterText != prevText || filterType != prevType) {
      document.querySelector('.sorted-active h4').textContent = filterText;
      document.querySelector('.sorted-active img:first-child').src = filterType;
      filter.querySelector('h4').textContent = prevText;
      filter.querySelector('img:first-child').src = prevType;
      makeProductsBlock(1, filterText, filterType);
    }
    // alert("Prevtext: " + prevText + ", filterText: " + filterText);
    $('.products-sorting').animate({height: '55px'}, 350);
    $('.products-sorting-one:first-child img:last-child').css({transform: 'rotate(0)'});
    counter = 1;
  } else 
  {
    $('.products-sorting').animate({height: '330px'}, 350);
    $('.products-sorting-one:first-child img:last-child').css({transform: 'rotate(0.5turn)'});
    counter = 0;
  }

  prevType = filterType;
  prevText = filterText;
});

function createProduct(productName, imagePath, productWeight, caloriesAmount, id) {
  let product = document.createElement('div');
  product.setAttribute('product_id', id);
  product.classList.add('product');
  let code = '<img src="' + imagePath + '">';
  code += '<h3>' + productName + '</h3>';
  code += '<p>' + productWeight + 'кг - ' + caloriesAmount + ' кКал / ' + caloriesAmount * 4 + ' кДж</p>';
  product.innerHTML = code;
  document.querySelector('.products-block').append(product);
}

function animateToTop() {
  let offset = document.querySelector('.products').getBoundingClientRect().top + window.pageYOffset;
  window.scrollTo(0, offset);
}

function createButton(active, text) {
  const btnsBlock = document.querySelector('.pages-list');
  let btn = document.createElement('button');
  btn.textContent = text;
  if (active) {
    btn.className = 'page-number page-number-active';
  } else {
    btn.className = 'page-number';
  }
  btn.onclick = function() {
    makeProductsBlock(Number(btn.textContent), prevFilter, prevOrder);
  };
  btnsBlock.append(btn);
}

function addControls(pageAmount, activePage) {
  if (!notFirstOpen) {
    notFirstOpen = true;
    for (let i = 1; i <= pageAmount; i++) {
      if (i == activePage) {
        createButton(true, i);
      } else {
        createButton(false, i);
      }
    }
  } else {
    let btns = document.querySelectorAll('.page-number');
    for (el of btns) {
      if (el.classList.contains('page-number-active')) {
        el.classList.remove('page-number-active');
      }
      if (el.textContent == activePage) {
        el.classList.add('page-number-active');
      }
    }
  }
}

async function makeProductsBlock(currPage, filterText=null, filterType=null) {
  
  prevFilter = filterText;
  prevOrder = filterType;

  if (notFirstOpen) {
    $('.products-block').hide();
  }

  console.log(filterType);

  let parameters;
  if (filterText != null) {
    if (filterText == 'По цене') {
      filterText = 'price';
    } else if (filterText == 'По популярности') {
      filterText = 'popularity';
    } else if (filterText == 'По названию') {
      filterText = 'name';
    }
    if (filterType == 'https://eap-testprojects.ru/img/sort-high-to-low.svg') {
      filterType = '-';
    } else {
      filterType = '+';
    }
    parameters = {
      requiredPage: currPage,
      itemsPerPage: pageElementsAmount,
      sort: filterText, 
      order: filterType
    };
  } else {
    parameters = {
      requiredPage: currPage,
      itemsPerPage: pageElementsAmount
    };
  }

  console.log(parameters);

  const request = await fetch('/utils/getProducts.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(parameters)
  });
  if (request) {
    let result = await request.json();
    if (notFirstOpen) {
      document.querySelector('.products-block').style.height = Math.ceil(result[0].length / 4) * 420; 
      animateToTop();
      document.querySelector('.products-block').innerHTML = '';
        for (el of result[0]) {
          createProduct(el.name, el.imagePath, el.weight, el.calorieAmount);
        }
      addControls(result[1], currPage);
      $('.products-block').fadeIn(800);
    } else {
      document.querySelector('.products-block').innerHTML = '';
      for (el of result[0]) {
        createProduct(el.name, el.imagePath, el.weight, el.calorieAmount, el.id);
      }
      addControls(result[1], currPage);
    }
  }
}

makeProductsBlock(1, 'По цене', 'https://eap-testprojects.ru/img/sort-low-to-high.svg');
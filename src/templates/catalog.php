<!DOCTYPE html>
<html lang="ru_RU">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <link rel="shortcut icon" href="img/favicon.ico" type="image/x-icon">
  <link rel="icon" href="img/favicon.ico" type="image/x-icon">
  <title>ЗАО "Марийское"</title>
  <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&display=swap" rel="stylesheet">
  <script src="jquery/jquery.js" defer="defer"></script>
  <link rel="stylesheet" href="css/catalog/style.css">
</head>
<body>
  <div id="preloader">
    <img src="img/logo.svg" alt="logo" id="pre-logo">
    <img src="img/preloader.png" alt="preloader" id="preloader-img">
  </div>
  <header>
    <nav>
      <div class="container">
        <a class="main-logo" href="index.php">
          <img src="img/logo.svg" alt="logo">
        </a>
        <a class="nav-links" href="index.php">Главная</a>
        <a class="nav-links" href="index.php#shops">Магазины</a>
        <a class="nav-links" href="index.php#production">Производство</a>
        <a class="nav-links" href="index.php#grill-bar">Гриль-Бар</a>
        <div class="nav-buttons-block">
          <img src="img/insta-button.png" alt="instagram" class="nav-buttons">
        </div>
        <div class="nav-buttons-block">
          <img src="img/header-modal-btn.png" alt="open modal" class="nav-buttons" id="modal-btn">
        </div>
      </div>
    </nav>
    <div class="header-content">
      <div class="container">
        <h1>Каталог</h1>
      </div>
    </div>
  </header>
  <div class="products">
    <div class="container">
      <div class="filters-block">
        <img src="img/filter-btn.png" alt="filter elements" class="product-img">
        <pre>Главная  >  <span>Каталог</span></pre>
      </div>
      <div class="products-block-heading">
        <h2>Продукция ЗАО “Марийское”</h2>
        <div class="products-sorting sorting-closed">
          <div class="products-sorting-one sorted-active">
            <div>
              <img src="/img/sort-low-to-high.svg" alt="sort">
              <h4>По цене</h4>
            </div>
            <img src="/img/small-open-btn.jpg" alt="open sorting block" style="width:15px; height:15px;">
          </div>
          <div class="products-sorting-one">
            <div>
              <img src="/img/sort-high-to-low.svg" alt="sort">
              <h4>По цене</h4>
            </div>
          </div>
          <div class="products-sorting-one">
            <div>
              <img src="/img/sort-low-to-high.svg" alt="sort">
              <h4>По популярности</h4>
            </div>
          </div>
          <div class="products-sorting-one">
            <div>
              <img src="/img/sort-high-to-low.svg" alt="sort">
              <h4>По популярности</h4>
            </div>
          </div>
          <div class="products-sorting-one">
            <div>
              <img src="/img/sort-low-to-high.svg" alt="sort">
              <h4>По названию</h4>
            </div>
          </div>
          <div class="products-sorting-one">
            <div>
              <img src="/img/sort-high-to-low.svg" alt="sort">
              <h4>По названию</h4>
            </div>
          </div>
        </div>
      </div>
      <div class="products-block">
      </div>
      <div class="product-btns">
        <div class="pages-list">
        </div>
      </div>
    </div>
  </div>
  <div class="chicken-chopping">
    <div class="container">
      <h2>Схема разделки птицы</h2>
      <div id="chicken-block">
        <div id="chicken-block-message">
          <h3></h3>
          <p></p>
        </div>
        <div id="chop-head" heading="Голова" class="chicken-parts"></div>
        <div id="chop-neck" heading="Шейка" class="chicken-parts"></div>
        <div id="chop-chest" heading="Грудка" class="chicken-parts"></div>
        <div id="chop-soup-kit" heading="Суповый набор" class="chicken-parts"></div>
        <div id="chop-wing" heading="Крылышки" class="chicken-parts"></div>
        <div id="chop-tail" heading="" class="chicken-parts"></div>
        <div id="chop-front-hip" heading="Бедро" class="chicken-parts"></div>
        <div id="chop-back-hip" heading="Окорочок" class="chicken-parts"></div>
        <div id="chop-front-leg" heading="Голень" class="chicken-parts"></div>
        <div id="chop-back-leg" heading="Голень" class="chicken-parts"></div>
      </div>
    </div>
  </div>
  <div class="keep-in-touch">
    <div class="container">
      <button id="send-mail">
        Написать письмо
          <img src="img/letter-symbol.png" alt="letter">
      </button>
      <p>Свяжитесь с нами, если у вас возникли вопросы по работе сайта, 
        качеству товара или сотрудничеству
      </p>
      <a href="tel:88362000000">8-8362-000-000</a>
    </div>
  </div>
  <footer>
    <div class="container">
      <img src="img/logo.svg" alt="logo" class="logo">
      <div class="footer-links-block">
        <a href="catalog.html">Каталог продукции</a>
        <a href="index.php#shops">Гриль-бар</a>
        <h3>Для бизнес-партнеров</h3>
      </div>
      <div class="footer-links-block">
        <h3>Раскрытие информации</h3>
        <h3 id="footer-modal-btn">Контакты</h3>
        <a href="index.php#shops">Адреса магазинов</a>
      </div>
      <div class="awards">
        <h3>Наши награды:</h3>
        <div class="award-block">
          <img src="img/best-100-footer.png" alt="best 100 items">
        </div>
      </div>
    </div>
  </footer>
  <div id="product-card">
    <div class="container" id="product-card-content">
      <img src="" alt="product image" id="product-card-image">
      <div class="product-card-content">
        <p>Главная  >  Каталог  >  <span id="product-type"></span>  > <span class="product-card-name"></span></p>
        <h3 class="product-card-name"></h3>
        <div class="product-card-features">
          <div class="product-card-feature">
            <img src="img/storage-conds.svg" alt="product storage conditions">
            <h4>Условия хранения</h4>
            <h5>От <span id='product-min-temp'></span> до <span id='product-max-temp'></span>&degC</h5>
          </div>
          <div class="product-card-feature">
            <img src="img/lifetime.svg" alt="product lifetime">
            <h4>Срок годности</h4>
            <h5 id="product-lifetime"></h5>
          </div>
          <div class="product-card-feature">
            <img src="img/weight.svg" alt="product weight">
            <h4>Вес продукта</h4>
            <h5 id="product-weight"></h5>
          </div>
        </div>
        <hr>
        <div class="product-properties">
          <div class="product-property">
            <h4>Пищевая ценность</h4>
            <h5>
              Белки - <span id="product-proteins"></span> г.<br>
              Жиры - <span id="product-fats"></span> г.<br>
              Углеводы - <span id="product-carbohydrates"></span> г.<br>
            </h5>
          </div>
          <div class="product-property">
            <h4>Калорийность</h4>
            <h5><span id="product-calorie"></span> ккал / <span id="product-joul"></span> кДж</h5>
          </div>
          <div class="product-property">
            <h4>Состав</h4>
            <h5 id="product-composition"></h5>
          </div>
        </div>
        <button class="products-btn" id="product-card-return">Назад <img src="img/return-icon.svg" alt="return"></button>
      </div>
    </div>
  </div>
  <div id="modal-menu" style="visibility: hidden;">
    <button id="modal-menu-close"></button>
    <div class="modal-menu-left">
      <img src="img/logo.svg" alt="logo" class="logo">
      <div>
        <h3 class="modal-menu-left-text">Горячая линия:</h3>
        <h3 class="modal-menu-numbers">8 (8362) 000 - 000</h3>
      </div>
      <div>
        <h3 class="modal-menu-left-text">Приемная:</h3>
        <h3 class="modal-menu-numbers">8 (8362) 000 - 000</h3>
      </div>
      <h4>email@email.ru</h4>
      <img src="img/small-insta-logo.png" alt="instagram" class="small-insta-logo">
    </div> 
    <div class="modal-menu-right">
      <div class="modal-menu-right-block">
        <img src="img/chicken.svg" alt="chicken">
        <div class="modal-menu-content">
          <h3 class="modal-menu-right-links">Мясо птицы</h3>
          <h3 class="modal-menu-right-links">Колбасные изделия</h3>
          <h3 class="modal-menu-right-links">Молочная продукция</h3>
          <h3 class="modal-menu-right-links">Полуфабрикаты</h3>
          <h3 class="modal-menu-right-links">Сыры</h3>
        </div>
      </div>
      <div class="modal-menu-right-block">
        <img src="img/others-label.svg" alt="others label">
        <div class="modal-menu-content">
          <h3 class="modal-menu-right-links">Раскрытие информации</h3>
          <h3 class="modal-menu-right-links">Соглашение о конфиденциальности</h3>
          <h3 class="modal-menu-right-links">Для бизнес-партнеров</h3>
          <h3 class="modal-menu-right-links">Наши награды</h3>
        </div>
      </div>
    </div>
  </div>
  <div id="modal-mail" style="visibility: hidden;">
    <button id="modal-mail-close"></button>
    <div class="container">
      <h2>Напишите нам</h2>
      <form action="" id="mail-form">
        <div class="input-block">
          <h3>Имя и фамилия</h3>
          <input type="text" class="small-input" name="name">
        </div>
        <div class="input-block">
          <h3>Email</h3>
          <input type="text" class="small-input" name="email">
        </div>
        <div class="input-block">
          <h3>Телефон</h3>
          <input type="text" class="small-input" name="mobile">
        </div>
        <div class="message-block">
          <h3>Сопроводительное письмо</h3>
          <div>
            <textarea class="big-input" name="mail-content"></textarea>
          </div>
        </div>
        <div class="submit-block">
          <input type="submit" class="submit-btn" value="Отправить сообщение">
          <p>
            Нажимая кнопку “Отправить сообщение”, Вы подтверждаете согласие 
            на обработку персональных данных
          </p>
        </div>
      </form>
    </div>
  </div>
  <div id="shadow" id="shadow" style="visibility: hidden;"></div>
  <div id="white-block"></div>
  <script src="js/catalog/script.js" defer="defer"></script>
  <script src="js/catalog/getProducts.js" defer></script>
  <script src="js/common/mail.js" defer></script>
  <script src="js/catalog/getProductCardData.js"></script>
</body>
</html>
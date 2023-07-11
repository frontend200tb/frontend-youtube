/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/footer/element-footer.js":
/*!*************************************************!*\
  !*** ./src/components/footer/element-footer.js ***!
  \*************************************************/
/***/ (() => {

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }
function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var Footer = /*#__PURE__*/function (_HTMLElement) {
  _inherits(Footer, _HTMLElement);
  var _super = _createSuper(Footer);
  function Footer() {
    _classCallCheck(this, Footer);
    return _super.call(this);
  }
  _createClass(Footer, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.innerHTML = "\n    <footer class=\"footer container\">\n      <div class=\"footer__logo\">200TERABYTE WEB STUDIO</div>\n    </footer>\n    ";
    }
  }]);
  return Footer;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));
customElements.define('footer-component', Footer);

/***/ }),

/***/ "./src/components/footer/footer.js":
/*!*****************************************!*\
  !*** ./src/components/footer/footer.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _footer_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer.scss */ "./src/components/footer/footer.scss");
/* harmony import */ var _element_footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./element-footer */ "./src/components/footer/element-footer.js");
/* harmony import */ var _element_footer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_element_footer__WEBPACK_IMPORTED_MODULE_1__);



/***/ }),

/***/ "./src/components/front-yt/element-front-yt.js":
/*!*****************************************************!*\
  !*** ./src/components/front-yt/element-front-yt.js ***!
  \*****************************************************/
/***/ (() => {

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }
function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var FrontYt = /*#__PURE__*/function (_HTMLElement) {
  _inherits(FrontYt, _HTMLElement);
  var _super = _createSuper(FrontYt);
  function FrontYt() {
    _classCallCheck(this, FrontYt);
    return _super.call(this);
  }
  _createClass(FrontYt, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.innerHTML = "\n    <div class=\"front-yt\" id=\"front-yt\">\n      <nav class=\"nav container\" id=\"main-nav\"></nav>\n\n      <h1>YouTube channels for Frontend developers</h1>\n    \n      <section class=\"col2 container\">\n        <aside class=\"aside\"></aside>\n        <main class=\"content youtube\">\n          <ul>\n            <li><a href=\"https://ru.savefrom.net/\">savefrom.net</a> \u0421\u043A\u0430\u0447\u0430\u0442\u044C mp4 \u0432\u0438\u0434\u0435\u043E</li>\n            <li><a href=\"https://downsub.com/lang/ru\">downsub.com</a> \u0421\u043A\u0430\u0447\u0430\u0442\u044C srt \u0441\u0443\u0431\u0442\u0438\u0442\u0440\u044B</li>\n            <li><a href=\"https://mp3y.download/ru/309/mp3-converter\">mp3y.download</a> \u0421\u043A\u0430\u0447\u0430\u0442\u044C mp3 \u0430\u0443\u0434\u0438\u043E</li>\n          </ul>\n          <h2></h2>\n          <ol id=\"youtube\"></ol>\n        </main>\n      </section>\n    </div>\n    ";
    }
  }]);
  return FrontYt;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));
customElements.define('front-yt', FrontYt);

/***/ }),

/***/ "./src/components/front-yt/front-yt.js":
/*!*********************************************!*\
  !*** ./src/components/front-yt/front-yt.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "showFrontYt": () => (/* binding */ showFrontYt)
/* harmony export */ });
/* harmony import */ var _element_front_yt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./element-front-yt */ "./src/components/front-yt/element-front-yt.js");
/* harmony import */ var _element_front_yt__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_element_front_yt__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _js_create_data_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/create-data.js */ "./src/components/front-yt/js/create-data.js");
/* harmony import */ var _js_create_aside_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/create-aside.js */ "./src/components/front-yt/js/create-aside.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
/****************
Скрипт из файла front-youtube.js
Функция showFrontYt показывает страницу front-yt
*******************/
/*
Алгоритм работы
1. Создаем объект data упорядоченный по категориям
2. Создаем массив navDiv для элементов main-nav
3. Для каждой категории
  3.1 Создаем элемент elementNav
  3.2 Добавляем элемент elementNav в массив navDiv
  3.3 Создаем массив asideDiv для элементов aside меню
  3.4 По клику на элемент nav меню
    3.4.1 добавим ему class="active"
    3.4.2 показываем нужный aside
    3.4.3 Создадим и вызовем событие click на первом aside элементе
  3.5 Добавим на страницу элементы навигации nav
  3.6 Создадим и вызовем событие click на первом nav эелементе
*/





//1. Создаем объект data упорядоченный по категориям
var data = (0,_js_create_data_js__WEBPACK_IMPORTED_MODULE_1__.createData)();
function showFrontYt() {
  var mainNav = document.querySelector('#main-nav');
  var aside = document.querySelector('.aside');

  //2. Создаем массив navDiv для элементов main-nav
  var navDiv = [];

  //3. Для каждой категории
  var _loop = function _loop(category) {
    //3.1 Создаем элемент elementNav
    var elementNav = document.createElement('a');
    elementNav.href = "#";
    elementNav.innerHTML = category;

    //3.2 Добавляем элемент elementNav в массив navDiv
    navDiv.push(elementNav);

    //3.3 Создаем массив asideDiv для элементов aside меню
    var asideDiv = (0,_js_create_aside_js__WEBPACK_IMPORTED_MODULE_2__.createAside)(data[category]);

    //3.4 По клику на элемент main-nav
    elementNav.addEventListener('click', function (e) {
      e.preventDefault();

      //3.4.1 добавим ему class="active"
      classActive(navDiv, elementNav);

      //3.4.2 показываем нужный aside
      aside.innerHTML = '';
      aside.append.apply(aside, _toConsumableArray(asideDiv));

      //3.4.3 Создадим и вызовем событие click на первом aside элементе
      var eventClick = new Event('click');
      asideDiv[0].dispatchEvent(eventClick);
    });
  };
  for (var category in data) {
    _loop(category);
  }

  //3.5 Добавим на страницу элементы навигации nav
  mainNav.append.apply(mainNav, navDiv);

  //3.6 Создадим и вызовем событие click на первом nav эелементе
  var eventClick = new Event('click');
  navDiv[0].dispatchEvent(eventClick);
}

//Ставим class="active" выбранному элементу меню и убираем с остальных
function classActive(elementOl, elementLi) {
  elementOl.forEach(function (li) {
    li.classList.remove('active');
  });
  elementLi.classList.add('active');
}

/***/ }),

/***/ "./src/components/front-yt/js/create-aside.js":
/*!****************************************************!*\
  !*** ./src/components/front-yt/js/create-aside.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createAside": () => (/* binding */ createAside)
/* harmony export */ });
/* harmony import */ var _create_channels_list_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-channels-list.js */ "./src/components/front-yt/js/create-channels-list.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
/*****************
Функция createAside возвращает элементы aside меню
*****************/
/*
Алгоритм работы
1. Функция createAside принимает массив channels с каналами по одной теме
2. Создаем массив parentDiv для элементов меню aside
3. Создадим первый элемент firstLi меню со всеми видео

4. По клику на первый элемент firstLi
4.1 добавим ему class="active"
4.2 выведем список всех видео
4.3 добавим тему в заголовок h2

5. Добавляем элемент firstLi в массив parentDiv для элементов меню aside
6. Создадим массив channels2 для массивов по 20 элементов
7. Создадим элемент asideLi меню aside с 20 видео

8. По клику на элемент asideLi
8.1 добавим ему class="active"
8.2 выведем список всех видео
8.3 добавим тему в заголовок h2

9. Добавляем элемент asideLi в массив parentDiv для элементов меню aside
*/



//1. Функция createAside принимает массив channels с каналами по одной теме
function createAside(channels) {
  var _ref;
  var h2 = document.querySelector('h2');
  var currentContent = document.querySelector('#youtube');

  //2. Создаем массив parentDiv для элементов меню aside
  var parentDiv = [];

  //3. Создадим первый элемент firstLi меню со всеми видео
  var firstLi = document.createElement('a');
  firstLi.href = "#";
  firstLi.innerHTML = 'all';
  var show = (_ref = []).concat.apply(_ref, _toConsumableArray(channels));
  var firstChannelsList = (0,_create_channels_list_js__WEBPACK_IMPORTED_MODULE_0__.createChannelsList)(show);

  //4. По клику на первый элемент firstLi
  firstLi.addEventListener('click', function (e) {
    e.preventDefault();

    //4.1 добавим ему class="active"
    classActive(firstLi);

    //4.2 выведем список всех видео
    currentContent.innerHTML = '';
    currentContent.append.apply(currentContent, _toConsumableArray(firstChannelsList));

    //4.3 добавим тему в заголовок h2
    h2.innerHTML = show[0].theme;
  });

  //5. Добавляем элемент firstLi в массив parentDiv для элементов меню aside
  parentDiv.push(firstLi);

  //6. Создадим массив channels2 для массивов по 20 элементов
  var channels2 = [];
  var j = 0;
  var _loop = function _loop(i) {
    channels2[j] = channels.slice(i, i + 20);

    //7. Создадим элемент asideLi меню aside с 20 видео
    var asideLi = document.createElement('a');
    asideLi.href = "#";
    asideLi.innerHTML = channels2[j][0].theme + ' ' + (j + 1);
    var show = channels2[j];
    var overChannelsList = (0,_create_channels_list_js__WEBPACK_IMPORTED_MODULE_0__.createChannelsList)(show);

    //8. По клику на элемент asideLi
    asideLi.addEventListener('click', function (e) {
      e.preventDefault();

      //8.1 добавим ему class="active"
      classActive(asideLi);

      //8.2 выведем список всех видео
      currentContent.innerHTML = '';
      currentContent.append.apply(currentContent, _toConsumableArray(overChannelsList));

      //8.3 добавим тему в заголовок h2
      h2.innerHTML = asideLi.innerHTML;
    });

    //9. Добавляем элемент asideLi в массив parentDiv для элементов меню aside
    parentDiv.push(asideLi);
    j++;
  };
  for (var i = 0; i < channels.length; i += 20) {
    _loop(i);
  }

  //Ставим class="active" выбранному элементу меню и убираем с остальных
  function classActive(elementLi) {
    parentDiv.forEach(function (li) {
      li.classList.remove('active');
    });
    elementLi.classList.add('active');
  }
  return parentDiv;
}

/***/ }),

/***/ "./src/components/front-yt/js/create-channels-list.js":
/*!************************************************************!*\
  !*** ./src/components/front-yt/js/create-channels-list.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createChannelsList": () => (/* binding */ createChannelsList)
/* harmony export */ });
/*****************
Функция createChannelsList возвращает список элементов li с youtube каналами для элемента aside меню
*****************/
/*
Алгоритм работы
1. Функция createChannelsList принимает элемент список каналов
2. Отсортируем каналы по названию
3. Создаем массив parentDiv для элементов li списка
4. Создадим элемент elementLi списка каналов
5. Добавим элемент elementLi в массив parentDiv для элементов li списка
*/

//1. Функция createChannelsList принимает элемент список каналов
function createChannelsList(data) {
  //2. Отсортируем каналы по названию
  data.sort(function (a, b) {
    return a.title.localeCompare(b.title, 'en');
  });

  //3. Создаем массив parentDiv для элементов li списка
  var parentDiv = [];
  var _loop = function _loop(i) {
    //4. Создадим элемент elementLi списка каналов
    var elementLi = document.createElement('li');
    elementLi.addEventListener('mouseover', addColor);
    elementLi.addEventListener('mouseout', removeColor);
    elementLi.innerHTML = "\n    <a href=\"".concat(data[i].link, "\" target=\"_blank\">").concat(data[i].title, "</a>\n    <div>").concat(data[i].author, "</div>\n    <div>").concat(data[i].city, "</div>\n    <div>").concat(data[i].country, "</div>\n    <div><a href =\"").concat(data[i].site, "\" target=\"_blank\">").concat(data[i].site, "</a></div>\n    <div>").concat(data[i].dateFirstVideo, " - ").concat(data[i].dateLastVideo, "</div>\n    <div>").concat(data[i].amountVideos, " \u0432\u0438\u0434\u0435\u043E</div>");

    //5. Добавим элемент elementLi в массив parentDiv для элементов li списка
    parentDiv.push(elementLi);
    function addColor() {
      elementLi.classList.add('over');
    }
    function removeColor() {
      elementLi.classList.remove('over');
    }
  };
  for (var i = 0; i < data.length; i++) {
    _loop(i);
  }
  return parentDiv;
}

/***/ }),

/***/ "./src/components/front-yt/js/create-data.js":
/*!***************************************************!*\
  !*** ./src/components/front-yt/js/create-data.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createData": () => (/* binding */ createData)
/* harmony export */ });
/* harmony import */ var _data_data_front_yt_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data/data-front-yt.js */ "./src/components/front-yt/js/data/data-front-yt.js");
/* harmony import */ var _data_data_front_yt_eng_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data/data-front-yt-eng.js */ "./src/components/front-yt/js/data/data-front-yt-eng.js");
/* harmony import */ var _data_data_front_yt_srb_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data/data-front-yt-srb.js */ "./src/components/front-yt/js/data/data-front-yt-srb.js");
/* harmony import */ var _data_data_front_yt_cze_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data/data-front-yt-cze.js */ "./src/components/front-yt/js/data/data-front-yt-cze.js");
/* harmony import */ var _data_data_front_yt_py_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./data/data-front-yt-py.js */ "./src/components/front-yt/js/data/data-front-yt-py.js");
/*****************
Функция createData возвращает объект data
*****************/
/*
Алгоритм работы
1. Импортируем массивы из файлов data-yt.js ...
2. Создаем массив dataArray для импортированных массивов
3. Создаем массив с dataYt из массива dataArray
4. Создаем объект result
5. Проходим по массиву с фильмами dataVideo
6. Создаем массив category
7. Создаем массив каналов для каждого элемента массива category
8. Возвращаем объект result
*/

//1. Импортируем массивы из файлов data-yt.js ...






//2. Создаем массив dataArray для импортированных массивов
var dataArray = [_data_data_front_yt_js__WEBPACK_IMPORTED_MODULE_0__.dataFrontYt, _data_data_front_yt_eng_js__WEBPACK_IMPORTED_MODULE_1__.dataFrontYtEng, _data_data_front_yt_srb_js__WEBPACK_IMPORTED_MODULE_2__.dataFrontYtSrb, _data_data_front_yt_cze_js__WEBPACK_IMPORTED_MODULE_3__.dataFrontYtCze, _data_data_front_yt_py_js__WEBPACK_IMPORTED_MODULE_4__.dataFrontYtPython];
function createData() {
  var _ref;
  //3. Создаем массив dataYt из массива dataArray
  var dataYt = (_ref = []).concat.apply(_ref, dataArray);

  //4. Создаем объект result
  var result = {};
  var category;

  //5. Проходим по массиву с фильмами dataVideo
  dataYt.forEach(function (elem) {
    //Определим категорию для menu-nav по теме
    category = elem.theme;

    //6. Создаем массив category
    if (category && !(category in result)) {
      result[category] = [];
    }

    //7. Создаем массив каналов для каждого элемента массива category
    if (category) {
      result[category].push(elem);
    }
  });

  //8. Возвращаем объект result
  return result;
}

/***/ }),

/***/ "./src/components/front-yt/js/data/data-front-yt-cze.js":
/*!**************************************************************!*\
  !*** ./src/components/front-yt/js/data/data-front-yt-cze.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dataFrontYtCze": () => (/* binding */ dataFrontYtCze)
/* harmony export */ });
var dataFrontYtCze = [{
  "id": 1,
  "theme": "frontend cze",
  "title": "David Šetek - Hackni svou budoucnost",
  "author": "David Šetek",
  "city": "",
  "country": "Чехия",
  "link": "https://www.youtube.com/@hacknisvoubudoucnost/videos",
  "site": "",
  "dateFirstVideo": "2019.12.15",
  "dateLastVideo": "2023.01.02",
  "amountVideos": 1399
}, {
  "id": 2,
  "theme": "frontend cze",
  "title": "ROB WEB s yablkom",
  "author": "ROB",
  "city": "",
  "country": "Чехия",
  "link": "https://www.youtube.com/@RobWebSK/videos",
  "site": "",
  "dateFirstVideo": "2020.06.08",
  "dateLastVideo": "2022.09.23",
  "amountVideos": 68
}, {}];

/***/ }),

/***/ "./src/components/front-yt/js/data/data-front-yt-eng.js":
/*!**************************************************************!*\
  !*** ./src/components/front-yt/js/data/data-front-yt-eng.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dataFrontYtEng": () => (/* binding */ dataFrontYtEng)
/* harmony export */ });
var dataFrontYtEng = [{
  "id": 1,
  "theme": "frontend eng",
  "title": "Angular University",
  "author": "",
  "city": "",
  "country": "",
  "link": "https://www.youtube.com/@angularuniversity7442/videos",
  "site": "",
  "dateFirstVideo": "2016.05.20",
  "dateLastVideo": "2022.10.21",
  "amountVideos": 291
}, {
  "id": 2,
  "theme": "frontend eng",
  "title": "Coding Addict",
  "author": "",
  "city": "",
  "country": "",
  "link": "https://www.youtube.com/@CodingAddict/videos",
  "site": "",
  "dateFirstVideo": "2016.12.16",
  "dateLastVideo": "2022.12.21",
  "amountVideos": 639
}, {
  "id": 3,
  "theme": "frontend eng",
  "title": "CSS CODER",
  "author": "",
  "city": "",
  "country": "",
  "link": "https://www.youtube.com/@csscoder8892/videos",
  "site": "",
  "dateFirstVideo": "2019.10.18",
  "dateLastVideo": "2022.08.31",
  "amountVideos": 162
}, {
  "id": 4,
  "theme": "frontend eng",
  "title": "dcode",
  "author": "",
  "city": "",
  "country": "",
  "link": "https://www.youtube.com/@dcode-software/videos",
  "site": "",
  "dateFirstVideo": "2017.08.30",
  "dateLastVideo": "2022.12.20",
  "amountVideos": 650
}, {
  "id": 5,
  "theme": "frontend eng",
  "title": "DesignCourse",
  "author": "",
  "city": "",
  "country": "",
  "link": "https://www.youtube.com/@DesignCourse/videos",
  "site": "",
  "dateFirstVideo": "2010.04.04",
  "dateLastVideo": "2023.01.02",
  "amountVideos": 1130
}, {
  "id": 6,
  "theme": "frontend eng",
  "title": "Easy Tutorials",
  "author": "",
  "city": "",
  "country": "",
  "link": "https://www.youtube.com/@EasyTutorialsVideo/videos",
  "site": "",
  "dateFirstVideo": "2015.03.29",
  "dateLastVideo": "2023.01.02",
  "amountVideos": 528
}, {
  "id": 7,
  "theme": "frontend eng",
  "title": "edureka",
  "author": "",
  "city": "",
  "country": "",
  "link": "https://www.youtube.com/@edurekaIN/videos",
  "site": "",
  "dateFirstVideo": "2012.06.29",
  "dateLastVideo": "2023.01.02",
  "amountVideos": 8265
}, {
  "id": 8,
  "theme": "frontend eng",
  "title": "freeCodeCamp.org",
  "author": "",
  "city": "",
  "country": "",
  "link": "https://www.youtube.com/@freecodecamp/videos",
  "site": "",
  "dateFirstVideo": "2015.07.17",
  "dateLastVideo": "2022.12.20",
  "amountVideos": 1383
}, {
  "id": 9,
  "theme": "frontend eng",
  "title": "FreeFrontend",
  "author": "",
  "city": "",
  "country": "",
  "link": "https://www.youtube.com/@FreeFrontend/videos",
  "site": "",
  "dateFirstVideo": "2019.07.19",
  "dateLastVideo": "2021.10.08",
  "amountVideos": 81
}, {
  "id": 10,
  "theme": "frontend eng",
  "title": "LearnCode.academy",
  "author": "",
  "city": "",
  "country": "",
  "link": "https://www.youtube.com/@learncodeacademy/videos",
  "site": "",
  "dateFirstVideo": "2013.10.20",
  "dateLastVideo": "2022.04.27",
  "amountVideos": 168
}, {
  "id": 11,
  "theme": "frontend eng",
  "title": "Nerd's lesson",
  "author": "Nerd",
  "city": "",
  "country": "",
  "link": "https://www.youtube.com/@Nerdslesson/videos",
  "site": "",
  "dateFirstVideo": "2020.06.25",
  "dateLastVideo": "2022.12.18",
  "amountVideos": 59
}, {
  "id": 12,
  "theme": "frontend eng",
  "title": "Programming with Mosh",
  "author": "Mosh",
  "city": "",
  "country": "",
  "link": "https://www.youtube.com/@programmingwithmosh/videos",
  "site": "",
  "dateFirstVideo": "2014.10.07",
  "dateLastVideo": "2022.12.20",
  "amountVideos": 173
}, {
  "id": 13,
  "theme": "frontend eng",
  "title": "RS School in English",
  "author": "",
  "city": "",
  "country": "",
  "link": "https://www.youtube.com/@RSSchool/videos",
  "site": "",
  "dateFirstVideo": "2022.02.21",
  "dateLastVideo": "2022.12.27",
  "amountVideos": 69
}, {
  "id": 14,
  "theme": "frontend eng",
  "title": "ShortBear",
  "author": "",
  "city": "",
  "country": "",
  "link": "https://www.youtube.com/@shortbear110/videos",
  "site": "",
  "dateFirstVideo": "2021.03.06",
  "dateLastVideo": "2023.04.17",
  "amountVideos": 377
}, {
  "id": 15,
  "theme": "frontend eng",
  "title": "SuperSimpleDev",
  "author": "Simon",
  "city": "",
  "country": "",
  "link": "https://www.youtube.com/@SuperSimpleDev/videos",
  "site": "",
  "dateFirstVideo": "2020.11.28",
  "dateLastVideo": "2023.05.22",
  "amountVideos": 19
}, {
  "id": 16,
  "theme": "frontend eng",
  "title": "The Net Ninja",
  "author": "",
  "city": "",
  "country": "",
  "link": "https://www.youtube.com/@NetNinja/videos",
  "site": "",
  "dateFirstVideo": "2015.04.22",
  "dateLastVideo": "2022.12.30",
  "amountVideos": 2022
}, {
  "id": 17,
  "theme": "frontend eng",
  "title": "The WebShala",
  "author": "",
  "city": "",
  "country": "",
  "link": "https://www.youtube.com/@TheWebShala/videos",
  "site": "",
  "dateFirstVideo": "2018.04.06",
  "dateLastVideo": "2022.12.02",
  "amountVideos": 169
}, {
  "id": 18,
  "theme": "frontend eng",
  "title": "Web Bos",
  "author": "",
  "city": "",
  "country": "",
  "link": "https://www.youtube.com/@WesBos/videos",
  "site": "",
  "dateFirstVideo": "2011.03.21",
  "dateLastVideo": "2022.12.08",
  "amountVideos": 298
}, {}];

/***/ }),

/***/ "./src/components/front-yt/js/data/data-front-yt-py.js":
/*!*************************************************************!*\
  !*** ./src/components/front-yt/js/data/data-front-yt-py.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dataFrontYtPython": () => (/* binding */ dataFrontYtPython)
/* harmony export */ });
var dataFrontYtPython = [{
  "id": 1,
  "theme": "python",
  "title": "Клуб дедов-программистов",
  "author": "",
  "city": "",
  "country": "",
  "link": "https://www.youtube.com/channel/UChbHeEGkYqM2b1HdAhf4y1g/videos",
  "site": "",
  "dateFirstVideo": "2021.07.02",
  "dateLastVideo": "2021.09.28",
  "amountVideos": 6
}, {
  "id": 2,
  "theme": "python",
  "title": "Компьютерные курсы Евгения Юртаева",
  "author": "Евгений Юртаев",
  "city": "Пермь",
  "country": "Россия",
  "link": "https://www.youtube.com/channel/UCCYEcYDdem4Xx5O0c0G3wgA",
  "site": "https://urtaev.com/",
  "dateFirstVideo": "2018.01.04",
  "dateLastVideo": "2021.08.02",
  "amountVideos": 226
}, {
  "id": 3,
  "theme": "python",
  "title": "Электротехника и электроника для программистов",
  "author": "Анатолий Глазов",
  "city": "Рыбница",
  "country": "Россия",
  "link": "https://www.youtube.com/user/Zefar91",
  "site": "http://abglazov.rfpgu.ru/",
  "dateFirstVideo": "2011.11.06",
  "dateLastVideo": "2021.06.04",
  "amountVideos": 412
}, {
  "id": 4,
  "theme": "python",
  "title": "Natasha Samoylenko",
  "author": "Наташа Самойленко",
  "city": "",
  "country": "",
  "link": "https://www.youtube.com/c/PyNEng/videos",
  "site": "https://natenka.github.io/",
  "dateFirstVideo": "2019.02.01",
  "dateLastVideo": "2021.09.09",
  "amountVideos": 182
}, {
  "id": 5,
  "theme": "python",
  "title": "PHP Zone",
  "author": "Артем Ивашкевич",
  "city": "",
  "country": "",
  "link": "https://www.youtube.com/channel/UCXhQnwQUhGuz15pddQRW2-g",
  "site": "https://webshake.ru/",
  "dateFirstVideo": "2017.02.12",
  "dateLastVideo": "2020.01.27",
  "amountVideos": 28
}, {
  "id": 6,
  "theme": "python",
  "title": "Senior Pomidor Developer",
  "author": "",
  "city": "",
  "country": "",
  "link": "https://www.youtube.com/channel/UCnjXFjG9HcinaU-oY28rLiw",
  "site": "https://webshake.ru/",
  "dateFirstVideo": "2019.09.04",
  "dateLastVideo": "2020.09.09",
  "amountVideos": 20
}, {
  "id": 7,
  "theme": "python",
  "title": "Тимофей Хирьянов",
  "author": "Тимофей Хирьянов",
  "city": "Москва",
  "country": "Россия",
  "link": "https://www.youtube.com/user/tkhirianov",
  "site": "https://webshake.ru/",
  "dateFirstVideo": "2015.09.08",
  "dateLastVideo": "2021.06.05",
  "amountVideos": 253
}, {
  "id": 8,
  "theme": "python",
  "title": "ЖИЗНЬ АНОНИМА",
  "author": "Александр",
  "city": "Ростов-на-Дону",
  "country": "Россия",
  "link": "https://www.youtube.com/@user-bv3cl5pk1y/videos",
  "site": "",
  "dateFirstVideo": "2017.08.31",
  "dateLastVideo": "2022.11.03",
  "amountVideos": 103
}, {
  "id": 9,
  "theme": "python",
  "title": "Свалка cобеседований",
  "author": "",
  "city": "Ростов-на-Дону",
  "country": "Россия",
  "link": "https://www.youtube.com/channel/UCXwI6MSHWS3AqEax9gqk4lg/videos",
  "site": "",
  "dateFirstVideo": "2021.10.11",
  "dateLastVideo": "2022.11.20",
  "amountVideos": 59
}, {
  "id": 295,
  "theme": "python",
  "title": "Lo-Fi Собеседования",
  "author": "",
  "city": "Ростов-на-Дону",
  "country": "Россия",
  "link": "https://www.youtube.com/@lo-fi6927/videos",
  "site": "",
  "dateFirstVideo": "2022.01.17",
  "dateLastVideo": "2022.07.25",
  "amountVideos": 12
}, {
  "id": 318,
  "theme": "python",
  "title": "ЖИЗНЬ ЖИЗНИ АНОНИМА",
  "author": "",
  "city": "Ростов-на-Дону",
  "country": "Россия",
  "link": "https://www.youtube.com/channel/UCa_O4hRfliKPAMm_LTfU00Q/videos",
  "site": "",
  "dateFirstVideo": "2020.09.22",
  "dateLastVideo": "2021.11.29",
  "amountVideos": 6
}, {}];

/***/ }),

/***/ "./src/components/front-yt/js/data/data-front-yt-srb.js":
/*!**************************************************************!*\
  !*** ./src/components/front-yt/js/data/data-front-yt-srb.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dataFrontYtSrb": () => (/* binding */ dataFrontYtSrb)
/* harmony export */ });
var dataFrontYtSrb = [{
  "id": 1,
  "theme": "frontend srb",
  "title": "cysecor",
  "author": "",
  "city": "",
  "country": "Сербия",
  "link": "https://www.youtube.com/@cysecor/videos",
  "site": "",
  "dateFirstVideo": "2020.02.19",
  "dateLastVideo": "2022.12.14",
  "amountVideos": 116
}, {
  "id": 2,
  "theme": "frontend srb",
  "title": "RIS HUB UE",
  "author": "",
  "city": "",
  "country": "Сербия",
  "link": "https://www.youtube.com/@rishubue/videos",
  "site": "",
  "dateFirstVideo": "2020.10.29",
  "dateLastVideo": "2022.11.03",
  "amountVideos": 103
}, {}];

/***/ }),

/***/ "./src/components/front-yt/js/data/data-front-yt.js":
/*!**********************************************************!*\
  !*** ./src/components/front-yt/js/data/data-front-yt.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dataFrontYt": () => (/* binding */ dataFrontYt)
/* harmony export */ });
var dataFrontYt = [{
  "id": 1,
  "theme": "frontend",
  "title": "OTUS Онлайн - образование",
  "author": "Александр Шевчук, Дмитрий Охрименко, Александр Бабич",
  "city": "Москва",
  "country": "Россия",
  "link": "https://www.youtube.com/@otus-9843/videos",
  "site": "https://otus.ru/",
  "dateFirstVideo": "2017.05.29",
  "dateLastVideo": "2022.11.08",
  "amountVideos": 2950
}, {
  "id": 2,
  "theme": "frontend",
  "title": "ITVDN",
  "author": "Александр Шевчук, Дмитрий Охрименко, Александр Бабич",
  "city": "Киев",
  "country": "Украина",
  "link": "https://www.youtube.com/@ITVDN/videos",
  "site": "https://itvdn.com/ru",
  "dateFirstVideo": "2013.05.03",
  "dateLastVideo": "2022.10.25",
  "amountVideos": 2137
}, {
  "id": 3,
  "theme": "frontend",
  "title": "Skillbox Программирование",
  "author": "Максим Шачков",
  "city": "Москва",
  "country": "Россия",
  "link": "https://www.youtube.com/@skillboxprogramming/videos",
  "site": "https://skillbox.ru/",
  "dateFirstVideo": "2016.06.23",
  "dateLastVideo": "2022.11.08",
  "amountVideos": 1704
}, {
  "id": 4,
  "theme": "frontend",
  "title": "loftblog",
  "author": "Дмитрий Ковальчук",
  "city": "Санкт Петербург",
  "country": "Россия",
  "link": "https://www.youtube.com/@loftblog/videos",
  "site": "https://loftblog.ru/",
  "dateFirstVideo": "2013.04.01",
  "dateLastVideo": "2022.11.07",
  "amountVideos": 1701
}, {
  "id": 5,
  "theme": "frontend",
  "title": "VK Team",
  "author": "",
  "city": "Москва",
  "country": "Россия",
  "link": "https://www.youtube.com/@vkteamchannel/videos",
  "site": "https://vk.company/ru/",
  "dateFirstVideo": "2013.10.17",
  "dateLastVideo": "2022.05.26",
  "amountVideos": 1484
}, {
  "id": 6,
  "theme": "frontend",
  "title": "Гоша Дударь",
  "author": "Гоша Дударь",
  "city": "Киев",
  "country": "Украина",
  "link": "https://www.youtube.com/@gosha_dudar/videos",
  "site": "https://itproger.com/",
  "dateFirstVideo": "2014.12.23",
  "dateLastVideo": "2022.11.08",
  "amountVideos": 1202
}, {
  "id": 7,
  "theme": "frontend",
  "title": "WebForMySelf",
  "author": "Андрей Бернацкий, Андрей Кудлай, Алексей Суворов",
  "city": "Москва",
  "country": "Россия",
  "link": "https://www.youtube.com/@webformyself/videos",
  "site": "https://webformyself.com/",
  "dateFirstVideo": "2012.02.12",
  "dateLastVideo": "2022.11.02",
  "amountVideos": 1108
}, {
  "id": 8,
  "theme": "frontend",
  "title": "Аматор DED",
  "author": "",
  "city": "",
  "country": "Польша",
  "link": "https://www.youtube.com/@amatorDed/videos",
  "site": "",
  "dateFirstVideo": "2021.05.03",
  "dateLastVideo": "2022.11.08",
  "amountVideos": 1071
}, {
  "id": 9,
  "theme": "frontend",
  "title": "selfedu",
  "author": "",
  "city": "",
  "country": "Россия",
  "link": "https://www.youtube.com/@selfedu_rus/videos",
  "site": "https://proproprogs.ru/",
  "dateFirstVideo": "2015.04.21",
  "dateLastVideo": "2022.11.08",
  "amountVideos": 938
}, {
  "id": 10,
  "theme": "frontend",
  "title": "ITDoctor",
  "author": "Исмаил Усеинов",
  "city": "Новочеркасск",
  "country": "Россия",
  "link": "https://www.youtube.com/@ITDoctor/videos",
  "site": "https://itdoctor.ru/",
  "dateFirstVideo": "2018.02.12",
  "dateLastVideo": "2022.11.05",
  "amountVideos": 878
}, {
  "id": 11,
  "theme": "frontend",
  "title": "Viktor Bogutskii",
  "author": "Виктор Богутский",
  "city": "",
  "country": "США",
  "link": "https://www.youtube.com/@ViktorBogutskii/videos",
  "site": "https://pasv.us/",
  "dateFirstVideo": "2018.05.30",
  "dateLastVideo": "2022.11.04",
  "amountVideos": 819
}, {
  "id": 12,
  "theme": "frontend",
  "title": "Rolling Scopes School",
  "author": "",
  "city": "Минск",
  "country": "Беларусь",
  "link": "https://www.youtube.com/@RollingScopesSchool/videos",
  "site": "https://rs.school/",
  "dateFirstVideo": "2019.08.25",
  "dateLastVideo": "2022.11.04",
  "amountVideos": 773
}, {
  "id": 13,
  "theme": "frontend",
  "title": "WebDev с нуля",
  "author": "Александр Лущенко",
  "city": "Киев",
  "country": "Украина",
  "link": "https://www.youtube.com/@itgid/videos",
  "site": "https://itgid.info/",
  "dateFirstVideo": "2015.08.10",
  "dateLastVideo": "2022.08.11",
  "amountVideos": 747
}, {
  "id": 14,
  "theme": "frontend",
  "title": "Hillel IT School",
  "author": "Вадим Друмов",
  "city": "Киев",
  "country": "Украина",
  "link": "https://www.youtube.com/@HillelITSchool/videos",
  "site": "https://ithillel.ua/",
  "dateFirstVideo": "2016.03.02",
  "dateLastVideo": "2022.11.05",
  "amountVideos": 745
}, {
  "id": 15,
  "theme": "frontend",
  "title": "Миша Ларченко",
  "author": "Миша Ларченко",
  "city": "Амстердам",
  "country": "Нидерланды",
  "link": "https://www.youtube.com/@larchanka/videos",
  "site": "https://www.mobila.name/",
  "dateFirstVideo": "2008.09.17",
  "dateLastVideo": "2022.11.08",
  "amountVideos": 729
}, {
  "id": 16,
  "theme": "frontend",
  "title": "OTUS Трансляции 2",
  "author": "",
  "city": "Москва",
  "country": "Россия",
  "link": "https://www.youtube.com/@otus2630/videos",
  "site": "https://otus.ru/",
  "dateFirstVideo": "2017.11.19",
  "dateLastVideo": "2022.11.08",
  "amountVideos": 702
}, {
  "id": 17,
  "theme": "frontend",
  "title": "Академия разработки MediaSoft",
  "author": "Максим Суханкин",
  "city": "Ульяновск",
  "country": "Россия",
  "link": "https://www.youtube.com/@MediaSoft_academy/videos",
  "site": "https://academy.mediasoft.team/",
  "dateFirstVideo": "2021.09.08",
  "dateLastVideo": "2022.11.08",
  "amountVideos": 670
}, {
  "id": 18,
  "theme": "frontend",
  "title": "Фронтенд",
  "author": "",
  "city": "Москва",
  "country": "Россия",
  "link": "https://www.youtube.com/@user-kd6bu2qj1v/videos",
  "site": "https://academy.yandex.ru/",
  "dateFirstVideo": "2014.11.05",
  "dateLastVideo": "2022.09.01",
  "amountVideos": 604
}, {
  "id": 19,
  "theme": "frontend",
  "title": "Максат Биримкулов",
  "author": "Максат Биримкулов",
  "city": "Бишкек",
  "country": "Киргизия",
  "link": "https://www.youtube.com/@user-zw7tl7ic4k/videos",
  "site": "",
  "dateFirstVideo": "2020.12.09",
  "dateLastVideo": "2022.11.08",
  "amountVideos": 587
}, {
  "id": 20,
  "theme": "frontend",
  "title": "Glo Academy",
  "author": "Артем Исламов",
  "city": "Казань",
  "country": "Россия",
  "link": "https://www.youtube.com/@Glo_Academy/videos",
  "site": "https://glo.academy/",
  "dateFirstVideo": "2016.03.12",
  "dateLastVideo": "2022.09.12",
  "amountVideos": 582
}, {
  "id": 21,
  "theme": "frontend",
  "title": "Хекслет",
  "author": "Кирилл Мокевнин",
  "city": "Москва",
  "country": "Россия",
  "link": "https://www.youtube.com/@HexletOrg/videos",
  "site": "https://ru.hexlet.io/",
  "dateFirstVideo": "2012.10.23",
  "dateLastVideo": "2022.10.13",
  "amountVideos": 579
}, {
  "id": 22,
  "theme": "frontend",
  "title": "WAYUP & Андрей Гаврилов",
  "author": "Андрей Гаврилов",
  "city": "Одесса",
  "country": "Украина",
  "link": "https://www.youtube.com/@WAYUPIN/videos",
  "site": "https://wayup.in/",
  "dateFirstVideo": "2015.05.23",
  "dateLastVideo": "2022.11.04",
  "amountVideos": 570
}, {
  "id": 23,
  "theme": "frontend",
  "title": "webDev",
  "author": "Евгений Ковальчук",
  "city": "Минск",
  "country": "Беларусь",
  "link": "https://www.youtube.com/@YauhenKavalchuk/videos",
  "site": "",
  "dateFirstVideo": "2017.03.30",
  "dateLastVideo": "2022.11.08",
  "amountVideos": 567
}, {
  "id": 24,
  "theme": "frontend",
  "title": "Web Developer Blog",
  "author": "Алексей Супрун",
  "city": "Харьков",
  "country": "Украина",
  "link": "https://www.youtube.com/@SuprunAlexey/videos",
  "site": "",
  "dateFirstVideo": "2015.11.21",
  "dateLastVideo": "2022.05.13",
  "amountVideos": 554
}, {
  "id": 25,
  "theme": "frontend",
  "title": "Веб-программист Дмитрий Ченгаев",
  "author": "Дмитрий Ченгаев",
  "city": "Усть-Каменогорск",
  "country": "Казахстан",
  "link": "https://www.youtube.com/@-..9609/videos",
  "site": "https://webkyrs.info/",
  "dateFirstVideo": "2016.06.24",
  "dateLastVideo": "2022.10.14",
  "amountVideos": 539
}, {
  "id": 26,
  "theme": "frontend",
  "title": "Игорь Бабко",
  "author": "Игорь Бабко",
  "city": "",
  "country": "Украина",
  "link": "https://www.youtube.com/@igorbabko/videos",
  "site": "",
  "dateFirstVideo": "2021.03.10",
  "dateLastVideo": "2022.11.08",
  "amountVideos": 535
}, {
  "id": 27,
  "theme": "frontend",
  "title": "IT-KAMASUTRA",
  "author": "Дмитрий Кузюбердин",
  "city": "Минск",
  "country": "Беларусь",
  "link": "https://www.youtube.com/@ITKAMASUTRA/videos",
  "site": "https://it-incubator.io/",
  "dateFirstVideo": "2018.09.10",
  "dateLastVideo": "2022.11.08",
  "amountVideos": 528
}, {
  "id": 28,
  "theme": "frontend",
  "title": "Loftschool",
  "author": "Дмитрий Ковальчук",
  "city": "Санкт Петербург",
  "country": "Россия",
  "link": "https://www.youtube.com/@LoftschoolVideo/videos",
  "site": "https://loftschool.com/",
  "dateFirstVideo": "2014.10.11",
  "dateLastVideo": "2022.08.12",
  "amountVideos": 520
}, {
  "id": 29,
  "theme": "frontend",
  "title": "Веб-стандарты",
  "author": "Никита Дубко, Андрей Мелихов, Вадим Макеев, Юля Миоцен",
  "city": "Москва",
  "country": "Россия",
  "link": "https://www.youtube.com/@webstandards_ru/videos",
  "site": "https://web-standards.ru/",
  "dateFirstVideo": "2013.09.18",
  "dateLastVideo": "2022.11.07",
  "amountVideos": 518
}, {
  "id": 30,
  "theme": "frontend",
  "title": "Bogdan Stashchuk",
  "author": "Богдан Стащук",
  "city": "Киев",
  "country": "Украина",
  "link": "https://www.youtube.com/@Bogdan_Stashchuk/videos",
  "site": "https://pro.stashchuk.com/",
  "dateFirstVideo": "2018.05.02",
  "dateLastVideo": "2022.09.08",
  "amountVideos": 513
}, {
  "id": 31,
  "theme": "frontend",
  "title": "The Rolling Scopes",
  "author": "",
  "city": "Минск",
  "country": "Беларусь",
  "link": "https://www.youtube.com/@therollingscopes/videos",
  "site": "https://rs.school/",
  "dateFirstVideo": "2013.08.02",
  "dateLastVideo": "2021.08.04",
  "amountVideos": 509
}, {
  "id": 32,
  "theme": "frontend",
  "title": "Финты WordPress",
  "author": "Артем Абрамович",
  "city": "Балаково",
  "country": "Россия",
  "link": "https://www.youtube.com/@wpruse/videos",
  "site": "https://wpruse.ru/",
  "dateFirstVideo": "2013.08.02",
  "dateLastVideo": "2021.12.30",
  "amountVideos": 506
}, {
  "id": 33,
  "theme": "frontend",
  "title": "Joomla WFMS",
  "author": "Виктор Гавриленко",
  "city": "Москва",
  "country": "Россия",
  "link": "https://www.youtube.com/@joomlawfms5471/videos",
  "site": "https://webformyself.com/",
  "dateFirstVideo": "2018.08.11",
  "dateLastVideo": "2022.10.14",
  "amountVideos": 487
}, {
  "id": 34,
  "theme": "frontend",
  "title": "JavaScript.Ninja",
  "author": "Илья Климов",
  "city": "Харьков",
  "country": "Украина",
  "link": "https://www.youtube.com/@JavaScriptNinja/videos",
  "site": "https://javascript.ninja/",
  "dateFirstVideo": "2015.10.18",
  "dateLastVideo": "2022.10.15",
  "amountVideos": 483
}, {
  "id": 35,
  "theme": "frontend",
  "title": "OTUS Трансляции 3",
  "author": "",
  "city": "Москва",
  "country": "Россия",
  "link": "https://www.youtube.com/@otus3868/videos",
  "site": "https://otus.ru/",
  "dateFirstVideo": "2018.05.15",
  "dateLastVideo": "2022.11.07",
  "amountVideos": 481
}, {
  "id": 36,
  "theme": "frontend",
  "title": "EPAM RUSSIA нет уже",
  "author": "",
  "city": "",
  "country": "Россия",
  "link": "https://www.youtube.com/channel/UCo1fCtyXhdTrGnGUgoCHuCQ/videos",
  "site": "",
  "dateFirstVideo": "2015.10.12",
  "dateLastVideo": "2022.01.17",
  "amountVideos": 477
}, {
  "id": 37,
  "theme": "frontend",
  "title": "Михаил Базаров",
  "author": "Михаил Базаров",
  "city": "Санкт Петербург",
  "country": "Россия",
  "link": "https://www.youtube.com/user/camouf28/videos",
  "site": "https://bazarow.ru/",
  "dateFirstVideo": "2011.10.30",
  "dateLastVideo": "2022.08.14",
  "amountVideos": 419
}, {
  "id": 38,
  "theme": "frontend",
  "title": "Кубанычбек Назаралиев",
  "author": "Кубанычбек Назаралиев",
  "city": "",
  "country": "",
  "link": "https://www.youtube.com/@kuba_duishobaevich/videos",
  "site": "",
  "dateFirstVideo": "2011.10.13",
  "dateLastVideo": "2022.10.18",
  "amountVideos": 409
}, {
  "id": 39,
  "theme": "frontend",
  "title": "RED Group",
  "author": "Максим Шушвал",
  "city": "Москва",
  "country": "Россия",
  "link": "https://www.youtube.com/@REDGroup/videos",
  "site": "https://htmllessons.ru/",
  "dateFirstVideo": "2017.11.11",
  "dateLastVideo": "2022.11.07",
  "amountVideos": 406
}, {
  "id": 40,
  "theme": "frontend",
  "title": "uwebdesign",
  "author": "Александр Гончаров, Никита Тарасов",
  "city": "Челябинск",
  "country": "Россия",
  "link": "https://www.youtube.com/@uwebdesign/videos",
  "site": "https://uwebdesign.ru/",
  "dateFirstVideo": "2014.03.03",
  "dateLastVideo": "2022.07.07",
  "amountVideos": 400
}, {
  "id": 41,
  "theme": "frontend",
  "title": "Web Developer Nazar нет уже",
  "author": "",
  "city": "",
  "country": "",
  "link": "https://www.youtube.com/c/WebDeveloperNazar/videos",
  "site": "",
  "dateFirstVideo": "2020.05.18",
  "dateLastVideo": "2022.03.12",
  "amountVideos": 398
}, {
  "id": 42,
  "theme": "frontend",
  "title": "Дмитрий Трепачёв",
  "author": "Дмитрий Трепачёв",
  "city": "Минск",
  "country": "Беларусь",
  "link": "https://www.youtube.com/@user-zc1cv5ie1t/videos",
  "site": "https://code.mu/ru/",
  "dateFirstVideo": "2014.03.03",
  "dateLastVideo": "2022.07.07",
  "amountVideos": 397
}, {
  "id": 43,
  "theme": "frontend",
  "title": "JS Camp - Разработка React Native приложений",
  "author": "",
  "city": "",
  "country": "",
  "link": "https://www.youtube.com/@JavaScriptCampRU/videos",
  "site": "",
  "dateFirstVideo": "2018.07.30",
  "dateLastVideo": "2023.06.11",
  "amountVideos": 371
}, {
  "id": 44,
  "theme": "frontend",
  "title": "CodingWithTopchiy",
  "author": "",
  "city": "",
  "country": "",
  "link": "https://www.youtube.com/@codingwithtopchiy7214/videos",
  "site": "",
  "dateFirstVideo": "2022.06.09",
  "dateLastVideo": "2022.11.14",
  "amountVideos": 368
}, {
  "id": 45,
  "theme": "frontend",
  "title": "Frontend Channel",
  "author": "",
  "city": "Москва",
  "country": "Россия",
  "link": "https://www.youtube.com/@FrontendChannel/videos",
  "site": "https://frontendconf.ru/",
  "dateFirstVideo": "2017.12.24",
  "dateLastVideo": "2021.09.10",
  "amountVideos": 353
}, {
  "id": 46,
  "theme": "frontend",
  "title": "MaxGraph - cайты как страсть",
  "author": "Максим Васянович",
  "city": "Санкт Петербург",
  "country": "Россия",
  "link": "https://www.youtube.com/@maxgraph/videos",
  "site": "https://maxgraph.ru/",
  "dateFirstVideo": "2017.08.27",
  "dateLastVideo": "2022.11.03",
  "amountVideos": 350
}, {
  "id": 47,
  "theme": "frontend",
  "title": "FrontCoder",
  "author": "Анатолий Саламатин",
  "city": "Москва",
  "country": "Россия",
  "link": "https://www.youtube.com/@Frontcoder/videos",
  "site": "https://asalamatin.ru/",
  "dateFirstVideo": "2016.10.18",
  "dateLastVideo": "2021.08.05",
  "amountVideos": 338
}, {
  "id": 48,
  "theme": "frontend",
  "title": "IT-INCUBATOR",
  "author": "Дмитрий Кузюбердин",
  "city": "Минск",
  "country": "Беларусь",
  "link": "https://www.youtube.com/@ITINCUBATOR/videos",
  "site": "https://it-incubator.io/",
  "dateFirstVideo": "2019.03.21",
  "dateLastVideo": "2023.06.26",
  "amountVideos": 335
}, {
  "id": 49,
  "theme": "frontend",
  "title": "EDUCAT.courses",
  "author": "",
  "city": "",
  "country": "",
  "link": "https://www.youtube.com/@EDUCATcourses/videos",
  "site": "https://educat.courses/courses",
  "dateFirstVideo": "2020.05.02",
  "dateLastVideo": "2023.02.27",
  "amountVideos": 330
}, {
  "id": 50,
  "theme": "frontend",
  "title": "Timur Shemsedinov",
  "author": "Тимур Шемсединов",
  "city": "Киев",
  "country": "Украина",
  "link": "https://www.youtube.com/@TimurShemsedinov/videos",
  "site": "",
  "dateFirstVideo": "2012.08.12",
  "dateLastVideo": "2022.10.25",
  "amountVideos": 320
}, {
  "id": 51,
  "theme": "frontend",
  "title": "Solid Academy",
  "author": "",
  "city": "",
  "country": "",
  "link": "https://www.youtube.com/@solidacademy9880/videos",
  "site": "",
  "dateFirstVideo": "2022.01.05",
  "dateLastVideo": "2022.11.15",
  "amountVideos": 318
}, {
  "id": 52,
  "theme": "frontend",
  "title": "Евгений Попов",
  "author": "Евгений Попов",
  "city": "Екатеринбург",
  "country": "Россия",
  "link": "https://www.youtube.com/@evgeniypopovDOTcom/videos",
  "site": "https://ruseller.com/",
  "dateFirstVideo": "2011.11.16",
  "dateLastVideo": "2020.04.25",
  "amountVideos": 317
}, {
  "id": 53,
  "theme": "frontend",
  "title": "htmllab",
  "author": "Алексей Тарасов",
  "city": "",
  "country": "Россия",
  "link": "https://www.youtube.com/@HtmllabRu/videos",
  "site": "",
  "dateFirstVideo": "2016.06.10",
  "dateLastVideo": "2023.04.25",
  "amountVideos": 312
}, {
  "id": 54,
  "theme": "frontend",
  "title": "SACRED DEVELOPER",
  "author": "",
  "city": "",
  "country": "Украина",
  "link": "https://www.youtube.com/@SACREDDEVELOPER/videos",
  "site": "",
  "dateFirstVideo": "2022.04.11",
  "dateLastVideo": "2022.10.27",
  "amountVideos": 309
}, {
  "id": 55,
  "theme": "frontend",
  "title": "Otus Трансляции 4",
  "author": "",
  "city": "Москва",
  "country": "Россия",
  "link": "https://www.youtube.com/@otus4247/streams",
  "site": "https://otus.ru/",
  "dateFirstVideo": "2020.06.01",
  "dateLastVideo": "2022.11.09",
  "amountVideos": 301
}, {
  "id": 56,
  "theme": "frontend",
  "title": "АйТиБорода",
  "author": "Алексей Картынник",
  "city": "Минск",
  "country": "Беларусь",
  "link": "https://www.youtube.com/@itbeard/videos",
  "site": "https://itbeard.com/",
  "dateFirstVideo": "2018.05.13",
  "dateLastVideo": "2022.10.14",
  "amountVideos": 301
}, {
  "id": 57,
  "theme": "frontend",
  "title": "Андрей Андриевский",
  "author": "Андрей Андриевский",
  "city": "",
  "country": "Украина",
  "link": "https://www.youtube.com/@andrievskii/videos",
  "site": "",
  "dateFirstVideo": "2015.01.24",
  "dateLastVideo": "2021.05.29",
  "amountVideos": 296
}, {
  "id": 58,
  "theme": "frontend",
  "title": "Быть Программистом",
  "author": "Александр Сокирка",
  "city": "Кишинев",
  "country": "Молдова",
  "link": "https://www.youtube.com/@bedeveloper/videos",
  "site": "https://geniuscourses.com/",
  "dateFirstVideo": "2015.08.31",
  "dateLastVideo": "2022.10.22",
  "amountVideos": 296
}, {
  "id": 59,
  "theme": "frontend",
  "title": "Школа Вебмастеров",
  "author": "",
  "city": "Москва",
  "country": "Россия",
  "link": "https://www.youtube.com/@user-vk5bu7vc7s/videos",
  "site": "https://academy.yandex.ru/",
  "dateFirstVideo": "2015.09.01",
  "dateLastVideo": "2022.02.17",
  "amountVideos": 288
}, {
  "id": 60,
  "theme": "frontend",
  "title": "Laravel Creative",
  "author": "",
  "city": "",
  "country": "",
  "link": "https://www.youtube.com/@laravelcreative/videos",
  "site": "",
  "dateFirstVideo": "2021.02.18",
  "dateLastVideo": "2023.05.27",
  "amountVideos": 282
}, {
  "id": 61,
  "theme": "frontend",
  "title": "Vel Wild",
  "author": "Валя Дикая",
  "city": "Покровск",
  "country": "Украина",
  "link": "https://www.youtube.com/@VelWild/videos",
  "site": "https://vel-wild.pro/",
  "dateFirstVideo": "2019.06.23",
  "dateLastVideo": "2022.05.24",
  "amountVideos": 277
}, {
  "id": 62,
  "theme": "frontend",
  "title": "JavaScript.ru",
  "author": "Илья Кантор",
  "city": "Москва",
  "country": "Россия",
  "link": "https://www.youtube.com/@JavaScriptru-videos/videos",
  "site": "https://learn.javascript.ru/",
  "dateFirstVideo": "2012.01.13",
  "dateLastVideo": "2021.05.11",
  "amountVideos": 276
}, {
  "id": 63,
  "theme": "frontend",
  "title": "Школа itProger / Программирование",
  "author": "Гоша Дударь",
  "city": "Киев",
  "country": "Украина",
  "link": "https://www.youtube.com/@itproger/videos",
  "site": "https://itproger.com/",
  "dateFirstVideo": "2020.09.01",
  "dateLastVideo": "2022.11.06",
  "amountVideos": 274
}, {
  "id": 64,
  "theme": "frontend",
  "title": "Kostia Bazrov-WORK",
  "author": "Костя Базров",
  "city": "Москва",
  "country": "Россия",
  "link": "https://www.youtube.com/@KostiaBazrov/videos",
  "site": "",
  "dateFirstVideo": "2011.08.08",
  "dateLastVideo": "2022.05.05",
  "amountVideos": 272
}, {
  "id": 65,
  "theme": "frontend",
  "title": "Анна Блок",
  "author": "Анна Блок",
  "city": "Екатеринбург",
  "country": "Россия",
  "link": "https://www.youtube.com/@annblok_webdev/videos",
  "site": "https://tpverstak.ru/",
  "dateFirstVideo": "2017.09.10",
  "dateLastVideo": "2022.11.07",
  "amountVideos": 266
}, {
  "id": 66,
  "theme": "frontend",
  "title": "Masters Of Code",
  "author": "Юра Аллахвердов",
  "city": "",
  "country": "Украина",
  "link": "https://www.youtube.com/@MastersOfCode/videos",
  "site": "https://masters-of-code.com/",
  "dateFirstVideo": "2019.01.12",
  "dateLastVideo": "2022.11.06",
  "amountVideos": 260
}, {
  "id": 67,
  "theme": "frontend",
  "title": "Victor Stork нет уже",
  "author": "Виктор Сторк",
  "city": "Курск",
  "country": "Россия",
  "link": "https://www.youtube.com/c/VictorStork/videos",
  "site": "",
  "dateFirstVideo": "2018.08.25",
  "dateLastVideo": "2021.07.20",
  "amountVideos": 254
}, {
  "id": 68,
  "theme": "frontend",
  "title": "ItShell",
  "author": "",
  "city": "",
  "country": "Россия",
  "link": "https://www.youtube.com/@ITSHELL-WEB/videos",
  "site": "",
  "dateFirstVideo": "2021.04.17",
  "dateLastVideo": "2022.11.06",
  "amountVideos": 245
}, {
  "id": 69,
  "theme": "frontend",
  "title": "Kamil Abzalov",
  "author": "Камиль Абзалов",
  "city": "",
  "country": "Кипр",
  "link": "https://www.youtube.com/@Kamil-abzalovRu/videos",
  "site": "http://kamil-abzalov.ru/",
  "dateFirstVideo": "2014.06.29",
  "dateLastVideo": "2021.10.16",
  "amountVideos": 245
}, {
  "id": 70,
  "theme": "frontend",
  "title": "Evrone Development",
  "author": "",
  "city": "",
  "country": "",
  "link": "https://www.youtube.com/@EvroneDevelopment/videos",
  "site": "",
  "dateFirstVideo": "2018.06.28",
  "dateLastVideo": "2023.06.21",
  "amountVideos": 241
}, {
  "id": 71,
  "theme": "frontend",
  "title": "Владилен Минин",
  "author": "Владилен Минин",
  "city": "Санкт Петербург",
  "country": "Россия",
  "link": "https://www.youtube.com/@VladilenMinin/videos",
  "site": "https://vladilen.ru/vue",
  "dateFirstVideo": "2019.03.05",
  "dateLastVideo": "2022.11.05",
  "amountVideos": 238
}, {
  "id": 72,
  "theme": "frontend",
  "title": "ART PROGRAMS",
  "author": "Артур Хмелярский",
  "city": "Брест",
  "country": "Беларусь",
  "link": "https://www.youtube.com/@ARTPROGRAMS/videos",
  "site": "https://art-programs.ru/",
  "dateFirstVideo": "2019.09.22",
  "dateLastVideo": "2022.11.07",
  "amountVideos": 235
}, {
  "id": 73,
  "theme": "frontend",
  "title": "Дмитрий Герасимов",
  "author": "Дмитрий Герасимов",
  "city": "",
  "country": "Россия",
  "link": "https://www.youtube.com/@dmitrii_gerasimov/videos",
  "site": "",
  "dateFirstVideo": "2020.07.22",
  "dateLastVideo": "2022.11.09",
  "amountVideos": 235
}, {
  "id": 74,
  "theme": "frontend",
  "title": "Фрилансер по жизни",
  "author": "Женя Андриканич",
  "city": "Ужгород",
  "country": "Украина",
  "link": "https://www.youtube.com/@FreelancerLifeStyle/videos",
  "site": "https://fls.guru/",
  "dateFirstVideo": "2019.05.08",
  "dateLastVideo": "2022.10.31",
  "amountVideos": 234
}, {
  "id": 75,
  "theme": "frontend",
  "title": "Обучение WordPress & WooCommerce",
  "author": "",
  "city": "Москва",
  "country": "Россия",
  "link": "https://www.youtube.com/@GagarinStudio/videos",
  "site": "",
  "dateFirstVideo": "2018.01.11",
  "dateLastVideo": "2022.02.18",
  "amountVideos": 233
}, {
  "id": 76,
  "theme": "frontend",
  "title": "Denis Timoshitskiy",
  "author": "Денис Тимошитский",
  "city": "Санкт Петербург",
  "country": "Россия",
  "link": "https://www.youtube.com/@DenisTimoshitskiy/videos",
  "site": "https://d-e-n.info/",
  "dateFirstVideo": "2019.01.09",
  "dateLastVideo": "2022.11.07",
  "amountVideos": 231
}, {
  "id": 77,
  "theme": "frontend",
  "title": "Сергей Дмитриевский",
  "author": "Сергей Дмитриевский",
  "city": "Москва",
  "country": "Россия",
  "link": "https://www.youtube.com/@sergeydmitrievsky/videos",
  "site": "",
  "dateFirstVideo": "2021.01.25",
  "dateLastVideo": "2022.11.13",
  "amountVideos": 221
}, {
  "id": 78,
  "theme": "frontend",
  "title": "HTML Academy",
  "author": "",
  "city": "Санкт Петербург",
  "country": "Россия",
  "link": "https://www.youtube.com/@HTMLAcademyRUS/videos",
  "site": "https://htmlacademy.ru/",
  "dateFirstVideo": "2014.01.22",
  "dateLastVideo": "2022.11.09",
  "amountVideos": 210
}, {
  "id": 79,
  "theme": "frontend",
  "title": "Web Programming",
  "author": "",
  "city": "",
  "country": "Россия",
  "link": "https://www.youtube.com/@webprogramming5048/videos",
  "site": "",
  "dateFirstVideo": "2019.02.20",
  "dateLastVideo": "2022.11.03",
  "amountVideos": 208
}, {
  "id": 80,
  "theme": "frontend",
  "title": "Do work that matters",
  "author": "Катя",
  "city": "",
  "country": "Украина",
  "link": "https://www.youtube.com/@KateLev/videos",
  "site": "",
  "dateFirstVideo": "2015.05.13",
  "dateLastVideo": "2022.06.21",
  "amountVideos": 194
}, {
  "id": 81,
  "theme": "frontend",
  "title": "Amantay Suranaliev",
  "author": "Амантай Сураналиев",
  "city": "",
  "country": "Киргизия",
  "link": "https://www.youtube.com/@amantaysuranaliev/videos",
  "site": "",
  "dateFirstVideo": "2021.05.26",
  "dateLastVideo": "2022.04.26",
  "amountVideos": 194
}, {
  "id": 82,
  "theme": "frontend",
  "title": "MaximumJavascript (6Seniors)",
  "author": "",
  "city": "",
  "country": "Россия",
  "link": "https://www.youtube.com/@maximumjavascript6seniors36/videos",
  "site": "",
  "dateFirstVideo": "2021.11.27",
  "dateLastVideo": "2022.11.19",
  "amountVideos": 193
}, {
  "id": 83,
  "theme": "frontend",
  "title": "Илья Ландар WEB РАЗРАБОТКА",
  "author": "Илья Ландар",
  "city": "",
  "country": "",
  "link": "https://www.youtube.com/@Illya.Landar/videos",
  "site": "",
  "dateFirstVideo": "2020.03.12",
  "dateLastVideo": "2023.05.25",
  "amountVideos": 190
}, {
  "id": 84,
  "theme": "frontend",
  "title": "Онлайн-школа MethEd",
  "author": "Максим",
  "city": "",
  "country": "Россия",
  "link": "https://www.youtube.com/@-methed2804/videos",
  "site": "https://methed.ru/",
  "dateFirstVideo": "2021.08.10",
  "dateLastVideo": "2022.11.08",
  "amountVideos": 190
}, {
  "id": 85,
  "theme": "frontend",
  "title": "Максим Гром",
  "author": "Максим Гром",
  "city": "",
  "country": "Украина",
  "link": "https://www.youtube.com/@grommaks/videos",
  "site": "",
  "dateFirstVideo": "2019.06.30",
  "dateLastVideo": "2022.05.01",
  "amountVideos": 187
}, {
  "id": 86,
  "theme": "frontend",
  "title": "Archakov Blog",
  "author": "Денис Арчаков",
  "city": "",
  "country": "Россия",
  "link": "https://www.youtube.com/@ArchakovBlog/videos",
  "site": "https://archakov.im/",
  "dateFirstVideo": "2016.05.12",
  "dateLastVideo": "2022.08.15",
  "amountVideos": 186
}, {
  "id": 87,
  "theme": "frontend",
  "title": "MakeWeb.me",
  "author": "Никита Красник",
  "city": "",
  "country": "Россия",
  "link": "https://www.youtube.com/@MakewebMeOfficial/videos",
  "site": "https://makeweb.me/",
  "dateFirstVideo": "2015.09.19",
  "dateLastVideo": "2022.09.19",
  "amountVideos": 186
}, {
  "id": 88,
  "theme": "frontend",
  "title": "frontend one",
  "author": "",
  "city": "",
  "country": "",
  "link": "https://www.youtube.com/@frontendone8587/streams",
  "site": "",
  "dateFirstVideo": "2022.04.07",
  "dateLastVideo": "2022.11.19",
  "amountVideos": 184
}, {
  "id": 89,
  "theme": "frontend",
  "title": "WebStork",
  "author": "Виктор Сторк",
  "city": "Курск",
  "country": "Россия",
  "link": "https://www.youtube.com/@webstork2311/videos",
  "site": "",
  "dateFirstVideo": "2021.06.09",
  "dateLastVideo": "2022.08.16",
  "amountVideos": 184
}, {
  "id": 90,
  "theme": "frontend",
  "title": "Какие-то уроки",
  "author": "",
  "city": "",
  "country": "Россия",
  "link": "https://www.youtube.com/@kakieToYroki/videos",
  "site": "",
  "dateFirstVideo": "2020.12.04",
  "dateLastVideo": "2022.11.05",
  "amountVideos": 184
}, {
  "id": 91,
  "theme": "frontend",
  "title": "kirjs",
  "author": "",
  "city": "",
  "country": "США",
  "link": "https://www.youtube.com/@kirjs/streams",
  "site": "https://codelab.fun/",
  "dateFirstVideo": "2021.02.08",
  "dateLastVideo": "2022.10.26",
  "amountVideos": 180
}, {
  "id": 92,
  "theme": "frontend",
  "title": "Useful Web",
  "author": "Владимир Языков",
  "city": "",
  "country": "Россия",
  "link": "https://www.youtube.com/@UsefulWeb/videos",
  "site": "",
  "dateFirstVideo": "2015.11.21",
  "dateLastVideo": "2022.09.08",
  "amountVideos": 180
}, {
  "id": 93,
  "theme": "frontend",
  "title": "Alex Monad Вязание кода",
  "author": "Александр Дегтярёв",
  "city": "",
  "country": "Россия",
  "link": "https://www.youtube.com/@AlexMonad/videos",
  "site": "",
  "dateFirstVideo": "2021.03.04",
  "dateLastVideo": "2022.09.02",
  "amountVideos": 179
}, {
  "id": 94,
  "theme": "frontend",
  "title": "Петр Радько [CMTV]",
  "author": "Петр Радько",
  "city": "Балашиха",
  "country": "Россия",
  "link": "https://www.youtube.com/@CMTV_official/videos",
  "site": "https://radkopeter.ru/",
  "dateFirstVideo": "2012.07.04",
  "dateLastVideo": "2021.05.04",
  "amountVideos": 176
}, {
  "id": 95,
  "theme": "frontend",
  "title": "Программист86",
  "author": "",
  "city": "",
  "country": "Россия",
  "link": "https://www.youtube.com/@861/videos",
  "site": "",
  "dateFirstVideo": "2019.12.16",
  "dateLastVideo": "2022.03.14",
  "amountVideos": 174
}, {
  "id": 96,
  "theme": "frontend",
  "title": "OTUS Трансляции 5",
  "author": "",
  "city": "Москва",
  "country": "Россия",
  "link": "https://www.youtube.com/@otus5157/streams",
  "site": "https://otus.ru/",
  "dateFirstVideo": "2021.02.16",
  "dateLastVideo": "2022.10.27",
  "amountVideos": 171
}, {
  "id": 97,
  "theme": "frontend",
  "title": "От 0 до 1",
  "author": "Вадим Прокопчук",
  "city": "Харьков",
  "country": "Украина",
  "link": "https://www.youtube.com/@vadymprokopchuk/videos",
  "site": "https://from0to1.com.ua/",
  "dateFirstVideo": "2017.06.04",
  "dateLastVideo": "2022.09.11",
  "amountVideos": 169
}, {
  "id": 98,
  "theme": "frontend",
  "title": "CodexWeb",
  "author": "Сергей Михалевич",
  "city": "",
  "country": "Беларусь",
  "link": "https://www.youtube.com/@CodexWeb/videos",
  "site": "",
  "dateFirstVideo": "2010.11.23",
  "dateLastVideo": "2017.01.16",
  "amountVideos": 166
}, {
  "id": 99,
  "theme": "frontend",
  "title": "Михаил Непомнящий",
  "author": "Михаил Непомнящий",
  "city": "",
  "country": "Россия",
  "link": "https://www.youtube.com/@mishanep/videos",
  "site": "https://www.mishanep.com/",
  "dateFirstVideo": "2018.09.13",
  "dateLastVideo": "2022.11.09",
  "amountVideos": 165
}, {
  "id": 100,
  "theme": "frontend",
  "title": "KharkivJS Community",
  "author": "",
  "city": "",
  "country": "Украина",
  "link": "https://www.youtube.com/@KharkivJSCommunity/videos",
  "site": "",
  "dateFirstVideo": "2015.11.30",
  "dateLastVideo": "2020.01.03",
  "amountVideos": 160
}, {
  "id": 101,
  "theme": "frontend",
  "title": "Aldia",
  "author": "",
  "city": "",
  "country": "",
  "link": "https://www.youtube.com/@aldia6994/videos",
  "site": "",
  "dateFirstVideo": "2022.05.26",
  "dateLastVideo": "2022.11.18",
  "amountVideos": 158
}, {
  "id": 102,
  "theme": "frontend",
  "title": "Vlad Neverov",
  "author": "Влад Неверов",
  "city": "Киев",
  "country": "Украина",
  "link": "https://www.youtube.com/@VladislavNeverov/videos",
  "site": "",
  "dateFirstVideo": "2017.07.26",
  "dateLastVideo": "2022.06.18",
  "amountVideos": 157
}, {
  "id": 103,
  "theme": "frontend",
  "title": "Архитектор ПО. Александр Желнин",
  "author": "Александр Желнин",
  "city": "",
  "country": "",
  "link": "https://www.youtube.com/@Kulibins1/videos",
  "site": "",
  "dateFirstVideo": "2021.05.12",
  "dateLastVideo": "2022.11.09",
  "amountVideos": 153
}, {
  "id": 104,
  "theme": "frontend",
  "title": "JS React",
  "author": "",
  "city": "",
  "country": "",
  "link": "https://www.youtube.com/@jsreact2728/videos",
  "site": "",
  "dateFirstVideo": "2019.08.05",
  "dateLastVideo": "2019.08.06",
  "amountVideos": 152
}, {
  "id": 105,
  "theme": "frontend",
  "title": "WebDesign Master",
  "author": "Алексей Климанов",
  "city": "Сочи",
  "country": "Россия",
  "link": "https://www.youtube.com/@wdm/videos",
  "site": "https://webdesign-master.ru/",
  "dateFirstVideo": "2013.12.03",
  "dateLastVideo": "2022.09.16",
  "amountVideos": 152
}, {
  "id": 106,
  "theme": "frontend",
  "title": "Дмитрий Лаврик",
  "author": "Дмитрий Лаврик",
  "city": "Москва",
  "country": "Россия",
  "link": "https://www.youtube.com/@dmitrylavrik/videos",
  "site": "https://dmitrylavrik.ru/",
  "dateFirstVideo": "2015.02.04",
  "dateLastVideo": "2022.08.25",
  "amountVideos": 152
}, {
  "id": 107,
  "theme": "frontend",
  "title": "Ulbi TV",
  "author": "Тимур Ульби",
  "city": "",
  "country": "Россия",
  "link": "https://www.youtube.com/@UlbiTV/videos",
  "site": "",
  "dateFirstVideo": "2020.07.12",
  "dateLastVideo": "2022.11.04",
  "amountVideos": 151
}, {
  "id": 108,
  "theme": "frontend",
  "title": "EasyCode",
  "author": "Светлана Мещерякова, Денис Мещеряков",
  "city": "Киев",
  "country": "Украина",
  "link": "https://www.youtube.com/@EasyCodeSchool/videos",
  "site": "https://www.easycode.school/",
  "dateFirstVideo": "2017.03.13",
  "dateLastVideo": "2020.06.21",
  "amountVideos": 149
}, {
  "id": 109,
  "theme": "frontend",
  "title": "MoscowJS",
  "author": "",
  "city": "",
  "country": "Россия",
  "link": "https://www.youtube.com/@moscowjs/videos",
  "site": "https://moscowjs.org/",
  "dateFirstVideo": "2013.09.07",
  "dateLastVideo": "2023.06.29",
  "amountVideos": 149
}, {
  "id": 110,
  "theme": "frontend",
  "title": "DKA-DEVELOP",
  "author": "",
  "city": "",
  "country": "Россия",
  "link": "https://www.youtube.com/@DKADEVELOP/videos",
  "site": "https://dka-develop.ru/",
  "dateFirstVideo": "2016.04.01",
  "dateLastVideo": "2021.03.20",
  "amountVideos": 148
}, {
  "id": 111,
  "theme": "frontend",
  "title": "Brainoteka Light",
  "author": "Александр Сажин",
  "city": "",
  "country": "Россия",
  "link": "https://www.youtube.com/@BrainotekaLight/videos",
  "site": "https://brainoteka.com/",
  "dateFirstVideo": "2015.06.18",
  "dateLastVideo": "2019.11.04",
  "amountVideos": 147
}, {
  "id": 112,
  "theme": "frontend",
  "title": "Abanking Education",
  "author": "",
  "city": "",
  "country": "Россия",
  "link": "https://www.youtube.com/@abankingeducation6518/videos",
  "site": "https://abanking.ru/",
  "dateFirstVideo": "2021.02.15",
  "dateLastVideo": "2022.11.12",
  "amountVideos": 145
}, {
  "id": 113,
  "theme": "frontend",
  "title": "CallZen CallZen",
  "author": "",
  "city": "",
  "country": "",
  "link": "https://www.youtube.com/@callzencallzen5738/videos",
  "site": "",
  "dateFirstVideo": "2022.12.05",
  "dateLastVideo": "2023.06.20",
  "amountVideos": 142
}, {
  "id": 114,
  "theme": "frontend",
  "title": "Front-end Science",
  "author": "Сергей Пузанков",
  "city": "",
  "country": "Украина",
  "link": "https://www.youtube.com/@frontendscience/videos",
  "site": "",
  "dateFirstVideo": "2015.09.06",
  "dateLastVideo": "2021.12.31",
  "amountVideos": 142
}, {
  "id": 115,
  "theme": "frontend",
  "title": "Kottans",
  "author": "",
  "city": "",
  "country": "Украина",
  "link": "https://www.youtube.com/@Kottans_dev/videos",
  "site": "https://kottans.org/",
  "dateFirstVideo": "2019.02.02",
  "dateLastVideo": "2021.08.03",
  "amountVideos": 141
}, {
  "id": 116,
  "theme": "frontend",
  "title": "Severenit",
  "author": "Зар Захаров",
  "city": "",
  "country": "Россия",
  "link": "https://www.youtube.com/@Severenit/videos",
  "site": "",
  "dateFirstVideo": "2020.07.02",
  "dateLastVideo": "2022.05.30",
  "amountVideos": 138
}, {
  "id": 117,
  "theme": "frontend",
  "title": "BrainsCloud",
  "author": "Дмитрий Валак",
  "city": "Даугавпилс",
  "country": "Латвия",
  "link": "https://www.youtube.com/@BrainsCloud/videos",
  "site": "https://brainscloud.ru/",
  "dateFirstVideo": "2017.09.14",
  "dateLastVideo": "2022.02.05",
  "amountVideos": 138
}, {
  "id": 118,
  "theme": "frontend",
  "title": "WebUpBlog - Уроки веб разработки",
  "author": "Слава Шевченко",
  "city": "",
  "country": "Украина",
  "link": "https://www.youtube.com/@WebupblogRu/videos",
  "site": "https://webupblog.ru/",
  "dateFirstVideo": "2015.09.19",
  "dateLastVideo": "2021.04.22",
  "amountVideos": 136
}, {
  "id": 119,
  "theme": "frontend",
  "title": "Mario Magomedov",
  "author": "Марио Магомедов",
  "city": "",
  "country": "Россия",
  "link": "https://www.youtube.com/@MarioDev/videos",
  "site": "",
  "dateFirstVideo": "2019.07.21",
  "dateLastVideo": "2021.06.14",
  "amountVideos": 133
}, {
  "id": 120,
  "theme": "frontend",
  "title": "Denis Gorelov",
  "author": "Денис Горелов",
  "city": "Краснодар",
  "country": "Россия",
  "link": "https://www.youtube.com/@denisgorelov3236/videos",
  "site": "https://dwstroy.ru/video/",
  "dateFirstVideo": "2019.07.21",
  "dateLastVideo": "2021.06.14",
  "amountVideos": 132
}, {
  "id": 121,
  "theme": "frontend",
  "title": "JS top",
  "author": "",
  "city": "",
  "country": "",
  "link": "https://www.youtube.com/@jstop/videos",
  "site": "",
  "dateFirstVideo": "2021.10.29",
  "dateLastVideo": "2022.08.23",
  "amountVideos": 132
}, {
  "id": 122,
  "theme": "frontend",
  "title": "Обучение HTML, CSS, JavaScript",
  "author": "Анатолий Ивашов",
  "city": "",
  "country": "Россия",
  "link": "https://www.youtube.com/@ivashov/videos",
  "site": "",
  "dateFirstVideo": "2021.05.12",
  "dateLastVideo": "2022.11.13",
  "amountVideos": 131
}, {
  "id": 123,
  "theme": "frontend",
  "title": "Эльбрус Буткемп: школа программирования",
  "author": "",
  "city": "",
  "country": "Россия",
  "link": "https://www.youtube.com/@ElbrusBootcamp/videos",
  "site": "",
  "dateFirstVideo": "2019.07.30",
  "dateLastVideo": "2023.05.27",
  "amountVideos": 131
}, {
  "id": 124,
  "theme": "frontend",
  "title": "Веб-разработка - DevMagazine",
  "author": "",
  "city": "",
  "country": "Россия",
  "link": "https://www.youtube.com/@DevMagazineChannel/videos",
  "site": "",
  "dateFirstVideo": "2020.03.21",
  "dateLastVideo": "2022.02.24",
  "amountVideos": 130
}, {
  "id": 125,
  "theme": "frontend",
  "title": "Solvery",
  "author": "",
  "city": "",
  "country": "Россия",
  "link": "https://www.youtube.com/@Solvery/videos",
  "site": "",
  "dateFirstVideo": "2020.04.09",
  "dateLastVideo": "2022.11.16",
  "amountVideos": 128
}, {
  "id": 126,
  "theme": "frontend",
  "title": "Magisters Обучение современным профессиям",
  "author": "Владислав Гриценко",
  "city": "Белгород",
  "country": "Россия",
  "link": "https://www.youtube.com/@webmagistersru/videos",
  "site": "http://www.magisters.org/",
  "dateFirstVideo": "2011.06.12",
  "dateLastVideo": "2021.02.06",
  "amountVideos": 127
}, {
  "id": 127,
  "theme": "frontend",
  "title": "SIBERIA CAN CODE Frontend",
  "author": "",
  "city": "",
  "country": "Россия",
  "link": "https://www.youtube.com/@SIBERIACANCODE/videos",
  "site": "",
  "dateFirstVideo": "2022.02.23",
  "dateLastVideo": "2022.11.17",
  "amountVideos": 127
}, {
  "id": 128,
  "theme": "frontend",
  "title": "Алексей Кальсин. Создаем сайт на CMS WordPress",
  "author": "Алексей Кальсин",
  "city": "",
  "country": "Россия",
  "link": "https://www.youtube.com/@maestroSt1/videos",
  "site": "https://delay.site/",
  "dateFirstVideo": "2012.04.20",
  "dateLastVideo": "2023.04.20",
  "amountVideos": 121
}, {
  "id": 129,
  "theme": "frontend",
  "title": "LN Master",
  "author": "Никита Лукашов",
  "city": "",
  "country": "Украина",
  "link": "https://www.youtube.com/@LNMaster_/videos",
  "site": "",
  "dateFirstVideo": "2020.03.31",
  "dateLastVideo": "2022.08.03",
  "amountVideos": 120
}, {
  "id": 130,
  "theme": "frontend",
  "title": "Александр Дергунов",
  "author": "Александр Дергунов",
  "city": "Владимир",
  "country": "Россия",
  "link": "https://www.youtube.com/@sanekdr/videos",
  "site": "https://dergunov.com/",
  "dateFirstVideo": "2011.04.19",
  "dateLastVideo": "2022.08.13",
  "amountVideos": 120
}, {
  "id": 131,
  "theme": "frontend",
  "title": "Создаём сайты самостоятельно",
  "author": "Александр Соловьев",
  "city": "",
  "country": "Россия",
  "link": "https://www.youtube.com/@alexporsch/videos",
  "site": "",
  "dateFirstVideo": "2011.10.09",
  "dateLastVideo": "2020.04.14",
  "amountVideos": 120
}, {
  "id": 132,
  "theme": "frontend",
  "title": "Школа web-программирования Constcode",
  "author": "Алексей Данчин",
  "city": "",
  "country": "Россия",
  "link": "https://www.youtube.com/@web-constcode6252/videos",
  "site": "",
  "dateFirstVideo": "2020.04.28",
  "dateLastVideo": "2022.10.28",
  "amountVideos": 119
}, {
  "id": 133,
  "theme": "frontend",
  "title": "Записки Верстальщика",
  "author": "Александр",
  "city": "",
  "country": "Россия",
  "link": "https://www.youtube.com/@zapiski_verstalshika/videos",
  "site": "http://uzinok.ru/",
  "dateFirstVideo": "2019.05.31",
  "dateLastVideo": "2022.11.09",
  "amountVideos": 117
}, {
  "id": 134,
  "theme": "frontend",
  "title": "Best Lessons",
  "author": "",
  "city": "",
  "country": "",
  "link": "https://www.youtube.com/@BestLessons/videos",
  "site": "",
  "dateFirstVideo": "2016.02.13",
  "dateLastVideo": "2020.09.13",
  "amountVideos": 116
}, {
  "id": 135,
  "theme": "frontend",
  "title": "ДЕН - подорожую та програмую",
  "author": "Ден",
  "city": "",
  "country": "Украина",
  "link": "https://www.youtube.com/@htmlbookpro/videos",
  "site": "",
  "dateFirstVideo": "2018.10.15",
  "dateLastVideo": "2022.03.08",
  "amountVideos": 116
}, {
  "id": 136,
  "theme": "frontend",
  "title": "Лёша Корепанов",
  "author": "Лёша Корепанов",
  "city": "",
  "country": "Нидерланды",
  "link": "https://www.youtube.com/@aocore/videos",
  "site": "",
  "dateFirstVideo": "2020.09.06",
  "dateLastVideo": "2022.06.01",
  "amountVideos": 114
}, {
  "id": 137,
  "theme": "frontend",
  "title": "ВебКадеми - веб-разработка, программирование и IT",
  "author": "Юрий Ключевский",
  "city": "",
  "country": "Россия",
  "link": "https://www.youtube.com/@WebCademy/videos",
  "site": "https://webcademy.ru/",
  "dateFirstVideo": "2020.12.01",
  "dateLastVideo": "2022.11.14",
  "amountVideos": 113
}, {
  "id": 138,
  "theme": "frontend",
  "title": "Sorax",
  "author": "Артем Гринберг",
  "city": "",
  "country": "",
  "link": "https://www.youtube.com/@artsorax/videos",
  "site": "",
  "dateFirstVideo": "2011.08.12",
  "dateLastVideo": "2016.10.30",
  "amountVideos": 112
}, {
  "id": 139,
  "theme": "frontend",
  "title": "Tomkovich - Frontend Development",
  "author": "Яна Томкович",
  "city": "Минск",
  "country": "Беларусь",
  "link": "https://www.youtube.com/@Tomkovich/videos",
  "site": "",
  "dateFirstVideo": "2019.04.09",
  "dateLastVideo": "2022.11.09",
  "amountVideos": 112
}, {
  "id": 140,
  "theme": "frontend",
  "title": "Lectoria. Обучение веб-разработке",
  "author": "Артем Зернов",
  "city": "",
  "country": "",
  "link": "https://www.youtube.com/@lectoria/videos",
  "site": "",
  "dateFirstVideo": "2015.02.13",
  "dateLastVideo": "2023.06.11",
  "amountVideos": 108
}, {
  "id": 141,
  "theme": "frontend",
  "title": "Monsterlessons",
  "author": "",
  "city": "",
  "country": "",
  "link": "https://www.youtube.com/@Monsterlessons/videos",
  "site": "https://monsterlessons.com/",
  "dateFirstVideo": "2015.01.21",
  "dateLastVideo": "2022.01.16",
  "amountVideos": 108
}, {
  "id": 142,
  "theme": "frontend",
  "title": "Tech Javascript",
  "author": "",
  "city": "",
  "country": "Украина",
  "link": "https://www.youtube.com/@techjavascript3417/videos",
  "site": "",
  "dateFirstVideo": "2022.09.21",
  "dateLastVideo": "2022.11.17",
  "amountVideos": 108
}, {
  "id": 143,
  "theme": "frontend",
  "title": "Заур Магомедов",
  "author": "Заур Магомедов",
  "city": "",
  "country": "Россия",
  "link": "https://www.youtube.com/@ZaurmagRu/videos",
  "site": "https://zaurmag.ru/",
  "dateFirstVideo": "2015.09.11",
  "dateLastVideo": "2021.12.26",
  "amountVideos": 107
}, {
  "id": 144,
  "theme": "frontend",
  "title": "Люди и код by Skillbox Media",
  "author": "",
  "city": "",
  "country": "Россия",
  "link": "https://www.youtube.com/@byskillboxmedia7275/videos",
  "site": "",
  "dateFirstVideo": "2022.01.19",
  "dateLastVideo": "2022.11.11",
  "amountVideos": 107
}, {
  "id": 145,
  "theme": "frontend",
  "title": "Paralect Workshop",
  "author": "",
  "city": "",
  "country": "Беларусь",
  "link": "https://www.youtube.com/@ParalectWorkshop/videos",
  "site": "",
  "dateFirstVideo": "2019.01.09",
  "dateLastVideo": "2022.10.13",
  "amountVideos": 106
}, {
  "id": 146,
  "theme": "frontend",
  "title": "Art Bashlykov",
  "author": "Артем Башлыков",
  "city": "Санкт-Петербург",
  "country": "Россия",
  "link": "https://www.youtube.com/@ArtBashlykov/videos",
  "site": "https://artbashlykov.ru/",
  "dateFirstVideo": "2019.10.01",
  "dateLastVideo": "2023.05.05",
  "amountVideos": 104
}, {
  "id": 147,
  "theme": "frontend",
  "title": "Maksim Zhashkevych о разработке и ІТ",
  "author": "Максим Жашкевич",
  "city": "Киев",
  "country": "Украина",
  "link": "https://www.youtube.com/@MaksimZhashkevych/videos",
  "site": "https://www.zhashkevych.com/",
  "dateFirstVideo": "2020.09.27",
  "dateLastVideo": "2022.02.13",
  "amountVideos": 104
}, {
  "id": 148,
  "theme": "frontend",
  "title": "Моя Айти Школа",
  "author": "",
  "city": "",
  "country": "Беларусь",
  "link": "https://www.youtube.com/@user-sc2hh5kw5i/videos",
  "site": "https://myitschool.by/",
  "dateFirstVideo": "2020.01.26",
  "dateLastVideo": "2022.10.19",
  "amountVideos": 104
}, {
  "id": 149,
  "theme": "frontend",
  "title": "Елена Литвинова — Искусство веб-разработки",
  "author": "Елена Литвинова",
  "city": "Лондон",
  "country": "Великобритания",
  "link": "https://www.youtube.com/@webelart/videos",
  "site": "",
  "dateFirstVideo": "2020.07.09",
  "dateLastVideo": "2022.11.13",
  "amountVideos": 102
}, {
  "id": 150,
  "theme": "frontend",
  "title": "Алибек Саринжиев",
  "author": "Алибек Саринжиев",
  "city": "",
  "country": "",
  "link": "https://www.youtube.com/@user-cw4ju6qe5n/videos",
  "site": "",
  "dateFirstVideo": "2022.06.22",
  "dateLastVideo": "2022.11.22",
  "amountVideos": 100
}, {
  "id": 151,
  "theme": "frontend",
  "title": "CSSSR",
  "author": "",
  "city": "Дзержижнский",
  "country": "Россия",
  "link": "https://www.youtube.com/@CSSSR_dev/videos",
  "site": "https://csssr.com/ru",
  "dateFirstVideo": "2017.07.16",
  "dateLastVideo": "2022.02.02",
  "amountVideos": 99
}, {
  "id": 152,
  "theme": "frontend",
  "title": "Sergey Nikitanov",
  "author": "Сергей Никитанов",
  "city": "",
  "country": "Россия",
  "link": "https://www.youtube.com/@SergeyValeryevitch/videos",
  "site": "",
  "dateFirstVideo": "2014.01.31",
  "dateLastVideo": "2019.02.20",
  "amountVideos": 98
}, {
  "id": 153,
  "theme": "frontend",
  "title": "maxwell coding",
  "author": "Мавлюдин",
  "city": "",
  "country": "Россия",
  "link": "https://www.youtube.com/@maxwellcoding/videos",
  "site": "",
  "dateFirstVideo": "2020.02.25",
  "dateLastVideo": "2022.11.04",
  "amountVideos": 96
}, {
  "id": 154,
  "theme": "frontend",
  "title": "Vender Aleksandr",
  "author": "",
  "city": "",
  "country": "Россия",
  "link": "https://www.youtube.com/@venderaleksandr500/videos",
  "site": "",
  "dateFirstVideo": "2019.06.26",
  "dateLastVideo": "2022.08.01",
  "amountVideos": 96
}, {
  "id": 155,
  "theme": "frontend",
  "title": "OB Web Dev",
  "author": "",
  "city": "",
  "country": "Украина",
  "link": "https://www.youtube.com/@obwebdev/videos",
  "site": "",
  "dateFirstVideo": "2022.07.21",
  "dateLastVideo": "2023.04.09",
  "amountVideos": 94
}, {
  "id": 156,
  "theme": "frontend",
  "title": "Ateros",
  "author": "",
  "city": "",
  "country": "Украина",
  "link": "https://www.youtube.com/@_ateros/videos",
  "site": "",
  "dateFirstVideo": "2022.06.07",
  "dateLastVideo": "2022.11.12",
  "amountVideos": 91
}, {
  "id": 157,
  "theme": "frontend",
  "title": "Василий Муравьев",
  "author": "Василий Муравьев",
  "city": "",
  "country": "Россия",
  "link": "https://www.youtube.com/@stackdev/videos",
  "site": "https://stackdev.ru/",
  "dateFirstVideo": "2020.01.11",
  "dateLastVideo": "2022.09.17",
  "amountVideos": 91
}, {
  "id": 158,
  "theme": "frontend",
  "title": "Ефим Рябов",
  "author": "Ефим Рябов",
  "city": "",
  "country": "Россия",
  "link": "https://www.youtube.com/@user-go4tz2dj8n/videos",
  "site": "https://efim360.ru/",
  "dateFirstVideo": "2020.11.22",
  "dateLastVideo": "2022.11.12",
  "amountVideos": 91
}, {
  "id": 159,
  "theme": "frontend",
  "title": "Александр Дудукало",
  "author": "Александр Дудукало",
  "city": "",
  "country": "Россия",
  "link": "https://www.youtube.com/@alex_dudukalo/videos",
  "site": "",
  "dateFirstVideo": "2016.10.31",
  "dateLastVideo": "2019.10.27",
  "amountVideos": 90
}, {
  "id": 160,
  "theme": "frontend",
  "title": "Стримы Glo Academy",
  "author": "Артем Исламов",
  "city": "Казань",
  "country": "Россия",
  "link": "https://www.youtube.com/@gloacademy7005/videos",
  "site": "https://glo.academy/",
  "dateFirstVideo": "2018.09.27",
  "dateLastVideo": "2021.02.23",
  "amountVideos": 90
}, {
  "id": 161,
  "theme": "frontend",
  "title": "Dmitriy Pavlichenko",
  "author": "Дмитрий Павличенко",
  "city": "",
  "country": "Россия",
  "link": "https://www.youtube.com/@dmitriypavlichenko3379/videos",
  "site": "",
  "dateFirstVideo": "2020.06.16",
  "dateLastVideo": "2022.02.19",
  "amountVideos": 88
}, {
  "id": 162,
  "theme": "frontend",
  "title": "LectorWeb. Frontend, создание сайтов",
  "author": "Алексей Перепелка",
  "city": "",
  "country": "Украина",
  "link": "https://www.youtube.com/@LectorWeb/videos",
  "site": "",
  "dateFirstVideo": "2019.11.28",
  "dateLastVideo": "2021.12.10",
  "amountVideos": 88
}, {
  "id": 163,
  "theme": "frontend",
  "title": "Let's Code",
  "author": "",
  "city": "",
  "country": "Россия",
  "link": "https://www.youtube.com/@LetsCodeDev/videos",
  "site": "",
  "dateFirstVideo": "2018.01.26",
  "dateLastVideo": "2022.09.17",
  "amountVideos": 88
}, {
  "id": 164,
  "theme": "frontend",
  "title": "Ayub Begimkulov",
  "author": "Айюб Бегимкулов",
  "city": "",
  "country": "Россия",
  "link": "https://www.youtube.com/@ayub_begimkulov/videos",
  "site": "",
  "dateFirstVideo": "2020.10.10",
  "dateLastVideo": "2022.11.12",
  "amountVideos": 87
}, {
  "id": 165,
  "theme": "frontend",
  "title": "Dev Pandaren нет уже",
  "author": "",
  "city": "",
  "country": "",
  "link": "https://www.youtube.com/c/LetsCodeDev/videos",
  "site": "",
  "dateFirstVideo": "2018.01.26",
  "dateLastVideo": "2021.06.13",
  "amountVideos": 85
}, {
  "id": 166,
  "theme": "frontend",
  "title": "codeBurger",
  "author": "",
  "city": "",
  "country": "Россия",
  "link": "https://www.youtube.com/@codeBurger/videos",
  "site": "",
  "dateFirstVideo": "2018.08.06",
  "dateLastVideo": "2021.03.19",
  "amountVideos": 84
}, {
  "id": 167,
  "theme": "frontend",
  "title": "Vladimir Shaitan",
  "author": "",
  "city": "",
  "country": "",
  "link": "https://www.youtube.com/@VladimirShaitan/videos",
  "site": "",
  "dateFirstVideo": "2020.12.19",
  "dateLastVideo": "2022.09.13",
  "amountVideos": 83
}, {
  "id": 168,
  "theme": "frontend",
  "title": "Просто разработка",
  "author": "Виталий Киренков",
  "city": "Москва",
  "country": "Россия",
  "link": "https://www.youtube.com/@user-bm1pl3wu8o/videos",
  "site": "https://prosto-razrabotka.ru/",
  "dateFirstVideo": "2019.01.11",
  "dateLastVideo": "2021.04.28",
  "amountVideos": 83
}, {
  "id": 169,
  "theme": "frontend",
  "title": "Арокен.ру",
  "author": "Макс",
  "city": "",
  "country": "Россия",
  "link": "https://www.youtube.com/@arokenru/videos",
  "site": "",
  "dateFirstVideo": "2022.03.18",
  "dateLastVideo": "2022.10.24",
  "amountVideos": 82
}, {
  "id": 170,
  "theme": "frontend",
  "title": "Prog-Time",
  "author": "",
  "city": "",
  "country": "Россия",
  "link": "https://www.youtube.com/@ProgTime/videos",
  "site": "https://prog-time.ru/",
  "dateFirstVideo": "2017.09.02",
  "dateLastVideo": "2022.10.17",
  "amountVideos": 81
}, {
  "id": 171,
  "theme": "frontend",
  "title": "Programming and Children",
  "author": "",
  "city": "",
  "country": "Россия",
  "link": "https://www.youtube.com/@programmingandchildren8227/videos",
  "site": "",
  "dateFirstVideo": "2020.10.20",
  "dateLastVideo": "2021.12.22",
  "amountVideos": 81
}, {
  "id": 172,
  "theme": "frontend",
  "title": "Давай Попробуем JavaScript",
  "author": "",
  "city": "",
  "country": "Украина",
  "link": "https://www.youtube.com/@lets_try_js/videos",
  "site": "",
  "dateFirstVideo": "2019.10.10",
  "dateLastVideo": "2022.09.20",
  "amountVideos": 80
}, {
  "id": 173,
  "theme": "frontend",
  "title": "FRONTENDIYA - Веб разработка",
  "author": "",
  "city": "",
  "country": "Россия",
  "link": "https://www.youtube.com/@frontendiya/videos",
  "site": "",
  "dateFirstVideo": "2023.04.13",
  "dateLastVideo": "2023.06.02",
  "amountVideos": 79
}, {
  "id": 174,
  "theme": "frontend",
  "title": "Nursultan Sarazhiev",
  "author": "",
  "city": "",
  "country": "Россия",
  "link": "https://www.youtube.com/@nursultansarazhiev9821/videos",
  "site": "",
  "dateFirstVideo": "2020.01.08",
  "dateLastVideo": "2022.09.16",
  "amountVideos": 79
}, {
  "id": 175,
  "theme": "frontend",
  "title": "Vitaliy html",
  "author": "",
  "city": "",
  "country": "",
  "link": "https://www.youtube.com/@vitaliyhtml/videos",
  "site": "",
  "dateFirstVideo": "2021.04.24",
  "dateLastVideo": "2023.06.18",
  "amountVideos": 79
}, {
  "id": 176,
  "theme": "frontend",
  "title": "Как Стать Хорошим Программистом",
  "author": "",
  "city": "",
  "country": "Беларусь",
  "link": "https://www.youtube.com/@JohnnySvarog/videos",
  "site": "",
  "dateFirstVideo": "2013.02.04",
  "dateLastVideo": "2020.05.18",
  "amountVideos": 77
}, {
  "id": 177,
  "theme": "frontend",
  "title": "Natali",
  "author": "Натали",
  "city": "",
  "country": "Россия",
  "link": "https://www.youtube.com/@natali8796/videos",
  "site": "",
  "dateFirstVideo": "2021.11.11",
  "dateLastVideo": "2022.11.10",
  "amountVideos": 77
}, {
  "id": 178,
  "theme": "frontend",
  "title": "Евгений Паромов Front-end",
  "author": "Евгений Паромов",
  "city": "",
  "country": "",
  "link": "https://www.youtube.com/@paromovevg/videos",
  "site": "",
  "dateFirstVideo": "2023.03.25",
  "dateLastVideo": "2023.07.01",
  "amountVideos": 77
}, {
  "id": 179,
  "theme": "frontend",
  "title": "#JS Code",
  "author": "",
  "city": "",
  "country": "Украина",
  "link": "https://www.youtube.com/@JSCode-by-AlexK/videos",
  "site": "",
  "dateFirstVideo": "2018.05.13",
  "dateLastVideo": "2022.05.09",
  "amountVideos": 76
}, {
  "id": 180,
  "theme": "frontend",
  "title": "FructCode",
  "author": "Сергей Никонов",
  "city": "Самара",
  "country": "Россия",
  "link": "https://www.youtube.com/@fructcode/videos",
  "site": "https://fructcode.com/ru/",
  "dateFirstVideo": "2017.06.09",
  "dateLastVideo": "2021.08.15",
  "amountVideos": 75
}, {
  "id": 181,
  "theme": "frontend",
  "title": "JSExpert",
  "author": "Евгений Калюжный",
  "city": "",
  "country": "",
  "link": "https://www.youtube.com/@JSExpert/videos",
  "site": "https://www.jsexpert.net/",
  "dateFirstVideo": "2016.03.09",
  "dateLastVideo": "2020.08.10",
  "amountVideos": 75
}, {
  "id": 182,
  "theme": "frontend",
  "title": "Easy IT",
  "author": "",
  "city": "",
  "country": "Украина",
  "link": "https://www.youtube.com/@EasyITChannel/videos",
  "site": "",
  "dateFirstVideo": "2020.12.23",
  "dateLastVideo": "2022.11.05",
  "amountVideos": 74
}, {
  "id": 183,
  "theme": "frontend",
  "title": "PurpleSchool Anton Larichev",
  "author": "Антон Ларичев",
  "city": "",
  "country": "Россия",
  "link": "https://www.youtube.com/@PurpleSchool/videos",
  "site": "",
  "dateFirstVideo": "2022.05.04",
  "dateLastVideo": "2022.11.16",
  "amountVideos": 74
}, {
  "id": 184,
  "theme": "frontend",
  "title": "AVIS TV",
  "author": "Эмиль Рахматуллин",
  "city": "",
  "country": "Россия",
  "link": "https://www.youtube.com/@AVISTV/videos",
  "site": "",
  "dateFirstVideo": "2020.12.21",
  "dateLastVideo": "2022.09.25",
  "amountVideos": 72
}, {
  "id": 185,
  "theme": "frontend",
  "title": "Fraktal Inc. Team (нет уже)",
  "author": "",
  "city": "",
  "country": "",
  "link": "https://www.youtube.com/channel/UCjCQSEgi49fZyDx5VpxYnOA/videos",
  "site": "",
  "dateFirstVideo": "2021.01.02",
  "dateLastVideo": "2021.10.10",
  "amountVideos": 72
}, {
  "id": 186,
  "theme": "frontend",
  "title": "Timeweb Cloud: всё про облако, технологии и IT",
  "author": "",
  "city": "",
  "country": "Россия",
  "link": "https://www.youtube.com/@timeweb/videos",
  "site": "https://timeweb.com/ru/",
  "dateFirstVideo": "2018.08.06",
  "dateLastVideo": "2022.09.16",
  "amountVideos": 72
}, {
  "id": 187,
  "theme": "frontend",
  "title": "Андрей Попов",
  "author": "Андрей Попов",
  "city": "",
  "country": "Россия",
  "link": "https://www.youtube.com/@user-rm8iu4zr2u/videos",
  "site": "",
  "dateFirstVideo": "2016.10.04",
  "dateLastVideo": "2021.04.27",
  "amountVideos": 72
}, {
  "id": 188,
  "theme": "frontend",
  "title": "school-php.com",
  "author": "Станислав Усков",
  "city": "",
  "country": "",
  "link": "https://www.youtube.com/@Schoolphpcom/videos",
  "site": "https://school-php.com/",
  "dateFirstVideo": "2013.01.24",
  "dateLastVideo": "2018.09.29",
  "amountVideos": 71
}, {
  "id": 189,
  "theme": "frontend",
  "title": "Medvedev School",
  "author": "",
  "city": "",
  "country": "Россия",
  "link": "https://www.youtube.com/@medvedevschool/videos",
  "site": "",
  "dateFirstVideo": "2019.07.20",
  "dateLastVideo": "2022.09.23",
  "amountVideos": 71
}, {
  "id": 190,
  "theme": "frontend",
  "title": "Skill Blog Веб-разработка",
  "author": "",
  "city": "",
  "country": "",
  "link": "https://www.youtube.com/@skillblog-web/videos",
  "site": "",
  "dateFirstVideo": "2021.03.18",
  "dateLastVideo": "2022.10.20",
  "amountVideos": 66
}, {
  "id": 191,
  "theme": "frontend",
  "title": "One Code",
  "author": "Максим Орлов",
  "city": "",
  "country": "",
  "link": "https://www.youtube.com/@onecode_blog/videos",
  "site": "",
  "dateFirstVideo": "2020.02.25",
  "dateLastVideo": "2021.10.11",
  "amountVideos": 65
}, {
  "id": 192,
  "theme": "frontend",
  "title": "Я — зерокодер",
  "author": "",
  "city": "",
  "country": "Россия",
  "link": "https://www.youtube.com/@0qode/videos",
  "site": "",
  "dateFirstVideo": "2020.03.26",
  "dateLastVideo": "2023.06.21",
  "amountVideos": 65
}, {
  "id": 193,
  "theme": "frontend",
  "title": "Тони Емельянов | Продуктовый дизайнер (UX UI)",
  "author": "Тони Емельянов",
  "city": "",
  "country": "Израиль",
  "link": "https://www.youtube.com/@yemdigital/videos",
  "site": "",
  "dateFirstVideo": "2019.05.07",
  "dateLastVideo": "2022.06.21",
  "amountVideos": 64
}, {
  "id": 194,
  "theme": "frontend",
  "title": "David Dobryakov",
  "author": "",
  "city": "",
  "country": "Россия",
  "link": "https://www.youtube.com/@dobryakov/videos",
  "site": "",
  "dateFirstVideo": "2020.04.30",
  "dateLastVideo": "2022.10.26",
  "amountVideos": 63
}, {
  "id": 195,
  "theme": "frontend",
  "title": "Lavrik Roman",
  "author": "",
  "city": "",
  "country": "",
  "link": "https://www.youtube.com/@lavrikroman1560/videos",
  "site": "",
  "dateFirstVideo": "2020.09.26",
  "dateLastVideo": "2022.12.04",
  "amountVideos": 63
}, {
  "id": 196,
  "theme": "frontend",
  "title": "makecsx",
  "author": "Лом-Али (Лев) Гуржиханов",
  "city": "",
  "country": "",
  "link": "https://www.youtube.com/@makecsx/videos",
  "site": "",
  "dateFirstVideo": "2018.02.15",
  "dateLastVideo": "2022.05.21",
  "amountVideos": 63
}, {
  "id": 197,
  "theme": "frontend",
  "title": "Odesa Frontend Community",
  "author": "",
  "city": "",
  "country": "Украина",
  "link": "https://www.youtube.com/@OdesaFrontend/videos",
  "site": "",
  "dateFirstVideo": "2017.10.28",
  "dateLastVideo": "2022.01.05",
  "amountVideos": 63
}, {
  "id": 198,
  "theme": "frontend",
  "title": "WEB STAR",
  "author": "Виталик Ерёменко",
  "city": "",
  "country": "Латвия",
  "link": "https://www.youtube.com/@webstar9241/videos",
  "site": "",
  "dateFirstVideo": "2022.06.07",
  "dateLastVideo": "2022.05.26",
  "amountVideos": 62
}, {
  "id": 199,
  "theme": "frontend",
  "title": "Developer In US",
  "author": "",
  "city": "",
  "country": "США",
  "link": "https://www.youtube.com/@DeveloperInUS/videos",
  "site": "",
  "dateFirstVideo": "2021.04.26",
  "dateLastVideo": "2022.05.29",
  "amountVideos": 61
}, {
  "id": 200,
  "theme": "frontend",
  "title": "easydev",
  "author": "",
  "city": "",
  "country": "Грузия",
  "link": "https://www.youtube.com/@easydev1205/videos",
  "site": "",
  "dateFirstVideo": "2022.01.08",
  "dateLastVideo": "2022.07.25",
  "amountVideos": 61
}, {
  "id": 201,
  "theme": "frontend",
  "title": "EduCatter",
  "author": "Илья",
  "city": "",
  "country": "Россия",
  "link": "https://www.youtube.com/@EduCatterOfficial/videos",
  "site": "",
  "dateFirstVideo": "2021.09.26",
  "dateLastVideo": "2022.10.15",
  "amountVideos": 61
}, {
  "id": 202,
  "theme": "frontend",
  "title": "Anywhere Club на русском",
  "author": "Алексей Картынник",
  "city": "",
  "country": "Беларусь",
  "link": "https://www.youtube.com/@anywhereclub-ru/videos",
  "site": "",
  "dateFirstVideo": "2022.05.10",
  "dateLastVideo": "2022.11.03",
  "amountVideos": 60
}, {
  "id": 203,
  "theme": "frontend",
  "title": "IT курсы (нет уже)",
  "author": "Павел Тарасов",
  "city": "Москва",
  "country": "Россия",
  "link": "https://www.youtube.com/c/WebInterview/videos",
  "site": "",
  "dateFirstVideo": "2020.06.08",
  "dateLastVideo": "2021.07.14",
  "amountVideos": 60
}, {
  "id": 204,
  "theme": "frontend",
  "title": "Web Interview",
  "author": "Павел Тарасов",
  "city": "Москва",
  "country": "Россия",
  "link": "https://www.youtube.com/@WebInterview/videos",
  "site": "",
  "dateFirstVideo": "2020.06.08",
  "dateLastVideo": "2021.07.14",
  "amountVideos": 60
}, {
  "id": 205,
  "theme": "frontend",
  "title": "ДЖАВАСКРИПТИЗЕРЫ",
  "author": "Кирилл Поздняков",
  "city": "",
  "country": "",
  "link": "https://www.youtube.com/@jswrl/videos",
  "site": "",
  "dateFirstVideo": "2022.09.04",
  "dateLastVideo": "2022.11.16",
  "amountVideos": 60
}, {
  "id": 206,
  "theme": "frontend",
  "title": "AROKEN",
  "author": "Максим",
  "city": "",
  "country": "Россия",
  "link": "https://www.youtube.com/@AROKENEZ/videos",
  "site": "",
  "dateFirstVideo": "2018.12.27",
  "dateLastVideo": "2022.10.26",
  "amountVideos": 59
}, {
  "id": 207,
  "theme": "frontend",
  "title": "Denis Latushkin",
  "author": "Денис Латушкин",
  "city": "",
  "country": "",
  "link": "https://www.youtube.com/@denislatushkin8112/videos",
  "site": "",
  "dateFirstVideo": "2016.06.30",
  "dateLastVideo": "2021.02.04",
  "amountVideos": 59
}, {
  "id": 208,
  "theme": "frontend",
  "title": "GreenComet",
  "author": "",
  "city": "",
  "country": "Украина",
  "link": "https://www.youtube.com/@GreenComet/videos",
  "site": "",
  "dateFirstVideo": "2018.09.30",
  "dateLastVideo": "2021.08.08",
  "amountVideos": 59
}, {
  "id": 209,
  "theme": "frontend",
  "title": "temofart",
  "author": "Артем Олейниченко",
  "city": "Харьков",
  "country": "Украина",
  "link": "https://www.youtube.com/@temofart/videos",
  "site": "",
  "dateFirstVideo": "2019.05.18",
  "dateLastVideo": "2021.01.28",
  "amountVideos": 57
}, {
  "id": 210,
  "theme": "frontend",
  "title": "Разрабы",
  "author": "",
  "city": "",
  "country": "",
  "link": "https://www.youtube.com/@razrabs/videos",
  "site": "",
  "dateFirstVideo": "2022.02.02",
  "dateLastVideo": "2022.11.18",
  "amountVideos": 57
}, {
  "id": 211,
  "theme": "frontend",
  "title": "Meta/conf Voronezh нет уже",
  "author": "",
  "city": "Воронеж",
  "country": "Россия",
  "link": "https://www.youtube.com/@MetaconfVoronezh/videos",
  "site": "",
  "dateFirstVideo": "2019.04.30",
  "dateLastVideo": "2020.11.23",
  "amountVideos": 56
}, {
  "id": 212,
  "theme": "frontend",
  "title": "All4site",
  "author": "Кирилл Лозовский",
  "city": "Киев",
  "country": "Украина",
  "link": "https://www.youtube.com/@all4site544/videos",
  "site": "http://all4site.com.ua/",
  "dateFirstVideo": "2018.01.23",
  "dateLastVideo": "2021.08.18",
  "amountVideos": 55
}, {
  "id": 213,
  "theme": "frontend",
  "title": "Wannabe School (Валерий Стрелец)",
  "author": "Валерий Стрелец",
  "city": "",
  "country": "Украина",
  "link": "https://www.youtube.com/@WannabeSchool/videos",
  "site": "",
  "dateFirstVideo": "2020.11.22",
  "dateLastVideo": "2021.04.29",
  "amountVideos": 55
}, {
  "id": 214,
  "theme": "frontend",
  "title": "Репетитор JavaScript, Java, С НУЛЯ",
  "author": "",
  "city": "",
  "country": "Швеция",
  "link": "https://www.youtube.com/@javascriptjava4859/videos",
  "site": "",
  "dateFirstVideo": "2020.07.08",
  "dateLastVideo": "2022.02.10",
  "amountVideos": 55
}, {
  "id": 215,
  "theme": "frontend",
  "title": "KARPOV.COURSES DEV",
  "author": "Карпов",
  "city": "Москва",
  "country": "Россия",
  "link": "https://www.youtube.com/@KarpovCoursesDEV/videos",
  "site": "https://karpov.courses/dev",
  "dateFirstVideo": "2021.09.20",
  "dateLastVideo": "2022.11.15",
  "amountVideos": 53
}, {
  "id": 216,
  "theme": "frontend",
  "title": "OTUS Трансляции 6",
  "author": "",
  "city": "Москва",
  "country": "Россия",
  "link": "https://www.youtube.com/@otus6190/streams",
  "site": "https://otus.ru/",
  "dateFirstVideo": "2021.08.04",
  "dateLastVideo": "2022.06.14",
  "amountVideos": 52
}, {
  "id": 217,
  "theme": "frontend",
  "title": "Данила Панарин",
  "author": "Данила Панарин",
  "city": "",
  "country": "",
  "link": "https://www.youtube.com/@Panarin20/videos",
  "site": "",
  "dateFirstVideo": "2022.02.01",
  "dateLastVideo": "2023.03.05",
  "amountVideos": 52
}, {
  "id": 218,
  "theme": "frontend",
  "title": "Юрий Карачевцев",
  "author": "Юрий Карачевцев",
  "city": "",
  "country": "Россия",
  "link": "https://www.youtube.com/@user-sd1sm8hc1c/videos",
  "site": "",
  "dateFirstVideo": "2020.05.18",
  "dateLastVideo": "2022.11.05",
  "amountVideos": 51
}, {
  "id": 219,
  "theme": "frontend",
  "title": "Boring Front End",
  "author": "Илья Литвинов",
  "city": "",
  "country": "Украина",
  "link": "https://www.youtube.com/@boringfrontend9037/videos",
  "site": "",
  "dateFirstVideo": "2019.11.15",
  "dateLastVideo": "2022.01.06",
  "amountVideos": 50
}, {
  "id": 220,
  "theme": "frontend",
  "title": "Артём - dozen web",
  "author": "Артем",
  "city": "",
  "country": "",
  "link": "https://www.youtube.com/@dozen-web/videos",
  "site": "",
  "dateFirstVideo": "2021.08.05",
  "dateLastVideo": "2022.11.15",
  "amountVideos": 50
}, {
  "id": 221,
  "theme": "frontend",
  "title": "Программирование это интересно",
  "author": "",
  "city": "",
  "country": "Украина",
  "link": "https://www.youtube.com/@user-zt3dp9xj1w/videos",
  "site": "",
  "dateFirstVideo": "2022.03.11",
  "dateLastVideo": "2022.11.08",
  "amountVideos": 50
}, {
  "id": 222,
  "theme": "frontend",
  "title": "IT на диване",
  "author": "Антон Воропаев",
  "city": "Харьков",
  "country": "Украина",
  "link": "https://www.youtube.com/@itnadivane/videos",
  "site": "",
  "dateFirstVideo": "2019.09.08",
  "dateLastVideo": "2022.09.22",
  "amountVideos": 49
}, {
  "id": 223,
  "theme": "frontend",
  "title": "Ivan Petrychenko",
  "author": "Иван Петриченко",
  "city": "Харьков",
  "country": "Украина",
  "link": "https://www.youtube.com/@IvanPetrychenkoDev/videos",
  "site": "",
  "dateFirstVideo": "2018.09.30",
  "dateLastVideo": "2021.11.28",
  "amountVideos": 49
}, {
  "id": 224,
  "theme": "frontend",
  "title": "Step to Web",
  "author": "",
  "city": "",
  "country": "Беларусь",
  "link": "https://www.youtube.com/@steptoweb503/videos",
  "site": "",
  "dateFirstVideo": "2018.01.15",
  "dateLastVideo": "2021.02.14",
  "amountVideos": 49
}, {
  "id": 225,
  "theme": "frontend",
  "title": "The Frontend нет уже",
  "author": "",
  "city": "",
  "country": "Казахстан",
  "link": "https://www.youtube.com/@thefrontend4388/videos",
  "site": "",
  "dateFirstVideo": "2022.02.01",
  "dateLastVideo": "2022.10.25",
  "amountVideos": 49
}, {
  "id": 226,
  "theme": "frontend",
  "title": "WEB PRO - Школа веб-разработки, создание сайтов",
  "author": "Никита Щегольков",
  "city": "",
  "country": "Россия",
  "link": "https://www.youtube.com/@WebProSchool/videos",
  "site": "",
  "dateFirstVideo": "2022.04.28",
  "dateLastVideo": "2022.07.21",
  "amountVideos": 49
}, {
  "id": 227,
  "theme": "frontend",
  "title": "EPAM Training Center",
  "author": "",
  "city": "",
  "country": "Беларусь",
  "link": "https://www.youtube.com/@EPAMTrainingCenter/videos",
  "site": "",
  "dateFirstVideo": "2018.12.14",
  "dateLastVideo": "2022.09.28",
  "amountVideos": 48
}, {
  "id": 228,
  "theme": "frontend",
  "title": "Oldest Junior",
  "author": "Нурбал",
  "city": "",
  "country": "Казахстан",
  "link": "https://www.youtube.com/@OldestJunior/videos",
  "site": "",
  "dateFirstVideo": "2020.12.11",
  "dateLastVideo": "2022.07.17",
  "amountVideos": 48
}, {
  "id": 229,
  "theme": "frontend",
  "title": "Алексей Соловей (N-code)",
  "author": "Алексей Соловей",
  "city": "",
  "country": "Украина",
  "link": "https://www.youtube.com/@NcodeChannel/videos",
  "site": "",
  "dateFirstVideo": "2021.05.15",
  "dateLastVideo": "2022.10.26",
  "amountVideos": 48
}, {
  "id": 230,
  "theme": "frontend",
  "title": "Для чайников на пальцах",
  "author": "",
  "city": "",
  "country": "Россия",
  "link": "https://www.youtube.com/@user-bv6te2pw3n/videos",
  "site": "",
  "dateFirstVideo": "2021.02.25",
  "dateLastVideo": "2022.02.14",
  "amountVideos": 47
}, {
  "id": 231,
  "theme": "frontend",
  "title": "Ararat Martirossyan",
  "author": "Арарат Мартиросян",
  "city": "",
  "country": "",
  "link": "https://www.youtube.com/@araratmartirossyan/videos",
  "site": "",
  "dateFirstVideo": "2020.08.28",
  "dateLastVideo": "2022.11.12",
  "amountVideos": 44
}, {
  "id": 232,
  "theme": "frontend",
  "title": "Программирование с нуля",
  "author": "",
  "city": "",
  "country": "Украина",
  "link": "https://www.youtube.com/@user-it1en9gn8m/videos",
  "site": "",
  "dateFirstVideo": "2022.06.18",
  "dateLastVideo": "2022.11.06",
  "amountVideos": 44
}, {
  "id": 233,
  "theme": "frontend",
  "title": "Программистом в 40",
  "author": "Максим",
  "city": "Ставрополь",
  "country": "Россия",
  "link": "https://www.youtube.com/@user-gh6tc1bf9h/videos",
  "site": "",
  "dateFirstVideo": "2019.11.21",
  "dateLastVideo": "2022.07.31",
  "amountVideos": 44
}, {
  "id": 234,
  "theme": "frontend",
  "title": "Aleksandr Sugak",
  "author": "Александр",
  "city": "",
  "country": "Украина",
  "link": "https://www.youtube.com/@AleksandrSugak/videos",
  "site": "",
  "dateFirstVideo": "2021.10.29",
  "dateLastVideo": "2022.11.21",
  "amountVideos": 42
}, {
  "id": 235,
  "theme": "frontend",
  "title": "CODE LAB - Уроки по программированию",
  "author": "",
  "city": "",
  "country": "Россия",
  "link": "https://www.youtube.com/@toni_wheel/videos",
  "site": "",
  "dateFirstVideo": "2021.03.29",
  "dateLastVideo": "2022.11.02",
  "amountVideos": 42
}, {
  "id": 236,
  "theme": "frontend",
  "title": "Dmitry Kanaev",
  "author": "",
  "city": "",
  "country": "",
  "link": "https://www.youtube.com/@dmitrykanaev8315/streams",
  "site": "",
  "dateFirstVideo": "2019.05.25",
  "dateLastVideo": "2022.08.06",
  "amountVideos": 42
}, {
  "id": 237,
  "theme": "frontend",
  "title": "ProBelDev",
  "author": "",
  "city": "Минск",
  "country": "Беларусь",
  "link": "https://www.youtube.com/@ProBelDev/videos",
  "site": "",
  "dateFirstVideo": "2021.07.02",
  "dateLastVideo": "2023.07.03",
  "amountVideos": 42
}, {
  "id": 238,
  "theme": "frontend",
  "title": "Prog Blog",
  "author": "Саша",
  "city": "",
  "country": "",
  "link": "https://www.youtube.com/@progblog2390/videos",
  "site": "",
  "dateFirstVideo": "2017.06.23",
  "dateLastVideo": "2018.11.06",
  "amountVideos": 42
}, {
  "id": 239,
  "theme": "frontend",
  "title": "WEB Головоломки",
  "author": "Владимир Самойлов",
  "city": "",
  "country": "Украина",
  "link": "https://www.youtube.com/@web7587/videos",
  "site": "",
  "dateFirstVideo": "2020.02.12",
  "dateLastVideo": "2022.01.17",
  "amountVideos": 42
}, {
  "id": 240,
  "theme": "frontend",
  "title": "Александр Пауков",
  "author": "Александр Пауков",
  "city": "",
  "country": "",
  "link": "https://www.youtube.com/@alexanderpaukov/videos",
  "site": "",
  "dateFirstVideo": "2013.11.14",
  "dateLastVideo": "2018.04.10",
  "amountVideos": 42
}, {
  "id": 241,
  "theme": "frontend",
  "title": "веб 2^8",
  "author": "",
  "city": "",
  "country": "Россия",
  "link": "https://www.youtube.com/@user-gm8iv4lw4v/videos",
  "site": "",
  "dateFirstVideo": "2021.03.26",
  "dateLastVideo": "2021.08.14",
  "amountVideos": 41
}, {
  "id": 242,
  "theme": "frontend",
  "title": "Gizmo Developer",
  "author": "",
  "city": "",
  "country": "Россия",
  "link": "https://www.youtube.com/@gizmodeveloper/videos",
  "site": "",
  "dateFirstVideo": "2022.10.10",
  "dateLastVideo": "2023.05.05",
  "amountVideos": 40
}, {
  "id": 243,
  "theme": "frontend",
  "title": "Ninja DEV",
  "author": "",
  "city": "",
  "country": "Россия",
  "link": "https://www.youtube.com/@NinjaFrontend/videos",
  "site": "",
  "dateFirstVideo": "2016.05.28",
  "dateLastVideo": "2017.01.24",
  "amountVideos": 39
}, {
  "id": 244,
  "theme": "frontend",
  "title": "Degreet",
  "author": "",
  "city": "",
  "country": "",
  "link": "https://www.youtube.com/@Degreet/videos",
  "site": "",
  "dateFirstVideo": "2020.06.23",
  "dateLastVideo": "2022.07.27",
  "amountVideos": 39
}, {
  "id": 245,
  "theme": "frontend",
  "title": "KozhinDev",
  "author": "",
  "city": "",
  "country": "Россия",
  "link": "https://www.youtube.com/@KozhinDev/videos",
  "site": "",
  "dateFirstVideo": "2021.02.11",
  "dateLastVideo": "2021.11.26",
  "amountVideos": 39
}, {
  "id": 246,
  "theme": "frontend",
  "title": "Фронтенд от Палыча",
  "author": "Павел Гарский",
  "city": "",
  "country": "Россия",
  "link": "https://www.youtube.com/@user-pj8cc8tw1u/videos",
  "site": "",
  "dateFirstVideo": "2021.03.20",
  "dateLastVideo": "2021.12.20",
  "amountVideos": 39
}, {
  "id": 247,
  "theme": "frontend",
  "title": "Онлайн-школа на Wordpress самостоятельно",
  "author": "Марина Клюшун",
  "city": "",
  "country": "Беларусь",
  "link": "https://www.youtube.com/@wpshkola/videos",
  "site": "",
  "dateFirstVideo": "2019.12.07",
  "dateLastVideo": "2022.10.25",
  "amountVideos": 38
}, {
  "id": 248,
  "theme": "frontend",
  "title": "Эмоциональный робот",
  "author": "",
  "city": "",
  "country": "",
  "link": "https://www.youtube.com/@user-ms6dy8nh3i/videos",
  "site": "",
  "dateFirstVideo": "2020.03.10",
  "dateLastVideo": "2020.10.21",
  "amountVideos": 38
}, {
  "id": 249,
  "theme": "frontend",
  "title": "Веб Разработчик",
  "author": "",
  "city": "",
  "country": "Россия",
  "link": "https://www.youtube.com/@user-wy6ol7gu3e/videos",
  "site": "",
  "dateFirstVideo": "2021.11.16",
  "dateLastVideo": "2022.06.30",
  "amountVideos": 37
}, {
  "id": 250,
  "theme": "frontend",
  "title": "Angular - митапы и события",
  "author": "",
  "city": "",
  "country": "",
  "link": "https://www.youtube.com/@angular-6052/videos",
  "site": "",
  "dateFirstVideo": "2017.05.29",
  "dateLastVideo": "2019.11.28",
  "amountVideos": 36
}, {
  "id": 251,
  "theme": "frontend",
  "title": "Antonina Listopadova",
  "author": "Антонина Листопадова",
  "city": "Москва",
  "country": "Россия",
  "link": "https://www.youtube.com/@AntoninaListopadova/videos",
  "site": "",
  "dateFirstVideo": "2019.12.07",
  "dateLastVideo": "2022.02.06",
  "amountVideos": 36
}, {
  "id": 252,
  "theme": "frontend",
  "title": "FrontEnd tricks",
  "author": "Александр",
  "city": "",
  "country": "Латвия",
  "link": "https://www.youtube.com/@FrontEndtricks/videos",
  "site": "",
  "dateFirstVideo": "2021.07.15",
  "dateLastVideo": "2022.05.26",
  "amountVideos": 36
}, {
  "id": 253,
  "theme": "frontend",
  "title": "FrontHub",
  "author": "",
  "city": "",
  "country": "Россия",
  "link": "https://www.youtube.com/@frontendsu/videos",
  "site": "",
  "dateFirstVideo": "2014.04.07",
  "dateLastVideo": "2019.11.23",
  "amountVideos": 36
}, {
  "id": 254,
  "theme": "frontend",
  "title": "videoBro",
  "author": "",
  "city": "Минск",
  "country": "Беларусь",
  "link": "https://www.youtube.com/@videobro5309/videos",
  "site": "",
  "dateFirstVideo": "2016.10.31",
  "dateLastVideo": "2019.10.27",
  "amountVideos": 36
}, {
  "id": 255,
  "theme": "frontend",
  "title": "About IT",
  "author": "Андрей",
  "city": "",
  "country": "Украина",
  "link": "https://www.youtube.com/@aboutit6516/videos",
  "site": "",
  "dateFirstVideo": "2020.01.03",
  "dateLastVideo": "2019.10.27",
  "amountVideos": 35
}, {
  "id": 256,
  "theme": "frontend",
  "title": "CodeQuest",
  "author": "Сергей Миков",
  "city": "",
  "country": "Россия",
  "link": "https://www.youtube.com/@CodeQuestRu/videos",
  "site": "",
  "dateFirstVideo": "2020.10.12",
  "dateLastVideo": "2022.02.03",
  "amountVideos": 34
}, {
  "id": 257,
  "theme": "frontend",
  "title": "MinskJS",
  "author": "",
  "city": "Минск",
  "country": "Беларусь",
  "link": "https://www.youtube.com/@MinskJS/videos",
  "site": "",
  "dateFirstVideo": "2017.03.02",
  "dateLastVideo": "2020.02.24",
  "amountVideos": 34
}, {
  "id": 258,
  "theme": "frontend",
  "title": "Pavel Druzhinin (dpv.school)",
  "author": "",
  "city": "",
  "country": "Россия",
  "link": "https://www.youtube.com/@dpv.school1236/videos",
  "site": "",
  "dateFirstVideo": "2018.04.26",
  "dateLastVideo": "2022.10.31",
  "amountVideos": 34
}, {
  "id": 259,
  "theme": "frontend",
  "title": "Anatoly Ostrovsky",
  "author": "",
  "city": "",
  "country": "",
  "link": "https://www.youtube.com/@anatolyostrovsky/videos",
  "site": "",
  "dateFirstVideo": "2021.10.18",
  "dateLastVideo": "2021.12.05",
  "amountVideos": 33
}, {
  "id": 260,
  "theme": "frontend",
  "title": "Deep Foundation",
  "author": "",
  "city": "",
  "country": "",
  "link": "https://www.youtube.com/@deepfoundation4605/videos",
  "site": "",
  "dateFirstVideo": "2021.08.25",
  "dateLastVideo": "2023.06.29",
  "amountVideos": 33
}, {
  "id": 261,
  "theme": "frontend",
  "title": "DreyLiky Dev. ua",
  "author": "",
  "city": "",
  "country": "Украина",
  "link": "https://www.youtube.com/@DreyLikyDev/videos",
  "site": "",
  "dateFirstVideo": "2021.07.22",
  "dateLastVideo": "2022.11.20",
  "amountVideos": 33
}, {
  "id": 262,
  "theme": "frontend",
  "title": "Frontend Skills",
  "author": "Александр Белькевич",
  "city": "",
  "country": "",
  "link": "https://www.youtube.com/@frontend-skills/videos",
  "site": "",
  "dateFirstVideo": "2022.07.01",
  "dateLastVideo": "2023.06.16",
  "amountVideos": 33
}, {
  "id": 263,
  "theme": "frontend",
  "title": "Разработка на WordPress",
  "author": "Леонид",
  "city": "",
  "country": "Россия",
  "link": "https://www.youtube.com/@tushov/videos",
  "site": "https://tushov.online/",
  "dateFirstVideo": "2018.07.18",
  "dateLastVideo": "2021.12.15",
  "amountVideos": 33
}, {
  "id": 264,
  "theme": "frontend",
  "title": "Типичный веб разработчик",
  "author": "Дмитрий",
  "city": "",
  "country": "",
  "link": "https://www.youtube.com/@DmitriyShkredov/videos",
  "site": "",
  "dateFirstVideo": "2013.05.17",
  "dateLastVideo": "2023.06.30",
  "amountVideos": 33
}, {
  "id": 265,
  "theme": "frontend",
  "title": "Frontend Sensei",
  "author": "",
  "city": "",
  "country": "Украина",
  "link": "https://www.youtube.com/@FrontendSensei/videos",
  "site": "",
  "dateFirstVideo": "2020.05.06",
  "dateLastVideo": "2022.07.26",
  "amountVideos": 32
}, {
  "id": 266,
  "theme": "frontend",
  "title": "Helio",
  "author": "",
  "city": "",
  "country": "",
  "link": "https://www.youtube.com/@helio404/videos",
  "site": "",
  "dateFirstVideo": "2022.09.14",
  "dateLastVideo": "2023.01.07",
  "amountVideos": 32
}, {
  "id": 267,
  "theme": "frontend",
  "title": "Илья Стоянов - Верстка Сайта",
  "author": "Илья Стоянов",
  "city": "",
  "country": "Украина",
  "link": "https://www.youtube.com/@ilyastoyanov-html-css-js-react/videos",
  "site": "",
  "dateFirstVideo": "2022.05.30",
  "dateLastVideo": "2022.11.21",
  "amountVideos": 31
}, {
  "id": 268,
  "theme": "frontend",
  "title": "Учим Вместе",
  "author": "",
  "city": "",
  "country": "",
  "link": "https://www.youtube.com/@UchimVmeste./videos",
  "site": "",
  "dateFirstVideo": "2023.02.17",
  "dateLastVideo": "2023.06.01",
  "amountVideos": 31
}, {
  "id": 269,
  "theme": "frontend",
  "title": "Anna Blok — Frontend Tutorial",
  "author": "Анна Блок",
  "city": "Екатеринбург",
  "country": "Россия",
  "link": "https://www.youtube.com/@AnnaBlok/videos",
  "site": "https://tpverstak.ru/",
  "dateFirstVideo": "2018.09.05",
  "dateLastVideo": "2022.04.04",
  "amountVideos": 30
}, {
  "id": 270,
  "theme": "frontend",
  "title": "Max Roslow",
  "author": "",
  "city": "",
  "country": "Россия",
  "link": "https://www.youtube.com/@maximroslow/videos",
  "site": "",
  "dateFirstVideo": "2021.07.06",
  "dateLastVideo": "2022.09.27",
  "amountVideos": 30
}, {
  "id": 271,
  "theme": "frontend",
  "title": "Артем Башлыков Курс по созданию сайта с нуля",
  "author": "Артем Башлыков",
  "city": "Санкт-Петербург",
  "country": "Россия",
  "link": "https://www.youtube.com/@user-gl4ro6ji8u/videos",
  "site": "https://artbashlykov.ru/",
  "dateFirstVideo": "2021.07.26",
  "dateLastVideo": "2021.10.15",
  "amountVideos": 30
}, {
  "id": 272,
  "theme": "frontend",
  "title": "KamaDeva",
  "author": "",
  "city": "",
  "country": "Украина",
  "link": "https://www.youtube.com/@KamaDeva/videos",
  "site": "",
  "dateFirstVideo": "2020.06.26",
  "dateLastVideo": "2021.12.19",
  "amountVideos": 29
}, {
  "id": 273,
  "theme": "frontend",
  "title": "wise.js",
  "author": "",
  "city": "",
  "country": "Украина",
  "link": "https://www.youtube.com/@user-uy5cx8ge5y/videos",
  "site": "",
  "dateFirstVideo": "2020.08.30",
  "dateLastVideo": "2022.02.22",
  "amountVideos": 29
}, {
  "id": 274,
  "theme": "frontend",
  "title": "Создавалкин (нет уже)",
  "author": "",
  "city": "",
  "country": "Россия",
  "link": "https://www.youtube.com/channel/UCKV7CBRyL8bAjA57GUNVPuQ/videos",
  "site": "",
  "dateFirstVideo": "2018.03.11",
  "dateLastVideo": "2019.01.17",
  "amountVideos": 29
}, {
  "id": 275,
  "theme": "frontend",
  "title": "Go Frontend",
  "author": "",
  "city": "Москва",
  "country": "Россия",
  "link": "https://www.youtube.com/@gofrontend2220/videos",
  "site": "",
  "dateFirstVideo": "2020.01.12",
  "dateLastVideo": "2020.05.18",
  "amountVideos": 28
}, {
  "id": 276,
  "theme": "frontend",
  "title": "Sasha Novik",
  "author": "Саша Новик",
  "city": "",
  "country": "Украина",
  "link": "https://www.youtube.com/@sashanovik8466/streams",
  "site": "",
  "dateFirstVideo": "2016.10.28",
  "dateLastVideo": "2017.01.24",
  "amountVideos": 28
}, {
  "id": 277,
  "theme": "frontend",
  "title": "ThreePixDroid",
  "author": "",
  "city": "",
  "country": "Россия",
  "link": "https://www.youtube.com/@ThreePixDroid/videos",
  "site": "",
  "dateFirstVideo": "2019.02.26",
  "dateLastVideo": "2021.10.07",
  "amountVideos": 28
}, {
  "id": 278,
  "theme": "frontend",
  "title": "Успеху Идук",
  "author": "Антон",
  "city": "Белгород",
  "country": "Россия",
  "link": "https://www.youtube.com/@user-sc8he2kq3d/videos",
  "site": "",
  "dateFirstVideo": "2020.07.25",
  "dateLastVideo": "2022.03.18",
  "amountVideos": 27
}, {
  "id": 279,
  "theme": "frontend",
  "title": "almaz joldowbekov",
  "author": "",
  "city": "",
  "country": "",
  "link": "https://www.youtube.com/@almazjoldowbekov7761/videos",
  "site": "",
  "dateFirstVideo": "2015.06.17",
  "dateLastVideo": "2022.09.11",
  "amountVideos": 27
}, {
  "id": 280,
  "theme": "frontend",
  "title": "Coder way",
  "author": "",
  "city": "",
  "country": "",
  "link": "https://www.youtube.com/@coderway5617/videos",
  "site": "",
  "dateFirstVideo": "2021.02.27",
  "dateLastVideo": "2022.11.22",
  "amountVideos": 27
}, {
  "id": 281,
  "theme": "frontend",
  "title": "Игорь Самарцев - React-Js",
  "author": "Игорь Самарцев",
  "city": "",
  "country": "Россия",
  "link": "https://www.youtube.com/@igorsamartsev5516/videos",
  "site": "",
  "dateFirstVideo": "2019.02.12",
  "dateLastVideo": "2021.10.16",
  "amountVideos": 27
}, {
  "id": 282,
  "theme": "frontend",
  "title": "Отсобеседование",
  "author": "",
  "city": "",
  "country": "Россия",
  "link": "https://www.youtube.com/@otsobes/videos",
  "site": "",
  "dateFirstVideo": "2021.02.05",
  "dateLastVideo": "2021.11.19",
  "amountVideos": 27
}, {
  "id": 283,
  "theme": "frontend",
  "title": "It Road",
  "author": "Сергей",
  "city": "",
  "country": "",
  "link": "https://www.youtube.com/@itroad9085/videos",
  "site": "",
  "dateFirstVideo": "2020.02.12",
  "dateLastVideo": "2020.05.21",
  "amountVideos": 26
}, {
  "id": 284,
  "theme": "frontend",
  "title": "Kharkiv Frontend",
  "author": "",
  "city": "Харьков",
  "country": "Украина",
  "link": "https://www.youtube.com/@KharkivFrontend/videos",
  "site": "",
  "dateFirstVideo": "2018.01.08",
  "dateLastVideo": "2018.11.26",
  "amountVideos": 26
}, {
  "id": 285,
  "theme": "frontend",
  "title": "Pomazkov JS",
  "author": "",
  "city": "",
  "country": "",
  "link": "https://www.youtube.com/@pomazkovjs/videos",
  "site": "",
  "dateFirstVideo": "2022.12.14",
  "dateLastVideo": "2023.06.13",
  "amountVideos": 26
}, {
  "id": 286,
  "theme": "frontend",
  "title": "udod (JediCSS)",
  "author": "",
  "city": "",
  "country": "Украина",
  "link": "https://www.youtube.com/@JediCSS/videos",
  "site": "https://jedicss.com/",
  "dateFirstVideo": "2018.04.05",
  "dateLastVideo": "2020.05.14",
  "amountVideos": 26
}, {
  "id": 287,
  "theme": "frontend",
  "title": "Легкий способ стать программистом",
  "author": "",
  "city": "",
  "country": "Россия",
  "link": "https://www.youtube.com/@user-jv9el2rn5v/videos",
  "site": "",
  "dateFirstVideo": "2019.06.10",
  "dateLastVideo": "2021.04.29",
  "amountVideos": 26
}, {
  "id": 288,
  "theme": "frontend",
  "title": "Anton Bely",
  "author": "Антон Белый",
  "city": "",
  "country": "",
  "link": "https://www.youtube.com/@antonbely5204/videos",
  "site": "",
  "dateFirstVideo": "2021.03.19",
  "dateLastVideo": "2021.10.13",
  "amountVideos": 25
}, {
  "id": 289,
  "theme": "frontend",
  "title": "Cleannetcode - Roman Trufanov",
  "author": "Роман Труфанов",
  "city": "",
  "country": "Россия",
  "link": "https://www.youtube.com/@TrufanovRoman/streams",
  "site": "",
  "dateFirstVideo": "2020.12.12",
  "dateLastVideo": "2022.11.13",
  "amountVideos": 25
}, {
  "id": 290,
  "theme": "frontend",
  "title": "Oleksandr Kyianovskyi",
  "author": "Александр",
  "city": "",
  "country": "Украина",
  "link": "https://www.youtube.com/@Urethrify/videos",
  "site": "",
  "dateFirstVideo": "2017.03.26",
  "dateLastVideo": "2018.12.15",
  "amountVideos": 25
}, {
  "id": 291,
  "theme": "frontend",
  "title": "Верстач",
  "author": "Владислав Белецкий",
  "city": "",
  "country": "Россия",
  "link": "https://www.youtube.com/@verstach/videos",
  "site": "",
  "dateFirstVideo": "2019.06.17",
  "dateLastVideo": "2022.04.05",
  "amountVideos": 25
}, {
  "id": 292,
  "theme": "frontend",
  "title": "Виктор Шкода",
  "author": "Виктор Шкода",
  "city": "",
  "country": "Казахстан",
  "link": "https://www.youtube.com/@victorshkoda/videos",
  "site": "",
  "dateFirstVideo": "2011.05.31",
  "dateLastVideo": "2022.03.08",
  "amountVideos": 25
}, {
  "id": 293,
  "theme": "frontend",
  "title": "Dev Surge",
  "author": "",
  "city": "",
  "country": "",
  "link": "https://www.youtube.com/@devsurge-official/videos",
  "site": "",
  "dateFirstVideo": "2023.04.18",
  "dateLastVideo": "2023.06.24",
  "amountVideos": 24
}, {
  "id": 294,
  "theme": "frontend",
  "title": "Don't Dive Too Deep",
  "author": "",
  "city": "",
  "country": "",
  "link": "https://www.youtube.com/@DontDiveTooDeep/videos",
  "site": "",
  "dateFirstVideo": "2017.06.27",
  "dateLastVideo": "2023.07.09",
  "amountVideos": 24
}, {
  "id": 295,
  "theme": "frontend",
  "title": "Frontend News",
  "author": "",
  "city": "",
  "country": "",
  "link": "https://www.youtube.com/@frontendnews3203/videos",
  "site": "",
  "dateFirstVideo": "2021.04.17",
  "dateLastVideo": "2022.11.18",
  "amountVideos": 24
}, {
  "id": 296,
  "theme": "frontend",
  "title": "Max Frontend",
  "author": "Максим Пацианский",
  "city": "",
  "country": "Россия",
  "link": "https://www.youtube.com/@maxfrontend8750/videos",
  "site": "",
  "dateFirstVideo": "2018.03.10",
  "dateLastVideo": "2020.06.21",
  "amountVideos": 24
}, {
  "id": 297,
  "theme": "frontend",
  "title": "Tocode",
  "author": "Евгений",
  "city": "",
  "country": "Россия",
  "link": "https://www.youtube.com/@JackCoder/videos",
  "site": "",
  "dateFirstVideo": "2018.09.24",
  "dateLastVideo": "2022.03.18",
  "amountVideos": 24
}, {
  "id": 298,
  "theme": "frontend",
  "title": "WebStack - Frontend",
  "author": "",
  "city": "",
  "country": "",
  "link": "https://www.youtube.com/@webstack-frontend1697/videos",
  "site": "",
  "dateFirstVideo": "2022.08.14",
  "dateLastVideo": "2022.11.20",
  "amountVideos": 24
}, {
  "id": 299,
  "theme": "frontend",
  "title": "Фронтендер",
  "author": "Дмитрий Бердников",
  "city": "",
  "country": "",
  "link": "https://www.youtube.com/@user-up6es3nr6s/videos",
  "site": "",
  "dateFirstVideo": "2020.01.03",
  "dateLastVideo": "2021.03.15",
  "amountVideos": 24
}, {
  "id": 300,
  "theme": "frontend",
  "title": "gabdr0",
  "author": "Дамир Габдрахимов",
  "city": "",
  "country": "Россия",
  "link": "https://www.youtube.com/@gabdr0812/videos",
  "site": "https://gabdrahimov.ru/",
  "dateFirstVideo": "2019.02.10",
  "dateLastVideo": "2019.06.26",
  "amountVideos": 22
}, {
  "id": 301,
  "theme": "frontend",
  "title": "Story IT by Igosheva",
  "author": "Настя",
  "city": "",
  "country": "Россия",
  "link": "https://www.youtube.com/@storyitbyigosheva3564/videos",
  "site": "",
  "dateFirstVideo": "2019.05.30",
  "dateLastVideo": "2021.11.03",
  "amountVideos": 22
}, {
  "id": 302,
  "theme": "frontend",
  "title": "Как стать программистом",
  "author": "Адам Балкоев",
  "city": "",
  "country": "Россия",
  "link": "https://www.youtube.com/@user-gu8gg2ib6y/videos",
  "site": "",
  "dateFirstVideo": "2020.02.08",
  "dateLastVideo": "2021.09.11",
  "amountVideos": 22
}, {
  "id": 303,
  "theme": "frontend",
  "title": "Kyzinatra",
  "author": "Данил",
  "city": "",
  "country": "",
  "link": "https://www.youtube.com/@kyzinatra6391/videos",
  "site": "",
  "dateFirstVideo": "2022.10.18",
  "dateLastVideo": "2022.11.20",
  "amountVideos": 21
}, {
  "id": 304,
  "theme": "frontend",
  "title": "Web Dev Tips",
  "author": "",
  "city": "",
  "country": "Украина",
  "link": "https://www.youtube.com/@WebDevTips/videos",
  "site": "",
  "dateFirstVideo": "2022.03.03",
  "dateLastVideo": "2021.10.05",
  "amountVideos": 21
}, {
  "id": 305,
  "theme": "frontend",
  "title": "Сегень Александр",
  "author": "Александр Сегень",
  "city": "",
  "country": "Беларусь",
  "link": "https://www.youtube.com/@SegenAlexander/videos",
  "site": "",
  "dateFirstVideo": "2016.10.27",
  "dateLastVideo": "2022.11.08",
  "amountVideos": 21
}, {
  "id": 306,
  "theme": "frontend",
  "title": "Влад Калач - JavaScript уроки",
  "author": "Владислав Калачев",
  "city": "",
  "country": "Россия",
  "link": "https://www.youtube.com/@-javascript2665/videos",
  "site": "",
  "dateFirstVideo": "2020.07.15",
  "dateLastVideo": "2021.01.31",
  "amountVideos": 21
}, {
  "id": 307,
  "theme": "frontend",
  "title": "Алексей Соловьев",
  "author": "Алексей Соловьев",
  "city": "",
  "country": "",
  "link": "https://www.youtube.com/@user-rk3om5ys8q/videos",
  "site": "",
  "dateFirstVideo": "2020.07.21",
  "dateLastVideo": "2022.11.10",
  "amountVideos": 21
}, {
  "id": 308,
  "theme": "frontend",
  "title": "METATECH",
  "author": "Тимур Шемсединов",
  "city": "Киев",
  "country": "Украина",
  "link": "https://www.youtube.com/@MetatechEducation/videos",
  "site": "",
  "dateFirstVideo": "2022.05.26",
  "dateLastVideo": "2022.09.14",
  "amountVideos": 20
}, {
  "id": 309,
  "theme": "frontend",
  "title": "ngRuAir",
  "author": "",
  "city": "Москва",
  "country": "Россия",
  "link": "https://www.youtube.com/@ngRuAir/streams",
  "site": "",
  "dateFirstVideo": "2019.02.17",
  "dateLastVideo": "2021.11.25",
  "amountVideos": 20
}, {
  "id": 310,
  "theme": "frontend",
  "title": "OneByteSite в IT после 30-ти",
  "author": "Алексей",
  "city": "",
  "country": "Россия",
  "link": "https://www.youtube.com/@onebytesiteit30-75/videos",
  "site": "",
  "dateFirstVideo": "2020.05.11",
  "dateLastVideo": "2020.11.08",
  "amountVideos": 20
}, {
  "id": 311,
  "theme": "frontend",
  "title": "TARTEM SCHOOL",
  "author": "",
  "city": "",
  "country": "",
  "link": "https://www.youtube.com/@tartemschool321/videos",
  "site": "",
  "dateFirstVideo": "2020.04.13",
  "dateLastVideo": "2020.04.15",
  "amountVideos": 20
}, {
  "id": 312,
  "theme": "frontend",
  "title": "Игорь Филимонов",
  "author": "Игорь Филимонов",
  "city": "",
  "country": "Россия",
  "link": "https://www.youtube.com/@i.expert/streams",
  "site": "",
  "dateFirstVideo": "2017.06.28",
  "dateLastVideo": "2017.09.18",
  "amountVideos": 19
}, {
  "id": 313,
  "theme": "frontend",
  "title": "JS ACADEMY – Влад Грибенников",
  "author": "Влад Грибенников",
  "city": "",
  "country": "Украина",
  "link": "https://www.youtube.com/@jsacademy772/videos",
  "site": "",
  "dateFirstVideo": "2017.08.09",
  "dateLastVideo": "2021.03.14",
  "amountVideos": 18
}, {
  "id": 314,
  "theme": "frontend",
  "title": "Фронтенд простыми словами (Имрон Фронтенд)",
  "author": "",
  "city": "",
  "country": "США",
  "link": "https://www.youtube.com/@frontendinsimplewords/videos",
  "site": "",
  "dateFirstVideo": "2022.08.28",
  "dateLastVideo": "2022.11.09",
  "amountVideos": 18
}, {
  "id": 315,
  "theme": "frontend",
  "title": "JAVA И SКРИПТЫ",
  "author": "Данил",
  "city": "",
  "country": "Россия",
  "link": "https://www.youtube.com/@javas9164/videos",
  "site": "",
  "dateFirstVideo": "2020.05.01",
  "dateLastVideo": "2020.09.15",
  "amountVideos": 17
}, {
  "id": 316,
  "theme": "frontend",
  "title": "webcoderofficial",
  "author": "",
  "city": "",
  "country": "Россия",
  "link": "https://www.youtube.com/@webcoderofficial5886/videos",
  "site": "",
  "dateFirstVideo": "2021.07.01",
  "dateLastVideo": "2022.11.15",
  "amountVideos": 17
}, {
  "id": 317,
  "theme": "frontend",
  "title": "Максим Синяков",
  "author": "Максим Синяков",
  "city": "",
  "country": "",
  "link": "https://www.youtube.com/@maxwmz/videos",
  "site": "https://sinyakov.com/",
  "dateFirstVideo": "2019.11.26",
  "dateLastVideo": "2020.04.25",
  "amountVideos": 17
}, {
  "id": 318,
  "theme": "frontend",
  "title": "DevPostnov",
  "author": "Даниил Постнов",
  "city": "",
  "country": "Россия",
  "link": "https://www.youtube.com/@daniilpostnov/videos",
  "site": "",
  "dateFirstVideo": "2018.11.18",
  "dateLastVideo": "2021.07.07",
  "amountVideos": 16
}, {
  "id": 319,
  "theme": "frontend",
  "title": "Technomagic (JavaScript 2022 С нуля до профи)",
  "author": "",
  "city": "",
  "country": "Украина",
  "link": "https://www.youtube.com/@user-uc3tv9kk7b/videos",
  "site": "",
  "dateFirstVideo": "2022.02.03",
  "dateLastVideo": "2023.04.21",
  "amountVideos": 16
}, {
  "id": 320,
  "theme": "frontend",
  "title": "bem.info",
  "author": "",
  "city": "",
  "country": "",
  "link": "https://www.youtube.com/@user-vs7mz2rl8c/videos",
  "site": "",
  "dateFirstVideo": "2015.12.20",
  "dateLastVideo": "2019.02.26",
  "amountVideos": 15
}, {
  "id": 321,
  "theme": "frontend",
  "title": "codefocus",
  "author": "Наташа Жиркова",
  "city": "",
  "country": "Россия",
  "link": "https://www.youtube.com/@codefocus9933/videos",
  "site": "",
  "dateFirstVideo": "2018.12.02",
  "dateLastVideo": "2020.01.22",
  "amountVideos": 15
}, {
  "id": 322,
  "theme": "frontend",
  "title": "uWebCode",
  "author": "Алексей",
  "city": "Минск",
  "country": "Беларусь",
  "link": "https://www.youtube.com/@uWebCode/videos",
  "site": "",
  "dateFirstVideo": "2019.12.30",
  "dateLastVideo": "2021.11.12",
  "amountVideos": 15
}, {
  "id": 323,
  "theme": "frontend",
  "title": "Вадим Гребенщиков",
  "author": "Вадим Гребенщиков",
  "city": "",
  "country": "Россия",
  "link": "https://www.youtube.com/@user-op1br7zs7c/videos",
  "site": "http://htmlboss.ru/beginner",
  "dateFirstVideo": "2015.03.21",
  "dateLastVideo": "2015.09.09",
  "amountVideos": 15
}, {
  "id": 324,
  "theme": "frontend",
  "title": "Протасевич",
  "author": "Миша Протасевич",
  "city": "",
  "country": "",
  "link": "https://www.youtube.com/@m.protasevich/videos",
  "site": "",
  "dateFirstVideo": "2019.08.10",
  "dateLastVideo": "2021.08.29",
  "amountVideos": 15
}, {
  "id": 325,
  "theme": "frontend",
  "title": "LISA WEBGIRL",
  "author": "Лиза",
  "city": "",
  "country": "Россия",
  "link": "https://www.youtube.com/@LISAWEBGIRL/videos",
  "site": "",
  "dateFirstVideo": "2020.12.21",
  "dateLastVideo": "2022.07.25",
  "amountVideos": 14
}, {
  "id": 326,
  "theme": "frontend",
  "title": "techno future",
  "author": "",
  "city": "",
  "country": "",
  "link": "https://www.youtube.com/@ShevchRomaha/videos",
  "site": "",
  "dateFirstVideo": "2022.06.07",
  "dateLastVideo": "2022.11.13",
  "amountVideos": 14
}, {
  "id": 327,
  "theme": "frontend",
  "title": "Евгений Фронтендер",
  "author": "Евгений",
  "city": "",
  "country": "",
  "link": "https://www.youtube.com/@user-dz5et3rd8s/videos",
  "site": "",
  "dateFirstVideo": "2022.09.04",
  "dateLastVideo": "2022.11.08",
  "amountVideos": 14
}, {
  "id": 328,
  "theme": "frontend",
  "title": "Юрий Симонов",
  "author": "Юрий Симонов",
  "city": "",
  "country": "Россия",
  "link": "https://www.youtube.com/@Yuri_Simonov/videos",
  "site": "",
  "dateFirstVideo": "2021.09.06",
  "dateLastVideo": "2022.11.07",
  "amountVideos": 14
}, {
  "id": 329,
  "theme": "frontend",
  "title": "frontendgirl",
  "author": "Таня",
  "city": "Москва",
  "country": "Россия",
  "link": "https://www.youtube.com/@frontendgirl8865/videos",
  "site": "",
  "dateFirstVideo": "2019.02.17",
  "dateLastVideo": "2020.06.22",
  "amountVideos": 13
}, {
  "id": 330,
  "theme": "frontend",
  "title": "Merrick",
  "author": "",
  "city": "",
  "country": "",
  "link": "https://www.youtube.com/@Merrick_web/videos",
  "site": "",
  "dateFirstVideo": "2016.03.10",
  "dateLastVideo": "2017.02.16",
  "amountVideos": 13
}, {
  "id": 331,
  "theme": "frontend",
  "title": "Ros",
  "author": "",
  "city": "",
  "country": "",
  "link": "https://www.youtube.com/@RosIvanov/videos",
  "site": "",
  "dateFirstVideo": "2015.03.23",
  "dateLastVideo": "2015.09.03",
  "amountVideos": 13
}, {
  "id": 332,
  "theme": "frontend",
  "title": "Young&&Yandex фронтенд-разработка",
  "author": "",
  "city": "",
  "country": "",
  "link": "https://www.youtube.com/@YY_frontend/streams",
  "site": "",
  "dateFirstVideo": "2023.06.07",
  "dateLastVideo": "2023.06.28",
  "amountVideos": 13
}, {
  "id": 333,
  "theme": "frontend",
  "title": "Войти в IT к 30",
  "author": "Владислав",
  "city": "",
  "country": "Россия",
  "link": "https://www.youtube.com/@enterIT30/videos",
  "site": "",
  "dateFirstVideo": "2020.11.24",
  "dateLastVideo": "2022-08-29",
  "amountVideos": 13
}, {
  "id": 334,
  "theme": "frontend",
  "title": "Пятиминутка Angular",
  "author": "",
  "city": "",
  "country": "",
  "link": "https://www.youtube.com/@angular768/videos",
  "site": "",
  "dateFirstVideo": "2017.08.12",
  "dateLastVideo": "2018.12.29",
  "amountVideos": 13
}, {
  "id": 335,
  "theme": "frontend",
  "title": "Dmitry Bondarchuk",
  "author": "Дмитрий Бондарчук",
  "city": "",
  "country": "Россия",
  "link": "https://www.youtube.com/@dmitrybondarchuk3683/videos",
  "site": "",
  "dateFirstVideo": "2018.04.15",
  "dateLastVideo": "2021.04.07",
  "amountVideos": 12
}, {
  "id": 336,
  "theme": "frontend",
  "title": "Saint Code Bootcamp",
  "author": "Евгений Гриценко",
  "city": "Санкт Петербург",
  "country": "Россия",
  "link": "https://www.youtube.com/@saintcodebootcamp8766/videos",
  "site": "https://saintcode.ru/",
  "dateFirstVideo": "2020.07.13",
  "dateLastVideo": "2022.10.11",
  "amountVideos": 12
}, {
  "id": 337,
  "theme": "frontend",
  "title": "WebReference",
  "author": "Влад Мержевич",
  "city": "",
  "country": "Россия",
  "link": "https://www.youtube.com/@webreference6069/videos",
  "site": "",
  "dateFirstVideo": "2019.11.29",
  "dateLastVideo": "2020.06.22",
  "amountVideos": 12
}, {
  "id": 338,
  "theme": "frontend",
  "title": "Виктор Рябков",
  "author": "Виктор Рябков",
  "city": "",
  "country": "",
  "link": "https://www.youtube.com/@viktor.riabkov/videos",
  "site": "",
  "dateFirstVideo": "2023.05.10",
  "dateLastVideo": "2023.06.15",
  "amountVideos": 12
}, {
  "id": 339,
  "theme": "frontend",
  "title": "Дмитрий Sun Developer",
  "author": "Дмитрий Полянин",
  "city": "",
  "country": "",
  "link": "https://www.youtube.com/@sundeveloper7686/videos",
  "site": "",
  "dateFirstVideo": "2020.01.22",
  "dateLastVideo": "2022.06.27",
  "amountVideos": 12
}, {
  "id": 340,
  "theme": "frontend",
  "title": "Front Fri End",
  "author": "Александр Пауэрс",
  "city": "",
  "country": "Россия",
  "link": "https://www.youtube.com/@FrontFriEnd/videos",
  "site": "",
  "dateFirstVideo": "2018.10.28",
  "dateLastVideo": "2021.12.25",
  "amountVideos": 11
}, {
  "id": 341,
  "theme": "frontend",
  "title": "Ilya Frontender",
  "author": "Илья Колесников",
  "city": "",
  "country": "",
  "link": "https://www.youtube.com/@liquidbobr/videos",
  "site": "",
  "dateFirstVideo": "2016.08.10",
  "dateLastVideo": "2019.07.10",
  "amountVideos": 11
}, {
  "id": 342,
  "theme": "frontend",
  "title": "Result.School",
  "author": "Владилен Минин",
  "city": "",
  "country": "Россия",
  "link": "https://www.youtube.com/@ResultSchool/videos",
  "site": "",
  "dateFirstVideo": "2021.08.24",
  "dateLastVideo": "2022.10.08",
  "amountVideos": 11
}, {
  "id": 343,
  "theme": "frontend",
  "title": "Softonix",
  "author": "",
  "city": "",
  "country": "Украина",
  "link": "https://www.youtube.com/@softonix4851/videos",
  "site": "",
  "dateFirstVideo": "2022.10.14",
  "dateLastVideo": "2022.11.19",
  "amountVideos": 11
}, {
  "id": 344,
  "theme": "frontend",
  "title": "welcome to IT",
  "author": "",
  "city": "",
  "country": "Украина",
  "link": "https://www.youtube.com/@welcometoit7875/videos",
  "site": "",
  "dateFirstVideo": "2020.03.22",
  "dateLastVideo": "2020.06.08",
  "amountVideos": 11
}, {
  "id": 345,
  "theme": "frontend",
  "title": "Aslanbek Kaipaev",
  "author": "",
  "city": "",
  "country": "Турция",
  "link": "https://www.youtube.com/@aslanbekkaipaev9148/videos",
  "site": "",
  "dateFirstVideo": "2022.06.11",
  "dateLastVideo": "2022.09.09",
  "amountVideos": 10
}, {
  "id": 346,
  "theme": "frontend",
  "title": "Easy Web",
  "author": "",
  "city": "",
  "country": "Россия",
  "link": "https://www.youtube.com/@easyweb4497/videos",
  "site": "",
  "dateFirstVideo": "2018.02.05",
  "dateLastVideo": "2018.03.22",
  "amountVideos": 10
}, {
  "id": 347,
  "theme": "frontend",
  "title": "IT Fast",
  "author": "",
  "city": "",
  "country": "Россия",
  "link": "https://www.youtube.com/@itfast9170/videos",
  "site": "",
  "dateFirstVideo": "2019.07.23",
  "dateLastVideo": "2020.05.16",
  "amountVideos": 10
}, {
  "id": 348,
  "theme": "frontend",
  "title": "Maxim Filanovich",
  "author": "Максим",
  "city": "",
  "country": "Беларусь",
  "link": "https://www.youtube.com/@MaximFilanovich/videoss",
  "site": "",
  "dateFirstVideo": "2021.03.25",
  "dateLastVideo": "2021.10.22",
  "amountVideos": 10
}, {
  "id": 349,
  "theme": "frontend",
  "title": "Лукьянов Артём",
  "author": "Артем Лукьянов",
  "city": "",
  "country": "Россия",
  "link": "https://www.youtube.com/@user-bc2nc5lt5p/videos",
  "site": "",
  "dateFirstVideo": "2019.04.24",
  "dateLastVideo": "2020.10.10",
  "amountVideos": 10
}, {
  "id": 350,
  "theme": "frontend",
  "title": "Дмитрий Колотильщиков",
  "author": "Дмитрий Колотильщиков",
  "city": "",
  "country": "Беларусь",
  "link": "https://www.youtube.com/@dmitry_kolotilshikov/videos",
  "site": "",
  "dateFirstVideo": "2020.06.07",
  "dateLastVideo": "2021.02.07",
  "amountVideos": 9
}, {
  "id": 351,
  "theme": "frontend",
  "title": "Записки фронтендера",
  "author": "Максим",
  "city": "",
  "country": "Украина",
  "link": "https://www.youtube.com/@user-cv2nm5em2g/videos",
  "site": "",
  "dateFirstVideo": "2019.04.27",
  "dateLastVideo": "2020.04.08",
  "amountVideos": 9
}, {
  "id": 352,
  "theme": "frontend",
  "title": "Мастерская разработчика",
  "author": "Сергей Миртов",
  "city": "",
  "country": "Россия",
  "link": "https://www.youtube.com/@dev-workshop/videos",
  "site": "",
  "dateFirstVideo": "2022.05.14",
  "dateLastVideo": "2022.08.02",
  "amountVideos": 9
}, {
  "id": 353,
  "theme": "frontend",
  "title": "Эльхора",
  "author": "",
  "city": "",
  "country": "",
  "link": "https://www.youtube.com/@elhora_edu/videos",
  "site": "",
  "dateFirstVideo": "2023.01.04",
  "dateLastVideo": "2023.04.17",
  "amountVideos": 9
}, {
  "id": 354,
  "theme": "frontend",
  "title": "Dmitrii Fokeev",
  "author": "Дмитрий Фокеев",
  "city": "",
  "country": "",
  "link": "https://www.youtube.com/@DmitriiFokeev/videos",
  "site": "",
  "dateFirstVideo": "2022.02.07",
  "dateLastVideo": "2023.05.27",
  "amountVideos": 8
}, {
  "id": 355,
  "theme": "frontend",
  "title": "Frontend не для всех",
  "author": "",
  "city": "",
  "country": "Россия",
  "link": "https://www.youtube.com/@frontend971/videos",
  "site": "",
  "dateFirstVideo": "2020.07.17",
  "dateLastVideo": "2021.09.12",
  "amountVideos": 8
}, {
  "id": 356,
  "theme": "frontend",
  "title": "Inikon Electrix",
  "author": "",
  "city": "",
  "country": "",
  "link": "https://www.youtube.com/@inikonelectrix2349/videos",
  "site": "",
  "dateFirstVideo": "2020.07.19",
  "dateLastVideo": "2021.10.05",
  "amountVideos": 8
}, {
  "id": 357,
  "theme": "frontend",
  "title": "Mikhail Zhitin",
  "author": "Михаил Житин",
  "city": "",
  "country": "",
  "link": "https://www.youtube.com/@mikhailzhitin42/videos",
  "site": "",
  "dateFirstVideo": "2017.05.12",
  "dateLastVideo": "2017.06.07",
  "amountVideos": 8
}, {
  "id": 358,
  "theme": "frontend",
  "title": "Аня Coding Girl",
  "author": "Аня",
  "city": "",
  "country": "Франция",
  "link": "https://www.youtube.com/@annacodinggirl/videos",
  "site": "",
  "dateFirstVideo": "2022.11.23",
  "dateLastVideo": "2023.05.10",
  "amountVideos": 8
}, {
  "id": 359,
  "theme": "frontend",
  "title": "Прокашев Даниил",
  "author": "Даниил Прокашев",
  "city": "",
  "country": "",
  "link": "https://www.youtube.com/@user-yd1tk2ix6f/videos",
  "site": "",
  "dateFirstVideo": "2022.03.30",
  "dateLastVideo": "2022.08.01",
  "amountVideos": 8
}, {
  "id": 360,
  "theme": "frontend",
  "title": "Anton Okulov - About Code",
  "author": "Антон Окулов",
  "city": "",
  "country": "Россия",
  "link": "https://www.youtube.com/@about-code/videos",
  "site": "",
  "dateFirstVideo": "2022.05.23",
  "dateLastVideo": "2023.01.08",
  "amountVideos": 7
}, {
  "id": 361,
  "theme": "frontend",
  "title": "Joy Stack",
  "author": "",
  "city": "",
  "country": "",
  "link": "https://www.youtube.com/@joyStackk/videos",
  "site": "",
  "dateFirstVideo": "2023.03.22",
  "dateLastVideo": "2023.06.12",
  "amountVideos": 7
}, {
  "id": 362,
  "theme": "frontend",
  "title": "Vanguard Coding",
  "author": "",
  "city": "",
  "country": "",
  "link": "https://www.youtube.com/@vanguardcoding829/videos",
  "site": "",
  "dateFirstVideo": "2017.12.01",
  "dateLastVideo": "2018.03.29",
  "amountVideos": 7
}, {
  "id": 363,
  "theme": "frontend",
  "title": "WebbeW",
  "author": "",
  "city": "",
  "country": "Россия",
  "link": "https://www.youtube.com/@webbew6258/videos",
  "site": "",
  "dateFirstVideo": "2020.02.24",
  "dateLastVideo": "2022.05.15",
  "amountVideos": 7
}, {
  "id": 364,
  "theme": "frontend",
  "title": "Aiba TV",
  "author": "Айбол",
  "city": "",
  "country": "Россия",
  "link": "https://www.youtube.com/@aibatv7676/videos",
  "site": "",
  "dateFirstVideo": "2022.01.16",
  "dateLastVideo": "2022.08.12",
  "amountVideos": 6
}, {
  "id": 365,
  "theme": "frontend",
  "title": "Alexey Shaykov",
  "author": "Алексей Шайков",
  "city": "",
  "country": "",
  "link": "https://www.youtube.com/@alexeyshaykov/videos",
  "site": "",
  "dateFirstVideo": "2022.10.24",
  "dateLastVideo": "2023-01-04",
  "amountVideos": 6
}, {
  "id": 366,
  "theme": "frontend",
  "title": "Helena's diaries",
  "author": "",
  "city": "",
  "country": "Украина",
  "link": "https://www.youtube.com/@helenasdiaries515/videos",
  "site": "",
  "dateFirstVideo": "2021.10.05",
  "dateLastVideo": "2022-07-30",
  "amountVideos": 6
}, {
  "id": 367,
  "theme": "frontend",
  "title": "itt - Архитектура для Профессионалов",
  "author": "",
  "city": "",
  "country": "Украина",
  "link": "https://www.youtube.com/@itt-7658/videos",
  "site": "",
  "dateFirstVideo": "2022.01.02",
  "dateLastVideo": "2022.02.24",
  "amountVideos": 6
}, {
  "id": 368,
  "theme": "frontend",
  "title": "jsCoding",
  "author": "",
  "city": "",
  "country": "",
  "link": "https://www.youtube.com/@jscoding6586/videos",
  "site": "",
  "dateFirstVideo": "2018.06.06",
  "dateLastVideo": "2018.06.15",
  "amountVideos": 6
}, {
  "id": 369,
  "theme": "frontend",
  "title": "Mikail Aziev",
  "author": "Михаил Азиев",
  "city": "",
  "country": "",
  "link": "https://www.youtube.com/@MikailAziev/videos",
  "site": "",
  "dateFirstVideo": "2021.01.15",
  "dateLastVideo": "2021.12.10",
  "amountVideos": 6
}, {
  "id": 370,
  "theme": "frontend",
  "title": "Rutina dev",
  "author": "",
  "city": "",
  "country": "",
  "link": "https://www.youtube.com/@rutinadev/videos",
  "site": "",
  "dateFirstVideo": "2021.11.21",
  "dateLastVideo": "2023.01.07",
  "amountVideos": 6
}, {
  "id": 371,
  "theme": "frontend",
  "title": "Think JS",
  "author": "",
  "city": "",
  "country": "",
  "link": "https://www.youtube.com/@thinkjs6058/videos",
  "site": "",
  "dateFirstVideo": "2019.05.24",
  "dateLastVideo": "2021.01.22",
  "amountVideos": 6
}, {
  "id": 372,
  "theme": "frontend",
  "title": "ULTIMA team",
  "author": "",
  "city": "",
  "country": "Казахстан",
  "link": "https://www.youtube.com/@ultimateam4685/videos",
  "site": "",
  "dateFirstVideo": "2022.03.16",
  "dateLastVideo": "2022.07.30",
  "amountVideos": 6
}, {
  "id": 373,
  "theme": "frontend",
  "title": "Мультипарадигмал",
  "author": "Артем",
  "city": "",
  "country": "",
  "link": "https://www.youtube.com/@user-hj2jk2qz1d/videos",
  "site": "",
  "dateFirstVideo": "2021.08.22",
  "dateLastVideo": "2022.06.02",
  "amountVideos": 6
}, {
  "id": 374,
  "theme": "frontend",
  "title": "Сергей на фрилансе",
  "author": "Сергей Жарков",
  "city": "",
  "country": "",
  "link": "https://www.youtube.com/@user-dh4nu5ti6d/videos",
  "site": "",
  "dateFirstVideo": "2015.05.31",
  "dateLastVideo": "2020.05.15",
  "amountVideos": 6
}, {
  "id": 375,
  "theme": "frontend",
  "title": "Codovolomka",
  "author": "",
  "city": "",
  "country": "",
  "link": "https://www.youtube.com/@codovolomka9259/videos",
  "site": "",
  "dateFirstVideo": "2019.07.01",
  "dateLastVideo": "2019.07.18",
  "amountVideos": 5
}, {
  "id": 376,
  "theme": "frontend",
  "title": "fenq Dev",
  "author": "",
  "city": "",
  "country": "",
  "link": "https://www.youtube.com/@fenqdev2965/videos",
  "site": "",
  "dateFirstVideo": "2021.09.18",
  "dateLastVideo": "2022.07.01",
  "amountVideos": 5
}, {
  "id": 377,
  "theme": "frontend",
  "title": "SNIEDA PROGRAMMING",
  "author": "",
  "city": "",
  "country": "Украина",
  "link": "https://www.youtube.com/channel/UCqcUlok71yeLPuYzFiz4UXQ/videos",
  "site": "",
  "dateFirstVideo": "2021.01.10",
  "dateLastVideo": "2022.08.16",
  "amountVideos": 5
}, {
  "id": 378,
  "theme": "frontend",
  "title": "TomskJS",
  "author": "",
  "city": "Томск",
  "country": "",
  "link": "https://www.youtube.com/@TomskjsRu/videos",
  "site": "",
  "dateFirstVideo": "2016.09.18",
  "dateLastVideo": "2016.09.18",
  "amountVideos": 5
}, {
  "id": 379,
  "theme": "frontend",
  "title": "Абсолютное Зло",
  "author": "",
  "city": "",
  "country": "",
  "link": "https://www.youtube.com/@user-so3jo4bu1o/videos",
  "site": "",
  "dateFirstVideo": "2020.02.08",
  "dateLastVideo": "2020.12.30",
  "amountVideos": 5
}, {
  "id": 380,
  "theme": "frontend",
  "title": "КРАСНОГЛАЗ",
  "author": "",
  "city": "",
  "country": "",
  "link": "https://www.youtube.com/@krasnoglaz/videos",
  "site": "",
  "dateFirstVideo": "2022.09.22",
  "dateLastVideo": "2022.11.04",
  "amountVideos": 5
}, {
  "id": 381,
  "theme": "frontend",
  "title": "Программирование с нуля",
  "author": "",
  "city": "",
  "country": "Россия",
  "link": "https://www.youtube.com/@user-ll2vr1cg3g/videos",
  "site": "",
  "dateFirstVideo": "2021.11.30",
  "dateLastVideo": "2022.01.14",
  "amountVideos": 5
}, {
  "id": 382,
  "theme": "frontend",
  "title": "Станислав Агафонов",
  "author": "Станислав Агафонов",
  "city": "",
  "country": "Россия",
  "link": "https://www.youtube.com/@agaf89/videos",
  "site": "",
  "dateFirstVideo": "2023.01.12",
  "dateLastVideo": "2023.01.29",
  "amountVideos": 5
}, {
  "id": 383,
  "theme": "frontend",
  "title": "Alisher",
  "author": "",
  "city": "",
  "country": "",
  "link": "https://www.youtube.com/@alisher4370/videos",
  "site": "",
  "dateFirstVideo": "2022.07.07",
  "dateLastVideo": "2022.07.15",
  "amountVideos": 4
}, {
  "id": 384,
  "theme": "frontend",
  "title": "Andrei Auchynnikau",
  "author": "Андрей Овчинников",
  "city": "",
  "country": "",
  "link": "https://www.youtube.com/@andreiauchynnikau6427/videos",
  "site": "",
  "dateFirstVideo": "2021.05.18",
  "dateLastVideo": "2022.06.27",
  "amountVideos": 4
}, {
  "id": 385,
  "theme": "frontend",
  "title": "Dmitriy Zubkov",
  "author": "Дмитрий Зубков",
  "city": "",
  "country": "",
  "link": "https://www.youtube.com/@ezweb560/streams",
  "site": "",
  "dateFirstVideo": "2020.11.05",
  "dateLastVideo": "2021.08.12",
  "amountVideos": 4
}, {
  "id": 386,
  "theme": "frontend",
  "title": "frontender",
  "author": "",
  "city": "",
  "country": "",
  "link": "https://www.youtube.com/@frontender/videos",
  "site": "",
  "dateFirstVideo": "2018.10.24",
  "dateLastVideo": "2019-10-14",
  "amountVideos": 4
}, {
  "id": 387,
  "theme": "frontend",
  "title": "Sergey Cherepanov",
  "author": "Сергей Черепанов",
  "city": "Томск",
  "country": "Россия",
  "link": "https://www.youtube.com/@scherist/videos",
  "site": "",
  "dateFirstVideo": "2018.07.28",
  "dateLastVideo": "2020.01.29",
  "amountVideos": 4
}, {
  "id": 388,
  "theme": "frontend",
  "title": "USE WEB",
  "author": "",
  "city": "",
  "country": "",
  "link": "https://www.youtube.com/@useweb7269/videos",
  "site": "",
  "dateFirstVideo": "2017.12.16",
  "dateLastVideo": "2020.05.06",
  "amountVideos": 4
}, {
  "id": 389,
  "theme": "frontend",
  "title": "Bulkin Denis",
  "author": "Денис Булкин",
  "city": "",
  "country": "Казахстан",
  "link": "https://www.youtube.com/@denidenx/videos",
  "site": "",
  "dateFirstVideo": "2022.02.24",
  "dateLastVideo": "2022-09-07",
  "amountVideos": 3
}, {
  "id": 390,
  "theme": "frontend",
  "title": "dotenv",
  "author": "",
  "city": "",
  "country": "",
  "link": "https://www.youtube.com/@dotenv6952/videos",
  "site": "",
  "dateFirstVideo": "2021.08.14",
  "dateLastVideo": "2021-08-29",
  "amountVideos": 3
}, {
  "id": 391,
  "theme": "frontend",
  "title": "Mr. Camelot",
  "author": "",
  "city": "",
  "country": "",
  "link": "https://www.youtube.com/@Camelot1399/videos",
  "site": "",
  "dateFirstVideo": "2021.10.07",
  "dateLastVideo": "2021.10.11",
  "amountVideos": 3
}, {
  "id": 392,
  "theme": "frontend",
  "title": "Roman Kuzovlev",
  "author": "Роман Кузовлев",
  "city": "",
  "country": "",
  "link": "https://www.youtube.com/@RomanKuzovlev/videos",
  "site": "",
  "dateFirstVideo": "2016.06.06",
  "dateLastVideo": "2016.07.30",
  "amountVideos": 3
}, {
  "id": 393,
  "theme": "frontend",
  "title": "Алексей Пастушенко",
  "author": "Алексей Пастушенко",
  "city": "",
  "country": "",
  "link": "https://www.youtube.com/@user-hw1rh6wb9o/videos",
  "site": "",
  "dateFirstVideo": "2020.05.01",
  "dateLastVideo": "2020-05-10",
  "amountVideos": 3
}, {
  "id": 394,
  "theme": "frontend",
  "title": "Как стать программистом (Андрей)",
  "author": "Андрей",
  "city": "Сочи",
  "country": "Россия",
  "link": "https://www.youtube.com/@user-nx3uq2fe6w/streams",
  "site": "",
  "dateFirstVideo": "2019.05.08",
  "dateLastVideo": "2019-05-13",
  "amountVideos": 3
}, {
  "id": 395,
  "theme": "frontend",
  "title": "Кирилл Панюшин",
  "author": "Кирилл Панюшин",
  "city": "Прага",
  "country": "Чехия",
  "link": "https://www.youtube.com/@user-jr2uc5mw1k/videos",
  "site": "",
  "dateFirstVideo": "2022.01.26",
  "dateLastVideo": "2022-02-10",
  "amountVideos": 3
}, {
  "id": 396,
  "theme": "frontend",
  "title": "Коля Павельев",
  "author": "Коля Павельев",
  "city": "",
  "country": "",
  "link": "https://www.youtube.com/@user-ti3mg3gk7i/videos",
  "site": "",
  "dateFirstVideo": "2021.04.03",
  "dateLastVideo": "2022.01.30",
  "amountVideos": 3
}, {
  "id": 397,
  "theme": "frontend",
  "title": "Павел Васильев",
  "author": "Павел Васильев",
  "city": "",
  "country": "",
  "link": "https://www.youtube.com/@user-yh4lm4po8k/videos",
  "site": "",
  "dateFirstVideo": "2020.05.15",
  "dateLastVideo": "2022.01.27",
  "amountVideos": 3
}, {
  "id": 398,
  "theme": "frontend",
  "title": "Станислав Мартыщенко",
  "author": "Станислав Мартыщенко",
  "city": "",
  "country": "",
  "link": "https://www.youtube.com/@user-ey4pn9qm7v/videos",
  "site": "",
  "dateFirstVideo": "2017.11.27",
  "dateLastVideo": "2017-11-27",
  "amountVideos": 3
}, {
  "id": 399,
  "theme": "frontend",
  "title": "crutch and bike",
  "author": "",
  "city": "",
  "country": "",
  "link": "https://www.youtube.com/@crutchandbike2277/videos",
  "site": "",
  "dateFirstVideo": "2018.01.25",
  "dateLastVideo": "2018.01.25",
  "amountVideos": 2
}, {
  "id": 400,
  "theme": "frontend",
  "title": "Danil Kasianenko",
  "author": "Данил Касьяненко",
  "city": "",
  "country": "",
  "link": "https://www.youtube.com/@danilkasianenko6069/videos",
  "site": "",
  "dateFirstVideo": "2022.10.12",
  "dateLastVideo": "2022.10.24",
  "amountVideos": 2
}, {
  "id": 401,
  "theme": "frontend",
  "title": "Evgen's Gang",
  "author": "",
  "city": "",
  "country": "Россия",
  "link": "https://www.youtube.com/@evgensgang257/videos",
  "site": "",
  "dateFirstVideo": "2018.06.09",
  "dateLastVideo": "2018.06.14",
  "amountVideos": 2
}, {
  "id": 402,
  "theme": "frontend",
  "title": "GrandpaJS",
  "author": "",
  "city": "",
  "country": "",
  "link": "https://www.youtube.com/@grandpajs699/videos",
  "site": "",
  "dateFirstVideo": "2021.10.19",
  "dateLastVideo": "2022.02.13",
  "amountVideos": 2
}, {
  "id": 403,
  "theme": "frontend",
  "title": "JavaScript с нуля",
  "author": "",
  "city": "",
  "country": "",
  "link": "https://www.youtube.com/@javascript8065/videos",
  "site": "",
  "dateFirstVideo": "2022.05.16",
  "dateLastVideo": "2022-05-19",
  "amountVideos": 2
}, {
  "id": 404,
  "theme": "frontend",
  "title": "Road to Senior",
  "author": "Леонид",
  "city": "",
  "country": "Россия",
  "link": "https://www.youtube.com/@roadtosenior1943/videos",
  "site": "",
  "dateFirstVideo": "2021.02.11",
  "dateLastVideo": "2021.02.15",
  "amountVideos": 2
}, {
  "id": 405,
  "theme": "frontend",
  "title": "Yury Staravoitau",
  "author": "",
  "city": "",
  "country": "",
  "link": "https://www.youtube.com/@MorfinBrood/streams",
  "site": "",
  "dateFirstVideo": "2018.07.03",
  "dateLastVideo": "2018.07.03",
  "amountVideos": 2
}, {
  "id": 406,
  "theme": "frontend",
  "title": "Вечный Джуниор",
  "author": "",
  "city": "",
  "country": "",
  "link": "https://www.youtube.com/@user-yf7ds6uo7n/videos",
  "site": "",
  "dateFirstVideo": "2020.08.04",
  "dateLastVideo": "2020.10.23",
  "amountVideos": 2
}, {
  "id": 407,
  "theme": "frontend",
  "title": "Павел Борисов",
  "author": "Павел Борисов",
  "city": "",
  "country": "Россия",
  "link": "https://www.youtube.com/@mgfck/videos",
  "site": "",
  "dateFirstVideo": "2023.05.08",
  "dateLastVideo": "2023.06.01",
  "amountVideos": 2
}, {
  "id": 408,
  "theme": "frontend",
  "title": "Dev Talk",
  "author": "",
  "city": "",
  "country": "",
  "link": "https://www.youtube.com/@devtalk7603/videos",
  "site": "",
  "dateFirstVideo": "2022.07.14",
  "dateLastVideo": "2022.07.14",
  "amountVideos": 1
}, {
  "id": 409,
  "theme": "frontend",
  "title": "Masonyan777",
  "author": "",
  "city": "",
  "country": "",
  "link": "https://www.youtube.com/@masonyan7778/videos",
  "site": "",
  "dateFirstVideo": "2023.03.25",
  "dateLastVideo": "",
  "amountVideos": 1
}, {
  "id": 410,
  "theme": "frontend",
  "title": "Maxim Chernykh",
  "author": "",
  "city": "",
  "country": "",
  "link": "https://www.youtube.com/@maximchernykh4679/videos",
  "site": "",
  "dateFirstVideo": "2020.07.02",
  "dateLastVideo": "",
  "amountVideos": 1
}, {
  "id": 411,
  "theme": "frontend",
  "title": "nagoraproweb",
  "author": "Виталий",
  "city": "",
  "country": "",
  "link": "https://www.youtube.com/@nagoraproweb8152/videos",
  "site": "",
  "dateFirstVideo": "2022.07.08",
  "dateLastVideo": "2022.07.08",
  "amountVideos": 1
}, {
  "id": 412,
  "theme": "frontend",
  "title": "Sozdaem Website",
  "author": "",
  "city": "",
  "country": "",
  "link": "https://www.youtube.com/@sozdaemwebsite8915/videos",
  "site": "",
  "dateFirstVideo": "2020.07.02",
  "dateLastVideo": "2020.07.02",
  "amountVideos": 1
}, {
  "id": 413,
  "theme": "frontend",
  "title": "Александр Стародубцев",
  "author": "",
  "city": "",
  "country": "",
  "link": "https://www.youtube.com/@AlexStarodubcev/videos",
  "site": "",
  "dateFirstVideo": "2023.06.11",
  "dateLastVideo": "2023.06.11",
  "amountVideos": 1
}, {
  "id": 414,
  "theme": "frontend",
  "title": "Как стать программистом",
  "author": "Олег",
  "city": "Севастополь",
  "country": "Россия",
  "link": "https://www.youtube.com/@user-fm7dc3oy8b/videos",
  "site": "",
  "dateFirstVideo": "2021.06.09",
  "dateLastVideo": "2021.06.09",
  "amountVideos": 1
}, {
  "id": 415,
  "theme": "frontend",
  "title": "Точка F",
  "author": "",
  "city": "",
  "country": "Россия",
  "link": "https://www.youtube.com/@user-bd8wu9gs5q/videos",
  "site": "",
  "dateFirstVideo": "2020.08.30",
  "dateLastVideo": "2020.08.30",
  "amountVideos": 1
}, {
  "id": 416,
  "theme": "frontend",
  "title": "daniil evsienko",
  "author": "Данил Евсиенко",
  "city": "",
  "country": "",
  "link": "https://www.youtube.com/@daniilevsienko4060/videos",
  "site": "",
  "dateFirstVideo": "2022.09.25",
  "dateLastVideo": "2022.11.14",
  "amountVideos": 0
}, {
  "id": 417,
  "theme": "frontend",
  "title": "Danil Vinogradov",
  "author": "Данил Виноградов",
  "city": "",
  "country": "Россия",
  "link": "https://www.youtube.com/@DanilVinogradov/videos",
  "site": "",
  "dateFirstVideo": "2021.03.13",
  "dateLastVideo": "2022.06.21",
  "amountVideos": 0
}, {
  "id": 418,
  "theme": "frontend",
  "title": "Shchepotin",
  "author": "",
  "city": "",
  "country": "Украина",
  "link": "https://www.youtube.com/@Shchepotin/",
  "site": "",
  "dateFirstVideo": "2019.02.08",
  "dateLastVideo": "2022.05.17",
  "amountVideos": 0
}, {
  "id": 419,
  "theme": "frontend",
  "title": "S0ER TALKS",
  "author": "Соер",
  "city": "",
  "country": "Россия",
  "link": "https://www.youtube.com/@s0ertalks107/videos",
  "site": "",
  "dateFirstVideo": "2020.03.16",
  "dateLastVideo": "2022.05.05",
  "amountVideos": 0
}, {
  "id": 420,
  "theme": "frontend",
  "title": "UMNO - JavaScript",
  "author": "Сергей Власов",
  "city": "",
  "country": "Россия",
  "link": "https://www.youtube.com/@umno-javascript2482/",
  "site": "",
  "dateFirstVideo": "2021.03.23",
  "dateLastVideo": "2021.04.07",
  "amountVideos": 0
}, {
  "id": 421,
  "theme": "frontend",
  "title": "Web Developer",
  "author": "",
  "city": "",
  "country": "",
  "link": "https://www.youtube.com/@webdeveloper5770/",
  "site": "",
  "dateFirstVideo": "2021.08.27",
  "dateLastVideo": "2022.07.06",
  "amountVideos": 0
}, {}];

/***/ }),

/***/ "./src/components/header/element-header.js":
/*!*************************************************!*\
  !*** ./src/components/header/element-header.js ***!
  \*************************************************/
/***/ (() => {

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }
function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var Header = /*#__PURE__*/function (_HTMLElement) {
  _inherits(Header, _HTMLElement);
  var _super = _createSuper(Header);
  function Header() {
    _classCallCheck(this, Header);
    return _super.call(this);
  }
  _createClass(Header, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.innerHTML = "\n    <header class=\"header container\" id=\"header\">\n      <div class=\"header__first-row\">\n        <div class=\"header__logo\">frontend200tb</div>\n        <div class=\"header__logo\">frontend</div>\n      </div>\n    </header>    \n    ";
    }
  }]);
  return Header;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));
customElements.define('header-component', Header);

/***/ }),

/***/ "./src/components/header/header.js":
/*!*****************************************!*\
  !*** ./src/components/header/header.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _header_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header.scss */ "./src/components/header/header.scss");
/* harmony import */ var _element_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./element-header */ "./src/components/header/element-header.js");
/* harmony import */ var _element_header__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_element_header__WEBPACK_IMPORTED_MODULE_1__);



/***/ }),

/***/ "./src/components/footer/footer.scss":
/*!*******************************************!*\
  !*** ./src/components/footer/footer.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/header/header.scss":
/*!*******************************************!*\
  !*** ./src/components/header/header.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _components_header_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/header/header */ "./src/components/header/header.js");
/* harmony import */ var _components_footer_footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/footer/footer */ "./src/components/footer/footer.js");
/* harmony import */ var _components_front_yt_front_yt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/front-yt/front-yt */ "./src/components/front-yt/front-yt.js");




(0,_components_front_yt_front_yt__WEBPACK_IMPORTED_MODULE_3__.showFrontYt)();
})();

/******/ })()
;
//# sourceMappingURL=index.js.map
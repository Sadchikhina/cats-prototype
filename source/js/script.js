'use strict';

var elements = document.getElementsByClassName('catalog__inner-wrapper');
for (var i = 0; i < elements.length; i++) { /*прокручиваем в цикле все элементы*/
  elements[i].addEventListener('click', function() {  /*при клике на элемент*/
    if (elements[i].hasClass('catalog__inner-wrapper--selected') { /*удалить класс при повторном клике на элемент*/
      elements[i].classList.remove('catalog__inner-wrapper--selected');
    } else {
      elements[i].classList.add('catalog__inner-wrapper--selected');/*добавляем class selected по которому кликнули */
    }
  })
}

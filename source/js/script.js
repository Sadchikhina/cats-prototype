'use strict';

var elements = document.getElementsByClassName("inner-wrapper");
for (var i = 0; i < elements.length; i++) {/*прокручиваем в цикле все элементы*/
  elements[i].addEventListener('click', function() {  /*при клике на элемент
 */
    for (var i = 0; i < elements.length; i++) {
      elements[i].classList.remove('catalog__inner-wrapper--selected'); /*удаляем у всех class active*/
    }
    this.classList.add('catalog__inner-wrapper--selected');/*добавляем class active по которому кликнули */
  })
}

// здесь мы определяем функцию, которая отвеает за работу меню, в ней не нужно ничего менять
function setBurger(params) {
  const btn = document.querySelector(`.${params.btnClass}`);
  const menu = document.querySelector(`.${params.menuClass}`);

  btn.setAttribute('aria-expanded', false);

  menu.addEventListener("animationend", function () {
    if (this.classList.contains(params.hiddenClass)) {
      this.classList.remove(params.activeClass);
      this.classList.remove(params.hiddenClass);
    }
  });

  btn.addEventListener("click", function () {
    this.classList.toggle(params.activeClass);

    if (
      !menu.classList.contains(params.activeClass) &&
      !menu.classList.contains(params.hiddenClass)
    ) {
      menu.classList.add(params.activeClass);
      document.body.style.overflow = 'hidden';
      btn.setAttribute('aria-expanded', true);
    } else {
      menu.classList.add(params.hiddenClass);
      document.body.removeAttribute('style');
      btn.setAttribute('aria-expanded', false);
    }
  });
}

// здесь мы вызываем функцию и передаем в нее классы наших элементов
setBurger({
  btnClass: "js-burger", // класс бургера
  menuClass: "js-menu-wrap", // класс меню
  activeClass: "is-active", // класс открытого состояния
  hiddenClass: "is-closed" // класс закрывающегося состояния (удаляется сразу после закрытия)
});
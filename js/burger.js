// здесь мы определяем функцию, которая отвеает за работу меню, в ней не нужно ничего менять
// function setBurger(params) {
//   const btn = document.querySelector(`.${params.btnClass}`);
//   const menu = document.querySelector(`.${params.menuClass}`);
//   const links = menu.querySelectorAll(`.${params.linksClass}`)

//   menu.addEventListener("animationend", function () {
//     if (this.classList.contains(params.hiddenClass)) {
//       this.classList.remove(params.activeClass);
//       this.classList.remove(params.hiddenClass);
//       btn.classList.remove(params.hiddenClass);
//     }
//   });

//   btn.addEventListener("click", function () {
//     this.classList.toggle(params.activeClass);

//     if (
//       !menu.classList.contains(params.activeClass) &&
//       !menu.classList.contains(params.hiddenClass)
//     ) {
//       menu.classList.add(params.activeClass);
//       document.body.style.overflow = 'hidden';
//     } else {
//       menu.classList.add(params.hiddenClass);
//       document.body.removeAttribute('style');
//       this.classList.toggle(params.hiddenClass);
//     }
//   });

// }


function setBurger(params) {
  const btn = document.querySelector(`.${params.btnClass}`);
  const menu = document.querySelector(`.${params.menuClass}`);
  const links = menu.querySelectorAll(`.${params.linksClass}`)

  menu.addEventListener("animationend", function () {
    if (this.classList.contains(params.hiddenClass)) {
      this.classList.remove(params.activeClass);
      this.classList.remove(params.hiddenClass);
      btn.classList.remove(params.hiddenClass);
    }
  });

  function onBtnClick () {
    this.classList.toggle(params.activeClass);

    if (
      !menu.classList.contains(params.activeClass) &&
      !menu.classList.contains(params.hiddenClass)
    ) {
      menu.classList.add(params.activeClass);
      document.body.style.overflow = 'hidden';
      btn.setAttribute('aria-label', 'Закрыть главное меню')
    } else {
      menu.classList.add(params.hiddenClass);
      document.body.removeAttribute('style');
      this.classList.toggle(params.hiddenClass);
      btn.setAttribute('aria-label', 'Открыть главное меню')
    }
  };

  btn.addEventListener("click", onBtnClick);
  links.forEach((link) => {
    link.addEventListener("click", onBtnClick);
  })

}

// здесь мы вызываем функцию и передаем в нее классы наших элементов
setBurger({
  btnClass: "js-burger", // класс бургера
  menuClass: "js-menu-wrap", // класс меню
  activeClass: "is-opened", // класс открытого состояния
  hiddenClass: "is-closed", // класс закрывающегося состояния (удаляется сразу после закрытия)
  linksClass: "js-menu-link"
});

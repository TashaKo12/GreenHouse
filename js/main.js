const select = document.querySelector(".select");

select.addEventListener("click", function () {
  const list = this.querySelector(".select__list");
  list.classList.toggle("select__list--visible");
});

const listItems = document.querySelectorAll(".select__list-item");
listItems.forEach(function (item) {
  item.addEventListener("click", function (e) {
    e.stopPropagation();
    console.log("Setect");
    // Убрать активный класс для активного элемента
    document.querySelector(".select__list-item--active").classList.remove("select__list-item--active");
    // Добавить активный класс по которому нажали
    this.classList.add("select__list-item--active");

    //Установить выбранное значение
    const selectedValue = document.querySelector(".select__value");
    selectedValue.innerText = this.innerText;
    
  });
});

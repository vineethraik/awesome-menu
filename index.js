const menu = document.getElementById("menu");
Array.from(document.getElementsByClassName("menu-item ")).forEach(
  (element, index) => {
    element.onmouseover=() => {
      menu.dataset.activeIndex = index;
      console.log(index);
    };
  }
);
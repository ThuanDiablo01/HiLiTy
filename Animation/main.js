// Header
const headerBoxSearch = document.querySelector(".header__box-search");
const headerSearchBtn = document.querySelector(".search__btn");
const searchInput = document.querySelector("#search__input")
headerSearchBtn.addEventListener("click",function()
{
    headerBoxSearch.classList.toggle("active");
    searchInput.focus();
})
//это переменная в которой хранится наша кнопка корзина
const cartButton = document.querySelector ("#cart-button");
//теперь по этой кнопке мы можем отследить клик по ней
//когда случится какое-то событие выполни какую-то функцию
//когда он случится, должна выполнится функция которая имеет параметр event и внутри которой
//будет выводится следующая 

// хранит наше окно модал
const modal = document.querySelector (".modal");
//переменная хранить кнопку закрытия
const close = document.querySelector(".close");


cartButton.addEventListener ('click', toggleModal);
close.addEventListener ('click', toggleModal);
//будет не добавлять класс is open а включить или выключать данный класс
function toggleModal() {
    modal.classList.toggle("is-open");
}

//активация анимации только тогда когда мы увидели карточку
new WOW().init()
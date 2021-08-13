const check_out = document.querySelector(".checkout");
const hide = document.querySelector(".hide");
const pay = document.querySelector(".pay")

//check out section
check_out.addEventListener('click', function(){
    check_out.classList.toggle("paybox");
    hide.classList.toggle("hidden");

    pay.addEventListener('click', function(){
        pay.classList.toggle("paybox");
    });
});




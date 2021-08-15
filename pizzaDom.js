//reference for checkout buttons
const check_out = document.querySelector(".checkout");
const hide = document.querySelector(".hide");
const pay = document.querySelector(".pay")

//reference small pizza
const radioplus1 = document.querySelector(".radioplus1");
const radiominus1 = document.querySelector(".radiominus1");
const smallTotal = document.querySelector(".smallTotal");

//reference medium pizza
const radioplus2 = document.querySelector(".radioplus2");
const radiominus2 = document.querySelector(".radiominus2");
const mediumTotal = document.querySelector(".mediumTotal");

//reference large pizza
const radioplus3 = document.querySelector(".radioplus3");
const radiominus3 = document.querySelector(".radiominus3");
const largeTotal = document.querySelector(".largeTotal");


//reference total cost
const totalcosts = document.querySelector(".totalcosts");

//reference buy small pizza
const buysmall = document.querySelector(".buysmall");

//reference buy medium pizza
const buymedium = document.querySelector(".buymedium");

//reference buy large pizza
const buylarge = document.querySelector(".buylarge");

//check out section
check_out.addEventListener('click', function(){
    check_out.classList.toggle("paybox");
    hide.classList.toggle("hidden");

    pay.addEventListener('click', function(){
        pay.classList.toggle("paybox");
    });
});

//initializing
var totalcartcost=0;

            //SMALL PIZZA CART

//add/subtr for small pizza
var smll=0;
var smallprice=49.00;
var msnall=49.00;

buysmall.addEventListener('click', function(){
    if (buysmall){
        smll +=smallprice;
    smallTotal.innerHTML="R" + smll.toFixed(2);
    }

    totalC=smll+medium+large;
    totalcosts.innerHTML="R" + totalC.toFixed(2);
});

    radioplus1.addEventListener('click', function(){
        //radioplus1.classList.toggle("paybox");
        if (radioplus1){
            smll +=smallprice;
        smallTotal.innerHTML="R" + smll.toFixed(2);
        }

        totalC=smll+medium+large;
        totalcosts.innerHTML="R" + totalC.toFixed(2);
    });

    radiominus1.addEventListener('click', function(){
        if (radiominus1 && smll>0){
        //radiominus1.classList.toggle("paybox");
        smll -=msnall;
        smallTotal.innerHTML="R" + smll.toFixed(2);
        }

            totalC=smll+medium+large;
        totalcosts.innerHTML="R" + totalC.toFixed(2);
    });

            //MEDIUM PIZZA CART

//add/subtr for medium pizza
var medium=0;
var addmedium=89.00;
var minusmedium=89.00;

buymedium.addEventListener('click', function(){
    //radioplus2.classList.toggle("paybox");
    if(buymedium){
    medium +=addmedium;
    mediumTotal.innerHTML="R" + medium.toFixed(2);
    }
    totalC=smll+medium+large;
    totalcosts.innerHTML="R" + totalC.toFixed(2);
});

radioplus2.addEventListener('click', function(){
    //radioplus2.classList.toggle("paybox");
    if(radioplus2){
    medium +=addmedium;
    mediumTotal.innerHTML="R" + medium.toFixed(2);
    }
    totalC=smll+medium+large;
    totalcosts.innerHTML="R" + totalC.toFixed(2);
});

radiominus2.addEventListener('click', function(){
    //radiominus2.classList.toggle("paybox");
    if(radiominus2 && medium>0){
    medium -=addmedium;
    mediumTotal.innerHTML="R" + medium.toFixed(2);
    }
    totalC=smll+medium+large;
    totalcosts.innerHTML="R" + totalC.toFixed(2);
});

        //LARGE PIZZA CART

//add/subtr for large pizza
var large=0;
var addlarge=129.00;

buylarge.addEventListener('click', function(){
    //radioplus3.classList.toggle("paybox");
    if(buylarge){
        large +=addlarge;
        largeTotal.innerHTML="R" + large.toFixed(2);
    }
    totalC=smll+medium+large;
    totalcosts.innerHTML="R" + totalC.toFixed(2);
});

radioplus3.addEventListener('click', function(){
    //radioplus3.classList.toggle("paybox");
    if(radioplus3){
        large +=addlarge;
        largeTotal.innerHTML="R" + large.toFixed(2);
    }
    totalC=smll+medium+large;
    totalcosts.innerHTML="R" + totalC.toFixed(2);
});

radiominus3.addEventListener('click', function(){
    //radiominus3.classList.toggle("paybox");
    if(radioplus3 && large>0){
        large -=addlarge;
        largeTotal.innerHTML="R" + large.toFixed(2);
    }

    totalC=smll+medium+large;
    totalcosts.innerHTML="R" + totalC.toFixed(2);
});

            //CART TOTAL COST 



//
const callTotalSettings = document.querySelector(".callTotalSettings");
const smsTotalSettings = document.querySelector(".smsTotalSettings");
const totalSettings = document.querySelector(".totalSettings");


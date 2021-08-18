//reference for checkout buttons
const check_out = document.querySelector(".checkout");
const hide = document.querySelector(".hide");
const pay = document.querySelector(".pay")

//reference small pizza
const smallnum = document.querySelector(".smallnum");
const radioplus1 = document.querySelector(".radioplus1");
const radiominus1 = document.querySelector(".radiominus1");
const smallTotal = document.querySelector(".smallTotal");

//reference medium pizza
const mediumnum = document.querySelector(".mediumnum");
const radioplus2 = document.querySelector(".radioplus2");
const radiominus2 = document.querySelector(".radiominus2");
const mediumTotal = document.querySelector(".mediumTotal");

//reference large pizza
const largenum = document.querySelector(".largenum");
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

const cart = document.querySelector(".cart");

//check out section
check_out.addEventListener('click', function(){
    check_out.classList.toggle("paybox");
    hide.classList.toggle("hidden");

    pay.addEventListener('click', function(){
        pay.classList.toggle("paybox");
    });
});


            //SMALL PIZZA CART

//add/subtr for small pizza
var smll=0;
var smallprice=49.00;
var msnall=49.00;
var numsmallpizza=0;
var counter=1;

buysmall.addEventListener('click', function(){
    if (buysmall){
        cart.classList.remove("hidden");
        smll +=smallprice;
        numsmallpizza +=counter;
        smallnum.innerHTML="(" + numsmallpizza +")";
        smallTotal.innerHTML="R" + smll.toFixed(2);
    }

    totalC=smll+medium+large;
    totalcosts.innerHTML="R" + totalC.toFixed(2);

});


    radioplus1.addEventListener('click', function(){
        //radioplus1.classList.toggle("paybox");
        if (radioplus1){
            smll +=smallprice;
            numsmallpizza +=counter;
        smallnum.innerHTML="(" + numsmallpizza +")";
        smallTotal.innerHTML="R" + smll.toFixed(2);
        }

        totalC=smll+medium+large;
        totalcosts.innerHTML="R" + totalC.toFixed(2);
    });

    radiominus1.addEventListener('click', function(){
        if (radiominus1 && smll>0){
        //radiominus1.classList.toggle("paybox");
        smll -=msnall;
        numsmallpizza -=counter;
        smallnum.innerHTML="(" + numsmallpizza +")";
        smallTotal.innerHTML="R" + smll.toFixed(2);
        }
        totalC=smll+medium+large;
        totalcosts.innerHTML="R" + totalC.toFixed(2);

        setTimeout(function(){
            if(smll==0 && totalC==0){       
        cart.classList.add('hidden');
            }
        }, 3000);

    });

            //MEDIUM PIZZA CART

//add/subtr for medium pizza
var medium=0;
var addmedium=89.00;
var minusmedium=89.00;
var nummediumpizza=0;

buymedium.addEventListener('click', function(){
    //radioplus2.classList.toggle("paybox");
    if(buymedium){
    cart.classList.remove("hidden");
    medium +=addmedium;
    nummediumpizza +=counter;
    mediumnum.innerHTML="(" + nummediumpizza +")";
    mediumTotal.innerHTML="R" + medium.toFixed(2);
    }
    totalC=smll+medium+large;
    totalcosts.innerHTML="R" + totalC.toFixed(2);
});

radioplus2.addEventListener('click', function(){
    //radioplus2.classList.toggle("paybox");
    if(radioplus2){
    medium +=addmedium;
    nummediumpizza +=counter;
    mediumnum.innerHTML="(" + nummediumpizza +")";
    mediumTotal.innerHTML="R" + medium.toFixed(2);
    }
    totalC=smll+medium+large;
    totalcosts.innerHTML="R" + totalC.toFixed(2);
});

radiominus2.addEventListener('click', function(){
    //radiominus2.classList.toggle("paybox");
    if(radiominus2 && medium>0){
    medium -=addmedium;
    nummediumpizza -=counter;
    mediumnum.innerHTML="(" + nummediumpizza +")";
    mediumTotal.innerHTML="R" + medium.toFixed(2);
    }
    totalC=smll+medium+large;
    totalcosts.innerHTML="R" + totalC.toFixed(2);

    setTimeout(function(){
        if(medium==0 && totalC==0){        
    cart.classList.add('hidden');
        }
    }, 3000);

});

        //LARGE PIZZA CART

//add/subtr for large pizza
var large=0;
var addlarge=129.00;
var numlargepizza=0;

buylarge.addEventListener('click', function(){
    //radioplus3.classList.toggle("paybox");
    if(buylarge){
        cart.classList.remove("hidden");
        large +=addlarge;
        numlargepizza +=counter;
        largenum.innerHTML="(" + numlargepizza +")";
        largeTotal.innerHTML="R" + large.toFixed(2);
    }
    totalC=smll+medium+large;
    totalcosts.innerHTML="R" + totalC.toFixed(2);

});

radioplus3.addEventListener('click', function(){
    //radioplus3.classList.toggle("paybox");
    if(radioplus3){
        large +=addlarge;
        numlargepizza +=counter;
        largenum.innerHTML="(" + numlargepizza +")";
        largeTotal.innerHTML="R" + large.toFixed(2);
    }
    totalC=smll+medium+large;
    totalcosts.innerHTML="R" + totalC.toFixed(2);
});

radiominus3.addEventListener('click', function(){
    //radiominus3.classList.toggle("paybox");
    if(radioplus3 && large>0){
        large -=addlarge;
        numlargepizza -=counter;
        largenum.innerHTML="(" + numlargepizza +")";
        largeTotal.innerHTML="R" + large.toFixed(2);
    }
    totalC=smll+medium+large;
    totalcosts.innerHTML="R" + totalC.toFixed(2);

    setTimeout(function(){
        if(large==0 && totalC==0){        
    cart.classList.add('hidden');
        }
    }, 3000);

});


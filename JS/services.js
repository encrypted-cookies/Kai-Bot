const airtimepop = document.querySelector('.airtimepop');
function showAirtimePopup() {
  airtimepop.classList.add('open');
}
function hideAirtimePopup() {
  airtimepop.classList.remove('open');
}
///////////////////////////////////////////////
var airChoose= document.getElementById("airNetworkSelect");
airChoose.addEventListener("change",
function(){
    var value=airChoose.value;
    var label= document.getElementById("airNetworkLabel");
    var text= document.getElementById("airNetworkInvalidText");
    if(value==" ") {
        label.style.top="13px";
        label.style.fontSize="16px";
        text.style.display="block";
        label.style.color="red";
        airChoose.style.borderColor="red";
    }else {
        label.style.top="-2px";
        label.style.fontSize="10px";
        text.style.display="none";
        label.style.color="grey";
        airChoose.style.borderColor="grey";
    }
});

var airPhone= document.getElementById("airPhoneSelect");
airPhone.addEventListener("focus", function(){
    var length=airPhone.value.length;
    var label= document.getElementById("airPhoneLabel");
    label.style.top="57px";
    label.style.fontSize="10px";
    label.style.color="#0076ff";
    airPhone.style.borderColor="#0076ff";
});


var airPhone= document.getElementById("airPhoneSelect");
airPhone.addEventListener("blur", function(){
    var length=airPhone.value.length;
    var label= document.getElementById("airPhoneLabel");
    var text= document.getElementById("airPhoneInvalid");
    var icon= document.getElementById("airPhoneInvalidText");
    if(length < 1) {
        label.style.top="72px";
        label.style.fontSize="16px";
        label.style.color="grey";
        airPhone.style.borderColor="grey";
        text.style.display="none";
        icon.style.display="none";
    
    }else if(length >0 && length !== 11){
        label.style.top="57px";
        label.style.fontSize="10px";
        label.style.color="red";
        airPhone.style.borderColor="red";
        text.style.display="block";
        icon.style.display="block";
    }else {
        label.style.top="57px";
        label.style.fontSize="10px";
        label.style.color="grey";
        airPhone.style.borderColor="grey";
        text.style.display="none";
        icon.style.display="none";
    }
});

var airAmount= document.getElementById("airAmountSelect");
airAmount.addEventListener("focus", function(){
    var length=airAmount.value.length;
    var label= document.getElementById("airAmountLabel");
    label.style.top="115px";
    label.style.fontSize="10px";
});

var airAmount= document.getElementById("airAmountSelect");
airAmount.addEventListener("blur", function(){
    var label= document.getElementById("airAmountLabel");
    var text= document.getElementById("airAmountInvalidText");
    var icon=document.getElementById("airAmountInvalid");
    var value=airAmount.value;
    var length=value.length
    if(length < 1){
        label.style.top="130px";
        label.style.fontSize="16px";
    }else if(length > 0 && value < 50){
        label.style.top="115px";
        label.style.fontSize="10px";
        label.style.color="red";
        airAmount.style.borderColor="red";
        text.style.display="block";
        icon.style.display="block";
    }else{
        label.style.top="115px";
        label.style.fontSize="10px";
        label.style.color="grey";
        airAmount.style.borderColor="grey";
        text.style.display="none";
        icon.style.display="none";
    }
});
airAmount.addEventListener("keyup", function(){
    var amount=airAmount.value;
    var discount= amount - 2;
    var airDiscount= document.getElementById("airDiscountSelect");
    var label= document.getElementById("airDiscountLabel");
    if(amount < 50){
        airDiscount.value="";
        label.style.top="190px";
        label.style.fontSize="16px";
    }else{
        label.style.top="175px";
        label.style.fontSize="10px";
        airDiscount.value=discount;
    }
});

airPin= document.getElementById("airPinSelect");
airPin.addEventListener("focus", function(){
    var label= document.getElementById("airPinLabel");
    label.style.top="233px";
    label.style.fontSize="10px";
});

airPin= document.getElementById("airPinSelect");
airPin.addEventListener("blur", function(){
    var label= document.getElementById("airPinLabel");
    var icon= document.getElementById("airPinInvalid");
    var text= document.getElementById("airPinInvalidText");
    length= airPin.value.length;
    if(length < 1){
        label.style.top="248px";
        label.style.fontSize="16px";
    }else if(length > 0 && length !== 4){
        label.style.top="233px";
        label.style.fontSize="10px";
        label.style.color="red";
        icon.style.display="block";
        text.style.display="block";
        airPin.style.borderColor="red"
    }else{
        label.style.top="233px";
        label.style.fontSize="10px";
        label.style.color="grey";
        icon.style.display="none";
        text.style.display="none";
        airPin.style.borderColor="grey";
    }
});

airSubmit= document.getElementById("airSubmit");
airSubmit.addEventListener("click", function(){
 var airNetwork=document.getElementById("airNetworkSelect").value;
    var airPhonelen= document.getElementById("airPhoneSelect").value.length;
    var airPhone= document.getElementById("airPhoneSelect").value;
    var airAmount= document.getElementById("airAmountSelect").value;
    var discount= airAmount - 2;
    var airPin= document.getElementById("airPinSelect").value.length;
    var decline=airNetwork ==" " || airPhonelen !== 11 || airAmount < 50 || airPin !== 4;
   if( decline == true) {
        alert("Please Ensure All Inputs Are Properly filled!");
    }else {
        confirm("You're about to purchase "+"₦"+airAmount+" Airtime"+" on "+airPhone+" at "+"₦"+discount);
    }
});

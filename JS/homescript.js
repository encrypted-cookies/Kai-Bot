const navBar = document.querySelector("nav"),
        menuBtns = document.querySelectorAll(".menu-icon"),
        overlay = document.querySelector(".overlay");

      menuBtns.forEach((menuBtn) => {
        menuBtn.addEventListener("click", () => {
          navBar.classList.toggle("open");
        });
      });

      overlay.addEventListener("click", () => {
        navBar.classList.remove("open");
      });


//balance 
function changeIcon(anchor) {
  var icon = anchor.querySelector("i");
  icon.classList.toggle('bx-show');
  icon.classList.toggle('bx-hide');
  anchor.querySelector("span").textContent = icon.matches('.bx-hide') ? "****" : anchor.querySelector("span").dataset.text;
}
///////////////////////////////////////////////


//FUND POP UP
const fundpop = document.querySelector('.fundpop');
function fundPopup() {
  fundpop.classList.add('open');
}
function hideFundPopup() {
  fundpop.classList.remove('open');
}


//PRICING POP UP
const pricingpop = document.querySelector('.pricingpop');
function showPricingPopup() {
  pricingpop.classList.add('open');
}
function hidePricingPopup() {
  pricingpop.classList.remove('open');
}

//////////////////TRANSFER/////////////////////
const transferpop = document.querySelector('.transferpop');
function TransferPopup() {
  transferpop.classList.add('open');
}
function hideTransferPopup() {
  transferpop.classList.remove('open');
}


/////////////////WITHDRAW/////////////////////
const withdrawpop = document.querySelector('.withdrawpop');
function WithdrawPopup() {
  withdrawpop.classList.add('open');
}
function hideWithdrawPopup() {
  withdrawpop.classList.remove('open');
}


//REFER AND EARN POP UP
const referpop = document.querySelector('.referpop');
function referPopup() {
  referpop.classList.add('open');
}
function hideReferPopup() {
  referpop.classList.remove('open');
}

//COPY REFERAL CODE
function copyRef() {
  // Get the text field
  var copyText = document.getElementById("refId");
  // Select the text field
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

   // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);

  // Alert the copied text
//alert("Copied the text: " + copyText.value);}
alert("Referral link copied successfully");}

/* CHECK BALANCE*/
const balpop = document.querySelector('.balpop');
function showBalPopup() {
  balpop.classList.add('open');
}
function hideBalPopup() {
  balpop.classList.remove('open');
}





//⁄⁠(⁠⁄⁠ ⁠⁄⁠•⁠⁄⁠-⁠⁄⁠•⁠⁄⁠ ⁠⁄⁠)⁠⁄⁄⁠(⁠⁄⁠ ⁠⁄⁠•⁠⁄⁠-⁠⁄⁠•⁠⁄⁠ ⁠⁄⁠)⁠⁄⁄⁠(⁠⁄⁠ ⁠⁄⁠•⁠⁄⁠-⁠⁄⁠•⁠⁄⁠ ⁠⁄⁠)⁠⁄
//⁄⁠(⁠⁄⁠ ⁠⁄⁠•⁠⁄⁠-)⁠⁄BUY AIRTIME POP UP⁄⁠(⁠⁄⁠ ⁠⁄⁠•⁠⁄⁠-⁠⁄⁠•⁠⁄⁠ ⁠⁄⁠)⁠⁄
const airtimepop = document.querySelector('.airtimepop');
function showAirtimePopup() {
  airtimepop.classList.add('open');
}
function hideAirtimePopup() {
  airtimepop.classList.remove('open');
}
///////////////////////////////////////////////
var airChoose= document.getElementById("airNetworkSelect");
airChoose.addEventListener("change", function(){
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











/////////////////BUY DATA///////////////////
const modatapop = document.querySelector('.modatapop');
function showModataPopup() {
  modatapop.classList.add('open');
}
function hideModataPopup() {
  modatapop.classList.remove('open');
}


///////////////////////////////////////////////
var dataChoose= document.getElementById("dataNetworkSelect");
dataChoose.addEventListener("change", function(){
    var value=dataChoose.value;
    var label= document.getElementById("dataNetworkLabel");
    if(value==" ") {
        label.style.top="13px";
        label.style.fontSize="16px";
    }else {
        label.style.top="-2px";
        label.style.fontSize="10px";
    }
});

var dataChoose= document.getElementById("dataNetworkSelect");
dataChoose.addEventListener("change", function(){
    var planType=document.getElementById("planTypeSelect");
   for(var M = 1; M < planType.options.length; M++);
   alert(planType.options[M])
    
});







var planType= document.getElementById("planTypeSelect");
planType.addEventListener("change", function(){
    var value= planType.value;
    var label= document.getElementById("planTypeLabel");
    if(value==" ") {
        label.style.top="70px";
        label.style.fontSize="16px";
    }else {
        label.style.top="56px";
        label.style.fontSize="10px";
    }
});

var dataPlan= document.getElementById("dataPlanSelect");
dataPlan.addEventListener("change", function(){
    var value= dataPlan.value;
    var label=document.getElementById("dataPlanLabel");
    if(value==" ") {
        label.style.top="130px";
        label.style.fontSize="16px";
    }else {
        label.style.top="116px";
        label.style.fontSize="10px";
    }
});

var dataPhone= document.getElementById("dataPhoneSelect");
dataPhone.addEventListener("focus", function(){
    var length=dataPhone.value.length;
    var label= document.getElementById("dataPhoneLabel");
    label.style.top="174px";
    label.style.fontSize="10px";
});

var dataPhone= document.getElementById("dataPhoneSelect");
dataPhone.addEventListener("blur", function(){
    var length=dataPhone.value.length;
    var label= document.getElementById("dataPhoneLabel");
    var text= document.getElementById("dataPhoneInvalid");
    var icon= document.getElementById("dataPhoneInvalidText");
    if(length < 1) {
        label.style.top="190px";
        label.style.fontSize="16px";
        label.style.color="grey";
        dataPhone.style.borderColor="grey";
        text.style.display="none";
        icon.style.display="none";
    
    }else if(length >0 && length !== 11){
        label.style.top="174px";
        label.style.fontSize="10px";
        label.style.color="red";
        dataPhone.style.borderColor="red";
        text.style.display="block";
        icon.style.display="block";
    }else {
        label.style.top="174px";
        label.style.fontSize="10px";
        label.style.color="grey";
        dataPhone.style.borderColor="grey";
        text.style.display="none";
        icon.style.display="none";
    }
    
});

var dataPin= document.getElementById("dataPinSelect");
dataPin.addEventListener("focus", function(){
    var label=document.getElementById("dataPinLabel");
    label.style.top="233px";
    label.style.fontSize="10px";
});


var dataPin= document.getElementById("dataPinSelect");
dataPin.addEventListener("blur", function(){
    var label=document.getElementById("dataPinLabel");
    var text= document.getElementById("dataPinInvalidText");
    var icon= document.getElementById("dataPinInvalid");
    var length= dataPin.value.length;
    if(length < 1) {
        label.style.top="247px";
        label.style.fontSize="16px";
        label.style.color="grey";
        dataPin.style.borderColor="grey";
        text.style.display="none";
        icon.style.display="none";
    }else if(length > 0 && length !==4){
        label.style.top="233px";
        label.style.fontSize="10px";
        label.style.color="red";
        text.style.display="block";
        dataPin.style.borderColor="red";
        icon.style.display="block";
    }else {
        label.style.top="233px";
        label.style.fontSize="10px";
        label.style.color="grey";
        dataPin.style.borderColor="grey";
        text.style.display="none";
        icon.style.display="none";
    }
     
});

dataSubmit= document.getElementById("dataSubmit");
dataSubmit.addEventListener("click", function(){
 var dataNetwork=document.getElementById("dataNetworkSelect").value;
    var planType= document.getElementById("planTypeSelect").value;
    var dataPlan= document.getElementById("dataPlanSelect").value;
    var dataPhoneVal= document.getElementById("dataPhoneSelect").value.length; 
    var dataPhone= document.getElementById("dataPhoneSelect").value; 
    var dataPin= document.getElementById("dataPinSelect").value.length;
    var decline=dataNetwork ==" " || planType==" " || dataPlan==" " ||dataPhoneVal !==11 || dataPin !== 4;
    if( decline == true) {
        alert("Please Ensure All Inputs Are Properly filled!");
    }else {
        confirm("You're about to purchase "+dataPlan+" of"+dataNetwork+" "+planType+" "+"to"+dataPhone);
    }
});


/////////////////////CABLE///////////////////
const cablepop = document.querySelector('.cablepop');
function showCablePopup() {
  cablepop.classList.add('open');
}
function hideCablePopup() {
  cablepop.classList.remove('open');
}
///////////////////////////////////////////////
var cableName= document.getElementById("cableNameSelect");
cableName.addEventListener("change", function(){
    var value=cableName.value;
    var label= document.getElementById("cableNameLabel");
    if(value==" ") {
        label.style.top="13px";
        label.style.fontSize="16px";
    }else {
        label.style.top="-2px";
        label.style.fontSize="10px";
    }
});


var cablePlan= document.getElementById("cablePlanSelect");
cablePlan.addEventListener("change", function(){
    var value= cablePlan.value;
    var label= document.getElementById("cablePlanLabel");
    if(value==" ") {
        label.style.top="70px";
        label.style.fontSize="16px";
    }else {
        label.style.top="56px";
        label.style.fontSize="10px";
    }
});


var iucNumber= document.getElementById("IucSelect");
iucNumber.addEventListener("focus", function(){
    var length=iucNumber.value.length;
    var label= document.getElementById("IucLabel");
    label.style.top="112px";
    label.style.fontSize="10px";
});

var iucNumber= document.getElementById("IucSelect");
iucNumber.addEventListener("blur", function(){
    var length=iucNumber.value.length;
    var label= document.getElementById("IucLabel");
    var text= document.getElementById("IucInvalid");
    var icon= document.getElementById("IucInvalidText");
    if(length < 1) {
        label.style.top="125px";
        label.style.fontSize="16px";
        label.style.color="grey";
        iucNumber.style.borderColor="grey";
        text.style.display="none";
        icon.style.display="none";
    
    }else if(length >0 && length !== 10){
        label.style.top="112px";
        label.style.fontSize="10px";
        label.style.color="red";
        iucNumber.style.borderColor="red";
        text.style.display="block";
        icon.style.display="block";
    }else {
        label.style.top="112px";
        label.style.fontSize="10px";
        label.style.color="grey";
        iucNumber.style.borderColor="grey";
        text.style.display="none";
        icon.style.display="none";
    }
    
});

var cablePin= document.getElementById("cablePinSelect");
cablePin.addEventListener("focus", function(){
    var label=document.getElementById("cablePinLabel");
    label.style.top="165px";
    label.style.fontSize="10px";
});


var cablePin= document.getElementById("cablePinSelect");
cablePin.addEventListener("blur", function(){
    var label=document.getElementById("cablePinLabel");
    var text= document.getElementById("cablePinInvalidText");
    var icon= document.getElementById("cablePinInvalid");
    var length= cablePin.value.length;
    if(length < 1) {
        label.style.top="180px";
        label.style.fontSize="16px";
        label.style.color="grey";
        cablePin.style.borderColor="grey";
        text.style.display="none";
        icon.style.display="none";
    }else if(length > 0 && length !==4){
        label.style.top="165px";
        label.style.fontSize="10px";
        label.style.color="red";
        text.style.display="block";
        cablePin.style.borderColor="red";
        icon.style.display="block";
    }else {
        label.style.top="165px";
        label.style.fontSize="10px";
        label.style.color="grey";
        cablePin.style.borderColor="grey";
        text.style.display="none";
        icon.style.display="none";
    }
     
});
cableSubmit= document.getElementById("cableSubmit");
cableSubmit.addEventListener("click", function(){
 var cableName=document.getElementById("cableNameSelect").value;
    var cablePlan= document.getElementById("cablePlanSelect").value;
    var iucLen= document.getElementById("IucSelect").value.length;
    var iuc= document.getElementById("IucSelect").value;
     var cablePin= document.getElementById("cablePinSelect").value.length;
    var decline=cableName ==" " || cablePlan==" " || iucLen !==10 || cablePin !== 4;
    if( decline == true) {
        alert("Please Ensure All Inputs Are Properly filled!");
    }else {
        confirm("You're about to suscribe to "+cableName+" package of "+cablePlan+ "to IUC Number"+iuc);
    }
});


////////////////////BILLS////////////////////
const billpop = document.querySelector('.billpop');
function showBillPopup() {
  billpop.classList.add('open');
}
function hideBillPopup() {
  billpop.classList.remove('open');
}

///////////////////////////////////////////////
var meterName= document.getElementById("billNameSelect");
meterName.addEventListener("change", function(){
    var value=meterName.value;
    var label= document.getElementById("billNameLabel");
    if(value==" ") {
        label.style.top="13px";
        label.style.fontSize="16px";
    }else {
        label.style.top="-2px";
        label.style.fontSize="10px";
    }
});


var meterType= document.getElementById("meterTypeSelect");
meterType.addEventListener("change", function(){
    var value= meterType.value;
    var label= document.getElementById("meterTypeLabel");
    if(value==" ") {
        label.style.top="70px";
        label.style.fontSize="16px";
    }else {
        label.style.top="56px";
        label.style.fontSize="10px";
    }
});


var meterNumber= document.getElementById("meterNumberSelect");
meterNumber.addEventListener("focus", function(){
    var length=meterNumber.value.length;
    var label= document.getElementById("meterNumberLabel");
    label.style.top="112px";
    label.style.fontSize="10px";
});

var meterNumber= document.getElementById("meterNumberSelect");
meterNumber.addEventListener("blur", function(){
    var length=meterNumber.value.length;
    var label= document.getElementById("meterNumberLabel");
    var text= document.getElementById("meterInvalid");
    var icon= document.getElementById("meterInvalidText");
    if(length < 1) {
        label.style.top="125px";
        label.style.fontSize="16px";
        label.style.color="grey";
        meterNumber.style.borderColor="grey";
        text.style.display="none";
        icon.style.display="none";
    
    }else if(length >0 && length !== 10){
        label.style.top="112px";
        label.style.fontSize="10px";
        label.style.color="red";
        meterNumber.style.borderColor="red";
        text.style.display="block";
        icon.style.display="block";
    }else {
        label.style.top="112px";
        label.style.fontSize="10px";
        label.style.color="grey";
        meterNumber.style.borderColor="grey";
        text.style.display="none";
        icon.style.display="none";
    }
    
});

var meterPin= document.getElementById("meterPinSelect");
meterPin.addEventListener("focus", function(){
    var label=document.getElementById("meterPinLabel");
    label.style.top="165px";
    label.style.fontSize="10px";
});


var meterPin= document.getElementById("meterPinSelect");
meterPin.addEventListener("blur", function(){
    var label=document.getElementById("meterPinLabel");
    var text= document.getElementById("meterPinInvalidText");
    var icon= document.getElementById("meterPinInvalid");
    var length= meterPin.value.length;
    if(length < 1) {
        label.style.top="180px";
        label.style.fontSize="16px";
        label.style.color="grey";
        meterPin.style.borderColor="grey";
        text.style.display="none";
        icon.style.display="none";
    }else if(length > 0 && length !==4){
        label.style.top="165px";
        label.style.fontSize="10px";
        label.style.color="red";
        text.style.display="block";
        meterPin.style.borderColor="red";
        icon.style.display="block";
    }else {
        label.style.top="165px";
        label.style.fontSize="10px";
        label.style.color="grey";
        meterPin.style.borderColor="grey";
        text.style.display="none";
        icon.style.display="none";
    }
     
});
meterSubmit= document.getElementById("meterSubmit");
meterSubmit.addEventListener("click", function(){
 var meterName=document.getElementById("billNameSelect").value;
    var meterType= document.getElementById("meterTypeSelect").value;
    var meterNumberLength= document.getElementById("meterNumberSelect").value.length;
    var meterNumber= document.getElementById("meterNumberSelect").value;
     var meterPin= document.getElementById("meterPinSelect").value.length;
    var decline=meterName ==" " || meterType==" " || meterNumberLength !==10 || meterPin !== 4;
    if( decline == true) {
        alert("Please Ensure All Inputs Are Properly filled!");
    }else {
        confirm("You're about to suscribe to "+meterName+" package of "+meterType+ "to IUC Number"+meterNumber);
    }
});





















////////////////////EDU PINS///////////////////
const edupop = document.querySelector('.edupop');
function showEduPopup() {
  edupop.classList.add('open');
}
function hideEduPopup() {
  edupop.classList.remove('open');
}

//////////////////EPINS////////////////////////
const epinpop = document.querySelector('.epinpop');
function showEpinPopup() {
  epinpop.classList.add('open');
}
function hideEpinPopup() {
  epinpop.classList.remove('open');
}

















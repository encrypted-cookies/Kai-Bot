//(⁠≧⁠(⁠ｴ⁠)⁠≦)(⁠≧⁠(⁠ｴ⁠)⁠≦)(⁠≧⁠(⁠ｴ⁠)⁠≦)(⁠≧⁠(⁠ｴ⁠)⁠≦)(⁠≧⁠(⁠ｴ⁠)⁠≦)(⁠≧⁠(⁠ｴ⁠)⁠≦)
//(⁠≧⁠(⁠ｴ⁠)⁠≦)(⁠≧⁠(⁠ｴ⁠)⁠≦)(⁠≧⁠(⁠ｴ⁠)⁠≦)(⁠≧⁠(⁠ｴ⁠)⁠≦)(⁠≧⁠(⁠ｴ⁠)⁠≦)(⁠≧⁠(⁠ｴ⁠)⁠≦)
//FUND POP UP
const fundpop = document.querySelector('.fundpop');
function fundPopup() {
  fundpop.classList.add('open');
}
function hideFundPopup() {
  fundpop.classList.remove('open');
}


//(⁠≧⁠(⁠ｴ⁠)⁠≦)(⁠≧⁠(⁠ｴ⁠)⁠≦)(⁠≧⁠(⁠ｴ⁠)⁠≦)(⁠≧⁠(⁠ｴ⁠)⁠≦)(⁠≧⁠(⁠ｴ⁠)⁠≦)(⁠≧⁠(⁠ｴ⁠)⁠≦)
//(⁠≧⁠(⁠ｴ⁠)⁠≦)(⁠≧⁠(⁠ｴ⁠)⁠≦)(⁠≧⁠(⁠ｴ⁠)⁠≦)(⁠≧⁠(⁠ｴ⁠)⁠≦)(⁠≧⁠(⁠ｴ⁠)⁠≦)(⁠≧⁠(⁠ｴ⁠)⁠≦)
//PRICING POP UP
const pricingpop = document.querySelector('.pricingpop');
function showPricingPopup() {
  pricingpop.classList.add('open');
}
function hidePricingPopup() {
  pricingpop.classList.remove('open');
}


//(⁠≧⁠(⁠ｴ⁠)⁠≦)(⁠≧⁠(⁠ｴ⁠)⁠≦)(⁠≧⁠(⁠ｴ⁠)⁠≦)(⁠≧⁠(⁠ｴ⁠)⁠≦)(⁠≧⁠(⁠ｴ⁠)⁠≦)(⁠≧⁠(⁠ｴ⁠)⁠≦)
//(⁠≧⁠(⁠ｴ⁠)⁠≦)(⁠≧⁠(⁠ｴ⁠)⁠≦)(⁠≧⁠(⁠ｴ⁠)⁠≦)(⁠≧⁠(⁠ｴ⁠)⁠≦)(⁠≧⁠(⁠ｴ⁠)⁠≦)(⁠≧⁠(⁠ｴ⁠)⁠≦)
//////////////////TRANSFER/////////////////////
const transferpop = document.querySelector('.transferpop');
function TransferPopup() {
  transferpop.classList.add('open');
}
function hideTransferPopup() {
  transferpop.classList.remove('open');
}



//(⁠≧⁠(⁠ｴ⁠)⁠≦)(⁠≧⁠(⁠ｴ⁠)⁠≦)(⁠≧⁠(⁠ｴ⁠)⁠≦)(⁠≧⁠(⁠ｴ⁠)⁠≦)(⁠≧⁠(⁠ｴ⁠)⁠≦)(⁠≧⁠(⁠ｴ⁠)⁠≦)
//(⁠≧⁠(⁠ｴ⁠)⁠≦)(⁠≧⁠(⁠ｴ⁠)⁠≦)(⁠≧⁠(⁠ｴ⁠)⁠≦)(⁠≧⁠(⁠ｴ⁠)⁠≦)(⁠≧⁠(⁠ｴ⁠)⁠≦)(⁠≧⁠(⁠ｴ⁠)⁠≦)
/////////////////WITHDRAW/////////////////////
const withdrawpop = document.querySelector('.withdrawpop');
function WithdrawPopup() {
  withdrawpop.classList.add('open');
}
function hideWithdrawPopup() {
  withdrawpop.classList.remove('open');
}


//(⁠≧⁠(⁠ｴ⁠)⁠≦)(⁠≧⁠(⁠ｴ⁠)⁠≦)(⁠≧⁠(⁠ｴ⁠)⁠≦)(⁠≧⁠(⁠ｴ⁠)⁠≦)(⁠≧⁠(⁠ｴ⁠)⁠≦)(⁠≧⁠(⁠ｴ⁠)⁠≦)
//(⁠≧⁠(⁠ｴ⁠)⁠≦)(⁠≧⁠(⁠ｴ⁠)⁠≦)(⁠≧⁠(⁠ｴ⁠)⁠≦)(⁠≧⁠(⁠ｴ⁠)⁠≦)(⁠≧⁠(⁠ｴ⁠)⁠≦)(⁠≧⁠(⁠ｴ⁠)⁠≦)
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


//(⁠≧⁠(⁠ｴ⁠)⁠≦)(⁠≧⁠(⁠ｴ⁠)⁠≦)(⁠≧⁠(⁠ｴ⁠)⁠≦)(⁠≧⁠(⁠ｴ⁠)⁠≦)(⁠≧⁠(⁠ｴ⁠)⁠≦)(⁠≧⁠(⁠ｴ⁠)⁠≦)
//(⁠≧⁠(⁠ｴ⁠)⁠≦)(⁠≧⁠(⁠ｴ⁠)⁠≦)(⁠≧⁠(⁠ｴ⁠)⁠≦)(⁠≧⁠(⁠ｴ⁠)⁠≦)(⁠≧⁠(⁠ｴ⁠)⁠≦)(⁠≧⁠(⁠ｴ⁠)⁠≦)
/* CHECK BALANCE*/
const balpop = document.querySelector('.balpop');
function showBalPopup() {
  balpop.classList.add('open');
}
function hideBalPopup() {
  balpop.classList.remove('open');
}
//(⁠≧⁠(⁠ｴ⁠)⁠≦)(⁠≧⁠(⁠ｴ⁠)⁠≦)(⁠≧⁠(⁠ｴ⁠)⁠≦)(⁠≧⁠(⁠ｴ⁠)⁠≦)(⁠≧⁠(⁠ｴ⁠)⁠≦)(⁠≧⁠(⁠ｴ⁠)⁠≦)
//(⁠≧⁠(⁠ｴ⁠)⁠≦)(⁠≧⁠(⁠ｴ⁠)⁠≦)(⁠≧⁠(⁠ｴ⁠)⁠≦)(⁠≧⁠(⁠ｴ⁠)⁠≦)(⁠≧⁠(⁠ｴ⁠)⁠≦)(⁠≧⁠(⁠ｴ⁠)⁠≦)
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

//(⁠≧⁠(⁠ｴ⁠)⁠≦)(⁠≧⁠(⁠ｴ⁠)⁠≦)(⁠≧⁠(⁠ｴ⁠)⁠≦)(⁠≧⁠(⁠ｴ⁠)⁠≦)(⁠≧⁠(⁠ｴ⁠)⁠≦)(⁠≧⁠(⁠ｴ⁠)⁠≦)
//(⁠≧⁠(⁠ｴ⁠)⁠≦)(⁠≧⁠(⁠ｴ⁠)⁠≦)(⁠≧⁠(⁠ｴ⁠)⁠≦)(⁠≧⁠(⁠ｴ⁠)⁠≦)(⁠≧⁠(⁠ｴ⁠)⁠≦)(⁠≧⁠(⁠ｴ⁠)⁠≦)
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
    var typeLabel= document.getElementById("planTypeLabel");
    if(value==" ") {
        label.style.top="13px";
        label.style.fontSize="16px";
        typeLabel.style.top="70px";
        typeLabel.style.fontSize="16px";
    }else {
        label.style.top="-2px";
        label.style.fontSize="10px";
    }
//(⁠≧⁠(⁠ｴ⁠)⁠≦)(⁠≧⁠(⁠ｴ⁠)⁠≦)(⁠≧⁠(⁠ｴ⁠)⁠≦)(⁠≧⁠(⁠ｴ⁠)⁠≦)(⁠≧⁠(⁠ｴ⁠)⁠≦)(⁠≧⁠(⁠ｴ⁠)⁠≦)
 var planType=document.getElementById("planTypeSelect");
var invalid= document.getElementById("dataNetworkInvalidText");
 planType.innerHTML="";
 
 var value= dataChoose.value;
 switch (value) {
     case "mtn" :
         var optionArray=[" | ", "sme|SME", "gifting|GIFTING", "cg|COOPERATE GIFTING"];
         invalid.style.display="none";
         break;
     case "glo" :
         var optionArray=[" | ", "sme|SME", "gifting|GIFTING", "cg|COOPERATE GIFTING"];
         invalid.style.display="none";
         break;
     case "airtel" :
         var optionArray=[" | ", "sme|SME", "gifting|GIFTING", "cg|COOPERATE GIFTING"];
         invalid.style.display="none";
         break;
     case "9mobile" :
         var optionArray=[" | ", "sme|SME", "gifting|GIFTING", "cg|COOPERATE GIFTING"];
         invalid.style.display="none";
     default:
       
   }
   for (var option in optionArray) {
        var pair= optionArray[option].split("|");
        var newoption = document.createElement("option");
        newoption.value= pair[0];
        newoption.innerHTML= pair[1];
        planType.options.add(newoption);
    }
});

//(⁠≧⁠(⁠ｴ⁠)⁠≦)(⁠≧⁠(⁠ｴ⁠)⁠≦)(⁠≧⁠(⁠ｴ⁠)⁠≦)(⁠≧⁠(⁠ｴ⁠)⁠≦)(⁠≧⁠(⁠ｴ⁠)⁠≦)(⁠≧⁠(⁠ｴ⁠)⁠≦)
//(⁠≧⁠(⁠ｴ⁠)⁠≦)(⁠≧⁠(⁠ｴ⁠)⁠≦)(⁠≧⁠(⁠ｴ⁠)⁠≦)(⁠≧⁠(⁠ｴ⁠)⁠≦)(⁠≧⁠(⁠ｴ⁠)⁠≦)(⁠≧⁠(⁠ｴ⁠)⁠≦)
var planType= document.getElementById("planTypeSelect");
planType.addEventListener("click", function(){
var network=document.getElementById("dataNetworkSelect").value;
var invalid= document.getElementById("dataNetworkInvalidText");
    if(network==" ") {
        invalid.style.display="block";
    }else {
        invalid.style.display="none";
    }
});

//(⁠≧⁠(⁠ｴ⁠)⁠≦)(⁠≧⁠(⁠ｴ⁠)⁠≦)(⁠≧⁠(⁠ｴ⁠)⁠≦)(⁠≧⁠(⁠ｴ⁠)⁠≦)(⁠≧⁠(⁠ｴ⁠)⁠≦)(⁠≧⁠(⁠ｴ⁠)⁠≦)
//(⁠≧⁠(⁠ｴ⁠)⁠≦)(⁠≧⁠(⁠ｴ⁠)⁠≦)(⁠≧⁠(⁠ｴ⁠)⁠≦)(⁠≧⁠(⁠ｴ⁠)⁠≦)(⁠≧⁠(⁠ｴ⁠)⁠≦)(⁠≧⁠(⁠ｴ⁠)⁠≦)
var planType= document.getElementById("planTypeSelect");
planType.addEventListener("change", function(){
    var typeVal= planType.value;
    var label= document.getElementById("planTypeLabel");
    var planLabel= document.getElementById("dataPlanLabel");
    if(typeVal == " ") {
        label.style.top="70px";
        label.style.fontSize="16px";
        planLabel.style.top="130px";
        planLabel.style.fontSize="16px";
    }else {
        label.style.top="56px";
        label.style.fontSize="10px";
    }
//(⁠≧⁠(⁠ｴ⁠)⁠≦)(⁠≧⁠(⁠ｴ⁠)⁠≦)(⁠≧⁠(⁠ｴ⁠)⁠≦)(⁠≧⁠(⁠ｴ⁠)⁠≦)(⁠≧⁠(⁠ｴ⁠)⁠≦)(⁠≧⁠(⁠ｴ⁠)⁠≦)  
var network= document.getElementById("dataNetworkSelect").value;
var dataPlan= document.getElementById("dataPlanSelect");
var invalid= document.getElementById("planTypeInvalidText");
   
    dataPlan.innerHTML= "";  
    
    if (network=="mtn" && typeVal=="sme") {
    var optionArray=[' | ', 'cat|MTNSME1','dog|MTNSME2','fish|MTNSME3'];
    invalid.style.display="none";
};
if (network=="mtn" && typeVal=="gifting") {
      var optionArray=[' | ', 'cat|MTNGIFTING1','dog|MTNGIFTING2','fish|MTNGIFTING3'];
      invalid.style.display="none";
};
if (network=="mtn" && typeVal=="cg") {
      var optionArray=[' | ', 'cat|MTNCG1','dog|MTNCG2','fish|MTNCG3'];
      invalid.style.display="none";
};
if (network=="glo" && typeVal=="sme") {
      var optionArray=[' | ', 'cat|GLOSME1','dog|GLOSME2','fish|GLOSME3'];
      invalid.style.display="none";
};
if (network=="glo" && typeVal=="gifting") {
      var optionArray=[' | ', 'cat|GLOgifting1','dog|GLOgifting2','fish|GLOgifting3'];
      invalid.style.display="none";
};
if (network=="airtel" && typeVal=="sme") {
      var optionArray=[' | ', 'cat|AIRTELSME1','dog|AIRTELSME2','fish|AIRTELSME3'];
      invalid.style.display="none";
};
if (network=="airtel" && typeVal=="gifting") {
      var optionArray=[' | ', 'cat|AIRTELgifting1','dog|AIRTELgifting2','fish|AIRTELgifting3'];
      invalid.style.display="none";
};
if (network=="airtel" && typeVal=="cg") {
      var optionArray=[' | ', 'cat|AIRTELCG1','dog|AIRTELCG2','fish|AIRTELCG3'];
      invalid.style.display="none";
};
if (network=="9mobile" && typeVal=="sme") {
      var optionArray=[' | ', 'cat|9MOBILESME1','dog|9MOBILESME2','fish|9MOBILESME3'];
      invalid.style.display="none";
};
if (network=="9mobile" && typeVal=="gifting") {
      var optionArray=[' | ', 'cat|9MOBILEgifting1','dog|9MOBILEgifting2','fish|9MOBILEgifting3'];
      invalid.style.display="none";
};
if (network=="9mobile" && typeVal=="cg") {
      var optionArray=[' | ', 'cat|9MOBILECG1','dog|9MOBILECG2','fish|9MOBILECG3'];
      invalid.style.display="none";
};
for (var option in optionArray) {
        var pair= optionArray[option].split("|");
        var newoption = document.createElement("option");
        newoption.value= pair[0];
        newoption.innerHTML= pair[1];
        dataPlan.options.add(newoption);
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
//(⁠≧⁠(⁠ｴ⁠)⁠≦)(⁠≧⁠(⁠ｴ⁠)⁠≦)(⁠≧⁠(⁠ｴ⁠)⁠≦)(⁠≧⁠(⁠ｴ⁠)⁠≦)(⁠≧⁠(⁠ｴ⁠)⁠≦)(⁠≧⁠(⁠ｴ⁠)⁠≦)
//(⁠≧⁠(⁠ｴ⁠)⁠≦)(⁠≧⁠(⁠ｴ⁠)⁠≦)(⁠≧⁠(⁠ｴ⁠)⁠≦)(⁠≧⁠(⁠ｴ⁠)⁠≦)(⁠≧⁠(⁠ｴ⁠)⁠≦)(⁠≧⁠(⁠ｴ⁠)⁠≦)
var dataPlan= document.getElementById("dataPlanSelect");
dataPlan.addEventListener("click", function(){
var type=document.getElementById("planTypeSelect").value;
var invalid= document.getElementById("planTypeInvalidText");
      if(type ==""){
         invalid.style.display="block";
      }else{
          invalid.style.display="none";
      }
});

 /*document.querySelectorAll("#dataNevtworkSelect option").forEach(opt => {
    if (opt.value == "mtn") {
        opt.disabled = true;
    }
});*/   

var dataPlan= document.getElementById("dataPlanSelect");
dataPlan.addEventListener("change", function(){
    var value=dataPlan.value;
    var label= document.getElementById("dataPriceLabel");
   if(value == " ") {
       label.style.top="190px";
       label.style.fontSize="16px";
   }else {
       label.style.top="174px";
       label.style.fontSize="10px";
   }
});
//(⁠≧⁠(⁠ｴ⁠)⁠≦)(⁠≧⁠(⁠ｴ⁠)⁠≦)(⁠≧⁠(⁠ｴ⁠)⁠≦)(⁠≧⁠(⁠ｴ⁠)⁠≦)(⁠≧⁠(⁠ｴ⁠)⁠≦)(⁠≧⁠(⁠ｴ⁠)⁠≦)
//(⁠≧⁠(⁠ｴ⁠)⁠≦)(⁠≧⁠(⁠ｴ⁠)⁠≦)(⁠≧⁠(⁠ｴ⁠)⁠≦)(⁠≧⁠(⁠ｴ⁠)⁠≦)(⁠≧⁠(⁠ｴ⁠)⁠≦)(⁠≧⁠(⁠ｴ⁠)⁠≦)
//(⁠≧⁠(⁠ｴ⁠)⁠≦)(⁠≧⁠(⁠ｴ⁠)⁠≦)(⁠≧⁠(⁠ｴ⁠)⁠≦)(⁠≧⁠(⁠ｴ⁠)⁠≦)(⁠≧⁠(⁠ｴ⁠)⁠≦)(⁠≧⁠(⁠ｴ⁠)⁠≦)
//(⁠≧⁠(⁠ｴ⁠)⁠≦)(⁠≧⁠(⁠ｴ⁠)⁠≦)(⁠≧⁠(⁠ｴ⁠)⁠≦)(⁠≧⁠(⁠ｴ⁠)⁠≦)(⁠≧⁠(⁠ｴ⁠)⁠≦)(⁠≧⁠(⁠ｴ⁠)⁠≦)
//(⁠≧⁠(⁠ｴ⁠)⁠≦)(⁠≧⁠(⁠ｴ⁠)⁠≦)(⁠≧⁠(⁠ｴ⁠)⁠≦)(⁠≧⁠(⁠ｴ⁠)⁠≦)(⁠≧⁠(⁠ｴ⁠)⁠≦)(⁠≧⁠(⁠ｴ⁠)⁠≦)
//(⁠≧⁠(⁠ｴ⁠)⁠≦)(⁠≧⁠(⁠ｴ⁠)⁠≦)(⁠≧⁠(⁠ｴ⁠)⁠≦)(⁠≧⁠(⁠ｴ⁠)⁠≦)(⁠≧⁠(⁠ｴ⁠)⁠≦)(⁠≧⁠(⁠ｴ⁠)⁠≦)
//(⁠≧⁠(⁠ｴ⁠)⁠≦)(⁠≧⁠(⁠ｴ⁠)⁠≦)(⁠≧⁠(⁠ｴ⁠)⁠≦)(⁠≧⁠(⁠ｴ⁠)⁠≦)(⁠≧⁠(⁠ｴ⁠)⁠≦)(⁠≧⁠(⁠ｴ⁠)⁠≦)
    
var dataPhone= document.getElementById("dataPhoneSelect");
dataPhone.addEventListener("focus", function(){
    var length=dataPhone.value.length;
    var text= document.getElementById("dataPhoneInvalid");
    var icon= document.getElementById("dataPhoneInvalidText");
    var label= document.getElementById("dataPhoneLabel");
    label.style.top="233px";
    label.style.fontSize="10px";
    label.style.color="#0076ff";
    dataPhone.style.borderColor="#0076ff";
    text.style.display="none";
    icon.style.display="none";
});

var dataPhone= document.getElementById("dataPhoneSelect");
dataPhone.addEventListener("blur", function(){
    var length=dataPhone.value.length;
    var label= document.getElementById("dataPhoneLabel");
    var text= document.getElementById("dataPhoneInvalid");
    var icon= document.getElementById("dataPhoneInvalidText");
    if(length < 1) {
        label.style.top="247px";
        label.style.fontSize="16px";
        label.style.color="grey";
        dataPhone.style.borderColor="grey";
        text.style.display="none";
        icon.style.display="none";
    
    }else if(length >0 && length !== 11){
        label.style.top="233px";
        label.style.fontSize="10px";
        label.style.color="red";
        dataPhone.style.borderColor="red";
        text.style.display="block";
        icon.style.display="block";
    }else {
        label.style.top="233px";
        label.style.fontSize="10px";
        label.style.color="grey";
        dataPhone.style.borderColor="grey";
        text.style.display="none";
        icon.style.display="none";
    }
    
});

var dataPin= document.getElementById("dataPinSelect");
dataPin.addEventListener("focus", function(){
    var text= document.getElementById("dataPinInvalidText");
    var icon= document.getElementById("dataPinInvalid");
    var label=document.getElementById("dataPinLabel");
    label.style.top="292px";
    label.style.fontSize="10px";
    label.style.color="#0076ff";
    dataPin.style.borderColor="#0076ff";
    text.style.display="none";
    icon.style.display="none";
});


var dataPin= document.getElementById("dataPinSelect");
dataPin.addEventListener("blur", function(){
    var label=document.getElementById("dataPinLabel");
    var text= document.getElementById("dataPinInvalidText");
    var icon= document.getElementById("dataPinInvalid");
    var length= dataPin.value.length;
    if(length < 1) {
        label.style.top="307px";
        label.style.fontSize="16px";
        label.style.color="grey";
        dataPin.style.borderColor="grey";
        text.style.display="none";
        icon.style.display="none";
    }else if(length > 0 && length !==4){
        label.style.top="292px";
        label.style.fontSize="10px";
        label.style.color="red";
        text.style.display="block";
        dataPin.style.borderColor="red";
        icon.style.display="block";
    }else {
        label.style.top="292px";
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

//(⁠≧⁠(⁠ｴ⁠)⁠≦)(⁠≧⁠(⁠ｴ⁠)⁠≦)(⁠≧⁠(⁠ｴ⁠)⁠≦)(⁠≧⁠(⁠ｴ⁠)⁠≦)(⁠≧⁠(⁠ｴ⁠)⁠≦)(⁠≧⁠(⁠ｴ⁠)⁠≦)
//(⁠≧⁠(⁠ｴ⁠)⁠≦)(⁠≧⁠(⁠ｴ⁠)⁠≦)(⁠≧⁠(⁠ｴ⁠)⁠≦)(⁠≧⁠(⁠ｴ⁠)⁠≦)(⁠≧⁠(⁠ｴ⁠)⁠≦)(⁠≧⁠(⁠ｴ⁠)⁠≦)
/////////////////////CABLE///////////////////
const cablepop = document.querySelector('.cablepop');
function showCablePopup() {
  cablepop.classList.add('open');
}
function hideCablePopup() {
  cablepop.classList.remove('open');
}
//(⁠≧⁠(⁠ｴ⁠)⁠≦)(⁠≧⁠(⁠ｴ⁠)⁠≦)(⁠≧⁠(⁠ｴ⁠)⁠≦)(⁠≧⁠(⁠ｴ⁠)⁠≦)(⁠≧⁠(⁠ｴ⁠)⁠≦)(⁠≧⁠(⁠ｴ⁠)⁠≦)
var cableName= document.getElementById("cableNameSelect");
cableName.addEventListener("change", function(){
    var value=cableName.value;
    var label= document.getElementById("cableNameLabel");
    var planLabel= document.getElementById("cablePlanLabel");
    var invalid= document.getElementById("cableNameInvalidText");
    if(value==" ") {
        label.style.top="13px";
        label.style.fontSize="16px";
        planLabel.style.top="70px";
        planLabel.style.fontSize="16px";
    }else {
        label.style.top="-2px";
        label.style.fontSize="10px";
    }
    
    var cablePlan= document.getElementById("cablePlanSelect");
    
    cablePlan.innerHTML= "";
    
    switch (value) {
        case "dstv" :
            var optionArray=[' | ', 'one|DSTVPLAN','two|DSTVPLAN','three|DSTVPLAN'];
       invalid.style.display="none";     
            break;
        case "gotv":
             var optionArray=[' | ', 'one|GOTVPLAN','two|GOTVPLAN','three|GOTVPLAN'];
       invalid.style.display="none";  
            break;
        case "startimes":
              var optionArray=[' | ', 'one|STARTIMESPLAN','two|STARTIMESPLAN','three|STARTIEMSPLAN'];
       invalid.style.display="none";  
            break;
        default:
      }
    for (var option in optionArray) {
        var pair= optionArray[option].split("|");
        var newoption = document.createElement("option");
        newoption.value= pair[0];
        newoption.innerHTML= pair[1];
        cablePlan.options.add(newoption);
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

var cablePlan= document.getElementById("cablePlanSelect");
cablePlan.addEventListener("click", function(){
    var cableName= document.getElementById("cableNameSelect").value;
    var invalid= document.getElementById("cableNameInvalidText");
    if (cableName ==" "){
        invalid.style.display="block";
    }else{
        invalid.style.display="none";
    }
});

var iucNumber= document.getElementById("IucSelect");
iucNumber.addEventListener("focus", function(){
    var length=iucNumber.value.length;
    var text= document.getElementById("IucInvalidText");
    var icon= document.getElementById("IucInvalid");
    var label= document.getElementById("IucLabel");
    label.style.top="174px";
    label.style.fontSize="10px";
    label.style.color="#0076ff";
    iucNumber.style.borderColor="#0076ff";
    text.style.display="none";
    icon.style.display="none";
});

var iucNumber= document.getElementById("IucSelect");
iucNumber.addEventListener("blur", function(){
    var length=iucNumber.value.length;
    var label= document.getElementById("IucLabel");
    var text= document.getElementById("IucInvalid");
    var icon= document.getElementById("IucInvalidText");
    if(length < 1) {
        label.style.top="190px";
        label.style.fontSize="16px";
        label.style.color="grey";
        iucNumber.style.borderColor="grey";
        text.style.display="none";
        icon.style.display="none";
    
    }else if(length >0 && length !== 10){
        label.style.top="174px";
        label.style.fontSize="10px";
        label.style.color="red";
        iucNumber.style.borderColor="red";
        text.style.display="block";
        icon.style.display="block";
    }else {
        label.style.top="174px";
        label.style.fontSize="10px";
        label.style.color="grey";
        iucNumber.style.borderColor="grey";
        text.style.display="none";
        icon.style.display="none";
    }
    
});

var cablePin= document.getElementById("cablePinSelect");
cablePin.addEventListener("focus", function(){
    var text= document.getElementById("cablePinInvalidText");
    var icon= document.getElementById("cablePinInvalid");
    var label=document.getElementById("cablePinLabel");
    label.style.top="233px";
    label.style.fontSize="10px";
    label.style.color="#0076ff";
    cablePin.style.borderColor="#0076ff";
    text.style.display="none";
    icon.style.display="none";
});

var cablePin= document.getElementById("cablePinSelect");
cablePin.addEventListener("blur", function(){
    var label=document.getElementById("cablePinLabel");
    var text= document.getElementById("cablePinInvalidText");
    var icon= document.getElementById("cablePinInvalid");
    var length= cablePin.value.length;
    if(length < 1) {
        label.style.top="247px";
        label.style.fontSize="16px";
        label.style.color="grey";
        cablePin.style.borderColor="grey";
        text.style.display="none";
        icon.style.display="none";
    }else if(length > 0 && length !==4){
        label.style.top="233px";
        label.style.fontSize="10px";
        label.style.color="red";
        text.style.display="block";
        cablePin.style.borderColor="red";
        icon.style.display="block";
    }else {
        label.style.top="233px";
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

//(⁠≧⁠(⁠ｴ⁠)⁠≦)(⁠≧⁠(⁠ｴ⁠)⁠≦)(⁠≧⁠(⁠ｴ⁠)⁠≦)(⁠≧⁠(⁠ｴ⁠)⁠≦)(⁠≧⁠(⁠ｴ⁠)⁠≦)(⁠≧⁠(⁠ｴ⁠)⁠≦)
//(⁠≧⁠(⁠ｴ⁠)⁠≦)(⁠≧⁠(⁠ｴ⁠)⁠≦)(⁠≧⁠(⁠ｴ⁠)⁠≦)(⁠≧⁠(⁠ｴ⁠)⁠≦)(⁠≧⁠(⁠ｴ⁠)⁠≦)(⁠≧⁠(⁠ｴ⁠)⁠≦)
//////////////////////////////////////////////
var meterName= document.getElementById("billNameSelect");
meterName.addEventListener("change", function(){
    var value=meterName.value;
    var invalid= document.getElementById("billNameInvalidText");
    var label= document.getElementById("billNameLabel");
    var typeLabel= document.getElementById("meterTypeLabel");
    if(value==" ") {
        label.style.top="13px";
        label.style.fontSize="16px";
        typeLabel.style.top="70px";
        typeLabel.style.fontSize="16px";
    }else {
        label.style.top="-2px";
        label.style.fontSize="10px";
    }
    
    var meterType= document.getElementById("meterTypeSelect");
    
    meterType.innerHTML= "";
    
    switch (value) {
        case "dstv" :
            var optionArray=[' | ', 'one|DSTVPLAN','two|DSTVPLAN','three|DSTVPLAN'];
       invalid.style.display="none";     
            break;
        case "gotv":
             var optionArray=[' | ', 'one|GOTVPLAN','two|GOTVPLAN','three|GOTVPLAN'];
       invalid.style.display="none";  
            break;
        case "startimes":
              var optionArray=[' | ', 'one|STARTIMESPLAN','two|STARTIMESPLAN','three|STARTIEMSPLAN'];
       invalid.style.display="none";  
            break;
        default:
      }
    for (var option in optionArray) {
        var pair= optionArray[option].split("|");
        var newoption = document.createElement("option");
        newoption.value= pair[0];
        newoption.innerHTML= pair[1];
        meterType.options.add(newoption);
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

var meterType= document.getElementById("meterTypeSelect");
meterType.addEventListener("click", function(){
    var billName= document.getElementById("billNameSelect").value;
    var invalid= document.getElementById("billNameInvalidText");
    if(billName==" ") {
        invalid.style.display="block";
    }else {
        invalid.style.display="none";
    }
});

var meterNumber= document.getElementById("meterNumberSelect");
meterNumber.addEventListener("focus", function(){
    var length=meterNumber.value.length;
    var text= document.getElementById("meterInvalid");
    var icon= document.getElementById("meterInvalidText");
    var label= document.getElementById("meterNumberLabel");
    label.style.top="112px";
    label.style.fontSize="10px";
    label.style.color="#0076ff";
    meterNumber.style.borderColor="#0076ff";
    text.style.display="none";
    icon.style.display="none";
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

//(⁠≧⁠(⁠ｴ⁠)⁠≦)(⁠≧⁠(⁠ｴ⁠)⁠≦)(⁠≧⁠(⁠ｴ⁠)⁠≦)(⁠≧⁠(⁠ｴ⁠)⁠≦)(⁠≧⁠(⁠ｴ⁠)⁠≦)(⁠≧⁠(⁠ｴ⁠)⁠≦)
//(⁠≧⁠(⁠ｴ⁠)⁠≦)(⁠≧⁠(⁠ｴ⁠)⁠≦)(⁠≧⁠(⁠ｴ⁠)⁠≦)(⁠≧⁠(⁠ｴ⁠)⁠≦)(⁠≧⁠(⁠ｴ⁠)⁠≦)(⁠≧⁠(⁠ｴ⁠)⁠≦)

////////////////////EDU PINS///////////////////
const edupop = document.querySelector('.edupop');
function showEduPopup() {
  edupop.classList.add('open');
}
function hideEduPopup() {
  edupop.classList.remove('open');
}

//(⁠≧⁠(⁠ｴ⁠)⁠≦)(⁠≧⁠(⁠ｴ⁠)⁠≦)(⁠≧⁠(⁠ｴ⁠)⁠≦)(⁠≧⁠(⁠ｴ⁠)⁠≦)(⁠≧⁠(⁠ｴ⁠)⁠≦)(⁠≧⁠(⁠ｴ⁠)⁠≦)
//(⁠≧⁠(⁠ｴ⁠)⁠≦)(⁠≧⁠(⁠ｴ⁠)⁠≦)(⁠≧⁠(⁠ｴ⁠)⁠≦)(⁠≧⁠(⁠ｴ⁠)⁠≦)(⁠≧⁠(⁠ｴ⁠)⁠≦)(⁠≧⁠(⁠ｴ⁠)⁠≦)
//////////////////////////////////////////////
var examName= document.getElementById("examNameSelect");
examName.addEventListener("change", function(){
    var value=examName.value;
    var label= document.getElementById("examNameLabel");
    if(value==" ") {
        label.style.top="13px";
        label.style.fontSize="16px";
    }else {
        label.style.top="-2px";
        label.style.fontSize="10px";
    }
});

var examQuan= document.getElementById("examQuantitySelect");examQuan.addEventListener("focus", function(){
    var text= document.getElementById("examQuantityInvalid");
    var icon= document.getElementById("examQuantityInvalidText");
    var label= document.getElementById("examQuantityLabel");
        label.style.top="56px";
        label.style.fontSize="10px";
        label.style.color="#0076ff";
        examQuan.style.borderColor="#0076ff";
        text.style.display="none";
        icon.style.display="none";
});

var examQuan= document.getElementById("examQuantitySelect");
examQuan.addEventListener("blur", function(){
    var value=examQuan.value;
    var label= document.getElementById("examQuantityLabel");
    var text= document.getElementById("examQuantityInvalid");
    var icon= document.getElementById("examQuantityInvalidText");
    if(value < 1) {
        label.style.top="72px";
        label.style.fontSize="16px";
        label.style.color="red";
        examQuan.style.borderColor="red";
        text.style.display="block";
        icon.style.display="block";
    }else {
        label.style.top="57px";
        label.style.fontSize="10px";
        label.style.color="grey";
        examQuan.style.borderColor="grey";
        text.style.display="none";
        icon.style.display="none";
    }
});

var examPrice= document.getElementById("examPriceSelect");
examPrice.addEventListener("focus", function(){
    var length=examPrice.value.length;
    var label= document.getElementById("examPriceLabel");
    label.style.top="115px";
    label.style.fontSize="10px";
});

var examPrice= document.getElementById("examPriceSelect");
examPrice.addEventListener("blur", function(){
    var label= document.getElementById("examPriceLabel");
    var text= document.getElementById("examPriceInvalidText");
    var icon=document.getElementById("examPriceInvalid");
    var value=examPrice.value;
    var length=value.length
    if(length < 1){
        label.style.top="130px";
        label.style.fontSize="16px";
    }else if(length > 0 && value < 50){
        label.style.top="115px";
        label.style.fontSize="10px";
        label.style.color="red";
        examPrice.style.borderColor="red";
        text.style.display="block";
        icon.style.display="block";
    }else{
        label.style.top="115px";
        label.style.fontSize="10px";
        label.style.color="grey";
        examPrice.style.borderColor="grey";
        text.style.display="none";
        icon.style.display="none";
    }
});


var examEmail= document.getElementById("examEmailSelect");
examEmail.addEventListener("focus", function()
{
    var text= document.getElementById("examEmailInvalidText");
     var icon= document.getElementById("examEmailInvalid");
    var label= document.getElementById("examEmailLabel");
    label.style.top="174px";
    label.style.fontSize="10px";
    label.style.color="#0076ff";
    examEmail.style.borderColor="#0076ff"
    text.style.display="none";
    icon.style.display="none";
});

        var examEmail= document.getElementById("examEmailSelect");
examEmail.addEventListener("blur", function(){
        var label= document.getElementById("examEmailLabel");
        var text= document.getElementById("examEmailInvalidText");
        var length=examEmail.value.length;
        var icon= document.getElementById("examEmailInvalid");
        var value=examEmail.value;
        var emailCheck= value.slice(-10);
  if (length < 1) {
        label.style.top="190px";
        label.style.fontSize="16px";
        label.style.color="grey";
        examEmail.style.borderColor="grey"
        text.style.display="none";
        icon.style.display="none";
  }else if(length >0 && emailCheck == "@gmail.com" || emailCheck == "@yahoo.com") {
        label.style.top="174px";
        label.style.fontSize="10px";
        label.style.color="grey";
        examEmail.style.borderColor="grey"
        text.style.display="none";
        icon.style.display="none";
   }else {   
        label.style.top="174px";
        label.style.fontSize="10px";
        label.style.color="red";
        examEmail.style.borderColor="red"
        text.style.display="block";
        icon.style.display="block";
   }
});


var examPin= document.getElementById("examPinSelect");
examPin.addEventListener("focus", function(){
    var text= document.getElementById("examPinInvalidText");
    var icon= document.getElementById("examPinInvalid");
    var label=document.getElementById("examPinLabel");
    label.style.top="233px";
    label.style.fontSize="10px";
    label.style.color="#0076ff";
    examPin.style.borderColor="#0076ff";
    text.style.display="none";
    icon.style.display="none";
});

var examPin= document.getElementById("examPinSelect");
examPin.addEventListener("blur", function(){
    var label=document.getElementById("examPinLabel");
    var text= document.getElementById("examPinInvalidText");
    var icon= document.getElementById("examPinInvalid");
    var length= examPin.value.length;
    if(length < 1) {
        label.style.top="247px";
        label.style.fontSize="16px";
        label.style.color="grey";
        examPin.style.borderColor="grey";
        text.style.display="none";
        icon.style.display="none";
    }else if(length > 0 && length !==4){
        label.style.top="233px";
        label.style.fontSize="10px";
        label.style.color="red";
        text.style.display="block";
        examPin.style.borderColor="red";
        icon.style.display="block";
    }else {
        label.style.top="233px";
        label.style.fontSize="10px";
        label.style.color="grey";
        examPin.style.borderColor="grey";
        text.style.display="none";
        icon.style.display="none";
    }
});

examSubmit= document.getElementById("examSubmit");
examSubmit.addEventListener("click", function(){
    var examName= document.getElementById("examNameSelect");
    var examQuan= document.getElementById("examQuantitySelect");
    var examMail= document.getElementById("examEmailSelect");
    var emailCheck= examMail.value.slice(-10);
    var mailOn= examMail.value.length >0 && emailCheck == "@gmail.com" || emailCheck == "@yahoo.com";
    var examPin= document.getElementById("examPinSelect");
    var decline=examName.value ==" " || examQuan.value < 1 || mailOn == false ||  examPin.value.length !=4;
    if(decline==true) {
        alert("PLEASE ENSURE ALL FIELDS ARE PROPERLY FILLED");
    }else {
        alert("YOUR "+examName.value+" PIN HAS BEEN SENT TO "+examMail.value+" SUCCESSFULLY, PLEASE CHECK YOUR INBOX TO RETRIEVE");
    }
});
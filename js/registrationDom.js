const userRegistration = document.querySelector(".regText");
const addButton = document.querySelector(".addBtn");
const popup = document.querySelector(".message");
const locations = document.querySelector(".regLocation");
const selectCity = document.querySelector("#regLocation");
let userRegistrationNumber = registrationNumbers();


addButton.addEventListener("click", function () {
    
    
    userRegistrationNumber.setRegNum(userRegistration.value);
    popup.innerHTML = userRegistrationNumber.regBreakDown();
    
});
if (selectCity.value === "Cape-Town") {
     popup.innerHTML=userRegistrationNumber.cityFilter(selectCity.value);
      
 } else if (selectCity.value === "Malmesbury") {
    popup.innerHTML=userRegistrationNumber.cityFilter(selectCity.value);
} else if (selectCity.value === "Stellenbosch") {
    popup.innerHTML=userRegistrationNumber.cityFilter(selectCity.value);
     

} else if (selectCity.value === "Paarl") {
    popup.innerHTML=userRegistrationNumber.cityFilter(selectCity.value);
     
}
// popup.innerHTML = userRegistrationNumber.cityFilter(selectCity.value);
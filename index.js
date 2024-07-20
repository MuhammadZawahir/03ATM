var atm_welcomePg = document.getElementById('welcomePg');
var atm_actionChoicePg = document.getElementById('actionChoicePg');
var atm_withdrawalPg = document.getElementById('withdrawalPg');
var atm_depositPg = document.getElementById('depositPg');
var atm_balanceInquiryPg = document.getElementById('balanceInquiryPg');
var atm_byePg = document.getElementById('byePg');
var atm_pinBtn = document.getElementById('pinBtn');
var atm_withdrawalBtn = document.getElementById('withdrawalBtn');
var atm_depositBtn = document.getElementById('depositBtn');
var atm_balanceInquiryBtn = document.getElementById('balanceInquiryBtn');
var atm_withdrawalSubmitBtn = document.getElementById('withdrawalSubmitBtn');
var atm_depositSubmitBtn = document.getElementById('depositSubmitBtn');
var atm_balanceInquirySubmitBtn = document.getElementById('balanceInquirySubmitBtn');
var atm_balance = document.getElementById('balance');
function Home() {
    atm_actionChoicePg.style.display = 'none';
    atm_withdrawalPg.style.display = 'none';
    atm_depositPg.style.display = 'none';
    atm_balanceInquiryPg.style.display = 'none';
    atm_byePg.style.display = 'none';
    atm_welcomePg.style.display = 'block';
}
Home();
atm_pinBtn.addEventListener("click", function () {
    atm_welcomePg.style.display = "none";
    atm_actionChoicePg.style.display = "block";
});
atm_withdrawalBtn.addEventListener("click", function () {
    atm_actionChoicePg.style.display = "none";
    atm_withdrawalPg.style.display = "block";
});
atm_depositBtn.addEventListener("click", function () {
    atm_actionChoicePg.style.display = "none";
    atm_depositPg.style.display = "block";
});
atm_balanceInquiryBtn.addEventListener("click", function () {
    atm_actionChoicePg.style.display = "none";
    atm_balanceInquiryPg.style.display = "block";
    var randomBalance = Math.random() * 10000;
    atm_balance.value = "".concat(randomBalance.toFixed(2));
});
atm_withdrawalSubmitBtn.addEventListener("click", function () {
    atm_withdrawalPg.style.display = "none";
    atm_byePg.style.display = "block";
});
atm_depositSubmitBtn.addEventListener("click", function () {
    atm_depositPg.style.display = "none";
    atm_byePg.style.display = "block";
});
atm_balanceInquirySubmitBtn.addEventListener("click", function () {
    atm_balanceInquiryPg.style.display = "none";
    atm_byePg.style.display = "block";
});

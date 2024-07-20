const atm_welcomePg = document.getElementById('welcomePg') as HTMLElement;
const atm_actionChoicePg = document.getElementById('actionChoicePg') as HTMLElement;
const atm_withdrawalPg = document.getElementById('withdrawalPg') as HTMLElement;
const atm_depositPg = document.getElementById('depositPg') as HTMLElement;
const atm_balanceInquiryPg = document.getElementById('balanceInquiryPg') as HTMLElement;
const atm_byePg = document.getElementById('byePg') as HTMLElement;
const atm_pinBtn = document.getElementById('pinBtn') as HTMLButtonElement;
const atm_withdrawalBtn = document.getElementById('withdrawalBtn') as HTMLButtonElement;
const atm_depositBtn = document.getElementById('depositBtn') as HTMLButtonElement;
const atm_balanceInquiryBtn = document.getElementById('balanceInquiryBtn') as HTMLButtonElement;
const atm_withdrawalSubmitBtn = document.getElementById('withdrawalSubmitBtn') as HTMLButtonElement;
const atm_depositSubmitBtn = document.getElementById('depositSubmitBtn') as HTMLButtonElement;
const atm_balanceInquirySubmitBtn = document.getElementById('balanceInquirySubmitBtn') as HTMLButtonElement;
const atm_balance = document.getElementById('balance') as HTMLOutputElement;

function Home(){

    atm_actionChoicePg.style.display = 'none';
    atm_withdrawalPg.style.display = 'none';
    atm_depositPg.style.display = 'none';
    atm_balanceInquiryPg.style.display = 'none';
    atm_byePg.style.display = 'none';

    atm_welcomePg.style.display = 'block';
}

Home();

atm_pinBtn.addEventListener("click", () => {
    atm_welcomePg.style.display = "none";
    atm_actionChoicePg.style.display = "block";
  });
  
  atm_withdrawalBtn.addEventListener("click", () => {
    atm_actionChoicePg.style.display = "none";
    atm_withdrawalPg.style.display = "block";
  });
  
  atm_depositBtn.addEventListener("click", () => {
    atm_actionChoicePg.style.display = "none";
    atm_depositPg.style.display = "block";
  });
  
  atm_balanceInquiryBtn.addEventListener("click", () => {
    atm_actionChoicePg.style.display = "none";
    atm_balanceInquiryPg.style.display = "block";
    let randomBalance = Math.random() * 10000;
    atm_balance.value = `${randomBalance.toFixed(2)}`;
  });
  
  atm_withdrawalSubmitBtn.addEventListener("click", () => {
    atm_withdrawalPg.style.display = "none";
    atm_byePg.style.display = "block";
  });
  
  atm_depositSubmitBtn.addEventListener("click", () => {
    atm_depositPg.style.display = "none";
    atm_byePg.style.display = "block";
  });
  
  atm_balanceInquirySubmitBtn.addEventListener("click", () => {
    atm_balanceInquiryPg.style.display = "none";
    atm_byePg.style.display = "block";
  });
  

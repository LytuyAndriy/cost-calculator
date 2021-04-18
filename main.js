//доходи
const incomeSelery= document.getElementById('income-salary'),
      incomeFreelance= document.getElementById('income-freelance'),
      incomeExtra1= document.getElementById('income-extra-1'),
      incomeExtra2= document.getElementById('income-extra-2');   
//витрати 
const costsFlat= document.getElementById('costs-flat'),
      costsHouseServices= document.getElementById('costs-house-services'),
      costsTransport= document.getElementById('costs-transport'),
      costsCcredit= document.getElementById('costs-credit');         

      //total inputs


  const totalMonthInput=document.getElementById('total-month'),
        totalDayInput=document.getElementById('total-day'),
        totalYearInput=document.getElementById('total-year');

 let totalMonth,totalDay,totalYear;
 //money box
 const moneyBoxRange = document.getElementById('money-box-range'),
 accumulationInput = document.getElementById('accumulation'),
 spend = document.getElementById('spend');
 
 let accumulation = 0;
let totalPrecent= 0;

const inputs = document.querySelectorAll('.input');
for (input of inputs){
    input.addEventListener('input',()=>{
        countingAvaibleMoney();
        calculationPrecent();
    })
}

 //перетворення в число
 const strToNum= str => str.value ? parseInt(str.value) : 0 

const countingAvaibleMoney = () => {
    const totalPerMonth= strToNum(incomeSelery) + strToNum(incomeFreelance) + strToNum(incomeExtra1) + strToNum(incomeExtra2); 
    const totalCosts= strToNum(costsFlat) + strToNum(costsHouseServices) + strToNum(costsTransport) + strToNum(costsCcredit); 
    console.log(totalCosts)
    totalMonth =totalPerMonth - totalCosts;
   totalMonthInput.value= totalMonth;

 }

 moneyBoxRange.addEventListener('input',e =>{
    //  console.log(e.target)
    const totalPrecentE1=document.getElementById('total-precents');
    totalPrecent = e.target.value;
    totalPrecentE1.innerHTML=totalPrecent; 
    calculationPrecent();

 });

const calculationPrecent = () =>{
    accumulation =((totalMonth * totalPrecent)/100).toFixed();
    accumulationInput.value=accumulation;
    
    spend.value = totalMonth- accumulation;

    totalDay = (spend.value /30).toFixed();
    totalDayInput.value=totalDay;

    totalYear= accumulation *12;
    totalYearInput.value=totalYear;
}
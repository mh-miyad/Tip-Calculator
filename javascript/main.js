const netBill = document.getElementById("net-bill");
const perPerson = document.getElementById("per-person");
const tipAmount = document.getElementById("tip-amout");
const perPersonTip = document.getElementById("total-tip-result");
const perPersonBilTotal = document.getElementById("total-bill");
const btnCalculate = document.getElementById("btn-calculate");

btnCalculate.addEventListener("click", function () {
  let perpersonNet = parseInt(perPerson.value);
  let makeIntiger = parseInt(netBill.value);
  let tipCount = parseInt(tipAmount.value) / 100;
  let bill = netBill.value * tipCount;
  let tipPerPerson = parseInt(bill) / perpersonNet;
  perPersonTip.value = tipPerPerson;
  perPersonBilTotal.value = makeIntiger + bill;
});

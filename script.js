
function calculateCharge() {
  const amount = parseFloat(document.getElementById('amount').value);
  const service = document.getElementById('service').value;
  const resultBox = document.getElementById('result');

  if (!amount || amount <= 0) {
    resultBox.innerHTML = '<p style="color: red;">Error: Please enter a valid amount.</p>';
    return;
  }

  let chargeRate, serviceName;
  switch (service) {
    case 'nagad_app':
      chargeRate = 1.4;
      serviceName = 'Nagad App';
      break;
    case 'nagad_ussd':
      chargeRate = 1.5;
      serviceName = 'Nagad USSD (*167#)';
      break;
    case 'bkash_app':
      chargeRate = 1.85;
      serviceName = 'Bkash App';
      break;
    case 'bkash_ussd':
      chargeRate = 1.9;
      serviceName = 'Bkash USSD (*247#)';
      break;
    default:
      chargeRate = 0;
  }

  const charge = (amount * chargeRate) / 100;
  const total = amount + charge;

  resultBox.innerHTML = `
    <p><strong>${serviceName}</strong> ব্যবহার করছেন।</p>
    <p>টাকার পরিমাণ: <span>${amount.toFixed(2)} BDT</span></p>
    <p>চার্জ: <span>${charge.toFixed(2)} BDT</span></p>
    <p>মোট খরচ: <span>${total.toFixed(2)} BDT</span></p>
  `;
}

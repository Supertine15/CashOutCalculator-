# CashOutCalculator-
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CashOut Calculator</title>
  <style>
    /* Body Styling */
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background: linear-gradient(135deg, #c3fdfb, #8ad88e); /* Green Gradient */
      color: #333;
      margin: 0;
      padding: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      flex-direction: column;
    }

    /* Title Styling */
    h1 {
      text-align: center;
      font-size: 2.8rem;
      text-transform: uppercase;
      letter-spacing: 1px;
      color: black; /* Title font color */
      background: linear-gradient(90deg, #ff7b00, #ff5722); /* Orange gradient */
      border: 5px solid;
      border-image-slice: 1;
      border-image-source: linear-gradient(90deg, #ff7b00, #ff5722);
      padding: 20px;
      margin-bottom: 10px;
      display: inline-block;
      border-radius: 10px;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    }

    /* Subtitle Styling */
    .subtitle {
      text-align: center;
      font-size: 1rem;
      color: black; /* Subtitle text color */
      background-color: yellow; /* Subtitle background color */
      padding: 10px;
      border-radius: 10px;
      margin-bottom: 30px;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); /* Add soft shadow */
      font-weight: bold; /* Subtitle bold */
    }

    /* Main Container */
    .container {
      width: 100%;
      max-width: 600px;
      background: white;
      padding: 30px;
      border-radius: 10px;
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
      border: 1px solid #ddd;
    }

    /* Labels and Inputs */
    label {
      font-size: 1.2rem;
      font-weight: bold;
      margin-top: 15px;
      display: block;
      color: #333;
    }

    input, select, button {
      width: 100%;
      padding: 15px;
      margin-top: 10px;
      font-size: 1rem;
      border: 1px solid #ccc;
      border-radius: 5px;
      box-sizing: border-box;
    }

    /* Input focus effect */
    input:focus, select:focus, button:focus {
      outline: none;
      border-color: #2575fc;
      box-shadow: 0 0 5px rgba(37, 117, 252, 0.5);
    }

    /* Button Styling */
    button {
      background: linear-gradient(90deg, #6a11cb, #2575fc);
      color: white;
      font-weight: bold;
      border: none;
      cursor: pointer;
      transition: background 0.3s ease;
      padding: 18px;
    }

    button:hover {
      background: linear-gradient(90deg, #2575fc, #6a11cb);
    }

    /* Result Box */
    .result {
      margin-top: 20px;
      padding: 20px;
      background: linear-gradient(135deg, #e0eafc, #cfdef3);
      color: #333;
      font-size: 1.1rem;
      border-radius: 8px;
      display: none;
    }

    .highlight {
      font-weight: bold;
      color: #2575fc;
    }

    /* Footer Styling */
    footer {
      width: 100%;
      text-align: center;
      padding: 20px;
      margin-top: 40px;
    }

    footer a {
      color: #2575fc;
      text-decoration: none;
      margin: 0 15px;
      padding: 5px 10px;
      background: transparent; /* Transparent background */
      border-radius: 5px;
      font-size: 1.1rem;
    }

    footer a:hover {
      text-decoration: underline;
      background: rgba(255, 255, 255, 0.3); /* Slight hover effect */
    }

    /* Copyright Section */
    .copyright {
      font-size: 1rem;
      color: white;
      text-align: center;
      background: linear-gradient(90deg, #333, #444);
      padding: 15px;
      border-radius: 0;
      margin-top: 20px;
      font-family: 'Arial', sans-serif;
      font-weight: bold;
    }

    .copyright a {
      color: #ff5722; /* Stylish orange */
      text-decoration: none;
      font-style: italic;
    }

    /* Responsive Design */
    @media (max-width: 768px) {
      .container {
        width: 90%;
        padding: 20px;
      }

      h1 {
        font-size: 2rem;
      }

      .subtitle {
        font-size: 0.9rem;
      }
    }

    @media (max-width: 480px) {
      h1 {
        font-size: 1.5rem;
      }

      .container {
        width: 95%;
        padding: 15px;
      }

      label, input, select, button {
        font-size: 1rem;
        padding: 12px;
      }

      .subtitle {
        font-size: 0.8rem;
      }

      .copyright {
        font-size: 0.9rem;
        padding: 10px;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>CashOut Calculator</h1>
    <div class="subtitle">Bkash and Nagad ক্যাশআউট চার্জ Calculator</div>

    <label for="amount">Enter Amount (BDT):</label>
    <input type="number" id="amount" placeholder="Enter amount in BDT">

    <label for="service">Select Service:</label>
    <select id="service">
      <option value="nagad_app">Nagad App</option>
      <option value="nagad_ussd">Nagad USSD (*167#)</option>
      <option value="bkash_app">Bkash App</option>
      <option value="bkash_ussd">Bkash USSD (*247#)</option>
    </select>

    <button onclick="calculateCharge()">Calculate</button>

    <div class="result" id="result"></div>
  </div>

  <footer>
    <a href="#about" onclick="showSection('about')">About</a>
    <a href="#contact" onclick="showSection('contact')">Contact</a>
    <a href="#disclaimer" onclick="showSection('disclaimer')">Disclaimer</a>
  </footer>

  <!-- Copyright -->
  <div class="copyright">
    Copyright &copy; <a href="#">cyberthunder360</a> 2024. All Rights Reserved.
  </div>

  <script>
    function calculateCharge() {
      const amount = parseFloat(document.getElementById('amount').value);
      const service = document.getElementById('service').value;
      const resultBox = document.getElementById('result');

      if (!amount || amount <= 0) {
        resultBox.innerHTML = '<p class="error">Error: Please enter a valid amount.</p>';
        resultBox.style.display = 'block';
        return;
      }

      let chargeRate;
      let serviceName;
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
        <p>টাকার পরিমাণ: <span class="highlight">${amount.toFixed(2)} BDT</span></p>
        <p>চার্জ: <span class="highlight">${charge.toFixed(2)} BDT</span></p>
        <p>মোট খরচ: <span class="highlight">${total.toFixed(2)} BDT</span></p>
      `;
      resultBox.style.display = 'block';
    }

    function showSection(sectionId) {
      document.querySelectorAll('footer + div').forEach(div => div.style.display = 'none');
      document.getElementById(sectionId).style.display = 'block';
    }
  </script>
</body>
</html>

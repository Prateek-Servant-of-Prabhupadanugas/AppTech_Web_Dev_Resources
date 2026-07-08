const card = document.getElementById('card');
const form = document.getElementById('payment-form');

// Input DOM nodes
const inputName = document.getElementById('input-name');
const inputNumber = document.getElementById('input-number');
const inputExpiry = document.getElementById('input-expiry');
const inputCvv = document.getElementById('input-cvv');

// Visual Viewport DOM nodes
const viewName = document.getElementById('view-name');
const viewNumber = document.getElementById('view-number');
const viewExpiry = document.getElementById('view-expiry');
const viewCvv = document.getElementById('view-cvv');

// --- REAL-TIME DATA BINDING ---
inputName.addEventListener('input', (e) => {
  const value = e.target.value.replace(/[^a-zA-Z\s]/g, '');
  e.target.value = value; // Sanitization
  viewName.textContent = value.trim() === '' ? 'CHIP CITIZEN' : value;
  validateField(inputName, value.length >= 3, 'err-name');
});

inputNumber.addEventListener('input', (e) => {
  let value = e.target.value.replace(/\s+/g, '').replace(/[^0-9]/g, '');
  // Format numbers to 0000 0000 0000 0000 layout
  let formatted = value.match(/.{1,4}/g)?.join(' ') || '';
  e.target.value = formatted;
  viewNumber.textContent = formatted === '' ? '•••• •••• •••• ••••' : formatted;
  validateField(inputNumber, value.length === 16, 'err-number');
});

inputExpiry.addEventListener('input', (e) => {
  let value = e.target.value.replace(/\s+/g, '').replace(/[^0-9]/g, '');
  if (value.length > 2) {
    value = value.slice(0, 2) + '/' + value.slice(2, 4);
  }

let rice = 0;
let ricePerClick = 1;
let riceFarmCost = 10;
let riceMillCost = 50;
let riceBowlCost = 100;

const riceCounter = document.getElementById('rice-counter');
const riceButton = document.getElementById('rice-button');
const riceFarmButton = document.getElementById('rice-farm');
const riceMillButton = document.getElementById('rice-mill');
const riceBowlButton = document.getElementById('rice-bowl');

riceButton.addEventListener('click', () => {
  rice += ricePerClick;
  updateRice();
});

riceFarmButton.addEventListener('click', () => {
  if (rice >= riceFarmCost) {
    rice -= riceFarmCost;
    ricePerClick += 1;
    riceFarmCost *= 2;
    riceFarmButton.textContent = `Rice Farm (Cost: ${riceFarmCost})`;
    updateRice();
  }
});

riceMillButton.addEventListener('click', () => {
  if (

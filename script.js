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
  if (rice >= riceMillCost) {
    rice -= riceMillCost;
    ricePerClick += 5;
    riceMillCost *= 2;
    riceMillButton.textContent = `Rice Mill (Cost: ${riceMillCost})`;
    updateRice();
  }
});

riceBowlButton.addEventListener('click', () => {
  if (rice >= riceBowlCost) {
    rice -= riceBowlCost;
    ricePerClick += 10;
    riceBowlCost *= 2;
    riceBowlButton.textContent = `Rice Bowl (Cost: ${riceBowlCost})`;
    updateRice();
  }
});

function updateRice() {
  riceCounter.textContent = `${rice} Rice`;
  riceFarmButton.textContent = `Rice Farm (Cost: ${riceFarmCost})`;
  riceMillButton.textContent = `Rice Mill (Cost: ${riceMillCost})`;
  riceBowlButton.textContent = `Rice Bowl (Cost: ${riceBowlCost})`;
}

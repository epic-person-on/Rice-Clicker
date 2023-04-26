let rice = 0;
let ricePerClick = 1;
let riceFarmCost = 10;
let riceFarmCount = 0;
let riceMillCost = 50;
let riceMillCount = 0;
let riceBowlCost = 100;
let riceBowlCount = 0;

const riceCounter = document.getElementById('rice-counter');
const riceButton = document.getElementById('rice-button');
const riceFarmButton = document.getElementById('rice-farm');
const riceMillButton = document.getElementById('rice-mill');
const riceBowlButton = document.getElementById('rice-bowl');
const riceFarmCountElem = document.getElementById('rice-farm-count');
const riceMillCountElem = document.getElementById('rice-mill-count');
const riceBowlCountElem = document.getElementById('rice-bowl-count');

riceButton.addEventListener('click', () => {
  rice += ricePerClick;
  updateRice();
});

riceFarmButton.addEventListener('click', () => {
  if (rice >= riceFarmCost) {
    rice -= riceFarmCost;
    ricePerClick += 0.1;
    riceFarmCost *= 1.25;
    riceFarmCount++;
    riceFarmButton.textContent = `Rice Farm (Cost: ${riceFarmCost})`;
    updateRice();
  }
});

riceMillButton.addEventListener('click', () => {
  if (rice >= riceMillCost) {
    rice -= riceMillCost;
    ricePerClick += 1;
    riceMillCost *= 1.5;
    riceMillCount++;
    riceMillButton.textContent = `Rice Mill (Cost: ${riceMillCost})`;
    updateRice();
  }
});

riceBowlButton.addEventListener('click', () => {
  if (rice >= riceBowlCost) {
    rice -= riceBowlCost;
    ricePerClick += 5;
    riceBowlCost *= 2;
    riceBowlCount++;
    riceBowlButton.textContent = `Rice Bowl (Cost: ${riceBowlCost})`;
    updateRice();
  }
});

function updateUpgradeCounts() {
  riceFarmCountElem.textContent = riceFarmCount;
  riceMillCountElem.textContent = riceMillCount;
  riceBowlCountElem.textContent = riceBowlCount;
}

function updateRice() {
  riceCounter.textContent = `${rice} Rice`;
  riceFarmButton.textContent = `Rice Farm (Cost: ${riceFarmCost})`;
  riceMillButton.textContent = `Rice Mill (Cost: ${riceMillCost})`;
  riceBowlButton.textContent = `Rice Bowl (Cost: ${riceBowlCost})`;
  updateUpgradeCounts();
}

setInterval(() => {
  rice += riceFarmCount;
  updateRice();
}, 1000);

updateRice();


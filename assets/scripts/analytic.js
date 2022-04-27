const interval = setInterval(() => {
    console.log('Text that run every three seconds.');
}, 3000);

document.getElementById('stop-analytic-btn').addEventListener('click', () => {
    clearInterval(interval);
});
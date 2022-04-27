const interval = setInterval(() => {
    console.log('Text that run every two seconds.');
}, 2000);

document.getElementById('stop-analytic-btn').addEventListener('click', () => {
    clearInterval(interval);
});
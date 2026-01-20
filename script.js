const API_URL = 'https://carambar-test-back-4.onrender.com';

document.getElementById('button').addEventListener('click', async () => {
    const res = await fetch(API_URL);
    const data = await res.json();

    document.getElementById('question').textContent = data.question;
    document.getElementById('answer').textContent = data.answer;
})
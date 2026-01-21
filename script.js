const API_URL = 'https://carambar-test-back-4.onrender.com/api/v1/jokes/random';

document.getElementById('button').addEventListener('click', async () => {
    try{
        const res = await fetch(API_URL);

        const text = await res.text();
        console.log('reponse brute:', text)

        const data = JSON.parse(text);

        document.getElementById('question').textContent = data.question;
        document.getElementById('answer').textContent = data.answer;
    } catch (err){
        console.error('fetch error:', err);
    }
});
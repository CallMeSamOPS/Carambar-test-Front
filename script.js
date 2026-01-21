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

const ADD_API_URL = 'https://carambar-test-back-4.onrender.com/api/v1/jokes';

document.getElementById('add-btn').addEventListener('click', async () => {

    const question = document.getElementById('new-question').value;
    const answer = document.getElementById('new-answer').value;
    const message = document.getElementById('message');

    if(!question || !answer){
        message.textContent = 'form need to be completed';
        return;
    }

    try {
        const res = await fetch(ADD_API_URL, {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({ question, answer })
        });
        const data = await res.json();

        if (!res.ok){
            message.textContent = 'Add Error';
            return;
        }
        
        message.textContent = 'Joke added';

        //rest champs
        document.getElementById('new-question').value ='';
        document.getElementById('new-answer').value ='';

        } catch (err){
            message.textContent = 'network error';
            console.error(err);
        }
    });
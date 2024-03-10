let responseOutput = '';

function todoDisplay(){
document.getElementById("todo-list").innerText = responseOutput.response;
}

async function handleSubmit(event) {
    event.preventDefault();
    const submitButton =  document.querySelector('.submit-button');
    const spinner = document.querySelector('.spinner');
    submitButton.style.display = 'none';
    spinner.style.display = 'block';

    try {
        const input = document.querySelector('.user-input').value;
        //post request aanmaken en data naar de server versturen
        const response = await fetch('http://localhost:3000/input', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ query: input })
        });
        responseOutput = await response.json();
        todoDisplay();
        console.log(responseOutput)
    } catch (error) {
        console.error("error fetching response:", error);
    } finally{
        submitButton.style.display = 'block';
        spinner.style.display = 'none';
    }
    document.querySelector('.user-input').value = '';
}
 
document.querySelector('.input-form').addEventListener('submit', handleSubmit);
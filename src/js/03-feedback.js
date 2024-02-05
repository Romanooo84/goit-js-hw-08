import throttle from 'lodash.throttle';
//inicjacja zmiennej w formacie JSONasd
let feedbackFormStateJSON

//wyszukiwanie pół form
let dataInput = document.querySelector(".feedback-form");

//pobieranie danych z lokalstorage
let feedbackFormState = localStorage.getItem('feedback-form-state')

//sprawdzanie czy są wpisane dane do local sotrage
if (feedbackFormState == undefined) {
    feedbackFormState = {
        email: "",
        message: "",
    }
} else {
    //ponieranie danych z lockalsorage i prasowanie
    feedbackFormState = JSON.parse(feedbackFormState);
    //wstawianie danych do pół input i textarea
    let email = document.querySelector('input');
    let message = document.querySelector('textarea');
    email.value = feedbackFormState.email;
    message.value = feedbackFormState.message.trim();
}


// funkcja zapisywania danych do local storage po pojawieniu sie zdarzenia
function formInput(event) {
    //zapisanie wartosci zdarzenia
    const dataValue = event.target.value
    //zapisanie elementu html i ustawienie małych liter
    const dataName = event.target.nodeName.toLowerCase()
    //sprawdzenie rodzaju elementu HTML i przypisanie do wartosci zdarzenia do odpowiedniego klucza
    if (dataName === "input") {
        feedbackFormState.email = dataValue.trim();
        //przetwarzanie na JSON
        feedbackFormStateJSON = JSON.stringify(feedbackFormState)
        //zapisywanie w localstorage
        localStorage.setItem('feedback-form-state', feedbackFormStateJSON)
    }
    else if (dataName === "textarea") {
        feedbackFormState.message = dataValue.trim();
        feedbackFormStateJSON = JSON.stringify(feedbackFormState)
        localStorage.setItem('feedback-form-state', feedbackFormStateJSON)
    }
    else {
        localStorage.removeItem('feedback-form-state')
    }  
}

//funkcja wyswietlania wprowadzonych danych w konsoli
function focus() {
    console.log(feedbackFormState);
}

// ustawienie opóźnienia dla wykonywanie funkcji getLocalStorageData
let delay = throttle(formInput, 500);

//nasłuchiwanie wpisywania i kliknięć
dataInput.addEventListener("input", delay)
dataInput.addEventListener('submit', delay)
dataInput.addEventListener('change', focus)


import throttle from 'lodash.throttle';

//wyszukiwanie pól email i text
let emailtInput = document.querySelector("input[type='email']");
let messageInput = document.querySelector("textarea[name='message']");
const submitButton= document.querySelector("button[type='submit']");
 
//pobieranie danych z local storage dla email i message
let dataEmail = localStorage.getItem("email")
let dataMessage = localStorage.getItem("message");

//wstawianie w pole email i message wartości z local storage
emailtInput.value = dataEmail
messageInput.value = dataMessage;

//funkcja ustawiająca wartości email i message w lockal storage
function getLocalStorageData() {
    const valueEmail = emailtInput.value
    const valueMessage = messageInput.value
        
    localStorage.setItem("email", valueEmail)
    localStorage.setItem("message", valueMessage)
    
}

// ustawienie opóźnienia dla wykonywanie funkcji getLocalStorageData
let delay= throttle(getLocalStorageData, 500);

// nasłuchowanie pól email i message i uruchomienie funkcji zapisywanie pół do local storage
emailtInput.addEventListener('input', delay);
messageInput.addEventListener('input', delay);

// czyszczenie pola email i message w local storage po wcisnieciu submit
submitButton.addEventListener("click", clear => {
    localStorage.removeItem("email");
    localStorage.removeItem("message");
})

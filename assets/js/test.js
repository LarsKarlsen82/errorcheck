// Funktion til at vise en fejlmeddelelse som en alertboks
function ErrorDisplay(type, message) {
    switch (type) {
        case 'alert':
            alert(message);
            break;
        case 'console-error':
            console.error(message);
            break;
        case 'console-warning':
            console.warn(message);
            break;
        default:
            console.error('Ukendt fejltypen.');
    }
}

// Funktion til at vise brugerfeedback i en DOM-element med en given type
function UserFeedback(domElementId, message, type) {
    const element = document.getElementById(domElementId);
    
    if (!element) {
        console.error('Elementet med id ' + domElementId + ' blev ikke fundet.');
        return;
    }

    switch (type) {
        case 'fejl':
            element.innerHTML = '<div class="fejl">' + message + '</div>';
            break;
        case 'advarsel':
            element.innerHTML = '<div class="advarsel">' + message + '</div>';
            break;
        case 'succes':
            element.innerHTML = '<div class="succes">' + message + '</div>';
            break;
        default:
            console.error('Ukendt typen.');
    }
}

// Eksempel på brug af funktioner
ErrorDisplay('alert', 'Dette er en fejlmeddelelse i en alertboks.');
ErrorDisplay('console-error', 'Dette er en fejlmeddelelse i konsollen.');
ErrorDisplay('console-warning', 'Dette er en advarsel i konsollen.');

UserFeedback('feedback-container', 'Dette er en succesmeddelelse.', 'succes');
UserFeedback('feedback-container', 'Dette er en fejlmeddelelse.', 'fejl');
UserFeedback('feedback-container', 'Dette er en advarsel.', 'advarsel');
document.addEventListener("DOMContentLoaded", function () {
    // Vi venter på, at hele HTML-siden er blevet indlæst, før vi fortsætter.

    const form = document.getElementById("contactForm");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");

    // Her får vi fat i forskellige elementer på siden ved hjælp af deres id'er.

    form.addEventListener("submit", function (e) {
        // Vi lytter efter, at formularen bliver indsendt.

        e.preventDefault();
        // Vi forhindrer formularen i at blive indsendt på normal vis, da vi vil kontrollere den først.

        // Nulstil fejlmeddelelser
        clearErrors();
        // Vi fjerner eventuelle tidligere fejlmeddelelser.

        let hasErrors = false;
        // Vi opretter en variabel, der fortæller os, om der er fejl i formularen. Indtil videre er der ingen fejl.

        if (nameInput.value.trim() === "") {
            // Hvis navnefeltet er tomt (ingen tekst er indtastet):
            displayError("nameError", "Navn er påkrævet.");
            // Vi viser en fejlmeddelelse for navnefeltet og markerer, at der er fejl.
            hasErrors = true;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        // Dette er et mønster for at kontrollere, om e-mailadressen har en korrekt struktur.

        if (!emailPattern.test(emailInput.value.trim())) {
            // Hvis e-mailadressen ikke opfylder det forventede mønster (er ugyldig):
            displayError("emailError", "Ugyldig e-mailadresse.");
            // Vi viser en fejlmeddelelse for e-mailfeltet og markerer, at der er fejl.
            hasErrors = true;
        }

        // Vis advarsel for beskedfeltet, men kravet forbliver fjernet
        if (messageInput.value.trim() === "") {
            displayWarning("messageError", "Advarsel: Besked er tomt.");
            // Vi viser en advarsel for beskedfeltet, men kravet forbliver fjernet.
        }

        if (!hasErrors) {
            const successMessage = document.getElementById("successMessage");
            successMessage.textContent = "Formularen blev sendt med succes!";
            successMessage.style.display = "block";
        }
    });

    function displayError(elementId, message) {
        const errorElement = document.getElementById(elementId);
        errorElement.textContent = message;
        errorElement.style.display = "block";
        // Denne funktion viser en fejlmeddelelse for det angivne HTML-element ved at ændre dets indhold og synlighed.
    }

    function displayWarning(elementId, message) {
        const warningElement = document.getElementById(elementId);
        warningElement.textContent = message;
        warningElement.style.display = "block";
    }

    function clearErrors() {
        const errorElements = document.querySelectorAll(".error");
        errorElements.forEach(function (element) {
            element.textContent = "";
            element.style.display = "none";
        });
        // Denne funktion fjerner alle tidligere fejlmeddelelser ved at skjule dem og fjerne deres indhold.
    }
});

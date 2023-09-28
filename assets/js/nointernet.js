window.addEventListener('load', function () {
    if (!navigator.onLine) {
        // Hvis der ikke er nogen internetforbindelse, vis en advarsel
        alert("Du er i øjeblikket offline. Tjek venligst din internetforbindelse.");
    }
});

window.addEventListener('online', function () {
    // Når forbindelsen genoprettes, vis en bekræftelse
    alert("Du er nu online igen!");
});

window.addEventListener('offline', function () {
    // Når forbindelsen mistes, vis en besked
    alert("Du er i øjeblikket offline. Tjek venligst din internetforbindelse.");
});
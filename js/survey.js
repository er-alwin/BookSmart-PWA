function saveSurvey() {

    const userPreferences = {
        budget: document.getElementById("budget").value,
        transport: document.getElementById("transport").value,
        purpose: document.getElementById("purpose").value,
        hotel: document.getElementById("hotel").value,
        frequency: document.getElementById("frequency").value
    };

    // Save to Local Storage
    localStorage.setItem("userPreferences", JSON.stringify(userPreferences));

    // Redirect to Dashboard
    window.location.href = "dashboard.html";
}

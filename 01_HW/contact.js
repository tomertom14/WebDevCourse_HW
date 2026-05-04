document.addEventListener("DOMContentLoaded", function() {
    const sendButton = document.getElementById("send-btn");
    
    if (sendButton) {
        sendButton.addEventListener("click", function() {
            alert("Message sent successfully!");
        });
    }
});
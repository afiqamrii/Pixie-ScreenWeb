document.addEventListener("DOMContentLoaded", function () {
// Function to generate QR code and handle redirection
function generateQRCode() {
    // URL of the page you want to redirect to
    var redirectURL = "homepage.html";
    
    // Get the QR code container element
    var qrcodeContainer = document.getElementById("qrcode");
    
    // Create QRCode instance
    var qrcode = new QRCode(qrcodeContainer, {
        text: redirectURL,
        width: 150,
        height: 150,
    });
    
    // Handle click event on the QR code to redirect
    qrcodeContainer.addEventListener("click", function () {
        window.location.href = redirectURL;
    });
}
    
// Call the function to generate QR code and handle redirection
generateQRCode();
});

window.onload = function() {
    var dynamicButton = document.getElementById('contact');
    var urlParams = new URLSearchParams(window.location.search);
    var url = urlParams.get('contactemail');

    if (url) {
        dynamicButton.href = url;
    } else {
        dynamicButton.href = 'https://www.example.com';
    }
};

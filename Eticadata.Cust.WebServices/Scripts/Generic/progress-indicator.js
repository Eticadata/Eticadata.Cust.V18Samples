
// Global variables, to be accessed from multiple functions
var progressIndicatorImages;
var index = 0;
var progressIndicatorTimer;
var progressIndicatorIdentity;

loadProgressIndicatorImages('small');

function loadProgressIndicatorImages(size) {
    progressIndicatorImages = new Array(12);
    for (var i = 0; i < 12; i++) {
        progressIndicatorImages[i] = new Image();
        progressIndicatorImages[i].src = "../Imagens/Progress/indicator_" + size + "_" + (i) + ".png";
    }
}

function startProgressIndicator(size, id) {
    if (!id) {
        id = "progress_indicator"; 
    }
    progressIndicatorIdentity = id;
    if (!size) {
        size = "small"; 
    }
    loadProgressIndicatorImages(size);
    progressIndicatorTimer = setInterval('animateProgressIndicator()', 100);
}

function stopProgressIndicator() {
    clearInterval(progressIndicatorTimer);
    progressIndicatorTimer = null;
    if (progressIndicatorIdentity != null) {
        document.getElementById(progressIndicatorIdentity).style.display = "none";
    }
    index = 0;
    progressIndicatorIdentity = null;
}

function animateProgressIndicator() {

    if (progressIndicatorIdentity != null) {
        document.getElementById(progressIndicatorIdentity).src = progressIndicatorImages[index].src;
        document.getElementById(progressIndicatorIdentity).style.display = "";
        if (index == 11) {
            index = 0
        }
        else {
            index = index + 1
        }
    }
}
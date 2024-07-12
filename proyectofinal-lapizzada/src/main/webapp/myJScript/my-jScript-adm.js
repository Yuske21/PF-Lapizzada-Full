

/* Selection option select */
document.getElementById('select-operation').addEventListener('change', function() {
    const url = this.value;
    if (url) {
        window.location.href = url;
    }
});
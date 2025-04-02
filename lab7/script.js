window.addEventListener("keyup", function(e) {
    console.log(e.key);
    if (e.key == container.textContent[0]) {
        var str = container.textContent;
        container.textContent = str.substring(1, str.length-1);
    }
    add_new_chars();
});

function add_new_chars() {
    const letters = "abcdefghijklmnopqrstuvwxyz";
    for (let i = 0; i <= Math.floor(Math.random()*3); i++) {
        container.textContent += letters.charAt(Math.floor(Math.random() * letters.length));
    }
};
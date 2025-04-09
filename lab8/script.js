var count = 0;
window.addEventListener("keyup", function(e) {
    console.log(e.key);
    if (e.key == container.textContent[0]) {
        var str = container.textContent;
        container.textContent = str.substring(1, str.length-1);
        count = 0;
    }
    else count++;
    add_new_chars();
    if (count == 3) count = 0;
});

function add_new_chars() {
    const letters = "abcdefghijklmnopqrstuvwxyz";
    n = (count == 3) ? 6 : Math.floor(Math.random()*3);
    for (let i = 0; i <= n; i++) container.textContent += letters.charAt(Math.floor(Math.random() * letters.length));
};
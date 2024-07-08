let chars = "abcdef0123456789".split('');

function fn(){
    let newArr = [];
    for(let i = 0; i < 6; i++){
        let rn = Math.floor(Math.random() * chars.length);
        newArr.push(chars[rn]);
    }
    return `#${newArr.join("")}`;
}

setInterval(function(){
    document.body.style.backgroundColor = fn();
}, 2000);
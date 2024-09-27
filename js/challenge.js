const counter = document.getElementById('counter');
const minus = document.getElementById('minus');
const plus = document.getElementById('plus');
const heart = document.getElementById('heart');
const likes = document.querySelector('.likes');
const input = document.getElementById('comment-input');
const submit = document.getElementById('submit');

timer = function() {
    return setInterval(function(){
        var a=counter,
        b=parseInt(a.innerText);
        a.innerText=b+1},
        1000
    )
}

interval = timer()

minus.addEventListener('click', event => {
    event.preventDefault();
    const currentValue = Number(counter.innerText);
    document.getElementById('counter').innerText = currentValue - 1;
})

plus.addEventListener('click', event => {
    event.preventDefault();
    const currentValue = Number(counter.innerText);
    counter.innerText = currentValue + 1;
})

heart.addEventListener("click", function() {
    var a = document.getElementById("counter")
      , b = parseInt(a.innerText)
      , c = document.querySelector(".likes");
    if (Array.from(document.querySelector('ul').childNodes).map(like => parseInt(like.id)).includes(parseInt(b))) {
        d = document.getElementById(a.innerText);
        var e = parseInt(d.children[0].innerText);
        d.innerHTML = b + " has been liked <span>" + (e + 1) + "</span> times"
    } else
        (d = document.createElement("li")).setAttribute("id", b),
        d.innerHTML = b + " has been liked <span>1</span> time",
        c.appendChild(d)
}),


pause.addEventListener('click', z => {
    z.preventDefault();
    if(z.target.innerText === 'pause') {
    z.target.innerText = 'resume';
    clearInterval(interval);
    heart.disabled = true;
    minus.disabled = true;
    plus.disabled = true;
    submit.disabled = true;
    } else if (z.target.innerText === 'resume') {
        interval = timer()
        z.target.innerText = 'pause';
        heart.disabled = false;
        minus.disabled = false;
        plus.disabled = false;
        submit.disabled = false;
    }
})

document.querySelector('form').addEventListener('submit', g => {
    g.preventDefault();
    const p = document.createElement('p');
    p.innerText = g.target.querySelector('#comment-input').value;
    document.getElementById('list').appendChild(p);
});
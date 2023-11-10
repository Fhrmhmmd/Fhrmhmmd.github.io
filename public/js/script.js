//Nav
const nav = document.querySelector('#nav');
const navMenu = document.querySelector('#nav-menu');


nav.addEventListener('click', function(){
 nav.classList.toggle('nav-active');
 navMenu.classList.toggle('hidden');

});

window.onscroll = function(){
    const header = document.querySelector('header');
    const navfix = header.offsetTop;

    if(window.pageYOffset > navfix){
        header.classList.add('navbar-fix');

    }else {
        header.classList.remove('navbar-fix');
    }
}

window.addEventListener('click' , function (e) {
    if(e.target != nav && e.target != navMenu){
        nav.classList.remove('nav-active');
        navMenu.classList.add('hidden');
    }
});


//Email Send
function sendEmail(){
    var params = {
        from_name : document.getElementById("name").value,
        email_id : document.getElementById("email_id").value,
        message : document.getElementById("message").value

    }

    emailjs.send("service_pjwkkbn", "template_sax8z1g", params).then(function(res){
        alert("Pesan Terkirim!" + res.status);
    })
}

//Typing Animation
const div = document.querySelector('#text');
       const text = "Mohammad Fakhri";

       function textTypingEffect(element, text, i = 0){

        if(i === 0){
            element.textContent = "";
        }
            element.textContent += text[i];

        if(i === text.length -1){
            return;
        }

        setTimeout(() => textTypingEffect(element, text, i + 1), 200);
            
       }

       textTypingEffect(div, text );



const darkSwitch = document.querySelector('#Dark-switch');
const html = document.querySelector('html');

darkSwitch.addEventListener('click', function(){
    if(darkSwitch.checked){
        html.classList.add('dark');
        localStorage.theme = 'dark';
    }else {
        html.classList.remove('dark');
        localStorage.theme = 'light';
    }
});

if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    darkSwitch.checked = true;
  } else {
    darkSwitch.checked = false;
  }

window.SpeechRecognition = window.SpeechRecognition  || window.webkitSpeechRecognition;

let recognation = new SpeechRecognition();

recognation.interimResults = true ;

let template = document.getElementById('template')
let p = document.createElement('p');
template.appendChild(p)



recognation.addEventListener('result',(e)=> {

    let transcript = [...e.results].map(result => result[0])
     .map(result => result.transcript).join("");

     if (e.results[0].isFinal){
         p = document.createElement('p')
         template = document.getElementById('template');
         template.appendChild(p).innerHTML = transcript;
     }
})
recognation.addEventListener('end',recognation.start);
recognation.start();
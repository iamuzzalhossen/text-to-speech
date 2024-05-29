let speech = new SpeechSynthesisUtterance();
let voices = [];
let selectVoice = document.querySelector('select');

window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];

    selectVoice.innerHTML = '';

    voices.forEach( (voice, i) => {
        const option = new Option(voice.name, i);
        selectVoice.add(option);
    });
};

selectVoice.addEventListener('change', () => {
    speech.voice = voices[selectVoice.value];
});

document.querySelector('button').addEventListener('click', () => {
    speech.text = document.querySelector('textarea').value;
    window.speechSynthesis.speak(speech);
});
const displayResult = document.querySelector("#result");
const btnGetAPrediction = document.querySelector("button");

const options = [
    'You will find your love sooner than you think.', 
    'You will win a lottery.',
    'You will lose your phone. Check your right pocket.',
    'You will fall asleep on a couch.',
    'You will be taking a ring to Mordor.',
    'You will get your letter from Harvard.',
    'Elon Musk will buy TikTok.',
    'Your find a very fortunate opportunity. Be alert, find it and take it.'
];

btnGetAPrediction.addEventListener('click', () => {
    const randomFortuneIndex = Math.floor(Math.random () *options.length);    
    const prediction = options[randomFortuneIndex];
    displayResult.innerHTML = prediction;
});

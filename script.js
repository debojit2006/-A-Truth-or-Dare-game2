// Get the elements from the HTML
const card = document.getElementById('challenge-card');
const cardType = document.getElementById('card-type');
const cardText = document.getElementById('card-text');
const cardFront = document.querySelector('.card-front');
const playAgainBtn = document.getElementById('play-again-btn');
const body = document.body;

// --- Your New List of Truths and Dares ---
const truths = [
    "What’s the most childish thing you still do?",
    "Have you ever stalked someone on social media?",
    "Who was your first crush?",
    "What’s the most embarrassing thing you’ve said to someone you liked?",
    "Have you ever lied to your best friend?",
    "What’s the weirdest thing you’ve searched on Google?",
    "Who in this room do you think is most attractive?",
    "What’s your biggest insecurity?",
    "Have you ever cheated in a game or test?",
    "Have you ever had a crush on a teacher?",
    "What’s one secret you’ve never told anyone?",
    "What’s your guilty pleasure song?",
    "What was your most awkward date?",
    "If your life were a movie, what would it be called?",
    "What is the most ridiculous lie you’ve told?",
    "Have you ever peed your pants after childhood?",
    "What’s something illegal you’ve done and not been caught? 🔥",
    "Do you still sleep with a stuffed toy or blanket?",
    "Who’s the last person you stalked on Instagram?",
    "What’s the most desperate thing you’ve done for attention?",
    "Who would you kiss in this room (if you had to)?",
    "What's the dirtiest thought you've had today? 🔥",
    "What’s your most embarrassing nickname?",
    "Have you ever been caught doing something you shouldn’t have?",
    "If you had to date one of your friends, who would it be?",
    "What’s something you hate about your personality?",
    "Have you ever sent a message and regretted it immediately?",
    "What’s the longest you’ve gone without bathing? 🔥",
    "What’s the most embarrassing thing in your room right now?",
    "What’s something that turns you on but you’re embarrassed to admit? 🔥"
];

const dares = [
    "Text your crush “I dreamt about you last night 😳”",
    "Record yourself singing a cringy song and post it on your story.",
    "Lick your elbow (or try).",
    "Say two honest compliments to someone you’ve fought with.",
    "Wear socks on your hands for the next 3 rounds.",
    "Speak in a baby voice for the next 10 minutes.",
    "Post an old embarrassing selfie on your status. 🔥",
    "Let someone go through your photo gallery for 30 seconds.",
    "Do an impression of your crush.",
    "Text your ex “I miss you” and screenshot the reply. 🔥",
    "Eat a spoonful of ketchup (or anything weird from the fridge).",
    "Tell the group your biggest fear.",
    "Act like you’re proposing to someone random in the room.",
    "Call a random contact and confess a fake crush.",
    "Reveal your lockscreen and explain it.",
    "Let the person beside you write something on your forehead with a pen.",
    "Post “Feeling emotional today 🥺” on your status and leave it for 1 hour.",
    "Say “I love you” to the first person in your contacts.",
    "Do 20 squats while saying your biggest regret.",
    "Let someone read your last 5 WhatsApp chats (no deleting!) 🔥",
    "Draw a heart around your belly button and show the group.",
    "Try to twerk for 10 seconds.",
    "Say the alphabet backwards in a seductive voice.",
    "Send a voice note to your crush singing a romantic song. 🔥",
    "Put ice in your underwear and hold for 10 seconds.",
    "Show the most embarrassing photo you have saved.",
    "Read aloud your last 5 search results.",
    "Let someone write a fake love post for you and post it on Facebook. 🔥",
    "Smell the feet of the person next to you and rate it honestly. 🔥",
    "Let someone dare you again – double or nothing."
];

// This function checks for the fire emoji and builds our final list
const buildChallenges = () => {
    const challenges = [];
    const processList = (list, type) => {
        list.forEach(item => {
            const isIntense = item.includes('🔥');
            const text = item.replace(' 🔥', '').trim();
            challenges.push({ type, text, isIntense });
        });
    };
    processList(truths, 'Truth');
    processList(dares, 'Dare');
    return challenges;
};

const challenges = buildChallenges();

// Function to handle clicking the card
card.addEventListener('click', () => {
    if (card.classList.contains('is-flipped')) return;

    const randomIndex = Math.floor(Math.random() * challenges.length);
    const randomChallenge = challenges[randomIndex];

    cardType.textContent = randomChallenge.type;
    cardText.textContent = randomChallenge.text;

    cardFront.classList.remove('truth', 'dare');
    if (randomChallenge.type === 'Truth') {
        cardFront.classList.add('truth');
    } else {
        cardFront.classList.add('dare');
    }

    // --- DANGEROUS MODE LOGIC ---
    if (randomChallenge.isIntense) {
        body.classList.add('dangerous-mode');
        card.classList.add('is-intense');
    } else {
        // Make sure to remove it if the challenge is not intense
        body.classList.remove('dangerous-mode');
        card.classList.remove('is-intense');
    }

    card.classList.add('is-flipped');
});

// Function to reset the card AND the dangerous mode
playAgainBtn.addEventListener('click', () => {
    card.classList.remove('is-flipped', 'is-intense');
    body.classList.remove('dangerous-mode');
});

// Get the elements from the HTML
const card = document.getElementById('challenge-card');
const cardType = document.getElementById('card-type');
const cardText = document.getElementById('card-text');
const cardFront = document.querySelector('.card-front');
const playAgainBtn = document.getElementById('play-again-btn');
const body = document.body;

// --- Your EXPANDED List of Truths and Dares (120 total) ---
const truths = [
    // Original 30
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
    "What’s something that turns you on but you’re embarrassed to admit? 🔥",
    // New 30
    "Have you ever pretended to be someone else online?",
    "What’s your most embarrassing moment in front of a crush?",
    "Have you ever sent a flirty message to the wrong person?",
    "Who is someone you pretend to like but actually don’t?",
    "What’s the most disgusting habit you have?",
    "If you could erase one past memory, what would it be?",
    "What’s the weirdest rumor you’ve heard about yourself?",
    "Do you secretly stalk someone regularly? 🔥",
    "Have you ever eavesdropped on someone’s private conversation?",
    "What’s a kink or fantasy you’ve never told anyone? 🔥",
    "What’s the weirdest thing you’ve done alone in your room?",
    "Have you ever had a crush on someone way older?",
    "What’s something you’ve done that would shock your parents?",
    "What’s your most used emoji and why?",
    "What’s the cringiest thing in your search history?",
    "Who’s one person you wish you never met?",
    "When was the last time you cried and why?",
    "Have you ever liked two people at once?",
    "What’s the dumbest thing you’ve said while nervous?",
    "What’s one lie you’ve told that you still feel guilty about?",
    "Have you ever had a romantic dream about someone unexpected? 🔥",
    "What’s the worst gift you’ve ever received?",
    "Have you ever been jealous of a close friend?",
    "What’s the dirtiest text you’ve sent someone?",
    "What’s something you did just to impress someone?",
    "Do you still look up your ex on social media?",
    "What’s one thing that always makes you blush?",
    "Do you ever imagine kissing someone specific when you're alone?",
    "Who do you think about before falling asleep most nights? 🔥",
    "What’s the one secret that could ruin your reputation if exposed?"
];

const dares = [
    // Original 30
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
    "Let someone dare you again – double or nothing.",
    // New 30
    "Let someone write a dirty sentence on your arm with a pen. 🔥",
    "Post “I’m taken 😘” on your story and don’t reply to anyone who asks.",
    "Call a random contact and ask, “Do you believe in love at first sight?”",
    "Do a runway walk with music and dramatic poses.",
    "Open your messages and read out the last romantic chat.",
    "Let someone go through your Instagram DMs for 30 seconds. 🔥",
    "Change your name on social media to something stupid for 1 hour.",
    "Take a selfie in the weirdest pose and send it to your crush. 🔥",
    "Eat something without using your hands or utensils.",
    "Speak in your sexiest voice for 2 full minutes straight.",
    "Recreate a romantic movie scene with someone here.",
    "Send your crush a message saying “I had a dream about you last night 👀”",
    "Stand up and tell the group your most embarrassing secret.",
    "Scroll through your gallery and show the group the 11th photo. 🔥",
    "Pretend to flirt with someone here like you’re in a cheesy romance drama.",
    "Put your phone on speaker and call your crush — ask them to go out.",
    "Use a pickup line on someone in the room.",
    "Let someone write something on your stomach and take a picture. 🔥",
    "Make a fake confession post about being in love with a friend.",
    "Show your typing suggestions on keyboard without deleting anything.",
    "Say out loud your browser history from today.",
    "Let someone else write and send a random flirty DM from your account. 🔥",
    "Eat a mix of ketchup, salt, milk, and biscuit in one bite.",
    "Act out how you flirt with someone you really like.",
    "Share your weirdest dream in detail.",
    "Try to seduce a bottle like it's a person.",
    "Wear your shirt backward or inside out for the next 3 rounds.",
    "Do a twerking attempt for 10 seconds in front of everyone. 🔥",
    "Hug a pillow and pretend it’s your crush — say 3 things to it.",
    "Let someone text anything (not cruel or harmful) from your phone and keep it posted for 10 minutes. 🔥"
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

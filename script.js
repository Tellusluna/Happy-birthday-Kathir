const messages = [
    "You're more than a friend; you're family to me.",
    "Thank you for always being there, no matter what.",
    "Life is better with you by my side.",
    "Here's to many more adventures together!",
    "Your kindness and generosity inspire me every day.",
    "Cheers to our unforgettable memories!",
    "You bring so much joy into my life.",
    "I am grateful for your unwavering support.",
    "You're the person I can always count on.",
    "Let's continue to laugh together until our stomachs hurt.",
    "You make even the ordinary days extraordinary.",
    "I appreciate your honesty and candor.",
    "Thank you for accepting me just as I am.",
    "You're my rock, always steady and reliable.",
    "I cherish the bond we share; it's truly special.",
    "You light up any room you walk into.",
    "I admire your strength and resilience.",
    "Here's to our inside jokes that never get old.",
    "You make my world a brighter place.",
    "Your friendship is a gift I treasure.",
    "Thank you for being my confidant.",
    "I am so lucky to have you in my life.",
    "You understand me like no one else does.",
    "Let's grow old together and reminisce about our crazy adventures.",
    "Your friendship has made me a better person.",
    "Here's to many more late-night conversations.",
    "You're the peanut butter to my jelly.",
    "I am grateful for our deep conversations and shared dreams.",
    "Thank you for believing in me when I doubted myself.",
    "You've taught me what true friendship means.",
    "I can't imagine my life without you in it.",
    "Your laughter is infectious and brightens my day.",
    "You've seen me at my worst and still love me unconditionally.",
    "Let's create even more memories together.",
    "Your friendship is a treasure I hold dear.",
    "Cheers to being best friends forever!"
];

// Function to update message
function updateMessage() {
    const randomIndex = Math.floor(Math.random() * messages.length);
    document.getElementById('message').textContent = messages[randomIndex];
}

// Event listener for page load
window.addEventListener('load', updateMessage);
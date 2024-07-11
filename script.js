const messages = [
    "You're more than a friend; you're family to me.",
    "Thank you for always being there, no matter what.",
    "Life is better with you by my side.",
    "Hope we meet soon",
    "Your kindness inspire me every day.",
    "Cheers to our unforgettable memories",
    "Remember that there's always me, silently cheering and rooting for you everyday",
    "I am grateful for your unwavering support.",
    "You're the person I can always count on.",
    "Let's continue to laugh together until our stomachs hurt.",
    "You make my normal days better",
    "If this message displays can you say TAP with p lol",
    "Thank you for accepting me just as I am.",
    "You're my rock, always steady and reliable.",
    "I cherish the bond we share; it's truly special.",
    "You are a soft, gentle and warm person.",
    "I admire your strength and resilience.",
    "Congratulations on getting old and still looking handsome",
    "You make my world a brighter place.",
    "Your friendship is a gift I treasure.",
    "Thank you for being my confidant.",
    "I am so lucky to have you in my life.",
    "You understand me like no one else does.",
    "Let's grow old together and reminisce about our crazy times.",
    "Your friendship has made me a better person.",
    "Here's to many more late-night conversations.",
    "You're the peanut butter to my jelly.",
    "I am grateful for our deep conversations and shared dreams.",
    "Thank you for believing in me when I doubted myself.",
    "You've taught me what true friendship means.",
    "I can't imagine my life without you in it.",
    "Your being mokka-ness is infectious and brightens my day.",
    "You've seen me at my worst and still love me unconditionally.",
    "Please manifest for the day I finally eat chicken with you lol.",
    "One more year of becoming a bigger buffalo",
    "Earn millions soon and take me on a trip"
];

function updateMessage() {
    const randomIndex = Math.floor(Math.random() * messages.length);
    document.getElementById('message').textContent = messages[randomIndex];
}

document.addEventListener('DOMContentLoaded', updateMessage);
document.getElementById('refreshButton').addEventListener('click', updateMessage);

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

//const images = [
    "images/1.jpg",
    "images/2.jpg",
    "images/3.jpg",
    "images/4.jpg",
    "images/5.jpg",
    "images/6.jpg",
    "images/7.jpg",
    "images/8.jpg",
    "images/9.jpg",
    "images/10.jpg",
    "images/11.jpg",
    "images/12.jpg",
    "images/13.jpg",
    "images/14.jpg",
    "images/15.jpg",
    "images/16.jpg",
    "images/17.jpg",
    "images/18.jpg",
    "images/19.jpg",
    "images/20.jpg",
    "images/21.jpg",
    "images/22.jpg",
    "images/23.jpg",
    "images/24.jpg",
    "images/25.jpg",
    "images/26.jpg",
    "images/27.jpg"
    "images/28.jpg"
    "images/29.jpg"
    "images/30.jpg"
    "images/31.jpg"
    "images/32.jpg"
    "images/33.jpg"
    "images/34.jpg"
    "images/35.jpg"
    "images/36.jpg"
    "images/37.jpg"
    "images/38.jpg"
    "images/39.jpg"
    "images/40.jpg"
    "images/41.jpg"   
];//

// Function to update message and background image
function updateContent() {
    const randomIndex = Math.floor(Math.random() * messages.length);
    document.getElementById('message').textContent = messages[randomIndex];
  //  document.body.style.backgroundImage = `url(${images[randomIndex]})`;
}

// Event listener for page load
window.addEventListener('load', updateContent);

// Event listener for button click
document.getElementById('refreshButton').addEventListener('click', updateContent);

// Splash text array with random messages
const splashTexts = [
    "Thanks for supporting us on Patreon!",
    "#blameshoghi",
    "Blame shogchips",
    "#BlameMicrojang",
    "uwu",
    "PEMapModder != SOFe",
    `PocketMine-MP = ${new Date().getFullYear() - 2012} years old`,
    `Initial Commit:  ${new Date(2012, 9, 19).toDateString()}`,
    `MP stands for "Mrs Poggit"`,
    "shockedplot is a demi-god!",
    "Pog in the chat",
    "Mrs Poggit approves this message",
    "Poggit is not a frog",
    "Also try Terraria!",
    "As seen on TV!",
    "Now with extra hugs!",
    "The Cake is a Lie",
    "The creeper is a spy!",
    "Creeper Aww Man",
    "don't dead open inside",
    "[object Object]",
    "Much wow, such Minecraft",
    "Alexa, play Despacito!",
    "This is a splash text",
    "Tihs is splash text has a typo",
    "No, you're breathtaking!",
    "Press F to pay respects",
    "Press any key to continue",
    "Now with 20% more memes",
    "Dylan === Shoghicp!",
    "Star me on GitHub!",
    "From free range developers!",
    "/give @a hugs 64",
    "Ayy lmao",
    "Déjà vu!",
    "NOOT NOOT!",
    "May contain traces of gluten!",
    "Made by \"real\" people!",
    "Follow the train, CJ!",
    "Cogito ergo sum",
    "Get to the choppa!",
    "I am Groot",
    "Omae wa mou shindeiru. NANI?",
    "Leroy Jenkins!",
    "I can haz cheezburger?",
    "xkcd.com/303/",
    "xkcd.com/2154/",
    "xkcd.com/862/",
    "i can has owner r0le?",
    "i can has op?",
    "all your op are belong to us",
    "I'm not playing Roblox, Brian!",
    "Dylan vented in Electrical",
    "SOFe is the imposter",
    "Honey, where's my super suit?",
    "Honey, I blew up the server",
    "Herobrine is real",
    "Herobrine moved your cheese",
    "Chuck Norris can divide by zero",
    "Chuck Norris can mine bedrock",
    "Hi mom!",
    "Did you read the EULA?",
    "Hello, World!",
    "Searching for diamonds...",
    "Don't dig straight down!",
    "Don't mine at night!",
    "Don't look at Endermen!",
    "Redstone is red, lapis is blue",
    "So we back in the mine",
    "Look at my horse, my horse is amazing",
    "I like turtles",
    "I like trains",
    "Do you know da wae?",
    "Do you know the muffin man?",
    "Villager noises",
    `Villager #42: "Hmmm"`,
    "My uncle works at Mojang",
    "Microjang broke things again",
    "PHP is not dead",
    "PHP you later!",
    "logger.error($e);",
    "logger.info('Hello, World!');",
    "64FF00 spammed console logs",
    "A server a day keeps the doctor away",
    "As easy as 3.14159265359",
    "Creepers gonna creep",
    "Error 404: Splash text not found",
    "Error 418: I'm a teapot",
    "Original splash text idea, do not steal",
    "Somebody once told me...",
    "Never gonna give you up, never gonna let you down...",
    "We are number one!",
    "No Luke, I am your father!",
    "Spoiler: The butler did it",
    "The princess is in another castle...",
    "#BlameMojang",
    "PocketMine-MP the best server software!",
    "LBSG: Live Better, Start Gaming!",
    "Minecraft: The Movie, coming soon!",
    "Helo Cymru!",
    "10% More Dedotated Wam!",
    "In the end, you know it's all just blocks.",
    "Don't cry over exploded netherite blocks.",
    "Rest in peace, Nether Reactor Core...",
    "Mumbo Jumbo shifts with his thumb!!!",
    "¯\\_(ツ)_/¯",
    "I miss Jenkins the Butler...",
    "Insert Splash Text Here",
    "Don't forget to drink water!",
    "Don't forget to eat your vegetables!",
    "Eat, Sleep, PocketMine-MP, Repeat",
    "Eeny, meeny, miny, moe...",
    "Boom boom pow!",
    "Herobrine joined the game",
    "CelticTrinculo ate the last cookie",
    "Put the cookie down!",
    "Thunder is just sky drums",
    "Always dig straight down!",
    "Day 365: Still no diamonds...",
    "Mrs Poggit is watching you!",
    "5 out of 4 people can't do fractions",
    "Shoutout to the devs!",
    "§e<Insert Splash Text Here>§r",
    "Shouldn't you be asleep?",
    "It's just a bunch of Ones and Zeros...",
    "Notch knows what you did last summer",
    "e=mc^2",
    "PocketMine-MP: The OG server software for MCBE",
    "ChatGPT didn't write this",
    "No, this is Patrick!",
    "The black cat made me do it",
    `Here's a random number: ${Math.floor(Math.random() * 1000) + 1}`,
    "Eye of rabbit, harp string hum, turn this water into rum!",
    "I solemnly swear that I am up to no good",
    "Mischief managed",
    "Sunshine, daisies, butter mellow, turn this stupid splash text yellow!",
    "I am become Herobrine, the destroyer of minecraft worlds",
    "I am become Creeper, the destroyer of blocks",
    "9/10 dentists prefer PocketMine-MP",
    "It's Levio-sa, not Levio-sar",
    "echo \"Hi\" > /dev/null 2>&1",
    "Deja vu, I've just been in this place before",
    "!false (It's funny because it's true)",
    "Baby shark, doo doo doo doo doo doo",
    "Zombie Pigmen are just misunderstood",
    "Did someone eat my donut?",
    "Herobrine isn't real... right?",
    "In case it isn't obvious, Slappers aren't players!",
    "100% organic, free-range, gluten-free code",
    "Murphy's Law applies to servers too!",
    "umop-apisdn",
    "It's a bird! It's a plane! No, it's a splash text!",
    "Doug Dimmadome Owner of the Dimmsdale Dimmadome",
    "Oh, hi Mark!"
];

// Function to fetch stargazers and forks
function fetchPMMPRepoData() {
    let stargazers = "Loading stargazers...";
    let forks = "Loading forks...";
    fetch('https://api.github.com/repos/pmmp/PocketMine-MP')
        .then(response => response.json())
        .then(data => {
            // Update splash text array with stargazers, forks counts and watchers count
            stargazers = data.stargazers_count || "Error fetching stargazers";
            forks = data.forks_count || "Error fetching forks";
            watchCount = data.watchers_count || "Error fetching watch count";
            updateSplashTexts(stargazers, forks, watchCount);
        })
        .catch(error => {
            console.error('Error fetching latest release:', error);
        });
}
// Function to update splashTexts array with stargazers, forks, and watchers counts
function updateSplashTexts(stargazers, forks, watchers) {
    splashTexts.push(`Current stargazers count: ${stargazers}`);
    splashTexts.push(`Current fork count: ${forks}`);
    splashTexts.push(`Current watchers count: ${watchers}`);
}

// Fetch data for PMMP repository
fetchPMMPRepoData();

// Function to generate seeded random numbers
function seededRandom(seed) {
    // Calculate seeded random number
    let x = Math.sin(seed++) * Math.cos(seed++) * 10000;
    return x - Math.floor(x);
}

// Fisher-Yates shuffle algorithm with seed to shuffle splash texts array
function shuffle(array, seed) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(seededRandom(seed) * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Select the splash message element
const splashMessage = document.querySelector('.splash-message');

// Generate random index for splash text using cryptographic random number generator
const crypto = window.crypto || window.msCrypto;
const randomSplashIndex = Math.floor(crypto.getRandomValues(new Uint32Array(1))[0] / 4294967296 * splashTexts.length);

// Shuffle splashTexts array using current time as seed
shuffle(splashTexts, new Date().getTime());

// Set the text content of splash message to a randomly selected splash text
splashMessage.textContent = splashTexts[randomSplashIndex];

// Add click event listener to splash message for changing the text content randomly on click
splashMessage.addEventListener('click', () => {
    const randomSplashIndex = Math.floor(crypto.getRandomValues(new Uint32Array(1))[0] / 4294967296 * splashTexts.length);
    splashMessage.textContent = splashTexts[randomSplashIndex];
});
// Splash text array with random messages
const splashTexts = [
    "!false (It's funny because it's true)",
    "[object Object]",
    "§e<Insert Splash Text Here>§r",
    "/give @a hugs 64",
    "#BlameMicrojang",
    "#BlameMojang",
    "#blameshoghi",
    "¯\\_(ツ)_/¯",
    "10% More Dedotated Wam!",
    "100% organic, free-range, gluten-free code",
    "5 out of 4 people can't do fractions",
    "9/10 dentists prefer PocketMine-MP",
    "A server a day keeps the doctor away",
    "Alexa, play Despacito!",
    "all your op are belong to us",
    "Also try Terraria!",
    "Always dig straight down!",
    "As easy as 3.14159265359",
    "As seen on TV!",
    "Ayy lmao",
    "Baby shark, doo doo doo doo doo doo",
    "Blame shogchips",
    "Boom boom pow!",
    "CelticTrinculo ate the last cookie",
    "ChatGPT didn't write this",
    "Chuck Norris can divide by zero",
    "Chuck Norris can mine bedrock",
    "Cogito ergo sum",
    "Creeper Aww Man",
    "Creepers gonna creep",
    "Day 365: Still no diamonds...",
    "Deja vu, I've just been in this place before",
    "Déjà vu!",
    "Did someone eat my donut?",
    "Did you read the EULA?",
    "Do you know da wae?",
    "Do you know the muffin man?",
    "Don't cry over exploded netherite blocks.",
    "don't dead open inside",
    "Don't dig straight down!",
    "Don't forget to drink water!",
    "Don't forget to eat your vegetables!",
    "Don't look at Endermen!",
    "Don't mine at night!",
    "Doug Dimmadome Owner of the Dimmsdale Dimmadome",
    "Dylan === Shoghicp!",
    "Dylan vented in Electrical",
    "e=mc^2",
    "Eat, Sleep, PocketMine-MP, Repeat",
    "echo \"Hi\" > /dev/null 2>&1",
    "Eeny, meeny, miny, moe...",
    "Error 404: Splash text not found",
    "Error 418: I'm a teapot",
    "Eye of rabbit, harp string hum, turn this water into rum!",
    "Follow the train, CJ!",
    "From free range developers!",
    "Get to the choppa!",
    "Hello, World!",
    "Helo Cymru!",
    "Herobrine is real",
    "Herobrine isn't real... right?",
    "Herobrine joined the game",
    "Herobrine moved your cheese",
    "Hi mom!",
    "Honey, I blew up the server",
    "Honey, where's my super suit?",
    "I am become Creeper, the destroyer of blocks",
    "I am become Herobrine, the destroyer of minecraft worlds",
    "I am Groot",
    "i can has op?",
    "i can has owner r0le?",
    "I can haz cheezburger?",
    "I like trains",
    "I like turtles",
    "I miss Jenkins the Butler...",
    "I solemnly swear that I am up to no good",
    "I'm not playing Roblox, Brian!",
    "In case it isn't obvious, Slappers aren't players!",
    "In the end, you know it's all just blocks.",
    "Insert Splash Text Here",
    "It's a bird! It's a plane! No, it's a splash text!",
    "It's just a bunch of Ones and Zeros...",
    "It's Levio-sa, not Levio-sar",
    "Leroy Jenkins!",
    "logger.error($e);",
    "logger.info('Hello, World!');",
    "Look at my horse, my horse is amazing",
    "Made by \"real\" people!",
    "May contain traces of gluten!",
    "Microjang broke things again",
    "Mischief managed",
    "MP stands for \"Mrs Poggit\"",
    "Mrs Poggit approves this message",
    "Mrs Poggit is watching you!",
    "Much wow, such Minecraft",
    "Mumbo Jumbo shifts with his thumb!!!",
    "Murphy's Law applies to servers too!",
    "My uncle works at Mojang",
    "Never gonna give you up, never gonna let you down...",
    "No Luke, I am your father!",
    "No, this is Patrick!",
    "No, you're breathtaking!",
    "NOOT NOOT!",
    "Notch knows what you did last summer",
    "Now with 20% more memes",
    "Now with extra hugs!",
    "Oh, hi Mark!",
    "Omae wa mou shindeiru. NANI?",
    "Original splash text idea, do not steal",
    "PEMapModder != SOFe",
    "PHP is not dead",
    "PHP you later!",
    "PocketMine-MP the best server software!",
    "PocketMine-MP: The OG server software for MCBE",
    "Pog in the chat",
    "Poggit is not a frog",
    "Press any key to continue",
    "Press F to pay respects",
    "Put the cookie down!",
    "Redstone is red, lapis is blue",
    "Rest in peace, Nether Reactor Core...",
    "Searching for diamonds...",
    "shockedplot is a demi-god!",
    "Shouldn't you be asleep?",
    "Shoutout to the devs!",
    "So we back in the mine",
    "SOFe is the imposter",
    "Somebody once told me...",
    "Spoiler: The butler did it",
    "Star me on GitHub!",
    "Sunshine, daisies, butter mellow, turn this stupid splash text yellow!",
    "Thanks for supporting us on Patreon!",
    "The black cat made me do it",
    "The Cake is a Lie",
    "The creeper is a spy!",
    "The princess is in another castle...",
    "This is a splash text",
    "Thunder is just sky drums",
    "Tihs is splash text has a typo",
    "umop-apisdn",
    "uwu",
    "Villager #42: \"Hmmm\"",
    "Villager noises",
    "We are number one!",
    "xkcd.com/2154/",
    "xkcd.com/303/",
    "xkcd.com/862/",
    "Zombie Pigmen are just misunderstood",
    `Here's a random number: ${Math.floor(Math.random() * 1000) + 1}`,
    `Initial Commit:  ${new Date(2012, 9, 19).toDateString()}`,
    `PocketMine-MP is ${new Date().getFullYear() - 2012} years old!`
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
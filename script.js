const ieltsQuiz = document.getElementById('ieltsQuiz');
const nextBtn = document.getElementById('nextBtn');
const checkBtn = document.getElementById('checkBtn');
const progressBar = document.getElementById('progressBar');
const resultSummary = document.getElementById('resultSummary');

// D? li?u cho 50 slide IELTS Speaking Part 2
const questions = [
    {
        topic: "Describe a person you admire.",
        sentence: "The person I admire most is my grandfather, who has a ___(1)___ on my life. He is a truly ___(2)___ person, always willing to ___(3)___ a helping hand. His ___(4)___ to his family is something I look up to.",
        blanks: [
            { id: "1", answer: "profound impact" },
            { id: "2", answer: "benevolent and kind" },
            { id: "3", answer: "lend" },
            { id: "4", answer: "unwavering dedication" }
        ],
        words: ["unwavering dedication", "profound impact", "benevolent and kind", "lend"]
    },
    {
        topic: "Describe a successful business you know.",
        sentence: "A successful business that comes to mind is a local coffee shop. Its ___(1)___ is based on its unique ___(2)___ and excellent ___(3)___ to customers. They have managed to build a ___(4)___ in the community.",
        blanks: [
            { id: "1", answer: "resounding success" },
            { id: "2", answer: "business model" },
            { id: "3", answer: "service" },
            { id: "4", answer: "loyal customer base" }
        ],
        words: ["loyal customer base", "resounding success", "service", "business model"]
    },
    {
        topic: "Describe a historical event you're interested in.",
        sentence: "I'm fascinated by the Industrial Revolution, which was a period of ___(1)___. It brought about ___(2)___ changes in manufacturing and transformed ___(3)___. It's an event that truly ___(4)___ the modern world.",
        blanks: [
            { id: "1", answer: "significant technological advancements" },
            { id: "2", answer: "socio-economic" },
            { id: "3", answer: "entire societies" },
            { id: "4", answer: "laid the groundwork for" }
        ],
        words: ["socio-economic", "entire societies", "significant technological advancements", "laid the groundwork for"]
    },
    {
        topic: "Describe a place you would like to visit.",
        sentence: "I would love to visit Kyoto, Japan. It's a city steeped in ___(1)___ and ___(2)___. The traditional wooden houses and stunning ___(3)___ create an atmosphere of peace and tranquility. It feels like stepping back in ___(4)___.",
        blanks: [
            { id: "1", answer: "rich history" },
            { id: "2", answer: "cultural heritage" },
            { id: "3", answer: "temples" },
            { id: "4", answer: "time" }
        ],
        words: ["rich history", "cultural heritage", "time", "temples"]
    },
    {
        topic: "Describe a time you helped someone.",
        sentence: "A few weeks ago, I had the opportunity to ___(1)___ a friend who was struggling with a difficult assignment. I was able to ___(2)___ some light on the subject, and we worked together to ___(3)___. It was a rewarding experience to ___(4)___ to his success.",
        blanks: [
            { id: "1", answer: "lend a hand to" },
            { id: "2", answer: "shed" },
            { id: "3", answer: "find a solution" },
            { id: "4", answer: "contribute" }
        ],
        words: ["contribute", "shed", "lend a hand to", "find a solution"]
    },
    {
        topic: "Describe an interesting book you have read.",
        sentence: "I recently finished reading 'Sapiens', a book that ___(1)___ how humans came to ___(2)___ the planet. The author's ___(3)___ is truly ___(4)___, offering a new perspective on our own history.",
        blanks: [
            { id: "1", answer: "explores the journey of" },
            { id: "2", answer: "dominate" },
            { id: "3", answer: "narrative" },
            { id: "4", answer: "insightful" }
        ],
        words: ["insightful", "narrative", "dominate", "explores the journey of"]
    },
    {
        topic: "Describe a piece of technology you cannot live without.",
        sentence: "I can't imagine my life without my smartphone. It's more than just a device for ___(1)___; it's a tool that has ___(2)___ the way I work and interact with the world. It provides me with ___(3)___ to information and entertainment, and helps me ___(4)___ with others.",
        blanks: [
            { id: "1", answer: "making phone calls" },
            { id: "2", answer: "fundamentally changed" },
            { id: "3", answer: "instant access" },
            { id: "4", answer: "stay connected" }
        ],
        words: ["fundamentally changed", "stay connected", "instant access", "making phone calls"]
    },
    {
        topic: "Describe a time you were late for an important event.",
        sentence: "I remember a time I was running late for a job interview. My car broke down, and I had to ___(1)___. I arrived ___(2)___, but I tried to remain calm and ___(3)___. It was a lesson in always having a ___(4)___.",
        blanks: [
            { id: "1", answer: "hail a taxi" },
            { id: "2", answer: "half an hour late" },
            { id: "3", answer: "put my best foot forward" },
            { id: "4", answer: "backup plan" }
        ],
        words: ["hail a taxi", "backup plan", "half an hour late", "put my best foot forward"]
    },
    {
        topic: "Describe a public place you like to visit.",
        sentence: "My favorite public place is a small park near my home. It's a peaceful ___(1)___ from the ___(2)___ of city life. The park is a great place for a ___(3)___ or to simply ___(4)___ and enjoy the scenery.",
        blanks: [
            { id: "1", answer: "haven" },
            { id: "2", answer: "hustle and bustle" },
            { id: "3", answer: "leisurely stroll" },
            { id: "4", answer: "unwind" }
        ],
        words: ["unwind", "hustle and bustle", "leisurely stroll", "haven"]
    },
    {
        topic: "Describe a TV series or film you enjoy watching.",
        sentence: "I'm a big fan of the TV series 'The Crown'. It ___(1)___ the lives of the British royal family. The show is known for its ___(2)___ and historical ___(3)___. It's a perfect blend of ___(4)___ and entertainment.",
        blanks: [
            { id: "1", answer: "chronicles" },
            { id: "2", answer: "stunning visuals" },
            { id: "3", answer: "accuracy" },
            { id: "4", answer: "drama" }
        ],
        words: ["drama", "chronicles", "stunning visuals", "accuracy"]
    },
    {
        topic: "Describe a skill you would like to learn.",
        sentence: "I would love to learn how to play the piano. It's an instrument that requires a great deal of ___(1)___ and ___(2)___. I believe it would be a very ___(3)___ hobby and a wonderful way to ___(4)___.",
        blanks: [
            { id: "1", answer: "discipline" },
            { id: "2", answer: "patience" },
            { id: "3", answer: "creative and fulfilling" },
            { id: "4", answer: "express myself" }
        ],
        words: ["creative and fulfilling", "express myself", "discipline", "patience"]
    },
    {
        topic: "Describe a journey you took by public transport.",
        sentence: "Last year, I took a train trip from Hanoi to Sapa. The journey was a ___(1)___, and I was able to see many ___(2)___. It was a great opportunity to ___(3)___ and enjoy the scenery, something you can't always do when you ___(4)___ yourself.",
        blanks: [
            { id: "1", answer: "memorable experience" },
            { id: "2", answer: "picturesque landscapes" },
            { id: "3", answer: "sit back and relax" },
            { id: "4", answer: "drive" }
        ],
        words: ["drive", "sit back and relax", "memorable experience", "picturesque landscapes"]
    },
    {
        topic: "Describe a festival or celebration you enjoy.",
        sentence: "I love the Tet holiday in Vietnam. It's a time for families to ___(1)___ and ___(2)___. The festive atmosphere is ___(3)___, with ___(4)___ and traditional food everywhere.",
        blanks: [
            { id: "1", answer: "reunite" },
            { id: "2", answer: "celebrate the new year" },
            { id: "3", answer: "truly infectious" },
            { id: "4", answer: "colorful decorations" }
        ],
        words: ["colorful decorations", "truly infectious", "celebrate the new year", "reunite"]
    },
    {
        topic: "Describe a gift you gave to someone.",
        sentence: "I recently gave my mother a handmade photo album for her birthday. It was a very ___(1)___ gift because it contained pictures of our family over the years. It was a way to ___(2)___ and ___(3)___ our most cherished moments, and it ___(4)___ a lot to her.",
        blanks: [
            { id: "1", answer: "meaningful" },
            { id: "2", answer: "celebrate" },
            { id: "3", answer: "preserve" },
            { id: "4", answer: "meant" }
        ],
        words: ["preserve", "meant", "celebrate", "meaningful"]
    },
    {
        topic: "Describe a type of food you like to cook.",
        sentence: "I enjoy cooking Italian food, especially pasta. It's a cuisine that ___(1)___ simplicity and fresh ingredients. My favorite dish is carbonara, which requires only a few ___(2)___ ingredients but is full of ___(3)___. It's a dish that ___(4)___ both comforting and delicious.",
        blanks: [
            { id: "1", answer: "embraces" },
            { id: "2", answer: "staple" },
            { id: "3", answer: "rich flavor" },
            { id: "4", answer: "is" }
        ],
        words: ["rich flavor", "is", "staple", "embraces"]
    },
    {
        topic: "Describe an item of clothing you wear on special occasions.",
        sentence: "On special occasions, I love wearing a traditional Vietnamese ao dai. It is a garment that ___(1)___ elegance and ___(2)___. Wearing it makes me feel ___(3)___ to my culture and gives me a great sense of ___(4)___.",
        blanks: [
            { id: "1", answer: "symbolizes" },
            { id: "2", answer: "grace" },
            { id: "3", answer: "connected" },
            { id: "4", answer: "pride" }
        ],
        words: ["pride", "grace", "symbolizes", "connected"]
    },
    {
        topic: "Describe a subject you enjoyed at school.",
        sentence: "My favorite subject at school was history. I found it fascinating to learn about ___(1)___ and how they ___(2)___ the world. My history teacher had a way of bringing the past ___(3)___, making every lesson an ___(4)___.",
        blanks: [
            { id: "1", answer: "past civilizations" },
            { id: "2", answer: "shaped" },
            { id: "3", answer: "to life" },
            { id: "4", answer: "adventure" }
        ],
        words: ["past civilizations", "to life", "adventure", "shaped"]
    },
    {
        topic: "Describe a job you would like to have in the future.",
        sentence: "In the future, I would love to be a travel journalist. It's a job that would allow me to ___(1)___ and ___(2)___. The thought of ___(3)___ and sharing my experiences with others really ___(4)___ me.",
        blanks: [
            { id: "1", answer: "explore new cultures" },
            { id: "2", answer: "meet new people" },
            { id: "3", answer: "documenting my journeys" },
            { id: "4", answer: "appeals to" }
        ],
        words: ["meet new people", "appeals to", "explore new cultures", "documenting my journeys"]
    },
    {
        topic: "Describe a sport or exercise you enjoy.",
        sentence: "I enjoy playing badminton with my friends. It's a great way to ___(1)___ and ___(2)___. The game requires a lot of ___(3)___ and quick thinking, which makes it a fantastic ___(4)___.",
        blanks: [
            { id: "1", answer: "stay active" },
            { id: "2", answer: "have fun" },
            { id: "3", answer: "agility" },
            { id: "4", answer: "workout" }
        ],
        words: ["workout", "agility", "stay active", "have fun"]
    },
    {
        topic: "Describe a time you tried something new.",
        sentence: "Last summer, I decided to try kayaking for the first time. I was a bit ___(1)___ at first, but with the help of an instructor, I quickly ___(2)___. It was a very ___(3)___ experience, and I was proud that I was able to ___(4)___.",
        blanks: [
            { id: "1", answer: "nervous" },
            { id: "2", answer: "got the hang of it" },
            { id: "3", answer: "exhilarating" },
            { id: "4", answer: "overcome my fear" }
        ],
        words: ["exhilarating", "overcome my fear", "nervous", "got the hang of it"]
    },
    {
        topic: "Describe a memorable family celebration.",
        sentence: "The most memorable family celebration I've had was my grandmother's 80th birthday. Our whole family ___(1)___ to surprise her. It was a day filled with ___(2)___, laughter, and ___(3)___. We all had a wonderful time ___(4)___ her long and happy life.",
        blanks: [
            { id: "1", answer: "came together" },
            { id: "2", answer: "joyful memories" },
            { id: "3", answer: "heartfelt stories" },
            { id: "4", answer: "celebrating" }
        ],
        words: ["heartfelt stories", "celebrating", "joyful memories", "came together"]
    },
    {
        topic: "Describe a city you have visited.",
        sentence: "I recently visited Hoi An, a beautiful city in Vietnam. It's famous for its ___(1)___ and ___(2)___. I loved walking through the ___(3)___, which is lit up with colorful lanterns at night. The city has a very ___(4)___ atmosphere.",
        blanks: [
            { id: "1", answer: "ancient town" },
            { id: "2", answer: "lantern festival" },
            { id: "3", answer: "old streets" },
            { id: "4", answer: "charming" }
        ],
        words: ["lantern festival", "charming", "ancient town", "old streets"]
    },
    {
        topic: "Describe a piece of art you like.",
        sentence: "I'm a big fan of Impressionist paintings, especially those by Monet. I'm captivated by the way he used ___(1)___ to ___(2)___ the fleeting moments of light and ___(3)___. His works have a very ___(4)___ quality to them.",
        blanks: [
            { id: "1", answer: "vibrant colors" },
            { id: "2", answer: "capture" },
            { id: "3", answer: "atmosphere" },
            { id: "4", answer: "dreamlike" }
        ],
        words: ["dreamlike", "capture", "vibrant colors", "atmosphere"]
    },
    {
        topic: "Describe a website you visit frequently.",
        sentence: "I visit Wikipedia frequently. It's my go-to website for ___(1)___ on any topic. I appreciate that it's a ___(2)___, open-source resource. It has helped me with many ___(3)___ and has ___(4)___ my knowledge on various subjects.",
        blanks: [
            { id: "1", answer: "instant information" },
            { id: "2", answer: "collaborative" },
            { id: "3", answer: "research projects" },
            { id: "4", answer: "greatly expanded" }
        ],
        words: ["research projects", "collaborative", "greatly expanded", "instant information"]
    },
    {
        topic: "Describe a time you were in a foreign country.",
        sentence: "I once traveled to Thailand, and it was an unforgettable experience. I was able to ___(1)___ and experience the local ___(2)___. The people were incredibly ___(3)___ and welcoming. It was a great opportunity to ___(4)___ and learn about a new place.",
        blanks: [
            { id: "1", answer: "explore the beautiful temples" },
            { id: "2", answer: "cuisine" },
            { id: "3", answer: "friendly" },
            { id: "4", answer: "step out of my comfort zone" }
        ],
        words: ["step out of my comfort zone", "friendly", "cuisine", "explore the beautiful temples"]
    },
    {
        topic: "Describe a movie you have watched recently.",
        sentence: "I recently watched the movie 'Parasite'. It was a ___(1)___ film that ___(2)___ the complexities of social class. The ___(3)___ was full of unexpected twists, and the acting was ___(4)___.",
        blanks: [
            { id: "1", answer: "thought-provoking" },
            { id: "2", answer: "masterfully explores" },
            { id: "3", answer: "plot" },
            { id: "4", answer: "superb" }
        ],
        words: ["plot", "masterfully explores", "superb", "thought-provoking"]
    },
    {
        topic: "Describe a famous person you would like to meet.",
        sentence: "I would love to meet Stephen Hawking. He was a brilliant ___(1)___ who ___(2)___ our understanding of the universe. His ability to ___(3)___ and continue his work despite his illness is a ___(4)___ to his strength.",
        blanks: [
            { id: "1", answer: "physicist" },
            { id: "2", answer: "revolutionized" },
            { id: "3", answer: "persevere" },
            { id: "4", answer: "testament" }
        ],
        words: ["physicist", "persevere", "testament", "revolutionized"]
    },
    {
        topic: "Describe a meal you had at a restaurant.",
        sentence: "The most memorable meal I had was at a small Vietnamese restaurant. The food was incredibly ___(1)___ and ___(2)___. I had a bowl of pho, and the broth was ___(3)___. The whole experience was a ___(4)___.",
        blanks: [
            { id: "1", answer: "delicious" },
            { id: "2", answer: "authentic" },
            { id: "3", answer: "rich and flavorful" },
            { id: "4", answer: "culinary delight" }
        ],
        words: ["culinary delight", "delicious", "authentic", "rich and flavorful"]
    },
    {
        topic: "Describe an exciting event you have been to.",
        sentence: "I went to a live concert of my favorite band, and it was a ___(1)___ experience. The atmosphere was ___(2)___, and the music was ___(3)___. I felt a great sense of ___(4)___ with the crowd.",
        blanks: [
            { id: "1", answer: "once-in-a-lifetime" },
            { id: "2", answer: "electric" },
            { id: "3", answer: "absolutely amazing" },
            { id: "4", answer: "camaraderie" }
        ],
        words: ["camaraderie", "once-in-a-lifetime", "electric", "absolutely amazing"]
    },
    {
        topic: "Describe a time you were sick.",
        sentence: "I remember a time I had a terrible flu. I felt ___(1)___ and had to stay in bed for days. My mother took good ___(2)___ of me, bringing me hot tea and food. It reminded me how important it is to ___(3)___ and appreciate those who ___(4)___ for us.",
        blanks: [
            { id: "1", answer: "completely drained" },
            { id: "2", answer: "care" },
            { id: "3", answer: "take care of my health" },
            { id: "4", answer: "look out" }
        ],
        words: ["take care of my health", "care", "look out", "completely drained"]
    },
    {
        topic: "Describe a piece of advice you received.",
        sentence: "The best advice I've ever received was to 'embrace failure'. At first, it sounded ___(1)___, but my mentor explained that it's a part of the ___(2)___. He taught me to ___(3)___ from mistakes and to use them as a ___(4)___ for growth.",
        blanks: [
            { id: "1", answer: "counter-intuitive" },
            { id: "2", answer: "learning process" },
            { id: "3", answer: "learn" },
            { id: "4", answer: "catalyst" }
        ],
        words: ["learn", "learning process", "catalyst", "counter-intuitive"]
    },
    {
        topic: "Describe a wild animal you find interesting.",
        sentence: "I'm fascinated by dolphins. They are ___(1)___ and highly ___(2)___ animals. Their ability to ___(3)___ complex sounds and social structures is truly remarkable. They are a great example of ___(4)___.",
        blanks: [
            { id: "1", answer: "incredibly intelligent" },
            { id: "2", answer: "social" },
            { id: "3", answer: "communicate through" },
            { id: "4", answer: "nature's wonders" }
        ],
        words: ["incredibly intelligent", "communicate through", "nature's wonders", "social"]
    },
    {
        topic: "Describe a time you felt nervous.",
        sentence: "I felt very nervous before my first public speaking engagement. My heart was ___(1)___, and my hands were ___(2)___. However, I took a deep breath and reminded myself to ___(3)___. I was able to ___(4)___ and it ended up being a great experience.",
        blanks: [
            { id: "1", answer: "pounding" },
            { id: "2", answer: "trembling" },
            { id: "3", answer: "focus on my message" },
            { id: "4", answer: "overcome my fear" }
        ],
        words: ["trembling", "pounding", "focus on my message", "overcome my fear"]
    },
    {
        topic: "Describe a person who inspired you.",
        sentence: "My high school teacher, Ms. Huong, was a true inspiration. She had a ___(1)___ for teaching and a deep ___(2)___ for her students. She ___(3)___ us to think critically and to always ___(4)___.",
        blanks: [
            { id: "1", answer: "genuine passion" },
            { id: "2", answer: "respect" },
            { id: "3", answer: "encouraged" },
            { id: "4", answer: "strive for excellence" }
        ],
        words: ["genuine passion", "respect", "encouraged", "strive for excellence"]
    },
    {
        topic: "Describe a time you were busy.",
        sentence: "A few months ago, I was swamped with work and school projects. I was working long hours and felt like I was ___(1)___. It was a very ___(2)___ period, but I learned how to ___(3)___ my time more effectively and ___(4)___ my responsibilities.",
        blanks: [
            { id: "1", answer: "juggling too many things" },
            { id: "2", answer: "stressful" },
            { id: "3", answer: "prioritize" },
            { id: "4", answer: "manage" }
        ],
        words: ["juggling too many things", "manage", "prioritize", "stressful"]
    },
    {
        topic: "Describe a garden you have visited.",
        sentence: "I recently visited the botanical garden in my city. It's a beautiful ___(1)___ with a wide variety of plants and flowers. It's a great place to ___(2)___ from the city and enjoy the ___(3)___. The garden is a testament to the beauty of ___(4)___.",
        blanks: [
            { id: "1", answer: "serene sanctuary" },
            { id: "2", answer: "escape" },
            { id: "3", answer: "natural beauty" },
            { id: "4", answer: "nature" }
        ],
        words: ["serene sanctuary", "escape", "natural beauty", "nature"]
    },
    {
        topic: "Describe an outdoor activity you enjoy.",
        sentence: "I love hiking. It's a great way to ___(1)___ and get some fresh air. I enjoy the challenge of ___(2)___ and the feeling of accomplishment when I ___(3)___. It's a great way to ___(4)___ with nature.",
        blanks: [
            { id: "1", answer: "stay fit" },
            { id: "2", answer: "climbing up steep trails" },
            { id: "3", answer: "reach the summit" },
            { id: "4", answer: "reconnect" }
        ],
        words: ["reconnect", "climbing up steep trails", "stay fit", "reach the summit"]
    },
    {
        topic: "Describe a time you were in a hurry.",
        sentence: "I was once in a huge hurry to catch a flight. I was running late and felt a ___(1)___ of panic. I had to ___(2)___ and make my way through the crowded terminal. I made it to the gate just in time, but it was a ___(3)___ that I never want to ___(4)___.",
        blanks: [
            { id: "1", answer: "surge" },
            { id: "2", answer: "sprint" },
            { id: "3", answer: "harrowing experience" },
            { id: "4", answer: "repeat" }
        ],
        words: ["harrowing experience", "repeat", "sprint", "surge"]
    },
    {
        topic: "Describe a photograph you like.",
        sentence: "I have a photograph of my family on a trip to the beach. It's a simple picture, but it ___(1)___ a special memory. The photograph ___(2)___ our happiness and connection. It's a great way to ___(3)___ on the past and ___(4)___ the good times.",
        blanks: [
            { id: "1", answer: "captures" },
            { id: "2", answer: "reflects" },
            { id: "3", answer: "look back" },
            { id: "4", answer: "cherish" }
        ],
        words: ["cherish", "reflects", "look back", "captures"]
    },
    {
        topic: "Describe a time you solved a problem.",
        sentence: "I recently had a problem with my laptop not turning on. I spent hours ___(1)___ and trying to ___(2)___. Finally, I realized it was a simple issue with the battery. It was a good lesson in not ___(3)___ and in ___(4)___ solutions systematically.",
        blanks: [
            { id: "1", answer: "troubleshooting" },
            { id: "2", answer: "diagnose the issue" },
            { id: "3", answer: "overcomplicating things" },
            { id: "4", answer: "approaching" }
        ],
        words: ["approaching", "overcomplicating things", "troubleshooting", "diagnose the issue"]
    },
    {
        topic: "Describe a gift you received.",
        sentence: "The most memorable gift I've ever received was a handmade sweater from my grandmother. It was not just a gift, but a ___(1)___ of her love and ___(2)___. It ___(3)___ a special place in my heart because it was made with so much ___(4)___.",
        blanks: [
            { id: "1", answer: "symbol" },
            { id: "2", answer: "devotion" },
            { id: "3", answer: "holds" },
            { id: "4", answer: "care" }
        ],
        words: ["care", "devotion", "holds", "symbol"]
    },
    {
        topic: "Describe a holiday you enjoyed.",
        sentence: "Last summer, I went on a holiday to Ha Long Bay. It's a place of ___(1)___ with its ___(2)___ and clear waters. We went kayaking and explored the caves, which was a ___(3)___. It was a great way to ___(4)___ from work and enjoy a peaceful time.",
        blanks: [
            { id: "1", answer: "breathtaking beauty" },
            { id: "2", answer: "towering limestone islands" },
            { id: "3", answer: "truly memorable experience" },
            { id: "4", answer: "unwind" }
        ],
        words: ["breathtaking beauty", "unwind", "truly memorable experience", "towering limestone islands"]
    },
    {
        topic: "Describe a time you were lost.",
        sentence: "I was once lost in a crowded city while traveling. I felt a sense of ___(1)___ and wasn't sure what to do. Luckily, I was able to ___(2)___ and found a map. It was a good lesson in ___(3)___ and in the importance of ___(4)___.",
        blanks: [
            { id: "1", answer: "disorientation" },
            { id: "2", answer: "ask for directions" },
            { id: "3", answer: "staying calm" },
            { id: "4", answer: "planning ahead" }
        ],
        words: ["disorientation", "staying calm", "planning ahead", "ask for directions"]
    },
    {
        topic: "Describe a piece of furniture you like.",
        sentence: "I have a vintage wooden desk in my room that I love. It's a very ___(1)___ piece of furniture with a lot of ___(2)___. It's where I do all my work and study, and it ___(3)___ a sense of ___(4)___.",
        blanks: [
            { id: "1", answer: "classic" },
            { id: "2", answer: "character" },
            { id: "3", answer: "gives me" },
            { id: "4", answer: "calm and focus" }
        ],
        words: ["classic", "calm and focus", "gives me", "character"]
    },
    {
        topic: "Describe a special day in your life.",
        sentence: "My high school graduation was a very special day for me. It was a ___(1)___ after years of ___(2)___. I felt a great sense of ___(3)___ and excitement for what lay ahead. It was a moment of ___(4)___ and reflection.",
        blanks: [
            { id: "1", answer: "milestone" },
            { id: "2", answer: "hard work and dedication" },
            { id: "3", answer: "accomplishment" },
            { id: "4", answer: "closure" }
        ],
        words: ["accomplishment", "milestone", "closure", "hard work and dedication"]
    },
    {
        topic: "Describe an electronic device you use a lot.",
        sentence: "I use my laptop almost every day. It's an ___(1)___ tool for both work and entertainment. I use it for ___(2)___, browsing the internet, and watching movies. It's a device that has ___(3)___ my life and made things more ___(4)___.",
        blanks: [
            { id: "1", answer: "indispensable" },
            { id: "2", answer: "writing and editing" },
            { id: "3", answer: "greatly improved" },
            { id: "4", answer: "convenient" }
        ],
        words: ["indispensable", "convenient", "writing and editing", "greatly improved"]
    },
    {
        topic: "Describe a happy event from your childhood.",
        sentence: "I remember a time when my family went to the beach. We spent the whole day ___(1)___ and ___(2)___. It was a day filled with laughter and ___(3)___. I will always ___(4)___ that memory.",
        blanks: [
            { id: "1", answer: "playing in the sand" },
            { id: "2", answer: "swimming in the ocean" },
            { id: "3", answer: "happy moments" },
            { id: "4", answer: "cherish" }
        ],
        words: ["cherish", "happy moments", "playing in the sand", "swimming in the ocean"]
    },
    {
        topic: "Describe a time you were very busy.",
        sentence: "I was extremely busy during my final exams in university. I had to ___(1)___ and ___(2)___. I spent most of my time in the library, ___(3)___ for my exams. It was a very ___(4)___ period, but I learned a lot about time management.",
        blanks: [
            { id: "1", answer: "prioritize my studies" },
            { id: "2", answer: "manage my time effectively" },
            { id: "3", answer: "cramming" },
            { id: "4", answer: "demanding" }
        ],
        words: ["prioritize my studies", "demanding", "manage my time effectively", "cramming"]
    },
    {
        topic: "Describe a public building you like.",
        sentence: "I like the National Library in my city. It's a very ___(1)___ building with a rich ___(2)___. It's a great place to ___(3)___ and to be ___(4)___ by the sheer amount of knowledge it holds.",
        blanks: [
            { id: "1", answer: "impressive" },
            { id: "2", answer: "history" },
            { id: "3", answer: "study" },
            { id: "4", answer: "inspired" }
        ],
        words: ["history", "impressive", "study", "inspired"]
    },
    {
        topic: "Describe an old person you respect.",
        sentence: "I respect my grandfather a lot. He is a man of great ___(1)___ and ___(2)___. He has always been a great ___(3)___ to me, and I ___(4)___ his wisdom and guidance.",
        blanks: [
            { id: "1", answer: "wisdom" },
            { id: "2", answer: "integrity" },
            { id: "3", answer: "role model" },
            { id: "4", answer: "value" }
        ],
        words: ["role model", "wisdom", "integrity", "value"]
    },
    {
        topic: "Describe a happy memory from your childhood.",
        sentence: "One of my happiest childhood memories is going to the amusement park with my family. I remember the ___(1)___ and the feeling of ___(2)___. It was a day of ___(3)___ and ___(4)___.",
        blanks: [
            { id: "1", answer: "thrill of the rides" },
            { id: "2", answer: "pure joy" },
            { id: "3", answer: "laughter" },
            { id: "4", answer: "fun" }
        ],
        words: ["fun", "thrill of the rides", "pure joy", "laughter"]
    },
    {
        topic: "Describe a time you were very sad.",
        sentence: "I was very sad when my dog passed away. He was my ___(1)___ and a ___(2)___ of our family. I felt a great sense of ___(3)___, but I also cherished the ___(4)___ we had together.",
        blanks: [
            { id: "1", answer: "best friend" },
            { id: "2", answer: "beloved member" },
            { id: "3", answer: "loss" },
            { id: "4", answer: "memories" }
        ],
        words: ["loss", "best friend", "beloved member", "memories"]
    },
    {
        topic: "Describe a kind person you know.",
        sentence: "My neighbor, Mrs. Smith, is one of the kindest people I know. She always has a ___(1)___ and is willing to ___(2)___. She is a true ___(3)___ and a great example of what it means to ___(4)___.",
        blanks: [
            { id: "1", answer: "smile on her face" },
            { id: "2", answer: "go out of her way" },
            { id: "3", answer: "community member" },
            { id: "4", answer: "be a good neighbor" }
        ],
        words: ["smile on her face", "community member", "be a good neighbor", "go out of her way"]
    },
    {
        topic: "Describe a skill you learned in a class.",
        sentence: "I learned how to code in a computer science class. It was a very ___(1)___ skill to learn, but I found it to be very ___(2)___. It taught me how to ___(3)___ and to ___(4)___ problems in a logical way.",
        blanks: [
            { id: "1", answer: "challenging" },
            { id: "2", answer: "rewarding" },
            { id: "3", answer: "think critically" },
            { id: "4", answer: "solve" }
        ],
        words: ["challenging", "rewarding", "solve", "think critically"]
    },
    {
        topic: "Describe a time you were successful.",
        sentence: "I was successful in a school competition. It was a great feeling to ___(1)___ and to see my ___(2)___. It was a reminder that ___(3)___ and hard work ___(4)___.",
        blanks: [
            { id: "1", answer: "win" },
            { id: "2", answer: "efforts pay off" },
            { id: "3", answer: "dedication" },
            { id: "4", answer: "are rewarded" }
        ],
        words: ["win", "dedication", "efforts pay off", "are rewarded"]
    },
    {
        topic: "Describe a historical building you have visited.",
        sentence: "I visited the Ho Chi Minh Mausoleum in Hanoi. It is a very ___(1)___ building with a rich ___(2)___. It is a great place to learn about the ___(3)___ and to ___(4)___ the father of the nation.",
        blanks: [
            { id: "1", answer: "important" },
            { id: "2", answer: "historical significance" },
            { id: "3", answer: "country's history" },
            { id: "4", answer: "pay respect to" }
        ],
        words: ["important", "pay respect to", "historical significance", "country's history"]
    },
    {
        topic: "Describe a time you were in a traffic jam.",
        sentence: "I was once stuck in a terrible traffic jam. I felt very ___(1)___ and frustrated. I had to ___(2)___ and just wait for the traffic to ___(3)___. It was a good lesson in ___(4)___.",
        blanks: [
            { id: "1", answer: "impatient" },
            { id: "2", answer: "be patient" },
            { id: "3", answer: "move" },
            { id: "4", answer: "patience" }
        ],
        words: ["impatient", "patience", "move", "be patient"]
    },
    {
        topic: "Describe a time you were on a trip.",
        sentence: "I went on a trip to the countryside with my family. We stayed in a small house and enjoyed the ___(1)___ and ___(2)___. It was a great way to ___(3)___ and to ___(4)___ from the city.",
        blanks: [
            { id: "1", answer: "peaceful atmosphere" },
            { id: "2", answer: "beautiful scenery" },
            { id: "3", answer: "relax" },
            { id: "4", answer: "get away" }
        ],
        words: ["peaceful atmosphere", "relax", "get away", "beautiful scenery"]
    },
    {
        topic: "Describe a difficult decision you made.",
        sentence: "I had to make a difficult decision to leave my job. It was a very ___(1)___ decision, but I felt it was the right one for my ___(2)___. It was a time of ___(3)___ and self-reflection, and I am glad I ___(4)___.",
        blanks: [
            { id: "1", answer: "tough" },
            { id: "2", answer: "career" },
            { id: "3", answer: "uncertainty" },
            { id: "4", answer: "stuck to my guns" }
        ],
        words: ["tough", "stuck to my guns", "uncertainty", "career"]
    },
    {
        topic: "Describe a time you had to wait for something.",
        sentence: "I had to wait for a long time at the airport for my flight. I felt very ___(1)___, but I tried to ___(2)___ my time. I read a book and listened to music. It was a good lesson in ___(3)___ and in finding ways to ___(4)___.",
        blanks: [
            { id: "1", answer: "bored" },
            { id: "2", answer: "make good use of" },
            { id: "3", answer: "patience" },
            { id: "4", answer: "pass the time" }
        ],
        words: ["bored", "make good use of", "pass the time", "patience"]
    },
    {
        topic: "Describe a time you were proud of yourself.",
        sentence: "I was very proud of myself when I completed a marathon. It was a very ___(1)___ challenge, but I was able to ___(2)___. It was a great feeling of ___(3)___ and a reminder that I can ___(4)___ my goals.",
        blanks: [
            { id: "1", answer: "physical and mental" },
            { id: "2", answer: "push through the pain" },
            { id: "3", answer: "self-worth" },
            { id: "4", answer: "achieve" }
        ],
        words: ["physical and mental", "achieve", "self-worth", "push through the pain"]
    },
    {
        topic: "Describe a natural place you have visited.",
        sentence: "I visited a beautiful waterfall in the mountains. The sound of the water was very ___(1)___, and the scenery was ___(2)___. It was a great way to ___(3)___ with nature and to feel a sense of ___(4)___.",
        blanks: [
            { id: "1", answer: "soothing" },
            { id: "2", answer: "breathtaking" },
            { id: "3", answer: "reconnect" },
            { id: "4", answer: "peace" }
        ],
        words: ["peace", "soothing", "reconnect", "breathtaking"]
    },
    {
        topic: "Describe a subject you found difficult at school.",
        sentence: "I found physics to be a very difficult subject. It was a real ___(1)___ for me, and I had to ___(2)___ to understand the concepts. It taught me the importance of ___(3)___ and not ___(4)___ when things get tough.",
        blanks: [
            { id: "1", answer: "challenge" },
            { id: "2", answer: "work very hard" },
            { id: "3", answer: "perseverance" },
            { id: "4", answer: "giving up" }
        ],
        words: ["perseverance", "challenge", "giving up", "work very hard"]
    },
    {
        topic: "Describe a childhood memory.",
        sentence: "My favorite childhood memory is playing with my friends in the park. We would spend hours ___(1)___ and ___(2)___. It was a time of pure joy and ___(3)___, and I will always ___(4)___ those memories.",
        blanks: [
            { id: "1", answer: "running around" },
            { id: "2", answer: "exploring" },
            { id: "3", answer: "innocence" },
            { id: "4", answer: "cherish" }
        ],
        words: ["exploring", "running around", "cherish", "innocence"]
    },
    {
        topic: "Describe a time you helped a stranger.",
        sentence: "I once helped a tourist who was lost. He was looking for a specific street and seemed ___(1)___. I was able to ___(2)___ him in the right direction and even ___(3)___. He was very ___(4)___, and it made me feel good.",
        blanks: [
            { id: "1", answer: "confused" },
            { id: "2", answer: "point" },
            { id: "3", answer: "walked with him for a bit" },
            { id: "4", answer: "grateful" }
        ],
        words: ["confused", "grateful", "point", "walked with him for a bit"]
    },
    {
        topic: "Describe a future plan you have.",
        sentence: "I'm planning to ___(1)___ next year. It's a goal I've been working towards for a long time. I know it will be a big ___(2)___, but I'm ready for the ___(3)___. I'm excited to ___(4)___ and see what the future holds.",
        blanks: [
            { id: "1", answer: "start my own business" },
            { id: "2", answer: "challenge" },
            { id: "3", answer: "journey ahead" },
            { id: "4", answer: "embark on this new adventure" }
        ],
        words: ["challenge", "journey ahead", "start my own business", "embark on this new adventure"]
    },
    {
        topic: "Describe an exciting event you went to.",
        sentence: "I went to a music festival last summer, and it was an ___(1)___ experience. The atmosphere was ___(2)___, and the music was incredible. I loved ___(3)___ with all the other fans. It was a great way to ___(4)___ and enjoy a day of music.",
        blanks: [
            { id: "1", answer: "unforgettable" },
            { id: "2", answer: "vibrant" },
            { id: "3", answer: "singing along" },
            { id: "4", answer: "let loose" }
        ],
        words: ["let loose", "unforgettable", "vibrant", "singing along"]
    },
    {
        topic: "Describe a time you helped a family member.",
        sentence: "I helped my grandfather with his garden last weekend. He has a beautiful garden but has a hard time ___(1)___ on his own. I helped him ___(2)___ and ___(3)___. It was a great way to ___(4)___ with him and spend some quality time together.",
        blanks: [
            { id: "1", answer: "taking care of it" },
            { id: "2", answer: "plant some new flowers" },
            { id: "3", answer: "pull some weeds" },
            { id: "4", answer: "bond" }
        ],
        words: ["bond", "taking care of it", "plant some new flowers", "pull some weeds"]
    },
    {
        topic: "Describe a time you were surprised.",
        sentence: "I was surprised when my friends threw a surprise birthday party for me. I had no idea they were planning it. I felt so ___(1)___ and ___(2)___. It was a great reminder of how much my friends ___(3)___ and how lucky I am to have them in my ___(4)___.",
        blanks: [
            { id: "1", answer: "happy" },
            { id: "2", answer: "overwhelmed with joy" },
            { id: "3", answer: "care" },
            { id: "4", answer: "life" }
        ],
        words: ["overwhelmed with joy", "happy", "care", "life"]
    }
];

let currentSlide = 0;
let totalCorrectAnswers = 0;
let isAnswered = false;

function createQuiz(questions) {
    questions.forEach((q, index) => {
        const slide = document.createElement('div');
        slide.classList.add('slide');
        slide.setAttribute('data-index', index);
        if (index === 0) {
            slide.classList.add('active');
        }

        const topicCard = document.createElement('div');
        topicCard.classList.add('topic-card');
        topicCard.innerHTML = `<h3>${q.topic}</h3>`;

        const sentence = document.createElement('p');
        sentence.classList.add('sentence');
        let sentenceHtml = q.sentence;
        q.blanks.forEach(blank => {
            sentenceHtml = sentenceHtml.replace(`___(${blank.id})___`, `<span class="drop-target" data-answer="${blank.answer}"></span>`);
        });
        sentence.innerHTML = sentenceHtml;

        const dragDropArea = document.createElement('div');
        dragDropArea.classList.add('drag-drop-area');

        const shuffledWords = shuffle([...q.words]);
        shuffledWords.forEach(word => {
            const draggable = document.createElement('span');
            draggable.classList.add('draggable');
            draggable.textContent = word;
            draggable.setAttribute('draggable', 'true');
            draggable.addEventListener('dragstart', dragStart);
            dragDropArea.appendChild(draggable);
        });
        
        slide.appendChild(topicCard);
        slide.appendChild(sentence);
        slide.appendChild(dragDropArea);
        ieltsQuiz.appendChild(slide);
    });
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function dragStart(e) {
    e.dataTransfer.setData('text/plain', e.target.textContent);
    e.target.classList.add('dragging');
}

function dragOver(e) {
    e.preventDefault();
}

function drop(e) {
    e.preventDefault();
    const draggedText = e.dataTransfer.getData('text/plain');
    const droppedTarget = e.target;
    const draggableElement = document.querySelector('.dragging');

    if (droppedTarget.classList.contains('drop-target')) {
        // Tr? t? cu v? ch? cu n?u có
        if (droppedTarget.textContent.trim() !== "") {
            const oldDraggable = document.createElement('span');
            oldDraggable.classList.add('draggable');
            oldDraggable.textContent = droppedTarget.textContent;
            oldDraggable.setAttribute('draggable', 'true');
            oldDraggable.addEventListener('dragstart', dragStart);
            const dragDropArea = document.querySelector(`.slide[data-index="${currentSlide}"] .drag-drop-area`);
            dragDropArea.appendChild(oldDraggable);
        }
        
        // Ð?t t? m?i vào
        droppedTarget.textContent = draggedText;
        if (draggableElement) {
            draggableElement.remove();
        }
    }
    if (draggableElement) {
        draggableElement.classList.remove('dragging');
    }
}

function checkAnswers() {
    const currentQuestion = questions[currentSlide];
    const dropTargets = document.querySelectorAll(`.slide[data-index="${currentSlide}"] .drop-target`);
    let correctCount = 0;

    dropTargets.forEach(target => {
        const droppedText = target.textContent;
        const correctText = target.getAttribute('data-answer');
        
        if (droppedText === correctText) {
            target.classList.remove('incorrect');
            target.classList.add('correct');
            target.style.pointerEvents = 'none'; // Lock correct answers
            correctCount++;
        } else {
            target.classList.remove('correct');
            target.classList.add('incorrect');
            // Do not lock incorrect answers, allow user to retry
        }
    });

    if (correctCount === currentQuestion.blanks.length) {
        totalCorrectAnswers++;
        isAnswered = true;
    } else {
        isAnswered = false;
    }

    // Enable next button after check, regardless of correctness
    nextBtn.disabled = false;
}

function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
    currentSlide = index;
    nextBtn.disabled = true; // Disable next button for the new slide
    checkBtn.style.display = 'block';
    updateUI();
}

function updateUI() {
    const totalSlides = questions.length;
    const progress = (currentSlide / totalSlides) * 100;
    progressBar.style.width = `${progress}%`;
}

nextBtn.addEventListener('click', () => {
    if (currentSlide < questions.length - 1) {
        showSlide(currentSlide + 1);
    } else {
        ieltsQuiz.style.display = 'none';
        checkBtn.style.display = 'none';
        nextBtn.style.display = 'none';
        resultSummary.style.display = 'block';
        resultSummary.innerHTML = `
            <h2>Your Result</h2>
            <p>You have completed the quiz!</p>
            <p>Correct answers: <b>${totalCorrectAnswers} / ${questions.length}</b></p>
        `;
    }
});

checkBtn.addEventListener('click', checkAnswers);

createQuiz(questions);
updateUI();

// Attach drop event listeners to all drop targets
const allDropTargets = document.querySelectorAll('.drop-target');
allDropTargets.forEach(target => {
    target.addEventListener('dragover', dragOver);
    target.addEventListener('drop', drop);
});
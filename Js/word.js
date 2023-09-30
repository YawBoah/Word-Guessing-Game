const wordList = [
    {
        word: "accra",
        hint: "Capital city of Ghana"
    },
    {
        word: "ashanti",
        hint: "Ethnic group in Ghana"
    },
    {
        word: "cocoa",
        hint: "Important crop and export of Ghana"
    },
    {
        word: "kente",
        hint: "Traditional woven fabric in Ghana"
    },
    {
        word: "gold coast",
        hint: "Former name of Ghana due to gold resources"
    },
    {
        word: "ghanaian cedi",
        hint: "Currency of Ghana"
    },
    {
        word: "independence",
        hint: "Ghana gained independence from British colonial rule in 1957"
    },
    {
        word: "ghana black stars",
        hint: "National football (soccer) team of Ghana"
    },
    {
        word: "adinkra symbols",
        hint: "Traditional symbols representing concepts in Ghanaian culture"
    },
    {
        word: "fufu",
        hint: "Popular Ghanaian staple food made from cassava and plantains"
    },
    {
        word: "cape coast castle",
        hint: "Historic slave trading fort in Ghana"
    },
    {
        word: "asante stool",
        hint: "Symbol of Ashanti unity and power"
    },
    {
        word: "akosombo dam",
        hint: "Hydropower dam on the Volta River in Ghana"
    },
    {
        word: "akan",
        hint: "Ethnic group in Ghana known for their culture and language"
    },
    {
        word: "ghanaian jollof rice",
        hint: "Delicious rice dish with a Ghanaian twist"
    },
    {
        word: "citi fm",
        hint: "Popular radio station in Ghana"
    },
    {
        word: "lake volta",
        hint: "Largest man-made lake in the world by surface area, located in Ghana"
    },
    {
        word: "kwame nkrumah",
        hint: "First President of Ghana and a key figure in the country's independence movement"
    },
    {
        word: "adomi bridge",
        hint: "Iconic bridge spanning the Volta River in Ghana"
    },
    {
        word: "ghanaian highlife music",
        hint: "Popular genre of music blending African and Western influences"
    },
    {
        word: "ghanaian hospitality",
        hint: "Warm and welcoming culture of the Ghanaian people"
    },
    {
        word: "cedi beads",
        hint: "Traditional Ghanaian beads made from glass or ceramic"
    },
    {
        word: "makola market",
        hint: "Famous market in Accra, Ghana"
    },
    {
        word: "nkrumah mausoleum",
        hint: "Memorial dedicated to Kwame Nkrumah in Accra"
    },
    {
        word: "ghanaian kente weaving",
        hint: "Art of weaving colorful and intricate Kente cloth"
    },
    {
        word: "w.e.b. du bois center",
        hint: "Historical site honoring the civil rights activist in Accra"
    },
    {
        word: "ghanaian films",
        hint: "Ghana's growing film industry known as 'Ghallywood'"
    },
    {
        word: "cocoa swollen shoot virus",
        hint: "Disease affecting cocoa plants in Ghana"
    },
    {
        word: "ghanaian bead-making",
        hint: "Craftsmanship in creating intricate bead designs"
    },
    {
        word: "cocoa board of ghana",
        hint: "Government agency overseeing cocoa production"
    },
    {
        word: "ghanaian dance",
        hint: "Energetic and rhythmic traditional dance forms"
    },
    {
        word: "cape three points",
        hint: "Southernmost point in Ghana"
    },
    {
        word: "ghanaian sankofa bird",
        hint: "Symbolizing learning from the past in Akan culture"
    },
    {
        word: "ghanaian fufu pounder",
        hint: "Traditional utensil used to pound fufu"
    },
    {
        word: "ghanaian art",
        hint: "Vibrant and diverse art scene in Ghana"
    },
    {
        word: "ghanaian proverbs",
        hint: "Wise sayings reflecting cultural values and wisdom"
    },
    {
        word: "ghanaian handicrafts",
        hint: "Traditional crafts like woodcarving and pottery"
    },
    {
        word: "kwahu mountains",
        hint: "Scenic mountain range in Ghana"
    },
    {
        word: "ghanaian textiles",
        hint: "Variety of colorful fabrics used for clothing"
    },
    {
        word: "sailboat",
        hint: "Boat propelled by sails"
    },
    {
        word: "cherry",
        hint: "Small, red fruit"
    },
    {
        word: "lighthouse",
        hint: "Tall tower with a light to guide ships"
    },
    {
        word: "canyon",
        hint: "Deep, narrow valley with steep sides"
    },
    {
        word: "penguin",
        hint: "Flightless, black and white bird"
    },
    {
        word: "rainforest",
        hint: "Lush, tropical woodland with rainfall"
    },
    {
        word: "candle",
        hint: "Wax stick with a wick for lighting"
    },
    {
        word: "dragon",
        hint: "Mythical fire-breathing creature"
    },
    {
        word: "cappuccino",
        hint: "Espresso-based coffee with steamed milk"
    },
    {
        word: "serenade",
        hint: "Musical performance, often romantic"
    },
    {
        word: "rainbow",
        hint: "Colorful arc in the sky after rain"
    },
    {
        word: "desert",
        hint: "Dry, arid landscape with little rainfall"
    },
    {
        word: "tiger",
        hint: "Large, striped carnivorous feline"
    },
    {
        word: "carousel",
        hint: "Merry-go-round amusement ride"
    },
    {
        word: "dolphin",
        hint: "Marine mammal known for its intelligence"
    },
    {
        word: "orchestra",
        hint: "Large ensemble of musicians"
    },
    {
        word: "harbor",
        hint: "Sheltered area for ships"
    },
    {
        word: "astronaut",
        hint: "Person trained for space travel"
    },
    {
        word: "cottage",
        hint: "Small, cozy country house"
    },
    {
        word: "palm Tree",
        hint: "Tropical tree with feather-like leaves"
    },
    {
        word: "peacock",
        hint: "Colorful and elegant bird"
    },
    {
        word: "waterfall",
        hint: "Flowing water from a height"
    },
    {
        word: "cave",
        hint: "Natural underground chamber"
    },
    {
        word: "sushi",
        hint: "Japanese dish with vinegared rice and seafood"
    },
    {
        word: "journey",
        hint: "Adventure or travel from one place to another"
    },
    {
        word: "carnival",
        hint: "Festive event with games and rides"
    },
    {
        word: "pirate",
        hint: "Seafarer who engages in robbery and plunder"
    },
    {
        word: "python",
        hint: "programming language"
    },
    {
        word: "guitar",
        hint: "a musical instrument"
    },
    {
        word: "aim",
        hint: "a purpose or intention"
    },
    {
        word: "venus",
        hint: "planet of our solar system"
    },
    {
        word: "gold",
        hint: "a yellow precious metal"
    },
    {
        word: "ebay",
        hint: "online shopping site"
    },
    {
        word: "golang",
        hint: "programming language"
    },
    {
        word: "coding",
        hint: "related to programming"
    },
    {
        word: "matrix",
        hint: "science fiction movie"
    },
    {
        word: "bugs",
        hint: "related to programming"
    },
    {
        word: "avatar",
        hint: "epic science fiction film"
    },
    {
        word: "gif",
        hint: "a file format for image"
    },
    {
        word: "mental",
        hint: "related to the mind"
    },
    {
        word: "map",
        hint: "diagram represent of an area"
    },
    {
        word: "island",
        hint: "land surrounded by water"
    },
    {
        word: "hockey",
        hint: "a famous outdoor game"
    },
    {
        word: "chess",
        hint: "related to an indoor game"
    },
    {
        word: "viber",
        hint: "a social media app"
    },
    {
        word: "github",
        hint: "code hosting platform"
    },
    {
        word: "png",
        hint: "a image file format"
    },
    {
        word: "silver",
        hint: "precious greyish-white metal"
    },
    {
        word: "mobile",
        hint: "an electronic device"
    },
    {
        word: "gpu",
        hint: "computer component"
    },
    {
        word: "java",
        hint: "programming language"
    },
    {
        word: "google",
        hint: "famous search engine"
    },
    {
        word: "venice",
        hint: "famous city of waters"
    },
    {
        word: "excel",
        hint: "microsoft product for windows"
    },
    {
        word: "mysql",
        hint: "a relational database system"
    },
    {
        word: "ghana",
        hint: "developing country name"
    },
    {
        word: "flute",
        hint: "a musical instrument"
    },
    {
        word: "crypto",
        hint: "related to cryptocurrency"
    },
    {
        word: "tesla",
        hint: "unit of magnetic flux density"
    },
    {
        word: "mars",
        hint: "planet of our solar system"
    },
    {
        word: "proxy",
        hint: "related to server application"
    },
    {
        word: "email",
        hint: "related to exchanging message"
    },
    {
        word: "html",
        hint: "markup language for the web"
    },
    {
        word: "air",
        hint: "related to a gas"
    },
    {
        word: "idea",
        hint: "a thought or suggestion"
    },
    {
        word: "server",
        hint: "related to computer or system"
    },
    {
        word: "svg",
        hint: "a vector image format"
    },
    {
        word: "jpeg",
        hint: "a image file format"
    },
    {
        word: "search",
        hint: "act to find something"
    },
    {
        word: "key",
        hint: "small piece of metal"
    },
    {
        word: "egypt",
        hint: "a country name"
    },
    {
        word: "joker",
        hint: "psychological thriller film"
    },
    {
        word: "Dubai",
        hint: "Developed country name"
    },
    {
        word: "photo",
        hint: "Representation of person or scene"
    },
    {
        word: "nile",
        hint: "Largest river in the world"
    },
    {
        word: "nain",
        hint: "Related to water"
    },
    {
        word: "apple",
        hint: "A popular fruit and tech company"
    },
    {
        word: "ocean",
        hint: "Vast bodies of saltwater on Earth"
    },
    {
        word: "sunshine",
        hint: "Bright and warm sunlight"
    },
    {
        word: "elephant",
        hint: "A large, gray mammal with a trunk"
    },
    {
        word: "adventure",
        hint: "Exciting and daring experiences"
    },
    {
        word: "chocolate",
        hint: "Sweet, brown treat made from cacao"
    },
    {
        word: "galaxy",
        hint: "A massive system of stars and planets"
    },
    {
        word: "friendship",
        hint: "Close and supportive relationships"
    },
    {
        word: "butterfly",
        hint: "Colorful insect with delicate wings"
    },
    {
        word: "mountain",
        hint: "Tall landforms with peaks"
    },
    {
        word: "laughter",
        hint: "The sound of joy and amusement"
    },
    {
        word: "bicycle",
        hint: "Human-powered vehicle with two wheels"
    },
    {
        word: "moonlight",
        hint: "Illumination from the moon"
    },
    {
        word: "camera",
        hint: "Device for capturing photographs"
    },
    {
        word: "forest",
        hint: "Dense, wooded area with trees"
    },
    {
        word: "harmony",
        hint: "Pleasant and balanced combination"
    },
    {
        word: "island",
        hint: "Landmass surrounded by water"
    },
    {
        word: "serenade",
        hint: "Musical performance for someone"
    },
    {
        word: "rainbow",
        hint: "Colorful arc in the sky after rain"
    },
    {
        word: "bookshelf",
        hint: "Furniture for storing books"
    },
    {
        word: "beach",
        hint: "Sandy shore by the sea"
    },
    {
        word: "coffee",
        hint: "Popular caffeinated beverage"
    },
    {
        word: "panda",
        hint: "Large black and white bear"
    },
    {
        word: "starfish",
        hint: "Marine creature with radial arms"
    },
    {
        word: "symphony",
        hint: "Elaborate musical composition"
    },
    {
        word: "treasure",
        hint: "Valuable items hidden or buried"
    },
    {
        word: "waterfall",
        hint: "Flowing water from a height"
    },
    {
        word: "fireworks",
        hint: "Explosive displays of light"
    },
    {
        word: "sunrise",
        hint: "Dawn and the start of the day"
    },
    {
        word: "football",
        hint: "Popular ball sport"
    },
    {
        word: "whisper",
        hint: "Soft spoken words"
    },
    {
        word: "castle",
        hint: "Fortified building with turrets"
    },
    {
        word: "rainforest",
        hint: "Lush, tropical woodland with rainfall"
    },
    {
        word: "camping",
        hint: "Outdoor recreational activity"
    },
    {
        word: "eclipse",
        hint: "Obscuring of one celestial body by another"
    },
    {
        word: "flower",
        hint: "Colorful and fragrant plant bloom"
    },
    {
        word: "jungle",
        hint: "Wild and dense tropical forest"
    },
    {
        word: "kite",
        hint: "Flying object on a string"
    },
    {
        word: "lake",
        hint: "Inland body of water"
    },
    {
        word: "nature",
        hint: "The natural world and its phenomena"
    },
    {
        word: "paradise",
        hint: "A perfect and idyllic place"
    },
    {
        word: "quicksilver",
        hint: "Another name for the element mercury"
    },
    {
        word: "thunderstorm",
        hint: "Storm with lightning, thunder, and rain"
    },
    {
        word: "umbrella",
        hint: "Protection from rain and sun"
    },
    {
        word: "volcano",
        hint: "Mountain that erupts with lava and ash"
    },
    {
        word: "xylophone",
        hint: "Musical instrument with wooden bars"
    },
    {
        word: "yacht",
        hint: "Luxury boat for sailing or cruising"
    },
    {
        word: "zebra",
        hint: "A black and white striped African animal"
    },
    {
        word:"yaw",
        hint:"A male person born on Thursday in Ghana"
    }
];



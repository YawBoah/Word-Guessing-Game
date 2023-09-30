const wordList = [
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
        word: "nepal",
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
        word: "dubai",
        hint: "developed country name"
    },
    {
        word: "photo",
        hint: "representation of person or scene"
    },
    {
        word: "nile",
        hint: "largest river in the world"
    },
    {
        word: "rain",
        hint: "related to a water"
    },
    {
        word: "Dubai",
        hint: "Developed country name"
    },
    {
        word: "Photo",
        hint: "Representation of person or scene"
    },
    {
        word: "Nile",
        hint: "Largest river in the world"
    },
    {
        word: "Rain",
        hint: "Related to water"
    },
    {
        word: "Apple",
        hint: "A popular fruit and tech company"
    },
    {
        word: "Ocean",
        hint: "Vast bodies of saltwater on Earth"
    },
    {
        word: "Guitar",
        hint: "A musical instrument with strings"
    },
    {
        word: "Sunshine",
        hint: "Bright and warm sunlight"
    },
    {
        word: "Elephant",
        hint: "A large, gray mammal with a trunk"
    },
    {
        word: "Adventure",
        hint: "Exciting and daring experiences"
    },
    {
        word: "Chocolate",
        hint: "Sweet, brown treat made from cacao"
    },
    {
        word: "Galaxy",
        hint: "A massive system of stars and planets"
    },
    {
        word: "Friendship",
        hint: "Close and supportive relationships"
    },
    {
        word: "Butterfly",
        hint: "Colorful insect with delicate wings"
    },
    {
        word: "Mountain",
        hint: "Tall landforms with peaks"
    },
    {
        word: "Laughter",
        hint: "The sound of joy and amusement"
    },
    {
        word: "Bicycle",
        hint: "Human-powered vehicle with two wheels"
    },
    {
        word: "Moonlight",
        hint: "Illumination from the moon"
    },
    {
        word: "Camera",
        hint: "Device for capturing photographs"
    },
    {
        word: "Forest",
        hint: "Dense, wooded area with trees"
    },
    {
        word: "Harmony",
        hint: "Pleasant and balanced combination"
    },
    {
        word: "Island",
        hint: "Landmass surrounded by water"
    },
    {
        word: "Serenade",
        hint: "Musical performance for someone"
    },
    {
        word: "Rainbow",
        hint: "Colorful arc in the sky after rain"
    },
    {
        word: "Bookshelf",
        hint: "Furniture for storing books"
    },
    {
        word: "Adventure",
        hint: "Exciting and daring experiences"
    },
    {
        word: "Beach",
        hint: "Sandy shore by the sea"
    },
    {
        word: "Coffee",
        hint: "Popular caffeinated beverage"
    },
    {
        word: "Panda",
        hint: "Large black and white bear"
    },
    {
        word: "Starfish",
        hint: "Marine creature with radial arms"
    },
    {
        word: "Symphony",
        hint: "Elaborate musical composition"
    },
    {
        word: "Treasure",
        hint: "Valuable items hidden or buried"
    },
    {
        word: "Waterfall",
        hint: "Flowing water from a height"
    },
    {
        word: "Fireworks",
        hint: "Explosive displays of light"
    },
    {
        word: "Sunrise",
        hint: "Dawn and the start of the day"
    },
    {
        word: "Soccer",
        hint: "Popular ball sport"
    },
    {
        word: "Whisper",
        hint: "Soft spoken words"
    },
    {
        word: "Castle",
        hint: "Fortified building with turrets"
    },
    {
        word: "Rainforest",
        hint: "Lush, tropical woodland with rainfall"
    },
    {
        word: "Adventure",
        hint: "Exciting and daring experiences"
    },
    {
        word: "Sunrise",
        hint: "Dawn and the start of the day"
    },
    {
        word: "Telescope",
        hint: "Optical instrument for distant viewing"
    },
    {
        word: "Butterfly",
        hint: "Colorful insect with delicate wings"
    },
    {
        word: "Moonlight",
        hint: "Illumination from the moon"
    },
    {
        word: "Symphony",
        hint: "Elaborate musical composition"
    },
    {
        word: "Laughter",
        hint: "The sound of joy and amusement"
    },
    {
        word: "Chocolate",
        hint: "Sweet, brown treat made from cacao"
    },
    {
        word: "Waterfall",
        hint: "Flowing water from a height"
    },
    {
        word: "Starfish",
        hint: "Marine creature with radial arms"
    },
    {
        word: "Treasure",
        hint: "Valuable items hidden or buried"
    },
]
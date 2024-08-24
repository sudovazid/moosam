document.addEventListener("DOMContentLoaded", () => {
    const searchButton = document.querySelector(".material-symbols-outlined");
    const searchBar = document.querySelector(".search-bar");
    const cityElement = document.querySelector(".city");
    const dateTimeElement = document.querySelector(".date-time");
    const temperatureElement = document.querySelector(".temperature");
    const descriptionElement = document.querySelector(".description");
    const tempRangeElement = document.querySelector(".temp-range");
    const windElement = document.querySelector(".weather-details .detail-item:nth-child(1) div:nth-child(2)");
    const humidityElement = document.querySelector(".weather-details .detail-item:nth-child(2) div:nth-child(2)");
    const cloudElement = document.querySelector(".weather-details .detail-item:nth-child(3) div:nth-child(2)");
    const uvElement = document.querySelector(".weather-details .detail-item:nth-child(4) div:nth-child(2)");
    const conditionElement = document.querySelector(".condition");

    const colorPalettes = [
        { backgroundColor: "#F7D101", contentColor: "#000000" },
        { backgroundColor: "#12229D", contentColor: "#F4F6FC" },
        { backgroundColor: "#760504", contentColor: "#FBDC6A" },
        { backgroundColor: "#155E14", contentColor: "#D2FFAA" },
        { backgroundColor: "#D7DF23", contentColor: "#152039" },
        { backgroundColor: "#d7df23", contentColor: "#152039" },
        { backgroundColor: "#4c7031", contentColor: "#ffffff" },
        { backgroundColor: "#503530", contentColor: "#ede8ea" },
        { backgroundColor: "#001f3d", contentColor: "#f8dcbf" },
        { backgroundColor: "#e84e38", contentColor: "#d2ffaa" },
        { backgroundColor: "#2b4743", contentColor: "#ffd3db" },
        { backgroundColor: "#ffc61a", contentColor: "#372a28" },
        { backgroundColor: "#88ca5e", contentColor: "#155e14" },
        { backgroundColor: "#8c3839", contentColor: "#ffd3db" },
        { backgroundColor: "#810947", contentColor: "#FFFFFF" },
        { backgroundColor: "#763c00", contentColor: "#f9f7dc" },
        { backgroundColor: "#ffce6d", contentColor: "#291b25" },
        { backgroundColor: "#CAE8FF", contentColor: "#050A30" },
        { backgroundColor: "#2B192E", contentColor: "#F5E8DA" },
        { backgroundColor: "#7B3911", contentColor: "#EBA327" },
        { backgroundColor: "#E1F16B", contentColor: "#272727" },
        { backgroundColor: "#E3DDDC", contentColor: "#2F3B69" },
        { backgroundColor: "#795833", contentColor: "#F0DFC8" },
        { backgroundColor: "#AFC1D0", contentColor: "#0B1320" },
        { backgroundColor: "#EDFFCC", contentColor: "#81B622" },
        { backgroundColor: "#745E4D", contentColor: "#F8F7F4" }
    ];

    const applyRandomColorPalette = () => {
        const randomPalette = colorPalettes[Math.floor(Math.random() * colorPalettes.length)];
        document.body.style.backgroundColor = randomPalette.backgroundColor;
        document.documentElement.style.setProperty("--content-color", randomPalette.contentColor);
    };

    const expandedFunnyWeatherMessages = {
        Sunny: [
            "Sunshine on a cloudy day.",
            "Sunglasses mandatory, happiness overload!",
            "Sunglasses on, blindingly bright day!",
            "SPF 50 or lobster status."
        ],
        Cloudy: [
            "Playing peek-a-boo with the sun.",
            "Sun playing hide and seek.",
            "Clouds everywhere, sun's day off.",
            "Sun's vacation behind the clouds."
        ],
        Rain: [
            "Nature's water slide.",
            "Perfect weather for rubber duckies.",
            "Puddle-jumping contest starts today.",
            "Perfect weather for duck parades."
        ],
        Snow: [
            "Winter wonderland, but without the snow.",
            "Time for hot cocoa cuddles!",
            "Snowball fights in the forecast.",
            "Snow angels, sledding, and cocoa."
        ],
        Storm: [
            "Mother Nature's temper tantrum.",
            "Stay indoors, dodge flying umbrellas.",
            "Windshield wipers working overtime today.",
            "Rain boots on, chaos approaching."
        ],
        Wind: [
            "Hair today, gone tomorrow.",
            "Hairdos blown to new heights!",
            "Hats blown into neighboring towns.",
            "Hair's personal roller coaster ride."
        ],
        Hot: [
            "Feeling like a baked potato.",
            "Turned sidewalk into frying pan.",
            "Melting popsicles at record speed.",
            "Human microwave, popcorn popping weather."
        ],
        Cold: [
            "Shivering like a leaf.",
            "Penguin-approved, shiver-worthy temperatures.",
            "Ice cubes have new competition.",
            "Frozen noses and red cheeks."
        ],
        Humid: [
            "Feeling like a swamp.",
            "Instant sauna, no towel required.",
            "Sweating while standing completely still.",
            "Walking through invisible, sticky jelly."
        ],
        Dry: [
            "Parched like a desert.",
            "Thirsty air seeks water badly.",
            "Water bottles feeling extra important.",
            "Desert weather: lizards are thrilled."
        ],
        Fog: [
            "Lost in a sea of mist.",
            "Mystery movie set outside today.",
            "Car headlights in ghost mode.",
            "Lost in neighborhood, thanks fog!"
        ],
        Ice: [
            "Slipping and sliding on a frozen lake.",
            "Slippery sidewalks, penguin-style walking.",
            "Penguins approve of driveway conditions.",
            "Slip 'n slide sidewalks ahead."
        ],
        Drizzle: [
            "A gentle rain, perfect for a cozy day.",
            "Ideal day for soup lovers.",
            "Free shower, courtesy of nature.",
            "Barely raining, hair still frizzes."
        ],
        Sleet: [
            "A mix of snow and rain, a wintery surprise.",
            "Confused weather, ice plus rain.",
            "Ice and rain: nature's cocktail.",
            "Rain can't decide: ice today?"
        ],
        Hail: [
            "Nature's tiny ice balls.",
            "Nature's popcorn falling from sky.",
            "Roof-pinging hail concert in session.",
            "Free denting service from the sky."
        ],
        Tropical: [
            "Hot and humid, with a hint of paradise.",
            "Coconut drinks and sweaty palms.",
            "Vacation weather, coconut optional, sweat guaranteed.",
            "Beach vibes with indoor sweating."
        ],
        Arctic: [
            "Freezing cold and snowy.",
            "Frostbite just waiting to happen.",
            "Polar bears might feel comfortable.",
            "Perfect day for hot chocolate."
        ],
        Pleasant: [
            "Perfect weather for anything.",
            "Weather so good, smiles everywhere.",
            "Perfect picnic, no ants invited.",
            "Weather so good, smiles contagious."
        ],
        Unpredictable: [
            "Mother Nature's mood swings.",
            "Weather channel throwing white flags.",
            "Mother Nature's mood swings showing.",
            "Mother Nature spinning weather roulette."
        ],
        Beautiful: [
            "A day to remember.",
            "Picture-perfect postcard weather today.",
            "Day made for Instagram selfies.",
            "Birds singing, flowers are blooming."
        ],
        Breezy: [
            "A gentle wind, perfect for flying a kite.",
            "Kite's best friend, hair's enemy.",
            "Wind messing up hairdos.",
            "Lightweight items taking unexpected flights."
        ],
        Muggy: [
            "Hot and sticky, like a summer day.",
            "Welcome to the human sauna.",
            "Air feels like warm soup.",
            "Like wearing the air itself."
        ],
        Overcast: [
            "Cloudy and gloomy.",
            "No sunburn, but no fun.",
            "Grey clouds having a party.",
            "Sun forgot to set alarm."
        ],
        Clear: [
            "A cloudless sky, perfect for stargazing.",
            "Starry night guaranteed, bring telescope.",
            "Zero clouds, zero worries today.",
            "Stars out, moonshine in abundance."
        ],
        Calm: [
            "No wind, a peaceful day.",
            "Pond-level stillness, nap-worthy weather.",
            "Peaceful as a sleeping kitten.",
            "Lake mirror-smooth, tranquility everywhere."
        ],
        Mild: [
            "Pleasant and comfortable.",
            "Cardigan weather, no complaints here.",
            "Perfect sweater weather, fashion alert.",
            "No sweat, no shivers, perfect."
        ],
        Chilly: [
            "A bit cold, but not freezing.",
            "Warm cocoa season has begun.",
            "Sweater season officially in session.",
            "Jackets out, but not coats."
        ],
        Scorching: [
            "Extremely hot, like a desert.",
            "Heat so high, sunbathing ants.",
            "Sidewalk hotter than lava flow.",
            "Like the sun moved closer."
        ],
        Frigid: [
            "Very cold, like the arctic.",
            "Time to embrace the igloo.",
            "Frostbite forecast, wear extra layers.",
            "Icicles growing on everything imaginable."
        ],
        Showers: [
            "Brief periods of rain.",
            "Rain coat required, umbrella optional.",
            "Nature testing your raincoat's quality.",
            "Sporadic rain, umbrella pop quiz."
        ],
        Thunderstorm: [
            "Heavy rain, thunder, and lightning.",
            "Zeus having a drum session.",
            "Sky's drumming up a storm.",
            "Nature's light show and soundtrack."
        ],
        Flurries: [
            "Light snowfalls.",
            "Snowflakes auditioning for winter ballet.",
            "Snowflakes practicing synchronized dancing.",
            "Snowflakes on a slow mission."
        ],
        Squall: [
            "Sudden, strong winds and rain.",
            "Hold onto hats and dogs!",
            "Surprise wind gusts, hats beware!",
            "Wind's sneak attack, raindrops follow."
        ],
        Drought: [
            "A period of little or no rain.",
            "Rainclouds on vacation, desert scene.",
            "Lawn sprinklers on high alert.",
            "Plants praying for rain miracle."
        ],
        Heatwave: [
            "A period of unusually hot weather.",
            "Eggs frying on car hoods.",
            "Like walking inside an oven.",
            "Ice cream trucks working overtime."
        ],
        Frost: [
            "Ice crystals that form on surfaces.",
            "Car windshields now icy canvases.",
            "Ice fairies decorating everything beautifully.",
            "Nature's glitter on morning grass."
        ],
        Hurricane: [
            "A severe tropical storm with high winds and heavy rain.",
            "Stay inside, binge-watch weather reports.",
            "Hold onto your roof, folks!",
            "Gale-force wind hair makeover guaranteed."
        ],
        Tornado: [
            "A violent, rotating column of air.",
            "Dorothy's favorite weather, twisters incoming!",
            "Wizard of Oz weather incoming.",
            "Sky's spinning like washing machine."
        ],
        Typhoon: [
            "A hurricane in the western Pacific Ocean.",
            "Tropical storm with a twist.",
            "Mega storm, umbrellas not enough.",
            "Weather's playing spin-the-cloud."
        ],
        Cyclone: [
            "A storm system that rotates around a low-pressure center.",
            "Nature's blender set to high.",
            "Spin cycle set to extreme.",
            "Weather's playing spin-the-cloud."
        ]
    };

    let lastFunnyMessageIndex = {};

    const getFunnyWeatherMessage = (condition) => {
        const normalizedCondition = condition.toLowerCase();
        for (const [key, messages] of Object.entries(expandedFunnyWeatherMessages)) {
            if (normalizedCondition.includes(key.toLowerCase())) {
                let index;
                if (lastFunnyMessageIndex[key] === undefined) {
                    index = Math.floor(Math.random() * messages.length);
                } else {
                    // Ensure a different message is shown
                    do {
                        index = Math.floor(Math.random() * messages.length);
                    } while (index === lastFunnyMessageIndex[key] && messages.length > 1);
                }
                lastFunnyMessageIndex[key] = index;
                return messages[index];
            }
        }
        return "Weather's being weird today!";
    };

    const fetchWeatherData = (location) => {
        const xhr = new XMLHttpRequest();
        xhr.withCredentials = true;

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === this.DONE) {
                const data = JSON.parse(this.responseText);
                updateWeatherData(data);
                fetchPast12HoursWeatherData(location);
                applyRandomColorPalette();
            }
        });

        const query = `https://weatherapi-com.p.rapidapi.com/current.json?q=${encodeURIComponent(location)}`;
        xhr.open("GET", query);
        xhr.setRequestHeader("x-rapidapi-key", "fd4a51179fmsh87677cfe4263525p17d2fejsn16fd16e2b2ca");
        xhr.setRequestHeader("x-rapidapi-host", "weatherapi-com.p.rapidapi.com");

        xhr.send(null);
    };

    const fetchPast12HoursWeatherData = (location) => {
        const xhr = new XMLHttpRequest();
        xhr.withCredentials = true;

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === this.DONE) {
                const data = JSON.parse(this.responseText);
                updatePast12HoursWeatherData(data);
            }
        });

        const query = `https://weatherapi-com.p.rapidapi.com/history.json?q=${encodeURIComponent(location)}&dt=${getTodayDate()}`;
        xhr.open("GET", query);
        xhr.setRequestHeader("x-rapidapi-key", "fd4a51179fmsh87677cfe4263525p17d2fejsn16fd16e2b2ca");
        xhr.setRequestHeader("x-rapidapi-host", "weatherapi-com.p.rapidapi.com");

        xhr.send(null);
    };
    const getTodayDate = () => {
        const today = new Date();
        return today.toISOString().split("T")[0];
    };

    const updateWeatherData = (data) => {
        const locationParts = [];
        if (data.location.name) locationParts.push(data.location.name);
        if (data.location.region) locationParts.push(data.location.region);
        if (data.location.country) locationParts.push(data.location.country);
        
        cityElement.textContent = locationParts.join(", ");
        dateTimeElement.textContent = data.location.localtime;
        temperatureElement.textContent = `${data.current.temp_c}°C`;
        const funnyMessage = getFunnyWeatherMessage(data.current.condition.text);
        descriptionElement.textContent = funnyMessage;
        tempRangeElement.textContent = `${Math.round(data.current.temp_c - 1)}°C - ${Math.round(data.current.temp_c + 1)}°C`;
        windElement.textContent = `${data.current.wind_kph} km/h`;
        humidityElement.textContent = `${data.current.humidity}%`;
        cloudElement.textContent = `${data.current.cloud}%`;
        uvElement.textContent = data.current.uv;

        conditionElement.textContent = data.current.condition.text;
    };


    const updatePast12HoursWeatherData = (data) => {
        const hourlyForecast = document.querySelector(".hourly-forecast");
        hourlyForecast.innerHTML = "<h3>Past 12 Hour</h3>";

        const currentTime = new Date();
        const past12Hours = data.forecast.forecastday[0].hour.filter((hourData) => {
            const hourTime = new Date(hourData.time);
            return currentTime - hourTime <= 12 * 60 * 60 * 1000 && hourTime <= currentTime; // Only include past 12 hours
        });

        past12Hours.forEach((hour) => {
            const hourlyItem = document.createElement("div");
            hourlyItem.className = "hourly-item";
            hourlyItem.innerHTML = `
                <span>${new Date(hour.time).getHours() % 12 || 12} ${new Date(hour.time).getHours() < 12 ? "AM" : "PM"}</span>
                <span>${hour.condition.text}</span>
                <span>${hour.temp_c}°C</span>
            `;
            hourlyForecast.appendChild(hourlyItem);
        });
    };

    searchButton.addEventListener("click", () => {
        const location = searchBar.value.trim();
        if (location) {
            fetchWeatherData(location);
        }
    });

    searchBar.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            const location = searchBar.value.trim();
            if (location) {
                fetchWeatherData(location);
            }
        }
    });


    // Default city weather data on load
    fetchWeatherData("Boston, Massachusetts, United Kingdom");
});

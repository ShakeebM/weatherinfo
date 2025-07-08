//   {
//     "name": "London",
//     "local_names": {
//       "ug": "لوندۇن",
//       "he": "לונדון",
//     },
//     "lat": 42.9832406,
//     "lon": -81.243372,
//     "country": "CA",
//     "state": "Ontario"
//   },
export interface City {
    name: string;
    local_names?: {
        [key: string]: string;
    };
    lat: number;
    lon: number;
    country: string;
    state?: string;
}

// {"coord":{"lon":77.6033,"lat":12.9762},"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04n"}],"base":"stations","main":{"temp":296.52,"feels_like":296.77,"temp_min":296.52,"temp_max":296.52,"pressure":1012,"humidity":71,"sea_level":1012,"grnd_level":914},"visibility":10000,"wind":{"speed":6.41,"deg":259,"gust":11.26},"clouds":{"all":79},"dt":1751989156,"sys":{"country":"IN","sunrise":1751934531,"sunset":1751980802},"timezone":19800,"id":1277333,"name":"Bengaluru","cod":200}
export interface WeatherData {
    coord: {
        lon: number;
        lat: number;
    };
    weather: {
        id: number;
        main: string;
        description: string;
        icon: string;
    }[];
    base: string;
    main: {
        temp: number;
        feels_like: number;
        temp_min: number;
        temp_max: number;
        pressure: number;
        humidity: number;
        sea_level?: number;
        grnd_level?: number;
    };
    visibility: number;
    wind: {
        speed: number;
        deg: number;
        gust?: number;
    };
    clouds: {
        all: number;
    };
    dt: number;
    sys: {
        country: string;
        sunrise: number;
        sunset: number;
    };
    timezone: number;
    id: number;
    name: string;
    cod?: number;
}

export interface WeatherState {
    selectedCity: City | null;
    report: WeatherData | null;
}

export interface CitiesState {
    list: City[];
    history: City[];
    loading: boolean;
}
# WeatherApp
This is my first JavaScript project, It is a application that can be used to check weather from all over the globe

Beginning: 
I chose this project because I wanted to do something that I have an interest in, and for some reason I love checking the weather of places across the world. There is good websites for this but I wanted mine to provide a simplicity that you cannot really get from websites online. I made mine just so that It will show the city, weather, humidity, and what type of condition it is

Initiation: 
first I started working on the html portion of the code, this is where I made the base of my actual output giving the user an area to input a city, and a get weather option which would submit the application. There is also the card option which is there to make it look nice when you are outputing it

styles.css:
I made a temporary user input for my index.html so that I can customize my style inside of the styles.css file. some of the customizations i made were the background colour, alligning items, making borders for the categroie ssuch as the city input, button, hovering over the button. I then added a special gradient background for the card which holds all the information. I took inspiration from this from a drink i had on vacation called the Verdano Sunrise which i miss so much.  I then had a bunch of display options so that I can display everything such as cityDisplaym tempDisplay, humiditydisplay, descDisplay, weatherEmoji, errorDisplay

index.js
For this project i had to get an API key from openweather, this would allow me to access real time weather updates from their website
an event lsitener is added to weatherForm to trigger a function on form submission
the default form submission action is rpevented to avoid page reload
the getWeatherData function constructs a url with the city name and API key then fetches weather from the openweathermap
Display Weather information: extreacts relevant data from the api response such as city name, temperature, humidity, weather discription, and weather id 
Weather emoji RepresenationL this function returns an emoji based on the weather ID
Display error condition: Creates a paragraph element to display error messages
adds this paragraph to the card container for visibility

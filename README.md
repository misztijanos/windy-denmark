WindyDenmark.com is a website that shows weather information about cities in Denmark. All the requirements below are a wishlist from the PO and you have to be pragmatic in choosing which things to implement and which to release later.

    Every city is shown on a “city card”. A city card includes the following weather information:
    City name
    A weather icon
    Forecast main name - such as “Partly cloudy”, “Sunny” etc
    Temperature in degrees Celsius
    Wind speed name - such as “Gentle Breeze”, “Strong Wind” etc
    Wind speed
    Wind direction (code)
    Cloudiness in percentage
    Additionally, the city card includes the possibility to add the city to a list of favourites (which sits at the top of the page) - see details below.

    The list of cities is shown using pagination. There is a “Load more” button to load the next batch of cities.
    Data for displayed cities should be no more than 6 hours old.
    You can sort the list of cities by:
    Proximity - the closest city to my current location
    Most windy right now - most windy in Denmark right now, by wind speed
    Least windy right now - least windy in Denmark right now, by wind speed
    You can add a city to favourites:
    The Favourites list is pinned at the top of the screen - see wireframe
    Behaviour:
    Given that a city is not added to favorites,
    When I click on the star at the upper right corner of a city card
    Then I add it to my favourites list at the top of the page
    Given that a city is in the favourites list,
    When I click on the star at the upper right corner of a city card
    Then I get a modal asking me if I’m sure that I want to remove the city from the favourites list. If I click Yes, then the city gets immediately removed from favourites. If I click No, then the city stays in the list.
    Weather information for favourite cities must update every 30 minutes.

Technical requirements

The following requirements from the technical lead are not optional. Strive for reliable, maintainable and testable code.

    Use the free version of the OpenWeatherMap API to get the data you need

https://openweathermap.org/current (If you have trouble getting the list of cities, use this link: http://bulk.openweathermap.org/sample/)

    Show how to organize/design CSS (you can use a preprocessor of your own choice)
    Show hot to organize/design reusable components
    Use Redux Toolkit for state
    Use TypeScript because it the right thing to do
    (Stretch) Implement a caching and request strategy

Final thoughts

We don’t expect a perfect assignment, but be prepared to talk about what you could have done differently if you had more time. Good luck and we look forward to your solution.

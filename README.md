# EV.Energy coding challange

![EV.Energy](assets/screenshot.png?raw=true "EV.Energy App")

## Instructions on how to run the application on a new computer

1. Install the dependencies

### `npm install`

2. Run app

$ npm start

# Work flow

1. Generated an API key from openchargemap.org and tested the API on POSTMAN

2. Drew a mock-up example of how the app should look and thought about the functionalities should/could be included

3. Started building up the pages and then seperating the parts into components

4. Added some styling

5. Cleaned the code

## Styling

Styling was made using Styled components.

## What whould I include (or do differently) if I had more time

- On the main page let the user first select the country (now you can search only for changing stations in UK) - UK, Sweden, Germany etc.
- Search by more parameters - postcode, street name etc. Now you can search only by the city name.
- Add a filter - user could filter by connection type, number of connections, power etc.
- Instead of having card with the charging station and information about it, would be better to have a map, showing the pin where the user is and pins (different color) where are the charging stations. Since with the cards the user can't see which changing station is where.
- When the user presses on a card or a pin (if it's a map), a Modal would open with all the information about the chosen charging point and the button "Charge" would be there.


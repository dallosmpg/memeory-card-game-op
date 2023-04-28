# Memory card game for TOP
## Planning 
### Components
- Header
  - The actual header
  - Scoreboard (maybe able to implement 1 comp.)
    - Current score
    - Best score
- Main 
  - Card wrapper
  - Cards
- Footer

### Features
- card randomizer
- keeping track of clicked cards
- keeping track of score
- reseting tracked cards and score on gameover
- signaling gameover with red blinking on score

### Comp. structure
- index
  - App
    - Header
      - Text header
      - Scoreboard
    - Gameboard
      - A comp. that aggragates cards and gamelogic
      - Card
    - Footer

### State needed
- Score // App
- Clicked cards // App


## Development
### Encountered challanges

### Process

### Devlog



Take a little bit of time to think about how you want to implement your application, the features you want to implement, which components you need, and how to structure your application. Your application should include a scoreboard, which counts the current score, and a “Best Score”, which shows the best score you achieved thus far. You also need a couple of cards that display images and possibly informational text. There should be a function that displays the cards in a random order anytime a user clicks one. Be sure to invoke that function when the component mounts.

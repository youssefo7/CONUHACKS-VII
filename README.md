# Sliding Tiles-The NeonPossible Game 
Introducing the ultimate puzzle game for picture enthusiasts! With our game, users can upload their own pictures and put their problem-solving skills to the test by sliding tiles to restore the image to its original form. The unique feature of this game is the ability to upload personal images, making the experience more engaging and personalized. The game is easy to use and can be played on any web browser. It's perfect for anyone looking for a fun and challenging way to improve their cognitive skills. Try it now and see how fast you can solve the puzzle!
## Inspiration
We were inspired to create a puzzle game that allows users to upload their own pictures after playing a similar game on my phone and realizing how much more enjoyable it was to solve puzzles with images that were personal to us. We wanted to create a game that would be easy for anyone to use, regardless of their technical skill level, and that would be accessible on any web browser.

## What it does

## How we built it

We began by researching different web development technologies and frameworks that would be suitable for building this type of game. We decided to use React as the main framework and JavaScript for the logic of the game. I also used HTML and CSS for the front-end design.


## Challenges we ran into
One of the main challenges we faced while building the game was figuring out how to split the uploaded image into 9 tiles and then randomly shuffle them. We used the canvas element and the Canvas API to draw the image on the canvas and extract the image data. We then used a nested loop to split the image data into 9 tiles and randomly shuffle their coordinates.

Another challenge we faced was handling the user input, specifically the sliding of the tiles. We used JavaScript to add event listeners to the tiles, and then used the logic to check if the move is valid or not.
## Accomplishments that we're proud of and What we learned
In the end, we learned a lot about web development and programming concepts, such as working with images and handling user input. We also learned about the importance of good testing and debugging practices, as well as the importance of user feedback in the development process. Overall, we am very proud of the final product, and we believe that it is a fun and engaging game that provides a unique experience for users.

## What's next for The NeonPossible Game
We would like to be able to display a leaderBoard of best times for puzzles, we would want to have options on the dimensions of the puzzle. Eventually we would want to write an algorithm that finds the solution if the user wants to give up, we could also use the solution to display the number of moves it would take to complete the puzzle to make it easier for the player to know how close they are to the solution.

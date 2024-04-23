# Bottle Rocket

### My Website
- [260Rocket - My Startup Project](https://startup.260rocket.click/)
- [Simon - My most recently deployed version](https://simon.260rocket.click/)
- [Default 260 Page](https://260rocket.click/)

### Important Links
- [My notes](https://github.com/stoutjmBYU/startup/blob/main/notes.md)
- [Voter Example README from class](https://github.com/webprogramming260/startup-example)


## Specification Deliverable
A simply satisfying game where users click an image of a rocket ship as many times as they can in 5 seconds and then it blasts off. Using two simple animations the game will be fun enough to play a few times. The leaderboard shown at the end gives players a challenge, and will inspire friends to compete with each other as well.

### Design 
There will be a login/register page so usernames and progress are remembered by a backend database.
![image](https://github.com/stoutjmBYU/startup/assets/166927923/e6d4b555-417d-4f3c-8e3c-7f7f94911ac1)

And a play page where the actual game is and where the high scores table will be displayed after.
![image](https://github.com/stoutjmBYU/startup/assets/166927923/83e39f25-a403-455e-9257-1cc48e6fdd88)

### Key Features
- Secure HTTPS login.
- Scores are persistently stored.
- Fun/animated button clicking.
- Ability to see other player's scores.

### Technologies
I will use:
- HTML - To structure the login page and the button press page.
- CSS - Dynamic styling for different screen sizes. Cartoonish saturated colors. And very simple "satisfying" animation for the click and the rocket blasting off and accelerating away.
JavaScript - Login, button functionality, sending score to the database, displaying other user scores, and any other endpoint calls.
- Service - Backend service with endpoints for:
  - login
  - retrieving old high scores
  - submitting new scores
- DB/Login - Store users and scores in database. Register and login users. Credentials securely stored in database.
- WebSocket - After a user finishes one round, their score is broadcast to all other active users.
- React - Application ported to use the React web framework.


## HTML Deliverable
I added my first html files, added the deployment script. Used CodePen to turn the Simon projects stuff into my own project.
Also basically just made my whole development pipeline easier to understand, I've saved important lines of code in my local notes (not github ones) and everything up to this point is working smoothly.


## CSS Deliverable
For this deliverable I styled my application to have a flashy red and white look fitting for a rocket.
 - [x] Header, footer, and main content body
 - [x] Navigation elements - I set the colors to black instead of blue and removed the underlines.
 - [x] Responsive to window resizing - I implemented dynamic fitting with flex.
 - [x] Application elements - Used good contrast and whitespace
 - [x] Application text content - Consistent fonts
 - [x] Application images - I included the trademark image from the example project as well as a rocket ship placeholder image from google. I drew my own rocket ship, but I don't want to upload it to github so I'm waiting until the database part of the project.

## JavaScript Deliverable
I've deployed the JavaScript version of Simon now! HTML, CSS, and JavaScript all down.
- [ ] Putting in the JavaScript for my own implementation should be rather quick at this point since my program doesn't do anything too crazy.

- [ ] Login - implemeneted, and the play page remembers the name you entered.
- [ ] Logic - The clicker works and the number of times they press it is saved with their name into the data base. I also have the 5 second timer disable the button when it is done and the instructions changing to post game instructions to give a sense of the game wrapping up.
- [ ] Database - using local storage, will be replaced with an AWS data base later.
- [ ] Websocket - The scores page represents websocket use as I plan to make it update for all users whenever a new score is entered.

# Bottle Rocket
My notes: [Notes](https://github.com/stoutjmBYU/startup/blob/main/notes.md)

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

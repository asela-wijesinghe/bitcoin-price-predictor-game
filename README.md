### Bitcoin Price Predictor - Game:v:

Final Product Preview

![Bitcoin-Game](https://i.imgur.com/anaRZjr.png)

by Asela-Wijesinghe (Full Stack Developer)

<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [Bitcoin Price Predictor - Game:v:](#bitcoin-price-predictor-gamev)
  - [How to Play](#how-to-play)
  - [How to run the App](#how-to-run-the-app)
    - [Backend](#backend)
    - [Frontend](#frontend)
  - [Deployment](#deployment)
    - [Deployment Pipeline](#deployment-pipeline)
    - [Scalability](#scalability)

<!-- /code_chunk_output -->

#### How to Play

This application was created to be used as a leisure time game for those who like to see how bitcoin prices will change over time.

When you are using the application for the 1st time you will need to enter your name and signup for the game. Then you can follow the guideline and play the game. When you want to take a break you can close the browser and later could come back to where you left. If you want to exit the game there is exit button and there after you will have to create a new user if you want to rejoin.

You also have an all players leaderboard to check where you are in the game.

#### How to run the App

Based on a monolithic scalable approach the application architecture and the folder structures have been initiated for both FE and BE applications.

The below technologies have used to create the final product. But you can find how to easily get the application up and running

`Javascript / React / GraphQL / Mongoose / Apollo-Client / Apollo-Server / AWS`

###### Backend

1. Clone the project to the local machine
2. Go to the BE folder and open a terminal
3. Do a `yarn install` (Or your preffered npx/npm command)
4. You need a `.env` file with sensitive info related to DB etc and you can contact me to get the predefined file. Copy that file into `<repo>/BE` folder.
5. Do a `yarn start`

###### Frontend

1. Clone the project to the local machine
2. Go to the FE folder and open a terminal
3. Do a `yarn install` (Or your preffered npx/npm command)
4. Do a `yarn start`

#### Deployment

Suggested deployment architecture would be something like this to start with. Monolythic and simple, but can differ in future based on the real application situation.

###### Deployment Pipeline

For the moment the pipeline is quite simple and it uses `CodeDeploy` and uses the below described structure

![Code-Deploy-Results](https://i.imgur.com/hi8gc5c.png)

Initially the code is pushed to the s3 bucket upon running the `yarn deploy` script, which automatically start the deployment trigger and provides below results.

![Code-Deploy-Results](https://i.imgur.com/PNoSLQr.png)

###### Scalability

For scaling purposes the BE I wouldn't focus on horizontal scaling in the begining, I would rather focus on a good load balancer and reliable and auto scalable performant EC2 to give me higher vertical scalability for the BE if there are more and more users for the game.

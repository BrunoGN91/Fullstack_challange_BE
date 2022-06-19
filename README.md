
### Fullstack Challenge Backend

https://balance-meter-challenge.netlify.app/

Built in NodeJs, using Sequelize (MySQL) as an ORM connecting to an SQL RDBMS


Works in connection with its server-side partner https://github.com/BrunoGN91/Fullstack_challenge_FE built in React

## Local Enviroment for testing

Since the app is deployed in heroku and working with its serverside partner, the HTTP requests are all linked
to its partner in the heroku app.

In order to start testing in a local enviroment you should:

Replace the .env.example file

```bash
.env.example
```

with

```bash
.env
```

That way you can config any port / host for your MySql database.

so that you use your own local ports.

## Installation

You will need to pull the server side of the app built in React - Vite - https://github.com/BrunoGN91/Fullstack_challenge_FE

Once its set up you can run this app after the following commands:

```bash
npm install
```

```bash
npm run dev
```

if you dont have nodemon installed globaly: 

```bash
npm run start
```

Enjoy!



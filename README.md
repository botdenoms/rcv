# RCV
RVC (Ranked Choice Voting ) is a web app that implements the ranked choice approach
in voting. In the web app users can setup/create an election, participate in
one or view upcoming or previously done elections.

the elections are at the moment minimal, but future upgrades expected to make the web app
more robust with more features.

## features
- Browse the elections done on the platform
- Create an election
- Vote in an election
- visualise the results of completed elections 

## Development
developed with [Vite](https://vitejs.dev/) using the [react](https://reactjs.org/) template

## Building
Setting up the web app.

1. Updated the [config.js]() file with your working API endpoints, or use the spring boot based Rest api [RCV backend](https://github.com/botdenoms/rcv-backend), Setup and documentation found in the repo.

Note: use the [RCV backend](https://github.com/botdenoms/rcv-backend) documentation as a reference to implementing your custom backend on how the System calls works.

2. After cloning the repo, install the dependecies

```
npm install
```

3. Run in dev mode using the 

```
npm run dev
```

4. Or build using

```
npm run build
```

The generated build folder contains the build, host the folder in a domain or run locally

## More
For links to more information on ranked choice voting

Find more on [Ballotpedia](https://ballotpedia.org/Ranked-choice_voting_(RCV)) about ranked choice voting

Information on [Wikipedia](https://en.wikipedia.org/wiki/Ranked_voting) about ranked choice voting

## miscellaneous 
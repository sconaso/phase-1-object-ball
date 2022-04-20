function gameObject() {
    return {
        home: {
            teamName:'Brooklyn Nets',
            colors:['black', 'white'],
            players: {
                'Alan Anderson': {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1
                },
                'Reggie Evans': {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7
                },
                'Brook Lopez': {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15
                },
                'Mason Plumlee': {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5
                },
                'Jason Terry': {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1,
                }
            }
        },
        away: {
            teamName:'Charlotte Hornets',
            colors:['turquoise', 'purple'],
            players: {
                'Jeff Adrien': {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2
                },
                'Bismak Biyombo': {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10
                },
                'DeSagna Diop': {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5
                },
                'Ben Gordon': {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0
                },
                'Brendan Hayword': {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12
                }
            }
        }
    }
}

console.log('game:', gameObject());

/*
function homeTeamName() {
    let object = gameObject();
    return object['home']['teamName']
  }
*/

function homeTeamName() {
    return gameObject()['home']['teamName']
  }

// console.log(homeTeamName());

// Build a function, numPointsScored that takes in an argument of a player's name and returns the number of points scored for that player.

function numPointsScored(playerName){
    let game = gameObject();
    for (let gameKey in game){                      //gameKey contains home, away
        let teamObj = game[gameKey];                    //game[gameKey] is game.home, game.away
        for (let teamKey in teamObj){               //teamKey contains teamName, colors, players
            let playerObj = teamObj[teamKey];           //teamObj[teamKey] is home.teamName, home.colors, home.players
            for (let playerKey in playerObj){       //playerKey contains Alan Anderson, Reggie Evans, etc 
                if (playerKey === playerName){
                    return playerObj[playerKey].points
                }
            }
        }
    }
}

// console.log(numPointsScored('Ben Gordon'));

// Build a function, shoeSize, that takes in an argument of a player's name and returns the shoe size for that player.


function shoeSize(playerName){
    let game = gameObject();
    for (let gameKey in game){
        let teamObj = game[gameKey];
        for (let teamKey in teamObj){
            let playerObj = teamObj[teamKey];
            for (let playerKey in playerObj){
                if (playerKey === playerName){
                    return playerObj[playerKey].shoe
                }
            }
        }
    }
}

function homeTeam() {
    return gameObject().home
}

function awayTeam() {
    return gameObject().away
}

function players() {
    return Object.assign({}, homeTeam().players, awayTeam().players)
}

// console.log('homeTeam().teamName:', homeTeam().teamName);
// console.log('awayTeam().teamName:', awayTeam().teamName);
// debugger

// Build a function, teamColors, that takes in an argument of the team name and returns an array of that teams colors.

function teamColors(inputName) {
    if (homeTeam().teamName === inputName) {
        return homeTeam().colors
    } else if (awayTeam().teamName === inputName) {
        return awayTeam().colors
    }
}

// Build a function, teamNames, that operates on the game object to return an array of the team names.

function teamNames() {
    let names = [];
    names.push(homeTeam().teamName, awayTeam().teamName);
    return names
}

// Build a function, playerNumbers, that takes in an argument of a team name and returns an array of the jersey number's for that team.

function homePlayers(){
    return homeTeam().players
}

function awayPlayers(){
    return awayTeam().players
}

// console.log('homePlayers:', homePlayers());
// console.log('awayPlayers:', awayPlayers());
// console.log('Object.entries(homeTeam().players)', Object.entries(homeTeam().players));

function homePlayerStats(){
    for (let homePlayer in homePlayers()) {
        console.log('homePlayer', homePlayer)
    }
}

function playerNumbers(inputTeam){

    const homeTeamName = homeTeam().teamName;
    const awayTeamName = awayTeam().teamName;

    const homeValues = Object.values(homeTeam().players)
    const awayValues = Object.values(awayTeam().players)

    // console.log('homeTeamName', homeTeamName)
    // console.log('awayTeamName', awayTeamName)
    // console.log('homeValues', homeValues)
    // console.log('awayValues', awayValues)

    let homeNumbers = [];
    let awayNumbers = [];

    for (const value of homeValues){
        homeNumbers.push(value.number)
    }

    for (const value of awayValues){
        awayNumbers.push(value.number)
    }

    if (inputTeam === homeTeamName){
        return homeNumbers
    } else if (inputTeam === awayTeamName){
        return awayNumbers
    }

}

// Build a function, playerStats, that takes in an argument of a player's name and returns a object of that player's stats.

function playerStats(inputName){
    return Object.assign({}, players()[inputName])
}

// Build a function, bigShoeRebounds, that will return the number of rebounds associated with the player that has the largest shoe size. 
// Break this one down into steps:
    // First, find the player with the largest shoe size
    // Then, return that player's number of rebounds
    // Remember to think about return values here. Use debugger to drop into your function and understand what it is returning and why.

function bigShoeRebounds(){
    
    const allPlayers = players();
    const memory = {shoe: 0};

    for (const playerName in allPlayers){
        const player = allPlayers[playerName]

        if (player.shoe > memory.shoe) {
            memory.shoe = player.shoe
            memory.rebounds = player.rebounds
        }
    }

    return memory.rebounds

}

// Which player has the most points? Call the function mostPointsScored.

function mostPointsScored(){

    const allPlayers = players();
    const memory = {points: 0};

    for (const playerName in allPlayers){
        const player = allPlayers[playerName]

        if (player.points > memory.points){
            memory.points = player.points
            memory.name = playerName
        }
    }

    return memory.name
}

// Which team has the most points? Call the function winningTeam.

function winningTeam(){

    const homeTeamName = homeTeam().teamName;
    const awayTeamName = awayTeam().teamName;

    const homeValues = Object.values(homeTeam().players)
    const awayValues = Object.values(awayTeam().players)

    //console.log('homeTeamName', homeTeamName)
    //console.log('awayTeamName', awayTeamName)
    //console.log('homeValues', homeValues)
    //console.log('awayValues', awayValues)

    let homePoints = [];
    let awayPoints = [];

    for (const value of homeValues){
        homePoints.push(value.points)
    }

    for (const value of awayValues){
        awayPoints.push(value.points)
    }

    //console.log('homePoints', homePoints)
    //console.log('awayPoints', awayPoints)

    let sumHome = 0
    for (let i = 0; i < homePoints.length; i++)
    sumHome += homePoints[i]

    let sumAway = 0
    for (let i = 0; i < awayPoints.length; i++)
    sumAway += awayPoints[i]

    //console.log('sumHome', sumHome)
    //console.log('sumAway', sumAway)

    const winningTeam = (sumHome > sumAway) ? homeTeamName : awayTeamName

    //console.log('winningTeam', winningTeam)

}

// Which player has the longest name? Call the function playerWithLongestName.

function playerWithLongestName(){
    //here
    const playerNames = Object.keys(players())
    const nameLength = playerNames.map(x => x.length)

    //console.log('playerNames', playerNames)
    //console.log('nameLength', nameLength)

    let memory = 0;

    nameLength.forEach((element) => {
        if (memory < element) {
            memory = element
        }
    })

    //console.log('memory', memory)

    let index = nameLength.findIndex((element) => element === memory)

    //console.log('index', index)

    return playerNames[index];

}

// Write a function that returns true if the player with the longest name had the most steals. Call the function doesLongNameStealATon.

function doesLongNameStealATon(){

    const allPlayers = players();
    const memory = {steals: 0};

    for (const playerName in allPlayers){
    const player = allPlayers[playerName]

    if (player.steals > memory.steals){
        memory.steals = player.steals
        memory.name = playerName
    }
}

return memory.name === playerWithLongestName()

}

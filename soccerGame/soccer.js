// Define the Stadium object
class Stadium {
    constructor(name, capacity, location) {
      this.name = name;
      this.capacity = capacity;
      this.location = location;
    }
  }
  
  // Define the Referee class
  class Referee {
    constructor(name, nationality, experience) {
      this.name = name;
      this.nationality = nationality;
      this.experience = experience;
    }
  }
  
  // Define the Player class
  class Player {
    constructor(name, position, nationality) {
      this.name = name;
      this.position = position;
      this.nationality = nationality;
    }
  
    play() {
      console.log(`${this.name} is playing as a ${this.position}.`);
    }
  }
  
  // Define the Team class
  class Team {
    constructor(name, coach, players) {
      this.name = name;
      this.coach = coach;
      this.players = players;
    }
  
    showPlayers() {
      console.log(`${this.name} Players:`);
      this.players.forEach(player => console.log(`${player.name} - ${player.position}`));
    }
  }
  
  // Define the Fan class
  class Fan {
    constructor(name, favoriteTeam) {
      this.name = name;
      this.favoriteTeam = favoriteTeam;
    }
  }
  
  // Define the Ball object
  let ball = {
    color: "White/Black",
    size: "Standard"
  };
  
  // Define the Match class
  class Match {
    constructor(homeTeam, awayTeam, stadium, referee) {
      this.homeTeam = homeTeam;
      this.awayTeam = awayTeam;
      this.stadium = stadium;
      this.referee = referee;
      this.homeScore = 0;
      this.awayScore = 0;
    }
  
    simulateMatch() {
      // Simulate match events (e.g., goals, fouls, etc.)
      // Update scores
      this.homeScore = Math.floor(Math.random() * 5);
      this.awayScore = Math.floor(Math.random() * 5);
    }
  
    displayResult() {
      console.log(`Match Result: ${this.homeTeam.name} ${this.homeScore} - ${this.awayScore} ${this.awayTeam.name}`);
    }
  }
  
  // Define the Manager class
  class Manager {
    constructor(name, team) {
      this.name = name;
      this.team = team;
    }
  }
  
  // Define the Commentators class
  class Commentators {
    constructor(names) {
      this.names = names;
    }
  
    commentate(match) {
      console.log(`${this.names[0]} and ${this.names[1]} providing commentary for the match between ${match.homeTeam.name} and ${match.awayTeam.name}.`);
    }
  }
  
  // Define the League class
  class League {
    constructor(name, teams) {
      this.name = name;
      this.teams = teams;
      this.fixtures = [];
      this.trophies = [];
    }
  
    generateFixtures() {
      // Generate fixtures based on teams
    }
  
    playFixtures() {
      // Simulate matches and update standings
    }
  
    awardTrophies() {
      // Determine league winner and award trophies
    }
  }
  
  // Example Usage:
  let stadium = new Stadium("Example Stadium", 50000, "City, Country");
  let referee = new Referee("John Doe", "Nationality", "10+ years");
  let player1 = new Player("Player 1", "Forward", "Nationality 1");
  let player2 = new Player("Player 2", "Midfielder", "Nationality 2");
  let teamA = new Team("Team A", "Coach A", [player1, player2]);
  let fan = new Fan("Fan 1", teamA);
  let match = new Match(teamA, teamA, stadium, referee);
  let manager = new Manager("Manager A", teamA);
  let commentators = new Commentators(["Commentator 1", "Commentator 2"]);
  let league = new League("Example League", [teamA]);
  
  // Simulate a match
  match.simulateMatch();
  match.displayResult();
  
  // Simulate league
  league.generateFixtures();
  league.playFixtures();
  league.awardTrophies();
  
  
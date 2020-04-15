import { Client } from 'espn-fantasy-football-api';

export default class espnService {

    constructor() {
        this.leagueId = 29992036;
    }
    getFreeAgents(){
        let leagueId = this.leagueId;
        const myClient = new Client({ leagueId: leagueId });
        let freeAgents = myClient.getFreeAgents({ seasonId: 2019, scoringPeriodId: 1});
        return freeAgents
    }

    // getPlayerStats() {
    //     let leagueId = this.leagueId;
    //     const myClient = new Client( { leagueId: leagueId });
    //
    //     let playerStats = myClient.getPlayerStats({});
    //     console.log(playerStats);
    // }

    getIDParams() {
        let leagueId = this.leagueId;
        const myClient = new Client({leagueId: leagueId});
        let idParams = myClient.getIDParams({seasonId: 2019});
        return idParams;

    }
    getTeams(){
        let leagueId = this.leagueId;
        const myClient = new Client({leagueId: leagueId});
        let teams = myClient.getTeams({seasonId: 2019});
        return teams
    }
}
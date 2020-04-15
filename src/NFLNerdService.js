export default class NFLNerdService {
    constructor() {
        this.token1 = "i487izh3tsxb";
        this.token = "test";
        this.url = "https://www.fantasyfootballnerd.com/service/";
    }

    async getNFLTeams() {
        let url = this.url + 'nfl-teams/' + this.token;
        debugger;

        let options = {
            headers: {
                "Content-Type": 'application/json'
            }
        };
        let response = await fetch(url, options);
        debugger;
        console.log(response);
        return response;
    }
}
export default class NFLService {
    async getNFLStats() {
        let finalResponse = [];

            let nflUrl = 'https://api.fantasy.nfl.com/v1/players/stats?statType=weekStats&season=2018&position=QB&week=1&format=json1&format=json';
            // let url = 'https://www.pivotaltracker.com/services/v5/projects/' + projectId + '/story_transitions'
            //     + '?limit=' + pageLimit
            //     + '&occurred_after=' + occurredAfter.toJSON()
            //     + '&offset=' + offset;

            let response = await fetch(nflUrl);

            finalResponse = finalResponse.concat(response);
        return finalResponse;
    }
}
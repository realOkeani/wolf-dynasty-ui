import espnService from "./espnService";
import React, {Component} from 'react';
import MUIDataTable from "mui-datatables";


export default class RegistrationForm extends Component {
    constructor(props) {
        super(props);
        // this.NFLNerdService = new NFLNerdService();
        this.espnService = new espnService();
        this.mounted = false;
        this.state = {
            // nflTeams: '',
            freeAgents: [],
        };
        this.columns = ["fullName", "eligiblePositions"];
    }
    async componentDidMount() {
        this.mounted = true;

        // this.setNFLTeams();
        this.setFreeAgents();

    };

    async componentDidUpdate( prevState) {
        if(this.state.freeAgents !== prevState.freeAgents) {
        }
    }

    async setFreeAgents() {
        let  freeAgents = await this.espnService.getFreeAgents();
        // let playerStats = await this.espnService.getPlayerStats();
        // let teams = await this.espnService.getTeams();
        let params = await this.espnService.getIDParams();
        console.log(params);
        if(this.mounted) {

            // freeAgents = freeAgents.filter(freeAgent => freeAgent.player.availabilityStatus === "FREEAGENT");
            freeAgents = freeAgents.map(freeAgent => freeAgent.player);
            /*
                There are two ways to push an existing array into another array in JS, they are marked below
                One is to concatenate the arrays, which is ES5 and below. The second way is the new ES6 spread syntax.
                First Way
                    this.setState( {freeAgents: this.state.freeAgents.concat(freeAgents)});
                Second Way
                    this.setState({ freeAgents: [...this.state.freeAgents, ...freeAgents ] })
                Third Way (Old way)
                    this.setState({ freeAgents: this.state.freeAgents.push.apply(this.state.freeAgents, freeAgents) });
            */

            this.setState({ freeAgents: [...this.state.freeAgents, ...freeAgents ] });
            console.log(this.state.freeAgents);
        }
    }

    render() {
        return (
            <div style={{margin: '30px 0 0 30px'}}>
                <MUIDataTable
                    columns={this.columns}
                    data={this.state.freeAgents}
                />
            </div>
        );
    }
}
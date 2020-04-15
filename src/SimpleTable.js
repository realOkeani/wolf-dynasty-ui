import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = {
    root: {
        width: '100%',
        overflowX: 'auto',
    },
    table: {
        minWidth: 700,
    },
};

let id = 0;
function createData(name, attempts, completions, yards, touchdowns) {
    id += 1;
    return { id, name, attempts, completions, yards, touchdowns };
}

const data = [
    createData('Joe Montana', 35, 26, 300, 4),
    createData('Tom Brady', 37, 29, 301, 4),
    createData('Steve Young', 30, 25, 240, 6),
    createData('Kurt Warner', 30, 22, 267, 3),
    createData('Peyton Manning', 36, 28, 400, 3),
];

async function getNFLStats() {
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

async function getQBStats() {

    await getNFLStats();


    return
}

function SimpleTable(props) {
    const { classes } = props;

    return (
        <Paper className={classes.root}>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        <TableCell>Players</TableCell>
                        <TableCell align="right">Attempts</TableCell>
                        <TableCell align="right">Completions</TableCell>
                        <TableCell align="right">Passing Yards</TableCell>
                        <TableCell align="right">Touchdowns</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map(n => (
                        <TableRow key={n.id}>
                            <TableCell component="th" scope="row">
                                {n.name}
                            </TableCell>
                            <TableCell align="right">{n.attempts}</TableCell>
                            <TableCell align="right">{n.completions}</TableCell>
                            <TableCell align="right">{n.yards}</TableCell>
                            <TableCell align="right">{n.touchdowns}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Paper>
    );
}

SimpleTable.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTable);
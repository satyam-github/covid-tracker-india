import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const State = (props) => {

    const stateData = props.stateData.map(state => (

            <tr key={state.state} 
                onClick={props.clicked}
                
                data-id={state.state}>
                <td>{state.state}</td>
                <td>{state.confirmed}</td>
                <td>{state.active}</td>
                <td>{state.recovered}</td>
                <td>{state.deaths}</td>
                <td>
                    
                        <Link to={`/states/${state.state}`} className="btn btn-primary btn-sm">Click here</Link>
                    
                </td>
            </tr>

    ));

    return (
       <div className="container">
           <h4 class="text-info text-center">State Wise COVID-19 Cases</h4>
           <div className="table-responsive-md align-items-centre">
                <table className="table table-striped table-sm">
                    <thead >
                    <tr>
                        <th scope="col">State</th>
                        <th scope="col">Confirmed Cases</th>
                        <th scope="col">Active Cases</th>
                        <th scope="col">Recovered</th>
                        <th scope="col">Deaths</th>
                        <th scope="col">Detailed Stats</th>
                    </tr>
                    </thead>
                    <tbody >{stateData}</tbody>
                </table>
            </div>
        </div>
    );
}

export default State;
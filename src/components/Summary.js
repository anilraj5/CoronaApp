import React, { Component } from 'react';

// World Wide Corona details 

export default class Summary extends Component {
    render() {
        const {global, currentDate} = this.props;
        return (
            <div className="row">
                <div className="NewConfirmed">
                    <h3>NewConfirmed Cases</h3>
                    <h1>{global.NewConfirmed}</h1>
                    <h3>{new Date(currentDate).toDateString()}</h3> 
                </div>
                <div className="TotalConfirmed">
                    <h3>TotalConfirmed Cases</h3>
                    <h1>{global.TotalConfirmed}</h1>
                    <h3>{new Date(currentDate).toDateString()}</h3>
                </div>
                <div className="NewDeaths">
                    <h3>NewDeaths</h3>
                    <h1>{global.NewDeaths}</h1>
                    <h3>{new Date(currentDate).toDateString()}</h3>
                </div>
                <div className="TotalDeaths">
                    <h3>TotalDeaths</h3>
                    <h1>{global.TotalDeaths}</h1>
                    <h3>{new Date(currentDate).toDateString()}</h3>
                </div>
                <div className="NewRecovered">
                    <h3>NewRecovered</h3>
                    <h1>{global.NewRecovered}</h1>
                    <h3>{new Date(currentDate).toDateString()}</h3>
                </div>
            </div>
        )
    }
}

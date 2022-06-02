import React, { Component } from 'react';

// corona details per country, props from the details page   
export default class Country extends Component {
    render() {
        // const { countries} = this.props;
        return (
                <tr className="tablerow"  >
                    <td>{this.props.countries.Country}</td>
                    <td>{this.props.countries.NewConfirmed}</td>
                    <td>{this.props.countries.NewRecovered}</td>
                    <td>{this.props.countries.TotalConfirmed}</td>
                    <td>{this.props.countries.TotalDeaths}</td>
                    <td>{this.props.countries.TotalRecovered}</td>
                </tr>
        )
    }
}

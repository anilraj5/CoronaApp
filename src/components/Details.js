import React, { Component } from 'react';
import axios from 'axios';
import Summary from './Summary';
import Country from './Country';
// import Search from './Search';

export default class Details extends Component {
    state={
       countries:[],
       gloabal:[],
       currentDate:null,
       loading:true
    }
    async componentDidMount(){
        const res = await axios.get('https://api.covid19api.com/summary')
        console.log(res)
        this.setState({countries:res.data.Countries})
        this.setState({global:res.data.Global})
        this.setState({currentDate:res.data.Date})
        this.setState({loading:false})
    };
    render() {
       
        if (this.state.loading){
           return <h1>Loading...</h1>
        }
        return (
            <div>
                 {/* <Search/> */}
                 {/* world wide corona details, ka component */}
                <Summary global={this.state.global} currentDate={this.state.currentDate} />

                {/* country wise corona details, ka component */}
                <table>
                    <thead>
                        <tr>
                            <th>Country</th>
                            <th>NewConfirmed</th>
                            <th>NewRecovered</th>
                            <th>TotalConfirmed</th>
                            <th>TotalDeaths</th>
                            <th>TotalRecovered</th>
                        </tr>
                    </thead>
                    <tbody>

                        {this.state.countries.map(item=>(
                        <Country countries={item} key={item.Country} />
                        ))}
                    </tbody>
                </table>
            </div>
        )
    };
};

import React from 'react';
export default class Search extends React.Component {
    constructor() {
        super();
        this.state = {
            country: ""
        };

    };
    search(key) {
        console.log(key)
        fetch("https://api.covid19api.com/summary?=" + key).then((data) => {
            data.json().then((res) => {
                console.warn("res", res)
                this.setState({ country: res })
            })
        })
    };
    render() {
        return (
            <>
                <input type="text" placeholder="Search by country Name"
                    onChange={(event) => this.search(event.target.value)} />
                <div>
                    {
                        this.state.country ?
                            <div>
                                {
                                    this.state.country.map(item =>{<div>{item.data.Countires.Country}</div>})
                                }
                            </div>: null
                    }
                </div>
            </>
        )
    };
};
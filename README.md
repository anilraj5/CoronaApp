
# Covid Case Tracking App

Covid Case Tracking App is built with latest development tools.




 - ReactJs is use to develop the ui part.
 - To show case the covid cases, data taken from **covid19api.com**.
 - Axios is use to synce API with app. 



## Some feature 
 - This is APP follow Class base react architecture.
 - This is **Daily Covid Case with All details** application. 

 ## Some Ui feature 
 - Can details of covid in list of countries. 
 - Also it will show total summary of world wide cases


## Screenshots
#### Home page in full size 
![App Screenshot](https://github.com/airKing05/CoronaApp/blob/main/screenShot/Screenshot%202022-07-25%20at%201.56.43%20AM.png?raw=true)




## API Reference

#### Get all items
Get Api from https://covid19api.com/

**Covid Cases Api**
```http
 https://api.covid19api.com/summary
```

Product api data look like
```bash
{
    "ID": "928e2425-c584-4ec4-bb96-60610a6e1513",
    "Message": "",
    "Global": {
        "NewConfirmed": 932000,
        "TotalConfirmed": 567767517,
        "NewDeaths": 2606,
        "TotalDeaths": 6378500,
        "NewRecovered": 0,
        "TotalRecovered": 0,
        "Date": "2022-07-24T19:39:26.928Z"
    },
    "Countries": [
        {
           "ID": "77dfe314-6319-4514-9d13-b99ba3fb9eda",
           "Country": "Afghanistan",
           "CountryCode": "AF",
           "Slug": "afghanistan",
           "NewConfirmed": 113,
           "TotalConfirmed": 184473,
           "NewDeaths": 0,
           "TotalDeaths": 7738,
           "NewRecovered": 0,
           "TotalRecovered": 0,
           "Date": "2022-07-24T19:39:26.928Z",
           "Premium": {}
        },
        {
           "ID": "ff5c55dd-1fbe-4254-a2cd-9d20d5825dbf",
           "Country": "Albania",
           "CountryCode": "AL",
           "Slug": "albania",
           "NewConfirmed": 0,
           "TotalConfirmed": 293917,
           "NewDeaths": 0,
           "TotalDeaths": 3517,
           "NewRecovered": 0,
           "TotalRecovered": 0,
           "Date": "2022-07-24T19:39:26.928Z",
           "Premium": {}
        },
    ]
}
```



## Tech Stack

**Client:** React, CSS

**Server:** https://covid19api.com/


## Installation

GitHub Repository of React-Redux-Ecommerce App
```bash
https://github.com/airKing05/CoronaApp.git
```

Install my-project with npm
```bash
  npm install my-project
  cd my-project
```


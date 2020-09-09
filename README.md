# Wisconsin COVID-19 Dashboard

This tool allows users to retrieve the latest COVID-19 data/statistics from each county in Wisconsin. The types of statistics integrated are:

 - Positive Cases (Cumulative)
 - Negative Cases (Cumulative)
 - Total Deaths
 - New Positive Cases (Daily)
 - New Negative Cases (Daily)
 - Tests Administered (Daily)
 - COVID-19 Resources related to Wisconsin
## Motivation
Throughout the months, clear and concise COVID-19 statistics have been relatively difficult to find at the state level. I wanted to make it easy for users to fetch the latest data for their county. Also, I decided to keep the types of statistics to those I thought were most crucial.
## Tech Stack
***Built with***:
 - React
 - React-Bootstrap
 - Axios
 - Reactstrap
## Wisconsin DHS API Example
While developing this project, this was the biggest hurdle I ran into. The query format I used to retrieve the info displayed on the site follows the form below:

    &outFields=NEGATIVE,POSITIVE,DEATHS,POS_NEW,NEG_NEW,TEST_NEW,NAME
If you are curious to check out what kind of information the DHS allows developers to retrieve, use the following URL:

    https://dhsgis.wi.gov/server/rest/services/DHS_COVID19/COVID19_WI/FeatureServer/1/query?
 I used Axios to retrieve the JSON response.
## Installation
To run this project on your personal computer, clone the repository. Next, make sure to `cd wiscovidapp/` to get inside the main project folder.

Once you're in `/Wisconsin-Covid-Dashboard/wiscovidapp`, make sure to run `npm init` which will create a `package.json` file. 

After all of the necessary dependencies are installed, run `yarn start` to start the development server on your local host.
## Contribute
If you would like to see this tool expanded, create a pull request and I'll see if I can get to it! I plan on adding/maintaining this project in the future.
## Data Sources

 - [State Data](https://data.dhsgis.wi.gov/datasets/covid-19-historical-data-table/data?where=GEO%20=%20%27State%27)
 - [County Data](https://data.dhsgis.wi.gov/datasets/covid-19-historical-data-table/data?where=GEO%20=%20%27County%27)
 - [API Reference](https://data.dhsgis.wi.gov/datasets/covid-19-historical-data-table)
 - [Data by Census Tract](https://data.dhsgis.wi.gov/datasets/covid-19-data-by-census-tract)
## Note About Data
Wisconsin's DHS only updates this data once per day. The data provided comes directly from their API. While testing, I occassionally noticed that counties with little to no data would report "-1" in some columns. This seems to be the default value if the county ***doesn't*** report on that day. It shouldn't be an issue for the majority of counties, but I thought it was worth mentioning!

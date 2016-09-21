# Food Trucks Localization App

Problem: Design an application to find local food trucks and display them on a map

> This application locates food trucks close to an address users specify.
When a user clicks on a food truck icon on the map, it also provides information on the food truck including name, address, day/hours.

Built By **Isra Shabir** for **KQED Coding Challenge.**

## Technical Overview

> This is a full stack application that is entirely built in Javascript. I used node.js to render this application because of its asynchronous nature, which is useful in querying external API. Nodejs being light weight could easily retrieve and handle the data we needed for this application. 

>I made sure the code is separated into front-end vs back-end, and in fact most of the data retrieval and parsing happens on the server so that the client side performance is fast. I use Google Maps API & make ajax request to it to retrieve lat/long of specified location. Once this ajax completes, I make another subsequent ajax request to the server with the lat/long received. 

> I used the open data API query to fetch food trucks in a radius of 1000m, filtered the JSON received & sent the results back to the client. **Please see discussion about this API requests below**.

> Client then reads the ajax response and renders the food trucks on the map

> I didn't create an SQL database because the data is static as the user is not making changes to it. Moreover, the open SF data is transient, which means we would need to change our database every time the open data changes (I wasn't sure if there's a way to be informed when data has changed). It'd be better to use an in-memory key-value store like Redis to store the data and apply an expiry date. 

There are a number of things I wanted to do better if I had more time as below:

### Feature enhancement:

>1. Detect user location automatically through browser
2. Have a variable radius feature so users could play with the distance(For instance: 0<radius<10miles)
3. Automatically set map view to user location 
4. Improve the styling for better UI 

### Backend:

> 1. Deploy Redis in-memory database with an expiry limit to store the geodata **as opposed to querying the open API every time the application is accessed**. 
This is important for several reasons:

>>* the API could be down
* querying the API every time is not scalable & leads to throttling issues

### Problems with data:

>1. I noticed the data was duplicating a lot, and would require some filtering algorithm. I used paging for now to limit the amount of trucks displayed; however, this limits food trucks shown to the user

Overall, I was able to manage good performance, but there's many things that can be improved in terms of design, code refactoring, & scalability. 

### Code Quality

> 1. Code can be better structured & modularized on the front-end 

## Tech Stack

>1. **Backend**: node v4.3.0
2. **Front-End**: HTML/CSS/JS
3. **API**: [SF Open Data](https://data.sfgov.org/Economy-and-Community/Mobile-Food-Facility-Permit/rqzj-sfat)

## Getting Started

To run on local server, assuming node and npm are installed

```
$ cd ~/Desktop 
$ git clone <this repository>
$ npm start
```

**Please make sure your browser is able to load external scripts for the map to load (some browsers are set to not allow external stylesheets & scripts).**

More detailed instructions for setting up node on: [OS X](http://blog.teamtreehouse.com/install-node-js-npm-mac)

## Links

App [Link](https://findyourfoodtrucks.herokuapp.com/)

My [LinkedIn](https://www.linkedin.com/in/isra-shabir-ab65b034?trk=nav_responsive_tab_profile_pic)

Github [Repository](https://github.com/isra-shabir/foodtrucks)






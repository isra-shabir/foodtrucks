# Food Trucks Localization App

Problem: Design an application to find local food trucks and display them on a map

This application helps users find food trucks close to a location they specify.
It also gives information on the type of food truck and its timings when
users click on the map markers

Built By **Isra Shabir** for **KQED Coding Challenge**

## Technical Overview

> This is a full stack application that is entirely built in javascript. I used node.js to render this application because of its asynchronous nature and it being light weight could easily retrieve and handle the data we need for this application. I made sure the code is separated into front-end vs back-end, and in fact most of the data retrieval and parsing happens on the server so that the client side performance is fast. I make ajax requests to retrieve the data in order to render a single page application. I didn't create an SQL database to store the data because the data is almost static and the user is not making changes to it. Moreover, the open data is transient, which means we would need to change our database everytime the open data changes (not sure if there's a way to be informed when data has changed). It's better to use an in-memory key-value store to store the data with an expiry date. 

There are a number of things I wanted to do better if I had more time:

### Feature enhancement:

1. Detect user location automatically through browser
2. Have a variable radius feature so users could play with the distance(For instance: 0<radius<10miles)

### Backend:

1. Deploy Redis in-memory database with an expiry limit to store the geodata as opposed to querying the open API everytime the application is accessed. 
This is important for several reasons:

* the API could be down
* querying the API everytime is not scalable & leads to throttling issues

### Problems with data:

1. I noticed the data was duplicating a lot, but I would need time to filter through it to only display unique trucks. I used paging to limit the amount of trucks we display; however, this is inaccurate as I didn't provide the user a chance to look for more food trucks. 

Overall, I was able to manage good performance, but there's many things that can be improved in terms of design, code refactoring, & scalability. 

## Tech Stack

**Backend**: node v4.3.0
**Front-End**: HTML/CSS/JS

## Getting Started

To run on local server, assuming node and npm are installed

$ cd ~/Desktop
$ git clone <this repository>
$ npm start~~~

More detailed instructions for setting up node:[OS X][1] 

[1]: (http://blog.teamtreehouse.com/install-node-js-npm-mac)

## Links

application link

My [LinkedIn][1]

[1]: (https://www.linkedin.com/in/isra-shabir-ab65b034?trk=nav_responsive_tab_profile_pic)





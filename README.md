# Meesterproef - OBA Chatbot

## Live Demo :clapper:

See the latest updated demo here:
[Link to DEMO](https://pwa-news-node.herokuapp.com/)

---

## Description :label:

For the project "real-time-web" we had to make an application that works with web-sockets. I want to make a web application what received real-time crypto data visualised in a Graph. In addition i want to make a chat room for a certain Topic so people can discuss in real time the prices changes of the coin in focus.

---

## Table of Contents :arrow_right_hook:

- [Features](#features)
- [Activiy](#activitydiagram)
- [Socketio](#socketio)
- [Used Tools](#Tools)
- [Usage](#Usage)

---

## Proof of Concept

Here you can see the process of the concept.

### Concept draft

Voor mijn concept wil ik een dashboard maken waarin de 3 concepten hierboven allemaal samenkomen. Ik wil ervoor zorgen dat mensen kunnen zoeken op een coin en daarover data visualisaties kunnen zien gebaseeerd op real-time. Als inspiratie hiervoor heb ik de dashboard van binance gebruikt zoals je ziet hieronder. Natuurlijk is dit slechts inspiratie en zal mijn applicatie anders zijn en ook anders werken.

 <figure>
   <img src="https://github.com/TristanVarewijck/real-time-web-2122/blob/main/public/assets/readme/binance-dasboard.png" width="600px"/>
   <figcaption>
   <p><strong>Binance dashboard (inspiratie)</strong></p>
  <p>
    Hierboven zie je de dashboard die binance gebruikt. Het ziet er supper ingewikeld uit maar daarom pak ik er ook een aantal delen uit en wil ik sommige delen vervangen met een chatroom, als je op coins zoekt dan blijft de UI hetzelfde maar veranderd enkel te data. Ik wil op een manier fixen dat elk coin-id een chatroom is zodat mensen met elkaar kunnen praten over een specifieke coin in aparte rooms. 
  </p>
   
   </figcaption>
   </figure>

---

<figure>
   <img src="https://github.com/TristanVarewijck/real-time-web-2122/blob/main/public/assets/readme/real-time-cryptoDashboard.png" width="600px"/>
   <figcaption>
   <p><strong>Concept LoFi Wireframe</strong></p>
   <ol>
    <li>
     Boven aan is er ruimte voor { token price } data zoals price, 24h, high, low
    </li>
    <li>
     In het grote vlak, hier komt de grafiek te staan of een ticker, die wordt gegenereerd doormiddel van real-time data
    </li>
    <li>
    In de twee vlakken hieronder kan je de trades zien "sells" en "buys" 
    </li>
     <li>
    In het vlak links komt de chatroom die is gebaseerd op de coin id zodat iedereen die deze coin bekijkt kan discusiëren over deze coin.  
    </li>
    <li>
   Hierboven heb je een zoekbalk waarin je coins kan zoeken. En dus rooms kan joinen.   
    </li>
   </ol>
   </figcaption>
   </figure>

## External data source

Voor dit project heb ik een externe data source nodig die opties heeft voor het verkijgen van real-time data dus eigenlijk het kunnen leggen van een connectie tussen client en server. Ik heb gekozen voor de Binance API.

<img src="https://github.com/TristanVarewijck/TechDefined/blob/main/assets/images/newApi-LOGO.jpeg" alt="newsapi-logo" height="250px"/>

For this project i am using the NewsAPI from - [NewsAPI](https://newsapi.org/) <br>
To search on the app im using the endpoints below with the following params:

This one is so i can search articles for specific topics:
[https://newsapi.org/v2/everything](https://newsapi.org/v2/everything)

|  Key  |    q    |   sortBy    | language | pageSize |  apiKey  |
| :---: | :-----: | :---------: | :------: | :------: | :------: |
| value | {input} | publishedAt |    en    |   100    | {apiKey} |

this one is so i can see the latest headlines in a specific category:
[https://newsapi.org/v2/headlines](https://newsapi.org/v2/headlines)

|  Key  | country |  category  | pageSize |  apiKey  |
| :---: | :-----: | :--------: | :------: | :------: |
| value |   us    | technology |   100    | {apiKey} |

:rotating_light: : As explained earlier the API is not usable outside your localhost, for this project i used the **FREE version** of this API.

---

## MOSCOW - tabel

Hieronder zie je de functies of addons en de priority ervan.

// 9 mei 2022

1. Must have

   - ~~list of users~~
   - ~~messages of user styled differently~~
   - ~~data changed on search~~

2. Should have

   - See users in all groups
   - Private messaging
   - going up or going down - poll

3. Could have

   - database with messages
   - D3 realtime candle chart

4. Won't have

   - live trading

## Tools

- socket.io
- ejs
- express.js

## Usage

For using this app yourself you need to follow the following steps:

### 1. Clone Repo locally

```
git clone https://github.com/TristanVarewijck/TechDefined.git
```

### 2. Connect your API key

If you want to connect with the API you have to fill in your own personal {apiKey} wich you can get here: <br>
[Get NewsAPI apiKey](https://newsapi.org/).

```
https://newsapi.org/v2/everything?q=${input.value}&sortBy=publishedAt&language=en&pageSize=100&apiKey=${apiKey}
https://newsapi.org/v2/top-headlines?country=us&category=technology&pageSize=100&apiKey=${apiKey}
```

### 3. Install dependencies

Install to need dependencies for using this project.

```
npm i
```

### 4. Run on Localhost

Because i am using the free version of this API your need to run it on your localhost to test it. If you want to move further with this app make sure to check out the [pricing scheme](https://newsapi.org/pricing) of NewsAPI.

For easily running this project on your localhost you can use the command:

```
npm start
```

### Thats it! :smile:

---

## Meta

Tristan Varewijck <br>
:email: [Tristan.varewijck@gmail.com](Tristan.varewijck@gmail.com) ||
:large_blue_diamond: [https://www.linkedin.com/in/tristanvarewijck-1999/](https://www.linkedin.com/in/tristanvarewijck-1999/)

![Ask Me Anything !](https://img.shields.io/badge/Ask%20me-anything-1abc9c.svg)

---

## License

Usage is provided under the [MIT License](https://github.com/git/git-scm.com/blob/master/MIT-LICENSE.txt) MIT. See [LICENSE](https://github.com/TristanVarewijck/WAFStoNode/blob/master/LICENSE) for the full details.

## Grading

<!-- Here are some hints for your project! -->

<!-- Start out with a title and a description -->

<!-- Add a nice image here at the end of the week, showing off your shiny frontend 📸 -->

<!-- Add a link to your live demo in Github Pages 🌐-->

<!-- replace the code in the /docs folder with your own, so you can showcase your work with GitHub Pages 🌍 -->

<!-- Maybe a table of contents here? 📚 -->

<!-- ☝️ replace this description with a description of your own work -->

<!-- How about a section that describes how to install this project? 🤓 -->

<!-- ...but how does one use this project? What are its features 🤔 -->

<!-- What external data source is featured in your project and what are its properties 🌠 -->

<!-- This would be a good place for your data life cycle ♻️-->

<!-- Maybe a checklist of done stuff and stuff still on your wishlist? ✅ -->

<!-- We all stand on the shoulders of giants, please link all the sources you used in to create this project. -->

<!-- How about a license here? When in doubt use GNU GPL v3. 📜  -->

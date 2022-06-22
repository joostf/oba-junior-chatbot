# Meesterproef - OBA Chatbot

<img src="https://i.ibb.co/mvcqKPV/poppetjes.png" alt="poppetjes"/>

Voor dit project hebben wij ik een app gebouwd waarbij kinderen rond de 6/7 jaar eenvoudig met behulp van een chatbot boeken en films kunnen vinden. De kinderen kiezen eerst een figuurtje om vriendjes mee te worden. Vervolgens klikt het kind op het figuurtje en vindt er een voice user interface plaats.
De chatbot vraagt wat de kind leuk vind. Het kindt zegt dan een woord en dan wordt dat woordje omgezet in een string en wordt het als een query meegegeven in de search api. Vervolgens worden de resultaten weergegven op een andere pagina.
<br/><br/>

## Schermen
<img src="https://raw.githubusercontent.com/TristanVarewijck/oba-junior-chatbot/main/public/assets/images/schermen2.png" alt="schermen"/>
<br/><br/>



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

## Features

:chains: Features for this app are mainly still under construction.

1. **Search** <br>
   Search for the Topics you are interested from over the whole World.
2. **Endless scroll** <br>
   Scroll trough endless articles related to your topic or scroll to the headlines of this current day!
3. **Sharing** <br>
   Share articles on Twitter.
4. **Text to Speech** <br>
   With the Text to Speech Feature you can have it read to you instead of reading it yourself.
5. **Suggested Topics** <br>
   With the filter-buttons your can search on topics that are suggested by the App.
6. **Read more** <br>
   Clicking on the banner of the article will bring your to the detail page where can read more about it.

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

Muhammet Komür <br>
:email: [muhammet075@gmail.com](muhammet075@gmail.com) ||
:large_blue_diamond: [https://www.linkedin.com/in/muhammet-k%C3%B6m%C3%BCr-96197b163/](https://www.linkedin.com/in/muhammet-k%C3%B6m%C3%BCr-96197b163/)

![Ask Me Anything !](https://img.shields.io/badge/Ask%20me-anything-1abc9c.svg)

---

## License

Usage is provided under the [MIT License](https://github.com/git/git-scm.com/blob/master/MIT-LICENSE.txt) MIT. See [LICENSE](https://github.com/TristanVarewijck/WAFStoNode/blob/master/LICENSE) for the full details.

## Criteria en beoordeling

Met de Meesterproef laat je zien wat je hebt geleerd tijdens de minor. Studenten die de vakken hebben gehaald kunnen aan de Meesterproef beginnen.

Het eindproject wordt beoordeeld op een Design rationale, een Product biografie en een reflectie op het eigen niveau. Én of de klant blij is met het gemaakte project.

**Design Rationale** <br>
In de Design Rationale schrijf je de debriefing, de probleem-definitie, toon je de oplossing en schrijf je een uitleg van de code. De Design Rationale is een verantwoording van je ontwerp. Als je in een team werkt kun je de Design Rationale als team schrijven. (TIP: Doe dit dan in de project repo)

**Product Biografie** <br>
In de Product Biografie hou je per week bij wat je allemaal hebt gedaan. Je schrijft over het proces, de iteraties, de werkwijze en de planning. Ook schetsen, testen, voorbeeld code en inspiratie zijn deel van de Product Biografie. De Product Biografie is individueel, ook als je in een team werkt.

**Reflectie op eigen niveau** <br>
Aan het eind van het project reflecteer je systematisch op je werk en het proces. Aan de hand van de vak-rubrics schrijf je welke vakken wel of niet aan bod zijn gekomen en waarom. Zo krijg je een goed beeld van je eigen niveau, mogelijke aandachtspunten in techniek, interactie en/of aspecten van het design-proces waar je je nog op kan verbeteren.

**Een blije klant** <br>
Voor de klant werk je aan een bestaand product of maak je een (werkend) prototype. Gericht op een bepaalde gebruikersgroep, geschikt voor verschillende apparaten, met echte data, én een goede UX. (Jeweettoch) Een blije klant is een goede klant. Soms ontkom je er niet aan dat je een beetje eigenwijs moet doen. Dan doe je juist niet wat de klant wil en probeer je de opdrachtgever te overtuigen met een proof-of-concept. En soms kan het voorkomen dat het proces niet helemaal soepel loopt. Dat hoort erbij en daar leer je van. Aan het eind van het project vragen we de klant feedback op het geleverde werk en het proces.

<!-- Here are some hints for your project! -->

<!-- Start out with a title and a description -->

<!-- Add a nice image here at the end of the week, showing off your shiny frontend 📸 -->

<!-- Add a link to your live demo in Github Pages 🌐-->

<!-- replace the code in the /docs folder with your own, so you can showcase your work with GitHub Pages 🌍 -->

<!-- Maybe a table of contents here? 📚 -->

<!-- ☝️ replace this description with a description of your own work -->

<!-- How about a section that describes how to install this project? 🤓 -->

<!-- ...but how does one use this project? What are its features 🤔 -->

<!-- What external data source is featured .in your project and what are its properties 🌠 -->

<!-- This would be a good place for your data life cycle ♻️-->

<!-- Maybe a checklist of done stuff and stuff still on your wishlist? ✅ -->

<!-- We all stand on the shoulders of giants, please link all the sources you used in to create this project. -->

<!-- How about a license here? When in doubt use GNU GPL v3. 📜  -->

# Meesterproef - OBA Chatbot

<img src="https://i.ibb.co/mvcqKPV/poppetjes.png" alt="poppetjes"/>

Voor dit project hebben wij ik een app gebouwd waarbij kinderen rond de 6/7 jaar eenvoudig met behulp van een chatbot boeken en films kunnen vinden. De kinderen kiezen eerst een figuurtje om vriendjes mee te worden. Vervolgens klikt het kind op het figuurtje en vindt er een voice user interface plaats.
De chatbot vraagt wat de kind leuk vind. Het kindt zegt dan een woord en dan wordt dat woordje omgezet in een string en wordt het als een query meegegeven in de search api. Vervolgens worden de resultaten weergegven op een andere pagina.
<br/><br/>

## Schermen
<img src="https://raw.githubusercontent.com/TristanVarewijck/oba-junior-chatbot/main/public/assets/images/schermen2.png" alt="schermen"/>
<br/><br/>

## Dependencies
* HTML, CSS & JS
* SCSS
* <a href="https://zoeken.oba.nl/api/v1/">Oba API</a>
* Node
* Express
* EJS
* SwiperJS
<br/><br/>

## Features List
* Boeken / Films bekijken
* Praten tegen de chatbot
* Samenvatting van boeken / films laten voorlezen
* Op een kindvriendelijke manier geholpen worden
<br/><br/>

## Live Demo
<a href="https://oba-chatbot.herokuapp.com/">https://oba-chatbot.herokuapp.com/</a><br/>
🚨 De API functineert niet altijd op de live demo, om de app optimaal te ervaren adviseren we je om het project te clonen
<br/></br>


## Installeren
1. Clone de repository<br/>
```
  git clone https://github.com/TristanVarewijck/oba-junior-chatbot
```

2. Navigeer naar het project<br/>
```
 cd oba-junior-chatbot
```


3. Installeer NPM<br/>
```
 npm i
```

4. Maak een .env bestand aan met de volgende gegevens<br/>
```
DATA_AUTH="{your_key}"
DATA_Q="https://zoeken.oba.nl/api/v1/search/?q=classification:prentenboek"
DATA_ID="https://zoeken.oba.nl/api/v1/search/?id="
```

5. Start de app op localhost:3500<br/>
```
 npm start
```
<br/><br/>



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



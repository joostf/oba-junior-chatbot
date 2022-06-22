# Meesterproef - OBA Chatbot

<img src="https://i.ibb.co/mvcqKPV/poppetjes.png" alt="poppetjes"/>

Voor dit project hebben wij ik een app gebouwd waarbij kinderen rond de 6/7 jaar eenvoudig met behulp van een chatbot boeken en films kunnen vinden. De kinderen kiezen eerst een figuurtje om vriendjes mee te worden. Vervolgens klikt het kind op het figuurtje en vindt er een voice user interface plaats.
De chatbot vraagt wat de kind leuk vind. Het kindt zegt dan een woord en dan wordt dat woordje omgezet in een string en wordt het als een query meegegeven in de search api. Vervolgens worden de resultaten weergegven op een andere pagina.
<br/><br/>

---

## Schermen
<img src="https://raw.githubusercontent.com/TristanVarewijck/oba-junior-chatbot/main/public/assets/images/schermen2.png" alt="schermen"/>
<br/><br/>

<<<<<<< HEAD
Voor de Meesterproef hebben wij de opdracht gekregen om voor de OBA
een nieuwe experience te maken voor kinderen van 6/7 jaar oud. Doormiddel van een chatbot willen wij de mogelijkheid bieden dat kinderen boeken kunnen zoeken doormiddel van geluids interactie.
=======
---

## Dependencies
* HTML, CSS & JS
* SCSS
* <a href="https://zoeken.oba.nl/api/v1/">Oba API</a>
* Node
* Express
* EJS
* SwiperJS
<br/><br/>
>>>>>>> e4e9c1cfa7980292c20c2427aca256ba5e613356

---

## Features List
* Boeken / Films bekijken
* Praten tegen de chatbot
* Samenvatting van boeken / films laten voorlezen
* Op een kindvriendelijke manier geholpen worden
<br/><br/>

---

## Live Demo
<a href="https://oba-chatbot.herokuapp.com/">https://oba-chatbot.herokuapp.com/</a><br/>
🚨 De API functineert niet altijd op de live demo, om de app optimaal te ervaren adviseren we je om het project te clonen
<br/></br>

---

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

---

## External data source

<<<<<<< HEAD
Voor dit project heb ik een externe data source gebruikt van de OBA, in deze API kan je boeken vinden uit verschillende categoriëren wij hebben ervoor gekozen om alleen prentenboeken te nemen aangezien de applicatie voor kinderen

<img src="https://github.com/TristanVarewijck/TechDefined/blob/main/assets/images/newApi-LOGO.jpeg" alt="newsapi-logo" height="250px"/>

Voor dit project gebruik ik de API van de OBA.
Om deze applicatie te gebruiken heb je de volgende values nodig met de bijhorende params.

Deze gebruik ik om te zoeken naar specifieke onderwerpen in prentenboeken:
=======
Voor dit project hebben wij de Oba API gebruikt. <a href="https://zoeken.oba.nl/api/v1">https://zoeken.oba.nl/api/v1</a>.

Om in de Api te zoeken gebruiken we de endpoints hieronder in de params:

>>>>>>> e4e9c1cfa7980292c20c2427aca256ba5e613356

|  Key  |    q    |   sortBy    | language | pageSize |  apiKey  |
| :---: | :-----: | :---------: | :------: | :------: | :------: |
| value | {input} | publishedAt |    en    |   100    | {apiKey} |

<<<<<<< HEAD
Deze API call gebruik ik op de zoeken op ID zodat elk boek een eigen detail pagina heeft.
=======
Deze API call gebruiken we op de zoeken op ID zodat elk boek een eigen detail pagina heeft.
>>>>>>> e4e9c1cfa7980292c20c2427aca256ba5e613356

|  Key  | country |  category  | pageSize |  apiKey  |
| :---: | :-----: | :--------: | :------: | :------: |
| value |   us    | technology |   100    | {apiKey} |

<br/><br/>

---


## MOSCOW - tabel

Hieronder zie je de functies of addons en de priority ervan.

// 9 mei 2022

1. Must have

<<<<<<< HEAD
   - ~~Product overview~~
   - ~~Chatbot api search~~
   - ~~Detail pages~~
   - ~~Different carachters~~
=======
   - Product overview
   - Chatbot api search
   - Detail pages
   - Different carachters
>>>>>>> e4e9c1cfa7980292c20c2427aca256ba5e613356

2. Should have

   - Account (session storage)

3. Could have

   - Reading list
   - More GSAP animations

4. Won't have

   - Reservation integration
<<<<<<< HEAD

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
=======
<br/><br/>
>>>>>>> e4e9c1cfa7980292c20c2427aca256ba5e613356

---

## Meta

Tristan Varewijck <br>
:email: [Tristan.varewijck@gmail.com](Tristan.varewijck@gmail.com) ||
:large_blue_diamond: [https://www.linkedin.com/in/tristanvarewijck-1999/](https://www.linkedin.com/in/tristanvarewijck-1999/)

Muhammet Komür <br>
:email: [075muhammet@gmail.com](075muhammet@gmail.com) ||
:large_blue_diamond: [https://www.linkedin.com/in/muhammet-k%C3%B6m%C3%BCr-96197b163/](https://www.linkedin.com/in/muhammet-k%C3%B6m%C3%BCr-96197b163/)

![Ask Me Anything !](https://img.shields.io/badge/Ask%20me-anything-1abc9c.svg)

---

## License

Usage is provided under the [MIT License](https://github.com/git/git-scm.com/blob/master/MIT-LICENSE.txt) MIT. See [LICENSE](https://github.com/TristanVarewijck/WAFStoNode/blob/master/LICENSE) for the full details.



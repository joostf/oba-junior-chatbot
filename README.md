# Meesterproef - OBA Chatbot

<img src="https://i.ibb.co/mvcqKPV/poppetjes.png" alt="poppetjes"/>

Voor dit project hebben wij ik een app gebouwd waarbij kinderen rond de 6/7 jaar eenvoudig met behulp van een chatbot boeken en films kunnen vinden. De kinderen kiezen eerst een figuurtje om vriendjes mee te worden. Vervolgens klikt het kind op het figuurtje en vindt er een voice user interface plaats.
De chatbot vraagt wat de kind leuk vind. Het kindt zegt dan een woord en dan wordt dat woordje omgezet in een string en wordt het als een query meegegeven in de search api. Vervolgens worden de resultaten weergegven op een andere pagina.
<br/><br/>

---

## Schermen
<img src="https://raw.githubusercontent.com/TristanVarewijck/oba-junior-chatbot/main/public/assets/images/schermen2.png" alt="schermen"/>
<br/><br/>
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

Voor dit project hebben wij de Oba API gebruikt. <a href="https://zoeken.oba.nl/api/v1">https://zoeken.oba.nl/api/v1</a>.

Om in de Api te zoeken gebruiken we de endpoints hieronder in de params:

|  Key  |    q    |   sortBy    | language | pageSize |  apiKey  |
| :---: | :-----: | :---------: | :------: | :------: | :------: |
| value | {input} | publishedAt |    en    |   100    | {apiKey} |

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



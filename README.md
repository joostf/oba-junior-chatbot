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
- HTML, CSS & JS
- SCSS
- Oba API
- Node
- Express
- EJS
- SwiperJS

---

## Features List

- Boeken / Films bekijken
- Praten tegen de chatbot
- Samenvatting van boeken / films laten voorlezen
- Op een kindvriendelijke manier geholpen worden
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

Voor dit project heb ik een externe data source gebruikt van de OBA, in deze API kan je boeken vinden uit verschillende categoriëren wij hebben ervoor gekozen om alleen prentenboeken te nemen aangezien de applicatie voor kinderen

Om deze applicatie te gebruiken heb je de volgende values nodig met de bijhorende params.

Deze gebruik ik om te zoeken naar specifieke onderwerpen in prentenboeken:

|  Key  |    q    |   sortBy    | language | pageSize |  apiKey  |
| :---: | :-----: | :---------: | :------: | :------: | :------: |
| value | {input} | publishedAt |    en    |   100    | {apiKey} |

Deze API call gebruik ik op de zoeken op ID zodat elk boek een eigen detail pagina heeft.

|  Key  | country |  category  | pageSize |  apiKey  |
| :---: | :-----: | :--------: | :------: | :------: |
| value |   us    | technology |   100    | {apiKey} |

<br/><br/>

---

## MOSCOW - tabel

Hieronder zie je de functies of addons en de priority ervan.

// 9 mei 2022

1. Must have

   - ~~Product overview~~
   - ~~Chatbot api search~~
   - ~~Detail pages~~
   - ~~Different carachters~~

2. Should have

   - Account (session storage)

3. Could have

   - Reading list
   - More GSAP animations

4. Won't have

   - Reservation integration

---
<br/><br/>

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

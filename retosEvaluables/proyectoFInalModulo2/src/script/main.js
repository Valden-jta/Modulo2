// * IMPORTS /////////////////////////////////////

import { Professional } from "./clases/professional.js";
import { Movie } from "./clases/movie.js";

// * OBJETOS /////////////////////////////////////

//** ---- Declaracion de objetos

// Professional
let johnTravolta = new Professional(
  "John Travolta",
  70,
  90,
  188,
  true,
  "Estados Unidos",
  0,
  "Actor",
  "../imagenes/John_Travolta.jpg"
);
let umaThurman = new Professional(
  "Uma Thurman",
  50,
  64,
  180,
  false,
  "Estados Unidos",
  0,
  "Actriz",
  "../imagenes/Uma_thurman.webp"
);
let samuelLJackson = new Professional(
  "Samuel L. Jackson",
  75,
  94,
  189,
  false,
  "Estados Unidos",
  1,
  "Actor",
  "../imagenes/Samuel_L_Jackson.jpg"
);
let bruceWillis = new Professional(
  "Bruce Willis",
  65,
  93,
  183,
  true,
  "Estados Unidos",
  0,
  "Actor",
  "../imagenes/Bruce_Willis.webp"
);
let quentinTarantino = new Professional(
  "Quentin Tarantino",
  61,
  90,
  185,
  false,
  "Estados Unidos",
  2,
  "Director",
  "../imagenes/Quentin_Tarantino.jpeg"
);
let elijahWood = new Professional(
  "Elijah Wood",
  43,
  64,
  168,
  false,
  "Estados Unidos",
  0,
  "Actor",
  "../imagenes/Elijah_Wood.webp"
);
let ianMcKellen = new Professional(
  "Ian McKellen",
  85,
  80,
  180,
  false,
  "Reino Unido",
  0,
  "Actor",
  "../imagenes/Ian_McKellen.jpg"
);
let viggoMortensen = new Professional(
  "Viggo Mortensen",
  65,
  81,
  180,
  false,
  "Estados Unidos",
  0,
  "Actor",
  "../imagenes/Viggo_Mortensen.jpg"
);
let seanAstin = new Professional(
  "Sean Astin",
  53,
  85,
  170,
  false,
  "Estados Unidos",
  0,
  "Actor",
  "../imagenes/Sean_Astin.webp"
);
let peterJackson = new Professional(
  "Peter Jackson",
  63,
  120,
  169,
  false,
  "Nueva Zelanda",
  3,
  "Director",
  "../imagenes/Peter_Jackson.jpg"
);
let franWalsh = new Professional(
  "Fran Walsh",
  63,
  60,
  165,
  false,
  "Nueva Zelanda",
  3,
  "Guionista",
  "../imagenes/Fran_Walsh.jpg"
);
let maribelVerdu = new Professional(
  "Maribel Verdú",
  50,
  60,
  165,
  false,
  "España",
  0,
  "Actriz",
  "../imagenes/Maribel_Verdu.jpg"
);
let ivanaBaquero = new Professional(
  "Ivana Baquero",
  30,
  55,
  160,
  false,
  "España",
  0,
  "Actriz",
  "../imagenes/Ivana_Baquero.jpeg"
);
let dougJones = new Professional(
  "Doug Jones",
  64,
  64,
  192,
  false,
  "Estados Unidos",
  0,
  "Actor",
  "../imagenes/Doug_Jones.jpg"
);
let ariadnaGil = new Professional(
  "Ariadna Gil",
  51,
  56,
  168,
  false,
  "España",
  0,
  "Actriz",
  "../imagenes/Ariadna_gil.jpg"
);
let guillermoDelToro = new Professional(
  "Guillermo del Toro",
  55,
  100,
  178,
  false,
  "México",
  0,
  "Director",
  "../imagenes/Guillermo_del_Toro.webp"
);
let javierCamara = new Professional(
  "Javier Cámara",
  53,
  70,
  170,
  false,
  "España",
  0,
  "Actor",
  "../imagenes/Javier_Camara.webp"
);
let carlosAreces = new Professional(
  "Carlos Areces",
  48,
  75,
  170,
  false,
  "España",
  0,
  "Actor",
  "../imagenes/Carlos_Areces.jpg"
);
let raulArevalo = new Professional(
  "Raúl Arévalo",
  42,
  70,
  175,
  false,
  "España",
  0,
  "Actor",
  "../imagenes/Raul_Arevalo.jpg"
);
let lolaDuenyas = new Professional(
  "Lola Dueñas",
  49,
  65,
  165,
  false,
  "España",
  0,
  "Actriz",
  "../imagenes/Lola_Dueñas.webp"
);
let pedroAlmodovar = new Professional(
  "Pedro Almodóvar",
  72,
  75,
  178,
  false,
  "España",
  0,
  "Director",
  "../imagenes/Pedro_Almodovar.webp"
);
let robertDeNiro = new Professional(
  "Robert De Niro",
  76,
  75,
  177,
  false,
  "Estados Unidos",
  0,
  "Actor",
  "../imagenes/Robert_De_Niro.jpg"
);
let alPacino = new Professional(
  "Al Pacino",
  79,
  75,
  170,
  false,
  "Estados Unidos",
  0,
  "Actor",
  "../imagenes/Al_Pacino.webp"
);
let joePesci = new Professional(
  "Joe Pesci",
  76,
  70,
  163,
  false,
  "Estados Unidos",
  0,
  "Actor",
  "../imagenes/Joe_Pesci.jpeg"
);
let harveyKeitel = new Professional(
  "Harvey Keitel",
  80,
  75,
  170,
  false,
  "Estados Unidos",
  0,
  "Actor",
  "../imagenes/Harvey_Keitel.jpg"
);
let martinScorsese = new Professional(
  "Martin Scorsese",
  77,
  70,
  163,
  false,
  "Estados Unidos",
  0,
  "Director",
  "../imagenes/Martin-Scorsese.jpg"
);
let stevenZaillian = new Professional(
  "Steven Zaillian",
  67,
  80,
  170,
  false,
  "Estados Unidos",
  0,
  "Guionista",
  "../imagenes/Steven-Zaillian.jpg"
);
let robertDowneyJr = new Professional(
  "Robert Downey Jr.",
  55,
  78,
  174,
  false,
  "Estados Unidos",
  0,
  "Actor",
  "../imagenes/Robert_Downey_Jr.jpg"
);
let chrisEvans = new Professional(
  "Chris Evans",
  38,
  88,
  183,
  false,
  "Estados Unidos",
  0,
  "Actor",
  "../imagenes/Chris_Evans.jpg"
);
let markRuffalo = new Professional(
  "Mark Ruffalo",
  52,
  80,
  173,
  false,
  "Estados Unidos",
  0,
  "Actor",
  "../imagenes/Mark_Ruffalo.jpg"
);
let chrisHemsworth = new Professional(
  "Chris Hemsworth",
  36,
  91,
  190,
  false,
  "Australian",
  0,
  "Actor",
  "../imagenes/Chris_Hemsworth.webp"
);
let scarlettJohansson = new Professional(
  "Scarlett Johansson",
  39,
  57,
  160,
  false,
  "Estados Unidos",
  2,
  "Actriz",
  "../imagenes/Scarlett_Johansson.webp"
);
let anthonyRusso = new Professional(
  "Anthony Russo",
  50,
  90,
  183,
  false,
  "Estados Unidos",
  0,
  "Director",
  "../imagenes/Anthony_Russo.jpg"
);
let christopherMarkus = new Professional(
  "Christopher Markus",
  51,
  85,
  178,
  false,
  "Estados Unidos",
  0,
  "Guionista",
  "../imagenes/Christopher_Markus.jpg"
);
let macarenaGarcia = new Professional(
  "Macarena García",
  36,
  55,
  160,
  false,
  "España",
  0,
  "Actriz",
  "../imagenes/Macarena_Garcia.jpg"
);

let annaCastillo = new Professional(
  "Anna Castillo",
  30,
  50,
  160,
  false,
  "España",
  0,
  "Actriz",
  "../imagenes/Anna_Castillo.webp"
);

let belenCuesta = new Professional(
  "Belén Cuesta",
  40,
  60,
  170,
  false,
  "España",
  0,
  "Actriz",
  "../imagenes/Belen_Cuesta.jpg"
);

let graciaOlayo = new Professional(
  "Gracia Olayo",
  66,
  65,
  160,
  false,
  "España",
  0,
  "Actriz",
  "../imagenes/Gracia_Olayo.jpg"
);

let javierAmbrossi = new Professional(
  "Javier Ambrossi",
  40,
  70,
  175,
  false,
  "España",
  0,
  "Director",
  "../imagenes/Javier_Ambrossi.webp"
);
let javierGutierrez = new Professional(
  "Javier Gutiérrez",
  53,
  70,
  157,
  false,
  "España",
  0,
  "Actor",
  "../imagenes/Javier_Gutierrez.jpg"
);

let nereaBarros = new Professional(
  "Nerea Barros",
  43,
  55,
  165,
  false,
  "España",
  0,
  "Actriz",
  "../imagenes/Nerea_Barros.jpeg"
);

let antonioDeLaTorre = new Professional(
  "Antonio de la Torre",
  56,
  75,
  178,
  false,
  "España",
  0,
  "Actor",
  "../imagenes/Antonio_de_la_Torre.jpg"
);

let albertoRodriguez = new Professional(
  "Alberto Rodríguez",
  53,
  75,
  179,
  false,
  "España",
  0,
  "Director",
  "../imagenes/Alberto_Rodriguez.webp"
);

let quimGutierrez = new Professional(
  "Quim Gutiérrez",
  43,
  77,
  177,
  false,
  "España",
  0,
  "Actor",
  "../imagenes/Quim_Gutierrez.jpeg"
);

let adrianLastra = new Professional(
  "Adrián Lastra",
  40,
  75,
  180,
  false,
  "España",
  0,
  "Actor",
  "../imagenes/Adrian_Lastra.webp"
);

let inmaCuesta = new Professional(
  "Inma Cuesta",
  44,
  55,
  160,
  false,
  "España",
  0,
  "Actriz",
  "../imagenes/Inma_Cuesta.jpg"
);

let claraLago = new Professional(
  "Clara Lago",
  34,
  55,
  160,
  false,
  "España",
  0,
  "Actriz",
  "../imagenes/Clara_Lago.webp"
);

let danielSanchezArevalo = new Professional(
  "Daniel Sánchez Arévalo",
  53,
  75,
  180,
  false,
  "España",
  0,
  "Director",
  "../imagenes/Daniel_Sanchez_Arevalo.webp"
);

// Movie
let movie1 = new Movie(
  "Pulp Fiction",
  1994,
  "Estados Unidos",
  "Inglés",
  "Amazon Prime Video",
  "Vincent Vega",
  "Lawrence Bender",
  "Miramax Films",
  "Crimen"
);
movie1.actors = [johnTravolta, umaThurman, samuelLJackson, bruceWillis];
movie1.director = quentinTarantino;
movie1.writer = quentinTarantino;
movie1.isMCU = false;
movie1.photo = "../imagenes/Pulp_Fiction.webp";

let movie2 = new Movie(
  "El Señor de los Anillos: El retorno del rey",
  2003,
  "Nueva Zelanda",
  "Inglés",
  "Max",
  "Frodo Baggins",
  "Barrie M. Osborne",
  "New Line Cinema",
  "Fantasía"
);
movie2.actors = [elijahWood, ianMcKellen, viggoMortensen, seanAstin];
movie2.director = peterJackson;
movie2.writer = franWalsh;
movie2.isMCU = false;
movie2.photo = "../imagenes/the_lord_of_the_rings_the_return_of_the_king.jpg";

let movie3 = new Movie(
  "El laberinto del fauno",
  2006,
  "España",
  "Castellano",
  "Amazon Prime Video",
  "Ofelia",
  "Guillermo del Toro",
  "Warner Bros",
  "Fantasía"
);
movie3.actors = [maribelVerdu, ivanaBaquero, dougJones, ariadnaGil];
movie3.director = guillermoDelToro;
movie3.writer = guillermoDelToro;
movie3.isMCU = false;
movie3.photo = "../imagenes/El_laberinto_del_fauno.jpg";

let movie4 = new Movie(
  "Los amantes pasajeros",
  2013,
  "España",
  "Castellano",
  "Netflix",
  "Joserra",
  "Agustín Almodóvar",
  "Sony Pictures Releasing",
  "Comedia"
);
movie4.actors = [javierCamara, carlosAreces, raulArevalo, lolaDuenyas];
movie4.director = pedroAlmodovar;
movie4.writer = pedroAlmodovar;
movie4.isMCU = false;
movie4.photo = "../imagenes/Los_amantes_pasajeros.jpg";

let movie5 = new Movie(
  "El irlandés",
  2019,
  "Estados Unidos",
  "Inglés",
  "Netflix",
  "Frank Sheeran",
  "Robert De Niro",
  "Netflix",
  "Crimen"
);
movie5.actors = [robertDeNiro, alPacino, joePesci, harveyKeitel];
movie5.director = martinScorsese;
movie5.writer = stevenZaillian;
movie5.isMCU = false;
movie5.photo = "../imagenes/The_Irishman.jpg";

let movie6 = new Movie(
  "Los Vengadores: Endgame",
  2019,
  "Estados Unidos",
  "Inglés",
  "Disney+",
  "Tony Stark / Iron Man",
  "Kevin Feige",
  "Walt Disney Studios Motion Pictures",
  "Ciencia Ficción"
);
movie6.actors = [
  robertDowneyJr,
  chrisEvans,
  markRuffalo,
  scarlettJohansson,
  chrisHemsworth,
];
movie6.director = anthonyRusso;
movie6.writer = christopherMarkus;
movie6.isMCU = true;
movie6.photo = "../imagenes/Avengers_endgame.jpg";

let movie7 = new Movie(
  "La isla mínima",
  2014,
  "España",
  "Castellano",
  "Filmin",
  "Pedro Suárez",
  "Atípica Films",
  "Warner Bros. Pictures Intl. España",
  "Thriller"
);
movie7.actors = [raulArevalo, javierGutierrez, nereaBarros, antonioDeLaTorre];
movie7.director = albertoRodriguez;
movie7.writer = albertoRodriguez;
movie7.isMCU = false;
movie7.photo = "../imagenes/La_isla_minima.jpg";

let movie8 = new Movie(
  "Primos",
  2011,
  "España",
  "Castellano",
  "Filmin",
  "Diego",
  "José Antonio Félez",
  "Warner Bros. Pictures Intl. España",
  "Comedia"
);
movie8.actors = [
  quimGutierrez,
  raulArevalo,
  adrianLastra,
  inmaCuesta,
  antonioDeLaTorre,
  claraLago,
];
movie8.director = danielSanchezArevalo;
movie8.writer = danielSanchezArevalo;
movie8.isMCU = false;
movie8.photo = "../imagenes/Primos.jpg";

let movie9 = new Movie(
  "La llamada",
  2017,
  "España",
  "Castellano",
  "Filmin",
  "María",
  "Lo Hacemos y Ya Vemos",
  "DeAPlaneta",
  "Musical"
);
movie9.actors = [macarenaGarcia, annaCastillo, belenCuesta, graciaOlayo];
movie9.director = javierAmbrossi;
movie9.writer = javierAmbrossi;
movie9.isMCU = false;
movie9.photo = "../imagenes/La_llamada.jpg";

let profesionales = [
  johnTravolta,
  umaThurman,
  samuelLJackson,
  bruceWillis,
  quentinTarantino,
  elijahWood,
  ianMcKellen,
  viggoMortensen,
  seanAstin,
  peterJackson,
  franWalsh,
  maribelVerdu,
  ivanaBaquero,
  dougJones,
  ariadnaGil,
  guillermoDelToro,
  javierCamara,
  carlosAreces,
  raulArevalo,
  lolaDuenyas,
  pedroAlmodovar,
  robertDeNiro,
  alPacino,
  joePesci,
  harveyKeitel,
  martinScorsese,
  stevenZaillian,
  robertDowneyJr,
  chrisEvans,
  markRuffalo,
  chrisHemsworth,
  scarlettJohansson,
  anthonyRusso,
  christopherMarkus,
  macarenaGarcia,
  annaCastillo,
  belenCuesta,
  graciaOlayo,
  javierAmbrossi,
  javierGutierrez,
  nereaBarros,
  antonioDeLaTorre,
  albertoRodriguez,
  quimGutierrez,
  adrianLastra,
  inmaCuesta,
  claraLago,
];

let peliculas = [
  movie1,
  movie2,
  movie3,
  movie4,
  movie5,
  movie6,
  movie7,
  movie8,
  movie9,
];

// * FUNCIONES /////////////////////////////////////

function renderCards() {
  console.log("renderCards funcionando");
  let cardContainer = document.querySelector(".card__container");
  cardContainer.innerHTML = "";

  if (cardContainer.id === "peliculas") {
    console.log("mostrando peliculas");
    peliculas.forEach((pelicula, indice) => {
      cardContainer.innerHTML += `        <div id="pelicula" class="card">
              <div class="card__picture">
                  <img src="${pelicula.photo}" alt="Cartel de ${
        pelicula.title
      }">
              </div>
              <div class="card__data">
                <div class="card__data-title">
                  <h3>${pelicula.title}</h3>
                </div>
                  <div class="card__data-grid">
                      <div class="card__data-celda --celda-1">
                          <h4>Actores principales</h4>
                          <p>${pelicula.actors.map((actor) => actor.name)}</p>
                      </div>
                      <div class="card__data-celda --celda-2">
                          <h4>Año</h4>
                          <p>${pelicula.releaseYear}</p>
                      </div>
                      <div class="card__data-celda --celda-3">
                          <h4>Género</h4>     
                          <p>${pelicula.genre}</p>
                      </div>
                      <div class="card__data-celda --celda-4">
                          <h4>País</h4>
                          <p>${pelicula.nationality}</p>
                      </div>
                      <div class="card__data-celda --celda-5">
                          <h4>Idioma original</h4>     
                          <p>${pelicula.languaje}</p>
                      </div>
                      <div class="card__data-celda --celda-6">
                          <h4>Director</h4>
                          <p>${pelicula.director.name}</p>
                      </div>
                      <div class="card__data-celda --celda-7">
                          <h4>Guionista</h4>     
                          <p>${pelicula.writer.name}</p>
                      </div>
                      <div class="card__data-celda --celda-8">
                          <h4>Productor</h4>     
                          <p>${pelicula.producer}</p>
                      </div>
                      <div class="card__data-celda --celda-9">
                      <h4>Plataforma</h4>     
                      <p>${pelicula.platform}</p>
                      </div>
                      <div class="card__data-celda --celda-10">
                      <h4>Distribuidor</h4>     
                      <p>${pelicula.distributor}</p>
                      </div>
                  </div>
              </div>
          </div>`;
    });
  } else {
    console.log("mostrando profesionales");
    profesionales.forEach((profesional, indice) => {
      cardContainer.innerHTML += `
  <div id="profesional" class="card --profesional">
    <div class="card__picture--profesional">
      <img
        src="${profesional.photo}"
        alt="Retrato de ${profesional.name}"/>
    </div>
    <div class="card__data">
      <h3>${profesional.name}</h3>
      <div class="card__data--profesional">
        <div class="card__data-celda --celda-profesional-1">
          <h4>Profesión</h4>
          <p>${profesional.profession}</p>
        </div>
        <div class="card__data-celda --celda-profesional-2">
          <h4>Nacionalidad</h4>
          <p>${profesional.nationality}</p>
        </div>
        <div class="card__data-celda --celda-profesional-3">
        <h4>Edad</h4>
        <p>${profesional.age}</p>
        </div>
        <div class="card__data-celda --celda-profesional-4">
        <div class="card__data-celda --celda-profesional-5">
        <h4>Oscars</h4>
        <p>${profesional.oscarsNumber}</p>
            </div>
            <div class="card__data-celda --celda-profesional-6">
              <h4>En activo</h4>
              <p>${profesional.isRetired ? "No" : "Sí"}</p>
            </div>
          </div>
      </div>
    </div>
  </div>`;
    });
  }
  return cardContainer;
}

//?  Responsive cards profesionales

function responsive() {
  console.log("responsive funcionando");
  let breakpoint = 640;
  let windowWide = window.innerWidth;
  let profesionalDiv = document.querySelectorAll(".card__data--profesional");
  console.log("WindowWide: " + windowWide);
  if (windowWide <= breakpoint) {
    console.log("Breakpoint roto");
    // profesionales
    profesionalDiv.forEach((cardProf) => {
      cardProf.classList.add("card__data-grid--profesional");
      cardProf.classList.remove("card__data--profesional");
      let cardData = cardProf.querySelectorAll("card__data-celda");
      cardData.forEach((element, indice) => {
        element.classList.add(`--celda-profesional-${indice}`);
      });
    });
    // peliculas
    // peliculas
  } else {
    // profesionales
    profesionalDiv.forEach((cardProf) => {
      cardProf.classList.remove("card__data-grid--profesional");
      cardProf.classList.add("card__data--profesional");
      let cardData = cardProf.querySelectorAll("card__data-celda");
      cardData.forEach((element, indice) => {
        element.classList.remove(`--celda-profesional-${indice}`);
      });
    });
  }
}

function registrarPelicula() {
  console.log("registrarPelicula funcionando");
  let titulo = document.querySelector("#title").value;
  let año = parseInt(document.querySelector("#releaseYear").value);
  let pais = document.querySelector("#nationality").value;
  let genero = document.querySelector("#genre").value;
  let idioma = document.querySelector("#languaje").value;
  let plataforma = document.querySelector("#platform").value;
  let isMCUElement = document.querySelector("#isMCU");
  let isMCUChecked = isMCUElement ? isMCUElement.checked : false;
  let protagonista = document.querySelector("#mainCharacterName").value;
  let productor = document.querySelector("#producer").value;
  let distribuidor = document.querySelector("#distributor").value;
  let cartel = document.querySelector("#photo").value;
  let director = '-';
  let guionista = '-';
  let actores = '-';

  let nuevaPeli = new Movie(
    titulo,
    año,
    pais,
    idioma,
    plataforma,
    protagonista,
    productor,
    distribuidor,
    genero
  );
  nuevaPeli.actors.name = actores;
  nuevaPeli.director.name = director;
  nuevaPeli.writer.name = guionista;
  nuevaPeli.isMCU = isMCUChecked;
  nuevaPeli.photo = cartel;

  peliculas.unshift(nuevaPeli);
  renderCards();
  arriba();
}

// volver arriba
function arriba() {
  let peliculasContainer = document.querySelector("#peliculas");
    console.log(" subiendo arriba");
    peliculasContainer.scrollIntoView({ behavior: "smooth" });
}

// * MAIN /////////////////////////////////////
console.log("main script funcionando");
renderCards();
responsive();

window.addEventListener("resize", responsive);
document.querySelector("#submitPelicula").addEventListener('click',registrarPelicula)
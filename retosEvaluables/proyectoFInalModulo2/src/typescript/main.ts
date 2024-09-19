// * CLASES /////////////////////////////////////

class Professional {
  // atributos
  private _name: string;
  private _age: number;
  private _weight: number;
  private _height: number;
  private _isRetired: boolean;
  private _nationality: string;
  private _oscarsNumber: number;
  private _profession: string;
  private _photo: string;

  // Constructor
  constructor(
    name: string,
    age: number,
    weight: number,
    height: number,
    isRetired: boolean,
    nationality: string,
    oscarsNumber: number,
    profession: string,
    photo: string
  ) {
    this._name = name;
    this._age = age;
    this._weight = weight;
    this._height = height;
    this._isRetired = isRetired;
    this._nationality = nationality;
    this._oscarsNumber = oscarsNumber;
    this._profession = profession;
    this._photo = photo;
  }
  // Getters y setters
  public get name(): string {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }
  public get age(): number {
    return this._age;
  }
  public set age(value: number) {
    this._age = value;
  }
  public get weight(): number {
    return this._weight;
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public get height(): number {
    return this._height;
  }
  public set height(value: number) {
    this._height = value;
  }
  public get isRetired(): boolean {
    return this._isRetired;
  }
  public set isRetired(value: boolean) {
    this._isRetired = value;
  }
  public get nationality(): string {
    return this._nationality;
  }
  public set nationality(value: string) {
    this._nationality = value;
  }
  public get oscarsNumber(): number {
    return this._oscarsNumber;
  }
  public set oscarsNumber(value: number) {
    this._oscarsNumber = value;
  }

  public get profession(): string {
    return this._profession;
  }
  public set profession(value: string) {
    this._profession = value;
  }

  public get photo(): string {
    return this._photo;
  }
  public set photo(value: string) {
    this._photo = value;
  }
}

class Movie {
  // Atributos
  private _title: string;
  private _releaseYear: number;
  private _actors: Professional[];
  private _nationality: string;
  private _director: Professional;
  private _writer: Professional;
  private _languaje: string;
  private _platform: string;
  private _isMCU: boolean;
  private _mainCharacterName: string;
  private _producer: string;
  private _distributor: string;
  private _genre: string;
  private _photo: string;

  // Constructor
  constructor(
    title: string,
    releaseYear: number,
    nationality: string,
    genre: string
  ) {
    this._title = title;
    this._releaseYear = releaseYear;
    this._actors = [];
    this._nationality = nationality;
    this._director = new Professional("", 0, 0, 0, false, "", 0, "", "");
    this._writer = new Professional("", 0, 0, 0, false, "", 0, "", "");
    this._languaje = "";
    this._platform = "";
    this._isMCU = false;
    this._mainCharacterName = "";
    this._producer = "";
    this._distributor = "";
    this._genre = genre;
    this._photo = "";
  }

  // Getters y setters
  public get title(): string {
    return this._title;
  }
  public set title(value: string) {
    this._title = value;
  }

  public get releaseYear(): number {
    return this._releaseYear;
  }
  public set releaseYear(value: number) {
    this._releaseYear = value;
  }

  public get actors(): Professional[] {
    return this._actors;
  }
  public set actors(value: Professional[]) {
    this._actors = value;
  }

  public get nationality(): string {
    return this._nationality;
  }
  public set nationality(value: string) {
    this._nationality = value;
  }

  public get director(): Professional {
    return this._director;
  }
  public set director(value: Professional) {
    this._director = value;
  }

  public get writer(): Professional {
    return this._writer;
  }
  public set writer(value: Professional) {
    this._writer = value;
  }

  public get languaje(): string {
    return this._languaje;
  }
  public set languaje(value: string) {
    this._languaje = value;
  }

  public get platform(): string {
    return this._platform;
  }
  public set platform(value: string) {
    this._platform = value;
  }

  public get isMCU(): boolean {
    return this._isMCU;
  }
  public set isMCU(value: boolean) {
    this._isMCU = value;
  }

  public get mainCharacterName(): string {
    return this._mainCharacterName;
  }
  public set mainCharacterName(value: string) {
    this._mainCharacterName = value;
  }

  public get producer(): string {
    return this._producer;
  }
  public set producer(value: string) {
    this._producer = value;
  }

  public get distributor(): string {
    return this._distributor;
  }
  public set distributor(value: string) {
    this._distributor = value;
  }

  public get genre(): string {
    return this._genre;
  }
  public set genre(value: string) {
    this._genre = value;
  }
  public get photo(): string {
    return this._photo;
  }
  public set photo(value: string) {
    this._photo = value;
  }

  // Métodos públicos
}

// * OBJETOS /////////////////////////////////////

//** ---- Declaracion de objetos

// Professional
let johnTravolta: Professional = new Professional(
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
let umaThurman: Professional = new Professional(
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
let samuelLJackson: Professional = new Professional(
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
let bruceWillis: Professional = new Professional(
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
let quentinTarantino: Professional = new Professional(
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
let elijahWood: Professional = new Professional(
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
let ianMcKellen: Professional = new Professional(
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
let viggoMortensen: Professional = new Professional(
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
let seanAstin: Professional = new Professional(
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
let peterJackson: Professional = new Professional(
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
let franWalsh: Professional = new Professional(
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
let maribelVerdu: Professional = new Professional(
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
let ivanaBaquero: Professional = new Professional(
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
let dougJones: Professional = new Professional(
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
let ariadnaGil: Professional = new Professional(
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
let guillermoDelToro: Professional = new Professional(
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
let javierCamara: Professional = new Professional(
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
let carlosAreces: Professional = new Professional(
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
let raulArevalo: Professional = new Professional(
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
let lolaDuenyas: Professional = new Professional(
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
let pedroAlmodovar: Professional = new Professional(
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
let robertDeNiro: Professional = new Professional(
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
let alPacino: Professional = new Professional(
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
let joePesci: Professional = new Professional(
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
let harveyKeitel: Professional = new Professional(
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
let martinScorsese: Professional = new Professional(
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
let stevenZaillian: Professional = new Professional(
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
let robertDowneyJr: Professional = new Professional(
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
let chrisEvans: Professional = new Professional(
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
let markRuffalo: Professional = new Professional(
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
let chrisHemsworth: Professional = new Professional(
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
let anthonyRusso: Professional = new Professional(
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
let christopherMarkus: Professional = new Professional(
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
let macarenaGarcia: Professional = new Professional(
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

let annaCastillo: Professional = new Professional(
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

let belenCuesta: Professional = new Professional(
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

let graciaOlayo: Professional = new Professional(
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

let javierAmbrossi: Professional = new Professional(
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
let javierGutierrez: Professional = new Professional(
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

let nereaBarros: Professional = new Professional(
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

let antonioDeLaTorre: Professional = new Professional(
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

let albertoRodriguez: Professional = new Professional(
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

let quimGutierrez: Professional = new Professional(
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

let adrianLastra: Professional = new Professional(
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

let inmaCuesta: Professional = new Professional(
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

let claraLago: Professional = new Professional(
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

let danielSanchezArevalo: Professional = new Professional(
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

let profesionales: Professional[] = [
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

// Movie
let movie1: Movie = new Movie("Pulp Fiction", 1994, "Estados Unidos", "Crimen");
movie1.actors = [johnTravolta, umaThurman, samuelLJackson, bruceWillis];
movie1.director = quentinTarantino;
movie1.writer = quentinTarantino;
movie1.languaje = "Inglés";
movie1.platform = "Amazon Prime Video";
movie1.isMCU = false;
movie1.mainCharacterName = "Vincent Vega";
movie1.producer = "Lawrence Bender";
movie1.distributor = "Miramax Films";
movie1.photo = "../imagenes/Pulp_Fiction.webp";

let movie2: Movie = new Movie(
  "El Señor de los Anillos: El retorno del rey",
  2003,
  "Nueva Zelanda",
  "Fantasía"
);
movie2.actors = [elijahWood, ianMcKellen, viggoMortensen, seanAstin];
movie2.director = peterJackson;
movie2.writer = franWalsh;
movie2.languaje = "Inglés";
movie2.platform = "Max";
movie2.isMCU = false;
movie2.mainCharacterName = "Frodo Baggins";
movie2.producer = "Barrie M. Osborne";
movie2.distributor = "New Line Cinema";
movie2.photo = "../imagenes/the_lord_of_the_rings_the_return_of_the_king.jpg";

let movie3: Movie = new Movie(
  "El laberinto del fauno",
  2006,
  "España",
  "Fantasía"
);
movie3.actors = [maribelVerdu, ivanaBaquero, dougJones, ariadnaGil];
movie3.director = guillermoDelToro;
movie3.writer = guillermoDelToro;
movie3.languaje = "Spanish";
movie3.platform = "Amazon Prime Video";
movie3.isMCU = false;
movie3.mainCharacterName = "Ofelia";
movie3.producer = "Guillermo del Toro";
movie3.distributor = "Warner Bros";
movie3.photo = "../imagenes/El_laberinto_del_fauno.jpg";

let movie4: Movie = new Movie(
  "Los amantes pasajeros",
  2013,
  "España",
  "Comedia"
);
movie4.actors = [javierCamara, carlosAreces, raulArevalo, lolaDuenyas];
movie4.director = pedroAlmodovar;
movie4.writer = pedroAlmodovar;
movie4.languaje = "Castellano";
movie4.platform = "Netflix";
movie4.isMCU = false;
movie4.mainCharacterName = "Joserra";
movie4.producer = "Agustín Almodóvar";
movie4.distributor = "Sony Pictures Releasing";
movie4.photo = "../imagenes/Los_amantes_pasajeros.jpg";

let movie5: Movie = new Movie("El irlandés", 2019, "Estados Unidos", "Crimen");
movie5.actors = [robertDeNiro, alPacino, joePesci, harveyKeitel];
movie5.director = martinScorsese;
movie5.writer = stevenZaillian;
movie5.languaje = "Inglés";
movie5.platform = "Netflix";
movie5.isMCU = false;
movie5.mainCharacterName = "Frank Sheeran";
movie5.producer = "Robert De Niro";
movie5.distributor = "Netflix";
movie5.photo = "../imagenes/The_Irishman.jpg";

let movie6: Movie = new Movie(
  "Los Vengadores: Endgame",
  2019,
  "Estados Unidos",
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
movie6.languaje = "Inglés";
movie6.platform = "Disney+";
movie6.isMCU = true;
movie6.mainCharacterName = "Tony Stark / Iron Man";
movie6.producer = "Kevin Feige";
movie6.distributor = "Walt Disney Studios Motion Pictures";
movie6.photo = "../imagenes/Avengers_endgame.jpg";

let movie7: Movie = new Movie("La isla mínima", 2014, "España", "Thriller");
movie7.actors = [raulArevalo, javierGutierrez, nereaBarros, antonioDeLaTorre];
movie7.director = albertoRodriguez;
movie7.writer = albertoRodriguez;
movie7.languaje = "Castellano";
movie7.platform = "Filmin";
movie7.isMCU = false;
movie7.mainCharacterName = "Pedro Suárez";
movie7.producer = "Atípica Films";
movie7.distributor = "Warner Bros. Pictures Intl. España";
movie7.photo = "../imagenes/La_isla_minima.jpg";

let movie8: Movie = new Movie("Primos", 2011, "España", "Comedia");
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
movie8.languaje = "Castellano";
movie8.platform = "Filmin";
movie8.isMCU = false;
movie8.mainCharacterName = "Diego";
movie8.producer = "José Antonio Félez";
movie8.distributor = "Warner Bros. Pictures Intl. España";
movie8.photo = "../imagenes/Primos.jpg";

let movie9: Movie = new Movie("La llamada", 2017, "España", "Musical");
movie9.actors = [macarenaGarcia, annaCastillo, belenCuesta, graciaOlayo];
movie9.director = javierAmbrossi;
movie9.writer = javierAmbrossi;
movie9.languaje = "Castellano";
movie9.platform = "Filmin";
movie9.isMCU = false;
movie9.mainCharacterName = "María";
movie9.producer = "Lo Hacemos y Ya Vemos";
movie9.distributor = "DeAPlaneta";
movie9.photo = "../imagenes/La_llamada.jpg";

let peliculas: Movie[] = [
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

function renderCards(): HTMLDivElement {
  let cardContainer = document.querySelector(
    ".card__container"
  ) as HTMLDivElement;
  cardContainer.innerHTML = "";

  if (cardContainer.id === "peliculas") {
    peliculas.forEach((pelicula: Movie, indice: number) => {
      cardContainer.innerHTML += `        <div id="pelicula" class="card">
            <div class="card__picture">
                <img src="${pelicula.photo}" alt="Cartel de ${pelicula.title}">
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
    profesionales.forEach((profesional: Professional, indice: number) => {
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

function responsive(): void {
  let breakpoint: number = 640;
  let windowWide: number = window.innerWidth;
  let profesionalDiv = document.querySelectorAll(
    ".card__data--profesional"
  ) as NodeListOf<HTMLDivElement>;
  console.log("WindowWide: " + windowWide);
  if (windowWide <= breakpoint) {
    console.log("Breakpoint roto");
    // profesionales
    profesionalDiv.forEach((cardProf: HTMLDivElement) => {
      cardProf.classList.add("card__data-grid--profesional");
      cardProf.classList.remove("card__data--profesional");
      let cardData = cardProf.querySelectorAll(
        "card__data-celda"
      ) as NodeListOf<HTMLDivElement>;
      cardData.forEach((element: HTMLDivElement, indice: number) => {
        element.classList.add(`--celda-profesional-${indice}`);
      });
    });

    // peliculas
  } else {
    // profesionales
    profesionalDiv.forEach((cardProf: HTMLDivElement) => {
      cardProf.classList.remove("card__data-grid--profesional");
      cardProf.classList.add("card__data--profesional");
      let cardData = cardProf.querySelectorAll(
        "card__data-celda"
      ) as NodeListOf<HTMLDivElement>;
      cardData.forEach((element: HTMLDivElement, indice: number) => {
        element.classList.remove(`--celda-profesional-${indice}`);
      });
    });
  }
}

function registrarPelicula(): void {
  let titulo: string = (document.querySelector("#title") as HTMLInputElement)
    .value;
  let año: number = parseInt(
    (document.querySelector("#releaseYear") as HTMLInputElement).value
  );
  let pais: string = (
    document.querySelector("#nationality") as HTMLInputElement
  ).value;
  let genero: string = (document.querySelector("#genre") as HTMLInputElement)
    .value;

  let nuevaPeli: Movie = new Movie(titulo, año, pais, genero);
  nuevaPeli.languaje = (
    document.querySelector("#languaje") as HTMLInputElement
  ).value;
  nuevaPeli.platform = (
    document.querySelector("#platform") as HTMLInputElement
  ).value;

  let isMCUElement = document.querySelector(
    "#isMCU"
  ) as HTMLInputElement | null;
  let isMCUChecked = isMCUElement ? isMCUElement.checked : false;
  nuevaPeli.mainCharacterName = (
    document.querySelector("#mainCharacterName") as HTMLInputElement
  ).value;
  nuevaPeli.producer = (
    document.querySelector("#producer") as HTMLInputElement
  ).value;
  nuevaPeli.distributor = (
    document.querySelector("#distributor") as HTMLInputElement
  ).value;
  nuevaPeli.photo = (
    document.querySelector("#photo") as HTMLInputElement
  ).value;

  peliculas.unshift(nuevaPeli);
  renderCards();
}

 // volver arriba 
function arriba():void {
  let peliculasContainer:HTMLDivElement = document.querySelector('#peliculas') as HTMLDivElement;
  let submitPelicula:HTMLButtonElement = document.querySelector('#submitPelicula') as HTMLButtonElement;
  submitPelicula.addEventListener('click', function() {
        console.log(' subiendo arriba');
        
      peliculasContainer.scrollIntoView({behavior: 'smooth'})
  });
}

// * MAIN /////////////////////////////////////

renderCards();
responsive();

window.addEventListener("resize", responsive);

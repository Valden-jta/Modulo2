// * CLASES /////////////////////////////////////
var Professional = /** @class */ (function () {
    // Constructor
    function Professional(name, age, weight, height, isRetired, nationality, oscarsNumber, profession, photo) {
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
    Object.defineProperty(Professional.prototype, "name", {
        // Getters y setters
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Professional.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (value) {
            this._age = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Professional.prototype, "weight", {
        get: function () {
            return this._weight;
        },
        set: function (value) {
            this._weight = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Professional.prototype, "height", {
        get: function () {
            return this._height;
        },
        set: function (value) {
            this._height = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Professional.prototype, "isRetired", {
        get: function () {
            return this._isRetired;
        },
        set: function (value) {
            this._isRetired = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Professional.prototype, "nationality", {
        get: function () {
            return this._nationality;
        },
        set: function (value) {
            this._nationality = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Professional.prototype, "oscarsNumber", {
        get: function () {
            return this._oscarsNumber;
        },
        set: function (value) {
            this._oscarsNumber = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Professional.prototype, "profession", {
        get: function () {
            return this._profession;
        },
        set: function (value) {
            this._profession = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Professional.prototype, "photo", {
        get: function () {
            return this._photo;
        },
        set: function (value) {
            this._photo = value;
        },
        enumerable: false,
        configurable: true
    });
    return Professional;
}());
var Movie = /** @class */ (function () {
    // Constructor
    function Movie(title, releaseYear, nationality, genre) {
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
    Object.defineProperty(Movie.prototype, "title", {
        // Getters y setters
        get: function () {
            return this._title;
        },
        set: function (value) {
            this._title = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Movie.prototype, "releaseYear", {
        get: function () {
            return this._releaseYear;
        },
        set: function (value) {
            this._releaseYear = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Movie.prototype, "actors", {
        get: function () {
            return this._actors;
        },
        set: function (value) {
            this._actors = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Movie.prototype, "nationality", {
        get: function () {
            return this._nationality;
        },
        set: function (value) {
            this._nationality = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Movie.prototype, "director", {
        get: function () {
            return this._director;
        },
        set: function (value) {
            this._director = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Movie.prototype, "writer", {
        get: function () {
            return this._writer;
        },
        set: function (value) {
            this._writer = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Movie.prototype, "languaje", {
        get: function () {
            return this._languaje;
        },
        set: function (value) {
            this._languaje = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Movie.prototype, "platform", {
        get: function () {
            return this._platform;
        },
        set: function (value) {
            this._platform = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Movie.prototype, "isMCU", {
        get: function () {
            return this._isMCU;
        },
        set: function (value) {
            this._isMCU = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Movie.prototype, "mainCharacterName", {
        get: function () {
            return this._mainCharacterName;
        },
        set: function (value) {
            this._mainCharacterName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Movie.prototype, "producer", {
        get: function () {
            return this._producer;
        },
        set: function (value) {
            this._producer = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Movie.prototype, "distributor", {
        get: function () {
            return this._distributor;
        },
        set: function (value) {
            this._distributor = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Movie.prototype, "genre", {
        get: function () {
            return this._genre;
        },
        set: function (value) {
            this._genre = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Movie.prototype, "photo", {
        get: function () {
            return this._photo;
        },
        set: function (value) {
            this._photo = value;
        },
        enumerable: false,
        configurable: true
    });
    return Movie;
}());
// * OBJETOS /////////////////////////////////////
//** ---- Declaracion de objetos
// Professional
var johnTravolta = new Professional("John Travolta", 70, 90, 188, true, "Estados Unidos", 0, "Actor", "../imagenes/John_Travolta.jpg");
var umaThurman = new Professional("Uma Thurman", 50, 64, 180, false, "Estados Unidos", 0, "Actriz", "../imagenes/Uma_thurman.webp");
var samuelLJackson = new Professional("Samuel L. Jackson", 75, 94, 189, false, "Estados Unidos", 1, "Actor", "../imagenes/Samuel_L_Jackson.jpg");
var bruceWillis = new Professional("Bruce Willis", 65, 93, 183, true, "Estados Unidos", 0, "Actor", "../imagenes/Bruce_Willis.webp");
var quentinTarantino = new Professional("Quentin Tarantino", 61, 90, 185, false, "Estados Unidos", 2, "Director", "../imagenes/Quentin_Tarantino.jpeg");
var elijahWood = new Professional("Elijah Wood", 43, 64, 168, false, "Estados Unidos", 0, "Actor", "../imagenes/Elijah_Wood.webp");
var ianMcKellen = new Professional("Ian McKellen", 85, 80, 180, false, "Reino Unido", 0, "Actor", "../imagenes/Ian_McKellen.jpg");
var viggoMortensen = new Professional("Viggo Mortensen", 65, 81, 180, false, "Estados Unidos", 0, "Actor", "../imagenes/Viggo_Mortensen.jpg");
var seanAstin = new Professional("Sean Astin", 53, 85, 170, false, "Estados Unidos", 0, "Actor", "../imagenes/Sean_Astin.webp");
var peterJackson = new Professional("Peter Jackson", 63, 120, 169, false, "Nueva Zelanda", 3, "Director", "../imagenes/Peter_Jackson.jpg");
var franWalsh = new Professional("Fran Walsh", 63, 60, 165, false, "Nueva Zelanda", 3, "Guionista", "../imagenes/Fran_Walsh.jpg");
var maribelVerdu = new Professional("Maribel Verdú", 50, 60, 165, false, "España", 0, "Actriz", "../imagenes/Maribel_Verdu.jpg");
var ivanaBaquero = new Professional("Ivana Baquero", 30, 55, 160, false, "España", 0, "Actriz", "../imagenes/Ivana_Baquero.jpeg");
var dougJones = new Professional("Doug Jones", 64, 64, 192, false, "Estados Unidos", 0, "Actor", "../imagenes/Doug_Jones.jpg");
var ariadnaGil = new Professional("Ariadna Gil", 51, 56, 168, false, "España", 0, "Actriz", "../imagenes/Ariadna_gil.jpg");
var guillermoDelToro = new Professional("Guillermo del Toro", 55, 100, 178, false, "México", 0, "Director", "../imagenes/Guillermo_del_Toro.webp");
var javierCamara = new Professional("Javier Cámara", 53, 70, 170, false, "España", 0, "Actor", "../imagenes/Javier_Camara.webp");
var carlosAreces = new Professional("Carlos Areces", 48, 75, 170, false, "España", 0, "Actor", "../imagenes/Carlos_Areces.jpg");
var raulArevalo = new Professional("Raúl Arévalo", 42, 70, 175, false, "España", 0, "Actor", "../imagenes/Raul_Arevalo.jpg");
var lolaDuenyas = new Professional("Lola Dueñas", 49, 65, 165, false, "España", 0, "Actriz", "../imagenes/Lola_Dueñas.webp");
var pedroAlmodovar = new Professional("Pedro Almodóvar", 72, 75, 178, false, "España", 0, "Director", "../imagenes/Pedro_Almodovar.webp");
var robertDeNiro = new Professional("Robert De Niro", 76, 75, 177, false, "Estados Unidos", 0, "Actor", "../imagenes/Robert_De_Niro.jpg");
var alPacino = new Professional("Al Pacino", 79, 75, 170, false, "Estados Unidos", 0, "Actor", "../imagenes/Al_Pacino.webp");
var joePesci = new Professional("Joe Pesci", 76, 70, 163, false, "Estados Unidos", 0, "Actor", "../imagenes/Joe_Pesci.jpeg");
var harveyKeitel = new Professional("Harvey Keitel", 80, 75, 170, false, "Estados Unidos", 0, "Actor", "../imagenes/Harvey_Keitel.jpg");
var martinScorsese = new Professional("Martin Scorsese", 77, 70, 163, false, "Estados Unidos", 0, "Director", "../imagenes/Martin-Scorsese.jpg");
var stevenZaillian = new Professional("Steven Zaillian", 67, 80, 170, false, "Estados Unidos", 0, "Guionista", "../imagenes/Steven-Zaillian.jpg");
var robertDowneyJr = new Professional("Robert Downey Jr.", 55, 78, 174, false, "Estados Unidos", 0, "Actor", "../imagenes/Robert_Downey_Jr.jpg");
var chrisEvans = new Professional("Chris Evans", 38, 88, 183, false, "Estados Unidos", 0, "Actor", "../imagenes/Chris_Evans.jpg");
var markRuffalo = new Professional("Mark Ruffalo", 52, 80, 173, false, "Estados Unidos", 0, "Actor", "../imagenes/Mark_Ruffalo.jpg");
var chrisHemsworth = new Professional("Chris Hemsworth", 36, 91, 190, false, "Australian", 0, "Actor", "../imagenes/Chris_Hemsworth.webp");
var scarlettJohansson = new Professional("Scarlett Johansson", 39, 57, 160, false, "Estados Unidos", 2, "Actriz", "../imagenes/Scarlett_Johansson.webp");
var anthonyRusso = new Professional("Anthony Russo", 50, 90, 183, false, "Estados Unidos", 0, "Director", "../imagenes/Anthony_Russo.jpg");
var christopherMarkus = new Professional("Christopher Markus", 51, 85, 178, false, "Estados Unidos", 0, "Guionista", "../imagenes/Christopher_Markus.jpg");
var macarenaGarcia = new Professional("Macarena García", 36, 55, 160, false, "España", 0, "Actriz", "../imagenes/Macarena_Garcia.jpg");
var annaCastillo = new Professional("Anna Castillo", 30, 50, 160, false, "España", 0, "Actriz", "../imagenes/Anna_Castillo.webp");
var belenCuesta = new Professional("Belén Cuesta", 40, 60, 170, false, "España", 0, "Actriz", "../imagenes/Belen_Cuesta.jpg");
var graciaOlayo = new Professional("Gracia Olayo", 66, 65, 160, false, "España", 0, "Actriz", "../imagenes/Gracia_Olayo.jpg");
var javierAmbrossi = new Professional("Javier Ambrossi", 40, 70, 175, false, "España", 0, "Director", "../imagenes/Javier_Ambrossi.webp");
var javierGutierrez = new Professional("Javier Gutiérrez", 53, 70, 157, false, "España", 0, "Actor", "../imagenes/Javier_Gutierrez.jpg");
var nereaBarros = new Professional("Nerea Barros", 43, 55, 165, false, "España", 0, "Actriz", "../imagenes/Nerea_Barros.jpeg");
var antonioDeLaTorre = new Professional("Antonio de la Torre", 56, 75, 178, false, "España", 0, "Actor", "../imagenes/Antonio_de_la_Torre.jpg");
var albertoRodriguez = new Professional("Alberto Rodríguez", 53, 75, 179, false, "España", 0, "Director", "../imagenes/Alberto_Rodriguez.webp");
var quimGutierrez = new Professional("Quim Gutiérrez", 43, 77, 177, false, "España", 0, "Actor", "../imagenes/Quim_Gutierrez.jpeg");
var adrianLastra = new Professional("Adrián Lastra", 40, 75, 180, false, "España", 0, "Actor", "../imagenes/Adrian_Lastra.webp");
var inmaCuesta = new Professional("Inma Cuesta", 44, 55, 160, false, "España", 0, "Actriz", "../imagenes/Inma_Cuesta.jpg");
var claraLago = new Professional("Clara Lago", 34, 55, 160, false, "España", 0, "Actriz", "../imagenes/Clara_Lago.webp");
var danielSanchezArevalo = new Professional("Daniel Sánchez Arévalo", 53, 75, 180, false, "España", 0, "Director", "../imagenes/Daniel_Sanchez_Arevalo.webp");
var profesionales = [
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
var movie1 = new Movie("Pulp Fiction", 1994, "Estados Unidos", "Crimen");
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
var movie2 = new Movie("El Señor de los Anillos: El retorno del rey", 2003, "Nueva Zelanda", "Fantasía");
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
var movie3 = new Movie("El laberinto del fauno", 2006, "España", "Fantasía");
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
var movie4 = new Movie("Los amantes pasajeros", 2013, "España", "Comedia");
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
var movie5 = new Movie("El irlandés", 2019, "Estados Unidos", "Crimen");
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
var movie6 = new Movie("Los Vengadores: Endgame", 2019, "Estados Unidos", "Ciencia Ficción");
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
var movie7 = new Movie("La isla mínima", 2014, "España", "Thriller");
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
var movie8 = new Movie("Primos", 2011, "España", "Comedia");
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
var movie9 = new Movie("La llamada", 2017, "España", "Musical");
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
var peliculas = [
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
    var cardContainer = document.querySelector(".card__container");
    cardContainer.innerHTML = "";
    if (cardContainer.id === "peliculas") {
        peliculas.forEach(function (pelicula, indice) {
            cardContainer.innerHTML += "        <div id=\"pelicula\" class=\"card\">\n            <div class=\"card__picture\">\n                <img src=\"".concat(pelicula.photo, "\" alt=\"Cartel de ").concat(pelicula.title, "\">\n            </div>\n            <div class=\"card__data\">\n              <div class=\"card__data-title\">\n                <h3>").concat(pelicula.title, "</h3>\n              </div>\n                <div class=\"card__data-grid\">\n                    <div class=\"card__data-celda --celda-1\">\n                        <h4>Actores principales</h4>\n                        <p>").concat(pelicula.actors.map(function (actor) { return actor.name; }), "</p>\n                    </div>\n                    <div class=\"card__data-celda --celda-2\">\n                        <h4>A\u00F1o</h4>\n                        <p>").concat(pelicula.releaseYear, "</p>\n                    </div>\n                    <div class=\"card__data-celda --celda-3\">\n                        <h4>G\u00E9nero</h4>     \n                        <p>").concat(pelicula.genre, "</p>\n                    </div>\n                    <div class=\"card__data-celda --celda-4\">\n                        <h4>Pa\u00EDs</h4>\n                        <p>").concat(pelicula.nationality, "</p>\n                    </div>\n                    <div class=\"card__data-celda --celda-5\">\n                        <h4>Idioma original</h4>     \n                        <p>").concat(pelicula.languaje, "</p>\n                    </div>\n                    <div class=\"card__data-celda --celda-6\">\n                        <h4>Director</h4>\n                        <p>").concat(pelicula.director.name, "</p>\n                    </div>\n                    <div class=\"card__data-celda --celda-7\">\n                        <h4>Guionista</h4>     \n                        <p>").concat(pelicula.writer.name, "</p>\n                    </div>\n                    <div class=\"card__data-celda --celda-8\">\n                        <h4>Productor</h4>     \n                        <p>").concat(pelicula.producer, "</p>\n                    </div>\n                    <div class=\"card__data-celda --celda-9\">\n                    <h4>Plataforma</h4>     \n                    <p>").concat(pelicula.platform, "</p>\n                    </div>\n                    <div class=\"card__data-celda --celda-10\">\n                    <h4>Distribuidor</h4>     \n                    <p>").concat(pelicula.distributor, "</p>\n                    </div>\n                </div>\n            </div>\n        </div>");
        });
    }
    else {
        profesionales.forEach(function (profesional, indice) {
            cardContainer.innerHTML += "\n<div id=\"profesional\" class=\"card --profesional\">\n  <div class=\"card__picture--profesional\">\n    <img\n      src=\"".concat(profesional.photo, "\"\n      alt=\"Retrato de ").concat(profesional.name, "\"/>\n  </div>\n  <div class=\"card__data\">\n    <h3>").concat(profesional.name, "</h3>\n    <div class=\"card__data--profesional\">\n      <div class=\"card__data-celda --celda-profesional-1\">\n        <h4>Profesi\u00F3n</h4>\n        <p>").concat(profesional.profession, "</p>\n      </div>\n      <div class=\"card__data-celda --celda-profesional-2\">\n        <h4>Nacionalidad</h4>\n        <p>").concat(profesional.nationality, "</p>\n      </div>\n      <div class=\"card__data-celda --celda-profesional-3\">\n      <h4>Edad</h4>\n      <p>").concat(profesional.age, "</p>\n      </div>\n      <div class=\"card__data-celda --celda-profesional-4\">\n      <div class=\"card__data-celda --celda-profesional-5\">\n      <h4>Oscars</h4>\n      <p>").concat(profesional.oscarsNumber, "</p>\n          </div>\n          <div class=\"card__data-celda --celda-profesional-6\">\n            <h4>En activo</h4>\n            <p>").concat(profesional.isRetired ? "No" : "Sí", "</p>\n          </div>\n        </div>\n    </div>\n  </div>\n</div>");
        });
    }
    return cardContainer;
}
//?  Responsive cards profesionales
function responsive() {
    var breakpoint = 640;
    var windowWide = window.innerWidth;
    var profesionalDiv = document.querySelectorAll(".card__data--profesional");
    console.log("WindowWide: " + windowWide);
    if (windowWide <= breakpoint) {
        console.log("Breakpoint roto");
        // profesionales
        profesionalDiv.forEach(function (cardProf) {
            cardProf.classList.add("card__data-grid--profesional");
            cardProf.classList.remove("card__data--profesional");
            var cardData = cardProf.querySelectorAll("card__data-celda");
            cardData.forEach(function (element, indice) {
                element.classList.add("--celda-profesional-".concat(indice));
            });
        });
        // peliculas
    }
    else {
        // profesionales
        profesionalDiv.forEach(function (cardProf) {
            cardProf.classList.remove("card__data-grid--profesional");
            cardProf.classList.add("card__data--profesional");
            var cardData = cardProf.querySelectorAll("card__data-celda");
            cardData.forEach(function (element, indice) {
                element.classList.remove("--celda-profesional-".concat(indice));
            });
        });
    }
}
function registrarPelicula() {
    var titulo = document.querySelector("#title")
        .value;
    var año = parseInt(document.querySelector("#releaseYear").value);
    var pais = document.querySelector("#nationality").value;
    var genero = document.querySelector("#genre")
        .value;
    var nuevaPeli = new Movie(titulo, año, pais, genero);
    nuevaPeli.languaje = document.querySelector("#languaje").value;
    nuevaPeli.platform = document.querySelector("#platform").value;
    var isMCUElement = document.querySelector("#isMCU");
    var isMCUChecked = isMCUElement ? isMCUElement.checked : false;
    nuevaPeli.mainCharacterName = document.querySelector("#mainCharacterName").value;
    nuevaPeli.producer = document.querySelector("#producer").value;
    nuevaPeli.distributor = document.querySelector("#distributor").value;
    nuevaPeli.photo = document.querySelector("#photo").value;
    peliculas.unshift(nuevaPeli);
    renderCards();
}
// volver arriba 
function arriba() {
    var peliculasContainer = document.querySelector('#peliculas');
    var submitPelicula = document.querySelector('#submitPelicula');
    submitPelicula.addEventListener('click', function () {
        console.log(' subiendo arriba');
        peliculasContainer.scrollIntoView({ behavior: 'smooth' });
    });
}
// * MAIN /////////////////////////////////////
renderCards();
responsive();
window.addEventListener("resize", responsive);

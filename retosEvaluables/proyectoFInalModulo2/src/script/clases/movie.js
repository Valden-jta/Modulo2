import { Professional } from "./professional.js";

export class Movie {
  // Atributos
  #title;
  #releaseYear;
  #actors;
  #nationality;
  #director;
  #writer;
  #languaje;
  #platform;
  #isMCU;
  #mainCharacterName;
  #producer;
  #distributor;
  #genre;
  #photo;

  // Constructor
  constructor(
    title,
    releaseYear,
    nationality,
    languaje,
    platform,
    mainCharacterName,
    producer,
    distributor,
    genre
  ) {
    this.#title = title;
    this.#releaseYear = releaseYear;
    this.#actors = [];
    this.#nationality = nationality;
    this.#director = new Professional("", 0, 0, 0, false, "", 0, "", "");
    this.#writer = new Professional("", 0, 0, 0, false, "", 0, "", "");
    this.#languaje = languaje;
    this.#platform = platform;
    this.#isMCU = false;
    this.#mainCharacterName = mainCharacterName;
    this.#producer = producer;
    this.#distributor = distributor;
    this.#genre = genre;
    this.#photo = "";
  }

  // Getters y setters
  get title() {
    return this.#title;
  }
  set title(title) {
    this.#title = title;
  }

  get releaseYear() {
    return this.#releaseYear;
  }
  set releaseYear(releaseYear) {
    this.#releaseYear = releaseYear;
  }

  get actors() {
    return this.#actors;
  }
  set actors(actors) {
    this.#actors = actors;
  }

  get nationality() {
    return this.#nationality;
  }
  set nationality(nationality) {
    this.#nationality = nationality;
  }

  get director() {
    return this.#director;
  }
  set director(director) {
    this.#director = director;
  }

  get writer() {
    return this.#writer;
  }
  set writer(writer) {
    this.#writer = writer;
  }

  get languaje() {
    return this.#languaje;
  }
  set languaje(languaje) {
    this.#languaje = languaje;
  }

  get platform() {
    return this.#platform;
  }
  set platform(platform) {
    this.#platform = platform;
  }

  get isMCU() {
    return this.#isMCU;
  }
  set isMCU(isMCU) {
    this.#isMCU = isMCU;
  }

  get mainCharacterName() {
    return this.#mainCharacterName;
  }
  set mainCharacterName(mainCharacterName) {
    this.#mainCharacterName = mainCharacterName;
  }

  get producer() {
    return this.#producer;
  }
  set producer(producer) {
    this.#producer = producer;
  }

  get distributor() {
    return this.#distributor;
  }
  set distributor(distributor) {
    this.#distributor = distributor;
  }

  get genre() {
    return this.#genre;
  }
  set genre(gene) {
    this.#genre = gene;
  }
  get photo() {
    return this.#photo;
  }
  set photo(photo) {
    this.#photo = photo;
  }
}

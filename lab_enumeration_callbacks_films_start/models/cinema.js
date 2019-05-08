const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.filmTitles = function () {
  const filmTitles = this.films.map(film => film.title)
  return filmTitles
}

Cinema.prototype.findFilmByTitle = function (filmTitle) {
  const result = this.films.find(film => film.title === filmTitle)
  return result
}

Cinema.prototype.findFilmGenre = function (genre) {
  const result = this.films.filter(film => film.genre === genre)
  return result
}

Cinema.prototype.filmsFromYear = function (year) {
  const years = this.films.map(film => film.year)
  const result = years.includes(year)
  return result

}

module.exports = Cinema;

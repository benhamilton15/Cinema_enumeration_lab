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

Cinema.prototype.longEnough = function (length) {
  const result = this.films.every(film => film.length > length)
  return result
}

Cinema.prototype.totalRuntime = function () {
  const lengths = this.films.map(film => film.length)
  const result = lengths.reduce((runningTotal, currentvalue) => runningTotal + currentvalue)
  return result
}

module.exports = Cinema;

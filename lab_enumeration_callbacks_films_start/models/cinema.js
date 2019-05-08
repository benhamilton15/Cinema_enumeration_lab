const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.filmTitles = function () {
  const filmTitles = this.films.map(film => film.title)
  return filmTitles
}

module.exports = Cinema;

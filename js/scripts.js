function Movie(title, year, studio, world, domestic, foreign, budget, rating) {
  this.title = title;
  this.year = year;
  this.studio = studio;
  this.world = world;
  this.domestic = domestic;
  this.foreign = foreign;
  this.budget = budget;
  this.rating = rating;
}

function movieOutput(movie) {
  return "<tr>" +
            "<td>" + movie.title + "</td>" +
            "<td>" + movie.year + "</td>" +
            "<td>" + movie.studio + "</td>" +
            "<td>" + movie.world + "</td>" +
            "<td>" + movie.domestic + "</td>" +
            "<td>" + movie.foreign + "</td>" +
            "<td>" + movie.budget + "</td>" +
            "<td>" + movie.rating + "</td>" +
          "</tr>"
}

$(document).ready(function() {
  $('#form').submit(function(event) {
    event.preventDefault();

    var title = $('#movie-title').val();
    var release = $('#release-date').val();
    var studio = $('#studio').val();
    var wGross = $('#world-gross').val();
    var dGross = $('#domestic-gross').val();
    var fGross = $('#foreign-gross').val();
    var budget = $('#budget').val();
    var rating = $('#rating').val();

    var addMovie = new Movie(title, release, studio, wGross, dGross, fGross, budget, rating);
    console.log(addMovie);
    $('#movie-table').append(movieOutput(addMovie));
  });
});

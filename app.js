
$(document).ready( () => {
  $.get('https://agile-scrubland-58311.herokuapp.com/')
  .then ((data) => {
    for (var i = 0; i < data.length; i++) {
      $('main').append(`
            <div class="col-lg-6 list-group">
              <a href="#" class="list-group-item active">
                <h4 class="list-group-item-heading">Beer Name: ${data[i].name}</h4>
                <p class="list-group-item-text">Brewery: ${data[i].brewery}</p>
                <p class="list-group-item-text">Style: ${data[i].style}</p>
                <p class="list-group-item-text">Rating: ${data[i].rating}</p>
              </a>
            </div>`
          )
    }
  })
})

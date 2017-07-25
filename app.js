
$(document).ready( () => {
  $.get('https://agile-scrubland-58311.herokuapp.com/')
  .then ((data) => {
    for (var i = 0; i < data.length; i++) {
      $('main').append(`
            <div class="list-group">
              <a href="#" class="list-group-item active">
                <h4 class="list-group-item-heading">${data[i].name}</h4>
                <p class="list-group-item-text">${data[i].brewery}</p>
                <p class="list-group-item-text">${data[i].style}</p>
                <p class="list-group-item-text">${data[i].rating}</p>
              </a>
            </div>`
)
    }
  })
})
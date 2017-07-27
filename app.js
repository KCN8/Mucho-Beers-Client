const baseURL = 'https://agile-scrubland-58311.herokuapp.com/'
$(document).ready( () => {
  $.get(baseURL)
  .then ((data) => {
    for (var i = 0; i < data.length; i++) {
      $('main').append(`
            <div class="list-group">
              <a href="#" id="${data[i].id}" class="beerAnchor list-group-item active">
                <h4 class="list-group-item-heading">Beer Name: ${data[i].name}</h4>
                <p class="list-group-item-text">Brewery: ${data[i].brewery}</p>
                <p class="list-group-item-text">Style: ${data[i].style}</p>
                <p class="list-group-item-text">Rating: ${data[i].rating}</p>
              </a>
            </div>`
          )
    }

    $('.titlelogo').click( function(event) {
      window.location.reload();
    })

    $('.beerAnchor').click( function(event) {
      event.preventDefault()
      let $id = $(this).attr('id')
      $.get(`${baseURL}${$id}`)
      .then ((data) => {
        $('main').empty()
        $('main').append(`
          <div class="list-group">
            <a href="#" id="${data.id}" class="beerAnchor list-group-item active">
              <h4 class="list-group-item-heading">Beer Name: ${data.name}</h4>
              <p class="list-group-item-text">Brewery: ${data.brewery}</p>
              <p class="list-group-item-text">Style: ${data.style}</p>
              <p class="list-group-item-text">Rating: ${data.rating}</p>
            </a>
          </div>
          <div class="btn-group" role="group" aria-label="...">
            <button type="button" id="deleteButton" class="btn btn-default">Delete</button>
          </div>
          <br>
          <form class="col-lg-8" action="index.html" method="post">
            <div class="input-group beerForm">
              <span class="input-group-addon" id="basic-addon1">Beer Name</span>
              <input id="name" type="text" class="form-control" value="${data.name}" aria-describedby="basic-addon1">
            </div>
            <div class="input-group beerForm">
              <span class="input-group-addon" id="basic-addon1">Brewery Name</span>
              <input id="brewery" type="text" class="form-control" value="${data.brewery}" aria-describedby="basic-addon1">
            </div>
            <div class="input-group beerForm">
              <span class="input-group-addon" id="basic-addon1">Beer Style</span>
              <input id="style" type="text" class="form-control" value="${data.style}" aria-describedby="basic-addon1">
            </div>
            <div class="input-group beerForm">
              <span class="input-group-addon" id="basic-addon1">Rating</span>
              <input id="rating" type="text" class="form-control" value="${data.rating}" aria-describedby="basic-addon1">
            </div>
            <button type="submit" id="editButton" class="btn btn-default">Edit</button>
          </form>
          `)
          $('#deleteButton').click( function(event) {
            $.ajax({
              url: `${baseURL}${$id}`,
              type: 'Delete'
            })
            .then((data) => {
              $('main').empty()
              $('main').append('<h1>THIS BEER IS GONE FOREVER!!!!</h1>')
            })
          })
          $('#editButton').click( function(event) {
            event.preventDefault()
            console.log('Hello');
            let name = $('#name').val()
            let brewery = $('#brewery').val()
            let style = $('#style').val()
            let rating = $('#rating').val()
            let formData = {
              'name': name,
              'brewery': brewery,
              'style': style,
              'rating': rating
            }
            console.log(formData);
            $.ajax({
              url: `${baseURL}${$id}`,
              method: 'PUT',
              data: formData
            })
            .then((data) => {
              window.location.reload();
            })
          })
      })
    })

    $('#submitButton').click(event => {
      event.preventDefault()
      let name = $('#name').val()
      let brewery = $('#brewery').val()
      let style = $('#style').val()
      let rating = $('#rating').val()
      let formData = {
        'name': name,
        'brewery': brewery,
        'style': style,
        'rating': rating
      }
      $.post(baseURL, formData)
      .then((data) => {
        window.location.reload();
      })
    })
  })
})

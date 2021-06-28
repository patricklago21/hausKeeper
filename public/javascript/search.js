document.querySelector('#search-form').addEventListener('submit', function(event) {
    event.preventDefault();
    let query = document.querySelector('#query').value.trim();
    window.location.replace('/search/' + query);
});
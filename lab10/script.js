var dataUrl = 'https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=ca370d51a054836007519a00ff4ce59e&per_page=10&format=json&nojsoncallback=1%27';
function getimage() {
    fetch(dataUrl).then(res => {
        return res.json();
    }).then(result => {
        result.photos.photo.forEach(function(item){
            var idUrl = `https://api.flickr.com/services/rest/?method=flickr.photos.getSizes&api_key=ca370d51a054836007519a00ff4ce59e&photo_id=${item.id}&format=json&nojsoncallback=1`;
            fetch(idUrl).then(res => {
                return res.json();
            }).then(result => {
                var gal = document.getElementById('gallery');
                result.sizes.size.forEach(function(item) {
                    console.log(item);
                    var img = document.createElement('img');
                    img.setAttribute('src', item.url);
                    gal.appendChild(img);
                });
            })
        });
    });
}
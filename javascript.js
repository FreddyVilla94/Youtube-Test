var key = "AIzaSyCHuBL_MpovTT8uip092vhnkg8dsQJ0a3g";
var idCanal = "UCfV36TX5AejfAGIbtwTc7Zw";
var url = "https://www.googleapis.com/youtube/v3/search?key=" + key + "&part=snippet,id&order=date&maxResults=6";

$(document).ready(function () {
	$.getJSON(url, function (data) {
		for (var k in data.items) {
			var img = data.items[k]["snippet"].thumbnails.high.url;
			var tituloVideo = data.items[k]["snippet"].title;
			var desc = data.items[k]["snippet"].description;
			var urlVideo = "https://www.youtube.com/watch?v=" + data.items[k]["id"].videoId;
			$("#videos").append('<div class="col-lg-4 col-sm-12"><div class="card bg-secondary shadow border-0"><div class="card-header bg-white pb-5"><img id="img" src="' + img + '" class="card-img-top" alt="...">Titulo: ' + tituloVideo + '<div class="text-muted mb-4">Descripción: ' + desc + '</small></div></div><div class="card-body"><input type="button" value="Ver video" id="buttonView"  class="btn btn-primary"></div></div></div>')
		}
	});
	$('button').click(function () {
		$("#videos").empty()
		var search = document.getElementById('nombreBuscar').value;
		var value = search.replace(" ", "+");
		var urlFindVideos = "https://www.googleapis.com/youtube/v3/search?key=" + key + "&q=" + value + "&part=snippet,id&order=date&maxResults=6";
		$.getJSON(urlFindVideos, function (data) {
			for (var k in data.items) {
				var img = data.items[k]["snippet"].thumbnails.high.url;
				var tituloVideo = data.items[k]["snippet"].title;
				var desc = data.items[k]["snippet"].description;
				var urlVideo = "https://www.youtube.com/watch?v=" + data.items[k]["id"].videoId;
				$("#videos").append('<div class="col-lg-4 col-sm-12"><div class="card bg-secondary shadow border-0"><div class="card-header bg-white pb-5"><img id="img" src="' + img + '" class="card-img-top" alt="...">Titulo: ' + tituloVideo + '<div class="text-muted mb-4">Descripción: ' + desc + '</small></div></div><div class="card-body"><a href="' + urlVideo + '" class="btn btn-primary">Ver video</a></div></div></div>')
			}
		});
	});
});
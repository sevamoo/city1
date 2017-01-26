
var onlyroads = "https://api.mapbox.com/styles/v1/sevamoo/cix65j03d008v2pnw5npbx7qj/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoic2V2YW1vbyIsImEiOiJXcTg2dEI4In0.t2FKdE5vgT-BihNJusEz6Q"
var basemap ='https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpandmbXliNDBjZWd2M2x6bDk3c2ZtOTkifQ._QA7i5Mpkd_m30IGElHziw'
var zoominit = 12.1

//var citynames;
//d3.json('/data/test.json',function(error,data){
//if (error) throw error;
//citynames = data;
//});
//console.log(citynames[0])


$.getJSON("data/test.json", function(json) {
    console.log(json[0][0]); // this will show the info it in firebug console
});



	var mymap0 = L.map('mapid0').setView([51.505, -0.09], zoominit);

	L.tileLayer(onlyroads, {
		maxZoom: 18,

	}).addTo(mymap0);
// var credits = L.control.attribution().removeAttribution('Leaflet').addTo(mymap0);
// credits.addAttribution('© <a' );
// credits.removeAttribution('Leaflet');

	var mymap1 = L.map('mapid1').setView([29.16941,-95.4318847], zoominit);

	L.tileLayer(onlyroads, {
		maxZoom: 18,

	}).addTo(mymap1);



	var mymap2 = L.map('mapid2').setView([51.505, -0.09], zoominit);

	L.tileLayer(onlyroads, {
		maxZoom: 18,
	}).addTo(mymap2);


	var mymap3 = L.map('mapid3').setView([51.505, -0.09], zoominit);

	L.tileLayer(onlyroads, {
		maxZoom: 18,
	}).addTo(mymap3);


	var mymap4 = L.map('mapid4').setView([51.505, -0.09], zoominit);

	L.tileLayer(onlyroads, {
		maxZoom: 18,
	}).addTo(mymap4);


	var mymap5 = L.map('mapid5').setView([51.505, -0.09], zoominit);

	L.tileLayer(onlyroads, {
		maxZoom: 18,
	}).addTo(mymap5);


	var mymap6 = L.map('mapid6').setView([51.505, -0.09], zoominit);

	L.tileLayer(onlyroads, {
		maxZoom: 18,
	}).addTo(mymap6);

	var mymap7 = L.map('mapid7').setView([51.505, -0.09], zoominit);

	L.tileLayer(onlyroads, {
		maxZoom: 18,
	}).addTo(mymap7);

	var mymap8 = L.map('mapid8').setView([51.505, -0.09], zoominit);

	L.tileLayer(onlyroads, {
		maxZoom: 18,
	}).addTo(mymap8);


	var mymap9 = L.map('mapid9').setView([51.505, -0.09], zoominit);

	L.tileLayer(onlyroads, {
		maxZoom: 18,
	}).addTo(mymap9);

	var mymap10 = L.map('mapid10').setView([51.505, -0.09], zoominit);

	L.tileLayer(onlyroads, {
		maxZoom: 18,
	}).addTo(mymap10);

	var mymap11 = L.map('mapid11').setView([51.505, -0.09], zoominit);

	L.tileLayer(onlyroads, {
		maxZoom: 18,
	}).addTo(mymap11);

	var mymap12 = L.map('mapid12').setView([51.505, -0.09], zoominit);

	L.tileLayer(onlyroads, {
		maxZoom: 18,
	}).addTo(mymap12);

	var mymap13 = L.map('mapid13').setView([51.505, -0.09], zoominit);

	L.tileLayer(onlyroads, {
		maxZoom: 18,
	}).addTo(mymap13);

	var mymap14 = L.map('mapid14').setView([51.505, -0.09], zoominit);

	L.tileLayer(onlyroads, {
		maxZoom: 18,
	}).addTo(mymap14);





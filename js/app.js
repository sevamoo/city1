
var rgb = "https://api.mapbox.com/styles/v1/sevamoo/cix65j03d008v2pnw5npbx7qj/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoic2V2YW1vbyIsImEiOiJXcTg2dEI4In0.t2FKdE5vgT-BihNJusEz6Q"
var dark = 'https://api.mapbox.com/styles/v1/sevamoo/ciyesucrg00342qml99q6rm7u/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoic2V2YW1vbyIsImEiOiJXcTg2dEI4In0.t2FKdE5vgT-BihNJusEz6Q'
var onlyroads = dark;

var basemap ='https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpandmbXliNDBjZWd2M2x6bDk3c2ZtOTkifQ._QA7i5Mpkd_m30IGElHziw'
var zoominit = 12.0;


var citynames;
$.getJSON("data/citynames.json", function(json) {
	citynames = json[0];
//    console.log(json[0][0]); // this will show the info it in firebug console
});


var city_neigs_names;
$.getJSON("data/city_neigs_names.json", function(json) {
	city_neigs_names = json;
//    console.log(city_neigs_names[0]); // this will show the info it in firebug console
});


var city_neigs_lats;
$.getJSON("data/city_neigs_lats.json", function(json) {
	city_neigs_lats = json;
//    console.log(city_neigs_lats[0]); // this will show the info it in firebug console
});


var city_neigs_lngs;
$.getJSON("data/city_neigs_lngs.json", function(json) {
	city_neigs_lngs = json;
//    console.log(city_neigs_lngs[0]); // this will show the info it in firebug console
});




var cityid = document.getElementById("cityname").value;

var lat_init = 21.386338;
var lng_init = -157.9255357
var lats = {"0":21.9102778,"1":39.3472095,"2":44.5213731,"3":38.4697378,"4":35.7561879,"5":45.0349743,"6":44.0487345,"7":39.5585686,"8":40.4165052,"9":44.7674614,"10":35.6902305,"11":40.9417535,"12":44.4371839,"13":48.7925242,"14":34.0328791,"15":32.9137438,"16":33.1575854,"17":46.2704176,"18":45.8888869,"19":33.7262253,"20":44.9069907,"21":40.217771,"22":44.3635802,"23":44.6621493,"24":40.556152};
var lngs = {"0":-159.5872222,"1":-104.4644112,"2":-99.4415007,"3":-101.7526723,"4":-89.9281419,"5":-99.1239979,"6":-68.836749,"7":-111.8618734,"8":-101.3711624,"9":-94.8955521,"10":-118.220634,"11":-75.82964,"12":-90.911258,"13":-105.4208268,"14":-95.6971903,"15":-84.1426922,"16":-105.7741541,"17":-118.1532861,"18":-104.5527299,"19":-93.4704521,"20":-72.8065231,"21":-94.5382939,"22":-97.377294,"23":-111.1041092,"24":-90.8659692};

	var mymap0 = L.map('mapid0',{ zoomControl:false }).setView([lats[0], lngs[0]], zoominit);

	L.tileLayer(onlyroads, {
		maxZoom: 18,

	}).addTo(mymap0);
	attribution = mymap0.attributionControl;
	attribution.setPrefix('');

	var mymap1 = L.map('mapid1',{ zoomControl:false }).setView([lats[1], lngs[1]], zoominit);

	L.tileLayer(onlyroads, {
		maxZoom: 18,

	}).addTo(mymap1);
	attribution = mymap1.attributionControl;
	attribution.setPrefix('');


	var mymap2 = L.map('mapid2',{ zoomControl:false }).setView([lats[2], lngs[2]], zoominit);

	L.tileLayer(onlyroads, {
		maxZoom: 18,
	}).addTo(mymap2);
	attribution = mymap2.attributionControl;
	attribution.setPrefix('');


	var mymap3 = L.map('mapid3',{ zoomControl:false }).setView([lats[3], lngs[3]], zoominit);

	L.tileLayer(onlyroads, {
		maxZoom: 18,
	}).addTo(mymap3);
	attribution = mymap3.attributionControl;
	attribution.setPrefix('');


	var mymap4 = L.map('mapid4',{ zoomControl:false }).setView([lats[4], lngs[4]], zoominit);

	L.tileLayer(onlyroads, {
		maxZoom: 18,
	}).addTo(mymap4);
	attribution = mymap4.attributionControl;
	attribution.setPrefix('');


	var mymap5 = L.map('mapid5',{ zoomControl:false }).setView([lats[5], lngs[5]], zoominit);

	L.tileLayer(onlyroads, {
		maxZoom: 18,
	}).addTo(mymap5);
	attribution = mymap5.attributionControl;
	attribution.setPrefix('');


	var mymap6 = L.map('mapid6',{ zoomControl:false }).setView([lats[6], lngs[6]], zoominit);

	L.tileLayer(onlyroads, {
		maxZoom: 18,
	}).addTo(mymap6);
	attribution = mymap6.attributionControl;
	attribution.setPrefix('');

	var mymap7 = L.map('mapid7',{ zoomControl:false }).setView([lats[7], lngs[7]], zoominit);

	L.tileLayer(onlyroads, {
		maxZoom: 18,
	}).addTo(mymap7);
	attribution = mymap7.attributionControl;
	attribution.setPrefix('');

	var mymap8 = L.map('mapid8',{ zoomControl:false }).setView([lats[8], lngs[8]], zoominit);

	L.tileLayer(onlyroads, {
		maxZoom: 18,
	}).addTo(mymap8);
	attribution = mymap8.attributionControl;
	attribution.setPrefix('');


	var mymap9 = L.map('mapid9',{ zoomControl:false }).setView([lats[9], lngs[9]], zoominit);

	L.tileLayer(onlyroads, {
		maxZoom: 18,
	}).addTo(mymap9);
	attribution = mymap9.attributionControl;
	attribution.setPrefix('');

	var mymap10 = L.map('mapid10',{ zoomControl:false }).setView([lats[10], lngs[10]], zoominit);

	L.tileLayer(onlyroads, {
		maxZoom: 18,
	}).addTo(mymap10);
	attribution = mymap10.attributionControl;
	attribution.setPrefix('');

	var mymap11 = L.map('mapid11',{ zoomControl:false }).setView([lats[11], lngs[11]], zoominit);

	L.tileLayer(onlyroads, {
		maxZoom: 18,
	}).addTo(mymap11);
	attribution = mymap11.attributionControl;
	attribution.setPrefix('');

	var mymap12 = L.map('mapid12',{ zoomControl:false }).setView([lats[12], lngs[12]], zoominit);

	L.tileLayer(onlyroads, {
		maxZoom: 18,
	}).addTo(mymap12);
	attribution = mymap12.attributionControl;
	attribution.setPrefix('');

	var mymap13 = L.map('mapid13',{ zoomControl:false }).setView([lats[13], lngs[13]], zoominit);

	L.tileLayer(onlyroads, {
		maxZoom: 18,
	}).addTo(mymap13);
	attribution = mymap13.attributionControl;
	attribution.setPrefix('');

	var mymap14 = L.map('mapid14',{ zoomControl:false }).setView([lats[14], lngs[14]], zoominit);

	L.tileLayer(onlyroads, {
		maxZoom: 18,
	}).addTo(mymap14);





function find_similar_cities(){



cityid = document.getElementById("cityname").value;
//console.log(cityid,citynames[cityid])
//mymap14 = L.map('mapid14').setView([51.505, -0.09], 10);

lngs = city_neigs_lngs[cityid]
lats = city_neigs_lats[cityid]
neigs_names  =city_neigs_names[cityid]


//console.log(lats);

mymap0.setView( [lats[0], lngs[0]], zoominit);
mymap1.setView( [lats[1], lngs[1]], zoominit);
mymap2.setView( [lats[2], lngs[2]], zoominit);
mymap3.setView( [lats[3], lngs[3]], zoominit);
mymap4.setView( [lats[4], lngs[4]], zoominit);
mymap5.setView( [lats[5], lngs[5]], zoominit);
mymap6.setView( [lats[6], lngs[6]], zoominit);
mymap7.setView( [lats[7], lngs[7]], zoominit);
mymap8.setView( [lats[8], lngs[8]], zoominit);
mymap9.setView( [lats[9], lngs[9]], zoominit);
mymap10.setView( [lats[10], lngs[10]], zoominit);
mymap11.setView( [lats[11], lngs[11]], zoominit);
mymap12.setView( [lats[12], lngs[12]], zoominit);
mymap13.setView( [lats[13], lngs[13]], zoominit);
mymap14.setView( [lats[14], lngs[14]], zoominit);

document.querySelector('#ZoomVal').value = zoominit;


//if (RENTORSALE == 'rent'){
//    itemType = document.getElementById("itemType").value;
//    Cityname = document.getElementById("Cityname").value;
//    ZIP = document.getElementById("ZIP").value;
//    Adress1 = document.getElementById("itemAdress1").value;
//    Adress2 = document.getElementById("itemAdress2").value;
//    Adress3 = document.getElementById("itemAdress3").value;
//    Address = Cityname + " "+ ZIP +" "+ Adress1+" " + Adress2+ " " + Adress3 + " Switzerland"
//    Rooms = document.getElementById("itemRooms").value;
//    Floor = document.getElementById("itemFloor").value;
//    Living_space = document.getElementById("itemLiving_space").value;
//    Year_built = document.getElementById("itemYear_built").value;
//    Last_renovation = document.getElementById("itemLast_renovation").value;
//
//
//
//    }
// else{
//// return nothing for now
// }






}


function change_zoom(){

ZoomVal = document.getElementById("Zoom").value;
document.querySelector('#ZoomVal').value = ZoomVal;
//console.log(ZoomVal);

mymap0.setZoom(ZoomVal);
mymap1.setZoom(ZoomVal);
mymap2.setZoom(ZoomVal);
mymap3.setZoom(ZoomVal);
mymap4.setZoom(ZoomVal);
mymap5.setZoom(ZoomVal);
mymap6.setZoom(ZoomVal);
mymap7.setZoom(ZoomVal);
mymap8.setZoom(ZoomVal);
mymap9.setZoom(ZoomVal);
mymap10.setZoom(ZoomVal);
mymap11.setZoom(ZoomVal);
mymap12.setZoom(ZoomVal);
mymap13.setZoom(ZoomVal);
mymap14.setZoom(ZoomVal);



}



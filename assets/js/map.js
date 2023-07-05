var map = L.map('map', {
    center: [-15.840651, -70.027987],
    zoom: 18,
    minZoom: 10,
    maxZoom: 40,
    maxBounds: [[-17.595,-72.2969], [-12.5142,-68.3892]]
  });
  
  L.control.scale({
    imperial:false
    }).addTo(map);

var basemapOSM = L.tileLayer ('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{		
    attribution: '&copy ; <ahref ="http://osm.org/copyright"> OpenStreetMap </a> contributor'
    });
basemapOSM.addTo(map);
    
var googleSat = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',{ maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3'] });
googleSat.addTo(map);
    
var googleTerrain = L.tileLayer('http://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}',{ maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3'] }); 
googleTerrain.addTo(map);
    
var googleHybrid = L.tileLayer('http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}',{ maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3'] });
 googleHybrid.addTo(map);

var puno = L.tileLayer.wms("http://localhost:8080/geoserver/webpuno/wms?", {
layers: "webpuno:puno", 
format: 'image/png',
transparent: true,
version: '1.1.1',
attribution: "SENCICO"
});
puno.addTo(map);

var provincias = L.tileLayer.wms("http://localhost:8080/geoserver/webpuno/wms?", {
layers: "webpuno:provincias", 
format: 'image/png',
transparent: true,
version: '1.1.1',
attribution: "SENCICO"
});
provincias.addTo(map);

var distritos = L.tileLayer.wms("http://localhost:8080/geoserver/webpuno/wms?", {
layers: "webpuno:distritos", 
format: 'image/png',
transparent: true,
version: '1.1.1',
attribution: "SENCICO"
});
distritos.addTo(map);

var bancos = L.tileLayer.wms("http://localhost:8080/geoserver/webpuno/wms?", {
layers: "webpuno:bancos", 
format: 'image/png',
transparent: true,
version: '1.1.1',
attribution: "SENCICO"
});
bancos.addTo(map);

var colegios = L.tileLayer.wms("http://localhost:8080/geoserver/webpuno/wms?", {
layers: "webpuno:colegios", 
format: 'image/png',
transparent: true,
version: '1.1.1',
attribution: "SENCICO"
});
colegios.addTo(map);

var farmacias = L.tileLayer.wms("http://localhost:8080/geoserver/webpuno/wms?", {
layers: "webpuno:farmacias", 
format: 'image/png',
transparent: true,
version: '1.1.1',
attribution: "SENCICO"
});
farmacias.addTo(map);

var hoteles = L.tileLayer.wms("http://localhost:8080/geoserver/webpuno/wms?", {
layers: "webpuno:hoteles", 
format: 'image/png',
transparent: true,
version: '1.1.1',
attribution: "SENCICO"
});
hoteles.addTo(map);

var iglesias = L.tileLayer.wms("http://localhost:8080/geoserver/webpuno/wms?", {
layers: "webpuno:iglesias", 
format: 'image/png',
transparent: true,
version: '1.1.1',
attribution: "SENCICO"
});
iglesias.addTo(map);

var mercados = L.tileLayer.wms("http://localhost:8080/geoserver/webpuno/wms?", {
layers: "webpuno:mercados", 
format: 'image/png',
transparent: true,
version: '1.1.1',
attribution: "SENCICO"
});
mercados.addTo(map);

var restaurantes = L.tileLayer.wms("http://localhost:8080/geoserver/webpuno/wms?", {
layers: "webpuno:restaurantes", 
format: 'image/png',
transparent: true,
version: '1.1.1',
attribution: "SENCICO"
});
restaurantes.addTo(map);

var baseMaps    ={
    "OSM": basemapOSM,
    "Satelite": googleSat,
    "Terrain": googleTerrain,
    "Hidrido": googleHybrid
};

var overlayMaps ={
"Departamento de Puno":puno,
"Provincias de Puno":provincias,
"Distritos de Puno":distritos,
"Bancos":bancos,
"Colegios":colegios,
"Boticas":farmacias,
"Hoteles":hoteles,
"Iglesias":iglesias,
"Mercados":mercados,
"Restaurantes":restaurantes,
};

L.control.layers(baseMaps, overlayMaps,{
    position: 'topright', // 'topleft', 'bottomleft', 'bottomright'
    collapsed: false // true
    }).addTo(map);

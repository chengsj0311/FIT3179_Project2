var radar = "js/radar_overall.vg.json";
vegaEmbed('#radar-chart', radar, { "actions": false }).then(result => { }).catch(console.error);

var map = "js/map_establishments.vg.json";
vegaEmbed('#map', map, { "actions": false }).then(result => { }).catch(console.error);

var stacked = "js/concat.vg.json";
vegaEmbed('#stacked-chart', stacked, { "actions": false }).then(result => { }).catch(console.error);

var bump = "js/bump.vg.json";
vegaEmbed('#bump-chart', bump, { "actions": false }).then(result => { }).catch(console.error);

var heatMap = "js/heatMap.vg.json";
vegaEmbed('#heatmap', heatMap, { "actions": false }).then(result => { }).catch(console.error);

// Function to switch radar chart
const switchRadar = (radar) => {
    vegaEmbed('#radar-chart', radar, { "actions": false }).then(result => { }).catch(console.error);
}

// Function to switch map
const switchMap = (map) => {
    vegaEmbed('#map', map, { "actions": false }).then(result => { }).catch(console.error);
}

document.addEventListener("DOMContentLoaded", function () {

    document.getElementById("radar-select").addEventListener("change", function () {
        const value = document.getElementById("radar-select").value;
        switchRadar(value);
    });

    document.getElementById("map-select").addEventListener("change", function () {
        const value = document.getElementById("map-select").value;
        switchMap(value);
    });
});
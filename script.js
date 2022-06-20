
function updateMap() {
    fetch("/data.json")
        .then(response => response.json())
        .then(rsp => {
            console.log(rsp.data)     // it refers to the data array inside the data.json file
            rsp.data.forEach(element => {
                latitude = element.latitude
                longitude = element.longitude
                cases = element.infected
                if(cases>500){
                    color = "rgb(500,0,0)"
                }
                else{
                    color = `rgb(${cases},0,0)`
                }
                new mapboxgl.Marker({
                    draggable: false,
                    color:color
                })
                    .setLngLat([longitude, latitude])
                    .addTo(map);
            });

        })
}

updateMap();
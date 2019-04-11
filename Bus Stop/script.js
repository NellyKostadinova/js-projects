//The webhost will respond with valid data to IDs 1287, 1308, 1327 and 2334.
//{"buses":{"4":13,"12":6,"18":7},"name":"St. Nedelya sq."}

function getInfo() {
    let stopId = $("#stopId");
    let stopName = $('#stopName');
    let ulBuses = $('ul#buses');

    ulBuses.empty();

    $.ajax({
        url: "https://judgetests.firebaseio.com/businfo/"+ stopId.val() +".json",
        success: function(busStop){
            stopName.text(busStop.name);
    
            for (let busId in busStop.buses) {
                let li = $('<li>');
                let time = busStop.buses[busId];
                
                li.text("Bus " + busId + " arrives in " + time + " minutes").appendTo(ulBuses);
            }
        },
        error: function(error){
            stopName.text("Invalid stop ID");
            ulBuses.empty();
        }  
    });
}

$(document).ready(function() {
    $('#stopId').on('keypress',function(e) {
        if(e.which == 13) {
            getInfo();
        }
    });
});
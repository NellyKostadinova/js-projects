//{"name":"Depot","next":"0361"}

function solve() {
    let next = "depot";
    let name = " ";
    let info = $("span.info");
    let departBtn = $("#depart");
    let arriveBtn = $("#arrive");

    function depart() {
        $.ajax({
            url: "https://judgetests.firebaseio.com/schedule/" + next + ".json",
            success: function(data){
                next = data.next;

                name = data.name;
                info.text("Next stop " + name);
                
                departBtn.attr("disabled", "true");
                arriveBtn.removeAttr("disabled");
            },
            error: function(error){
                console.log(error);
            }
        });
    };

    function arrive() {
        info.text("Arriving at " + name);

        arriveBtn.attr("disabled", "true");
        departBtn.removeAttr("disabled");
    }

    return {
        depart,
        arrive
    };
}

let result = solve();
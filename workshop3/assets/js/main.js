let targetrack = 8;
let station = 'Ut';


generateResults();
function generateResults () {
    $(() => {
        const params = {
            "station": station
        };
    
        $.ajax({
            url: "https://gateway.apiportal.ns.nl/reisinformatie-api/api/v2/departures?" + $.param(params),
            beforeSend: function(xhrObj){
                xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key","8c4aa319a1f342d69b34211205b89753");
            },
            type: "GET"
        })
        .done(function(data) {
            let stationTarget = null;
            for (let i in data.payload.departures) {
                if (data.payload.departures[i].plannedTrack == targetrack) {
                    stationTarget = i;
                    break;
                }
            }
            if (stationTarget == null) {
                alert('invalid spoor');
                return;
            }
            setData(data.payload.departures[stationTarget]);
        })
        .fail(function() {
            alert('invalid name');
        });
    });
}


function setData (data) {
    document.getElementById('destination').innerHTML = data.direction;
    document.getElementById('spoornummer').innerHTML = data.plannedTrack;
    document.getElementById('lefttext').innerHTML = "<h1>" + data.actualDateTime.split("T")[1].split(":")[0] + ":" + data.actualDateTime.split("T")[1].split(":")[1] + "</h1>";
    document.getElementById('via').innerHTML = "via " + getVia(data.routeStations);
}
function getVia (data) {
    let res = '';
    for (let i in data) {
        let str = ', '
        if (i == data.length - 2) {
            str = ' en '
        }
        if (i == data.length - 1) {
            str = ''
        }
        res += data[i].mediumName + str;
    }
    console.log(res);
    return res;
}

function getInputRail (evt) {
    if (evt.code == "Enter") {
        targetrack = document.getElementById('spoorinput').value;
        station = document.getElementById('stationinput').value;
        //document.getElementById('spoorinput').value = "";
        generateResults();
    }
}
function getInputStation (evt) {
    if (evt.code == "Enter") {
        station = document.getElementById('stationinput').value;
        targetrack = document.getElementById('spoorinput').value;
        //document.getElementById('stationinput').value = "";
        generateResults();
    }
}
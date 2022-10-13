setInterval (() => {
    const date = new Date();
    document.getElementById('sec').style.transform = "rotate(" + (360/60*date.getSeconds() + 6/1000*date.getMilliseconds()) +"deg)";
    document.getElementById('min').style.transform = "rotate(" + (360/60*date.getMinutes() + 6/60*date.getSeconds()) +"deg)";
    document.getElementById('uur').style.transform = "rotate(" + (360/12*date.getHours() + 30/60*date.getMinutes()) +"deg)";
},1);
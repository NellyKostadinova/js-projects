let timer = new Timer();

function Timer() {
    let date = new Date();
    date.setHours(0);
    date.setMinutes(0);
    date.setSeconds(0);
    date.setMilliseconds(0);

    let active = false;

    let interval;

    function start() {
        interval = setInterval(function () {
            active = true;

            let currentTimeInMilliSeconds = date.getMilliseconds();
            date.setMilliseconds(currentTimeInMilliSeconds + 100);

            let hours = date.getHours();
            let minutes = date.getMinutes();
            let seconds = date.getSeconds();

            $('#hours').text(formatTime(hours));
            $('#minutes').text(formatTime(minutes));
            $('#seconds').text(formatTime(seconds));
        }, 100);
    }
    
    function stop() {
        clearInterval(interval);
        active = false;
    }

    function isActive() {
        return active;
    }

    function formatTime(timeElement) {
        return timeElement < 10 ? "0" + timeElement : timeElement
    }

    return {
        isActive: isActive,
        start: start,
        stop: stop
    }
}

function start() {
    if (!timer.isActive()) {
        timer.start();
    }
}

function stop() {
    timer.stop();
}
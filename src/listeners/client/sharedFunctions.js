function getDate(at) {
    let day = at.getDate();
    let currentDay = ("0" + day).slice(-2);

    //To get the Current Month
    let month = at.getMonth() + 1;
    let currentMonth = ("0" + month).slice(-2);

    //To get the Current Year
    let year = at.getFullYear();

    //To get the Current Hours
    let hours = at.getHours();
    let currentHours = ("0" + hours).slice(-2);

    //To get the Current Minutes
    let min = at.getMinutes();
    let currentMinute = ("0" + min).slice(-2);

    //To get the Current Seconds
    let sec = at.getSeconds();
    let currentSec = ("0" + sec).slice(-2);
    return `${currentDay}/${currentMonth}/${year} ${currentHours}:${currentMinute}:${currentSec}`;
}

module.exports = getDate;

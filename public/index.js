const current = $("#currentDay");
const hour = moment().format("H");

current.text(moment().format("dddd, MMMM D"));

for (let i = 9; i <= 17; i++) {
    // console.log("Hello");
    // console.log(hour);
    if (hour > i) {
        // console.log("Past");
        $(`.${i}`).addClass("past");
    } else if (hour == i) {
        // console.log("Present");
        $(`.${i}`).addClass("present");
    } else if (hour < i) {
        // console.log("Future");
        $(`.${i}`).addClass("future");
    }
}
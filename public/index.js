const current = $("#currentDay");
const hour = moment().format("H");
let x = 0;
const button = document.querySelectorAll('.saveBtn');
const textArea = document.querySelectorAll('textarea');

current.text(moment().format("dddd, MMMM D"));

for (let i = 9; i <= 17; i++) {
    const itemClass = $(`.${i}`);

    if (hour > i) {
        // console.log("Past");
        itemClass.addClass("past");
    } else if (hour == i) {
        // console.log("Present");
        itemClass.addClass("present");
    } else if (hour < i) {
        // console.log("Future");
        itemClass.addClass("future");
    }
}
for (let x = 0; x < button.length; x++) {
    const buttonItem = button[x];
    const textItem = textArea[x];
    textItem.value = localStorage.getItem(`${x}`);

    buttonItem.addEventListener("click", () => {
        localStorage.setItem(`${x}`, textItem.value);
    });
}
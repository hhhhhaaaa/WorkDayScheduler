// Setting up variables
const current = $("#currentDay");
const hour = moment().format("H");
const button = document.querySelectorAll('.saveBtn');
const textArea = document.querySelectorAll('textarea');

// Uses moment to display the current time in the header
current.text(moment().format("dddd, MMMM D"));

// A for loop, looping through the textArea's classes...
for (let i = 9; i <= 17; i++) {
    const itemClass = $(`.${i}`);

    // ...Adding a class if the current time is at a certain threshold.
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

// A for loop, looping through the buttons on the page, and giving each the save data-value feature
// As well as setting the current value of the textArea to it's current local-storage value
for (let x = 0; x < button.length; x++) {
    const buttonItem = button[x];
    const textItem = textArea[x];
    textItem.value = localStorage.getItem(`${x}`);

    buttonItem.addEventListener("click", () => {
        localStorage.setItem(`${x}`, textItem.value);
    });
}
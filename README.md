# WorkDayScheduler
This planner mostly involved JS work, although there were several tweaks to the HTML and CSS.

## Getting Started
The Work Day Scheduler website is very simple to set up.
Step...  
1.) Download/Clone the website to your local repo.  
2.) Open the HTML file in the web browser of your choice, preferably Chrome.  

If you'd prefer to simply view the website, it is up on this following link!  
https://hhhhhaaaa.github.io/WorkDayScheduler/

## HTML
A list of the refactors inside the HTML, in order from top to bottom...

Added all the timeblock sections, each containing...
A section div, containing the classes "d-flex time-block row flex-column".
Inside the div, there is...
A p tag with the classes "hour flex-grow-1 col-1" and text that follows the hour it holds.
A textarea tag with the classes "description flex-grow-1 col-10" and a special class that is simply the number that follows the hour it holds.
A button tag with the classes "saveBtn flex-grow-1 col-1" and a lock emoji.
Also a script adding the js page.

## CSS
A list of the refactors inside the CSS, in order from top to bottom...

The hour class had white space and padding added to better fit with the example.


## JS
This page was completely new.
It contains a list of variables to help ease the selection of classes and tags, as well as create the date selection on the top of the page.
It contains two for loops.
The first is used mostly to loop through the number classes and set the current time to have the class present and the other times to follow suit in terms of past or future.
The second is used to manage the save buttons and help retrieve the information once saved so that it can be placed back upon the page.

## Repository
A list of the refactors inside the Repository as a whole...

Added a general use MIT license.  
Added this README.  
Changed folder assets to folder public.
Added index.css to assets.

## Final Screenshot
![Work Day Scheduler](/public/Planner.png "Work Day Scheduler")

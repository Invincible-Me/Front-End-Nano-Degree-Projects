# Website Optimization
 In this  project, I implemented various optimization on a Udacity course developer's portfolio.The first optimization goal was to get the `index.html` page to reach a score of 90 on Google pagespeed Insights.The second optimization goal was to ensure that the profile's pizzeria page animation ran at a smooth 60 frames-per-second while scrolling.The third opimization goal was to ensurethat resizing the pizzas on the profile's pizzeria page completed in less than five seconds.

 ## Optimization Summaries
 
 ### Optimization #1
 #### In index.html page
 -first i have changed the link attribute and added `type="text/css"`
 -I have added `media="print"` to the link element in line 14 index.html
 -Added async in the script element 
 
 ### Optimization #2
 #### In views/css/style.css
 -Added `will-change:transform;` attribute to `.mover` so that the scrolling is smooth.

 ### Optimization #3
 #### In JS/main.js
 - Moved `var items = document.getElementsByClassName('mover');` outside the DOM so that it is not called again and again
 -changed the no. of background pizzas to 24

 ### Optimization #4
 -I have optimized all images(reduced their size) , so that the page should load faster.

 # How to Run
 - Download all the files.
 -Open index.html to view the whole website 

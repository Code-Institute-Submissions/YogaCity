# Yoga City 
_Find peace within yourself with yoga._<br><br>
At Yoga City you receive high-level guidance. 
You will be pampered and challenged at the same time. 
You will learn which feelings you have and how to listen to those feelings. 
You are completely focused on yourself and on the other hand we are more connected than ever.<br><br>
__Come and connect with us.__

## Demo
[Live website](https://kimkesdev.github.io/YogaCity/.)
![](assets/screenshots/website.gif)

## UX

### User Stories

<strong>User Story 1:</strong> Inexperienced people who want to start practicing yoga.<br>
<strong>User Story 2:</strong> Advanced yoga practitioners who want more than just yoga.<br>
<strong>User Story 3:</strong> People who want to be spiritual connected.<br>
<strong>User Story 4:</strong> People who want to have more flexible muscles.<br>
<strong>User Story 5:</strong> People who want to find more inner peace.<br>
<strong>User Story 6:</strong> People who want to start learning more about there feelings.<br>
<strong>User Story 7:</strong> People who want to be physically and mentally challenged. <br>
<strong>User Story 8:</strong> People who want to find peace within thereselfs.<br>

### Strategy
This website is for people in Noord-Holland who want to practise yoga within a save environment.
A beautiful location where you can feel connected to yourself and others.
The yoga lessons are available every workday at different locations trough Noord-Holland.
The three available locations are bigger cities in Noord-Holland.

### Scope 
The website is easy to read and easy to use.
The website provides basic yoga information, the available locations and a sign up form.
The sign up form is a very clear form with radiobuttons for the preferred yoga day and location.
Every location has his own Google Map with the yoga location in the middle.
Every page has a link to the sign-up form.

### Structure
Every page has the same fixed header.<br>
Every page has the same footer.<br><br>
__index.html__ <br>
The page starts with a yoga image to get in the right yoga mood.<br>
Underneath the image will all the general information about Yoga City with links to the three locations.<br>
Followed by basic yoga information and yoga history.<br><br>
__alkmaar.html__<br>
__hoorn.html__<br>
__zaandam.html__<br>
All three pages with the same structure.<br>
Starting with three yoga images.<br>
Followed by the location information and a sign-up link.<br>
Underneath a full width Google Map with the location name in the middle.<br><br>
__signup.html__ <br>
The sign up page will have a yoga image on the background.<br>
On top of the image will be the sign-up form.<br>
With radionbuttons for every yoga location and radiobuttons for every yoga day.<br>
Followed by a name and email text field and a button for sending the form.<br>
When the form is send, you will be directed the the Thank You page.<br><br>
__thankyou.html__ <br>
This page will have one big _Thank You_ image.

### Skeleton
__Header:__ <br>
Same fixed header on every page.<br>
White background and golden title with menu. <br>

__Menu:__ <br>
The menu items will be within golden circles. <br>
All lined up horizontally in large size, hamburger icon in medium and small size.<br>
On every page it will be visible, which page is active.<br>
There will be a grey circle around the menu item with the golden circle.<br>
When the page _Alkmaar_, _Hoorn_ or _Zaandam_ is selected, the active circle will be around the _Location_ menu item.<br>

__Footer:__ <br>
The footer is white with grey icons, all lined up horizontally.<br>
On small, medium and large devices, the icons stay all horizontally.<br>

__All Pages:__ <br>
White background, text in dark grey, titles in gold.<br>
Big yoga images. Full width or side by side.<br>
With a sign-up link, which will link you to _signup.html_. <br>

__Form:__ <br>
See trough form with five radio buttons for each week day, all lined up vertically. <br>
Followed by three radio buttons for each location, all lined up vertically. <br>
Two wide required text fields with name and email address.<br>
When the send button is pressed, it will lead you to the _thankyou.html_ page.<br>

__Maps:__ 
Each location will have his own Google Map with his own Google Maps API Key and his own JavaScript form.<br> 
The location name in the middle of the map. <br> 

### Surface
All text with font family: 'Noto Sans JP'.<br>
All text with font color: #666666 (dark grey).<br>
All titles with font color: #bf9b30 (gold)<br>
![](assets/screenshots/%23BF9B30.PNG)
![](assets/screenshots/%23C0C0C0.PNG)
<br><br>

__Header__<br>
The uppercase title will be on the left in the color gold with text shadow #666666 (dark grey).<br>
The navigation menu will be horizontally on the right on large devices. <br>
Each navigation menu item will be placed in a seprate golden circle. <br>
The active page will have a grey border around the golden circle of the navigation menu.<br>
The golden circle of the navigation menu will get a shadow element below the circle, when hover over.<br>
When the _locations_ menu item is pressed, there will be a collapsable menu with the available locations.<br>
The collapsed menu will have the location names vertical, dark grey text with a white background.
On small and medium devices the menu will become a collapsable menu or _hamburger_ menu.<br>
The _hamburger_ menu will have a golden border.<br>

__Footer__<br>
Starting on the left with an _email_ icon, which will direct you to your email program.<br>
Next the _phone_ icon, which will directly start calling.<br>
Followed by the _Facebook_, _Twitter_, _YouTube_ and _Instagram_ icon, which will lead you to the right external webpage.<br>

__Home page / index.html__<br>
Starting with a big image, full width on all devices.<br>
Followed by a white block with text. <br>
The titles and the sign up link are color gold. <br>
The sign up link will link to the _sign-up_ page.<br>
The sign up link will change to color silver when hover over.<br>
And at the bottom here will be four images.<br>
On large devices there will be two images, full width. And then again two images, full width.<br>
On medium and small devices there will be one image, full width. Four images underneath each other.<br>
All four images will have a hover over effect.<br>
In the top left of each image will show a text quote.<br>
Text color white and background color dark grey and a little bit transparant.<br>

__Locations__<br>
Each location will have the same build up.<br>
Starting with three images.<br>
On small and medium devices the three images will be full width underneath each other.<br>
On large devices there will be one image, full width. Underneath that image will be two images next to each other, full width.<br>
Followed by a white block with text. <br>
The titles and the sign up link are color gold. <br>
The sign up link will link to the _sign-up_ page.<br>
Next to each title will be a playful icon.<br>
At the bottom will be a map, full width, with a marker with the location name. <br>
The map will be zoomed in and the area surrounding of the yoga location is clearly visible.<br>
The title and location text will be in big white letters for good visabilatyin, the background of the marker will be color gold. <br>
The golden background will have a little tip underneath, so it looks like a text balloon.<br>

__Sign Up__<br>
One big image will fill the page, full width.<br>
On small and medium devices the form will be place in the center.<br>
On large devices the form will be place on the left.<br>
The sign up form will have the color dark grey and is a little bit transparant so you can still see the image. <br>
The title will be color gold with next to the title a playful icon.<br>
The title will have a hover over effect and will change the text color to silver and will have a shine effect.<br>
The rest of the text will be white.<br>
Three verticaly radio buttons for each location.<br>
The locations are in alphabetical order.<br> 
Automatically the first selectable radiobutton is selected.<br>
Followed by five verticaly radio buttons for each day of the week.<br>
Automatically the first selectable radiobutton is selected.<br>
Underneath the radio buttons will be two text input field underneath each other for the name and e-mail address. <br>
These are required field.<br>
The borders will be color white, with hoover over effect to change them to color gold.<br>
When the send button is pressed and the required fields are not filled in, the borders of the required text fields will change to red with a red cross at the end.<br>
And at the bottom will be a submit button with white text and the background color gold. <br>
With hoover over effect to change the text color to gold and the background color to silver.

__Thank You__<br>
This page is only accessible when the sign-up form is send.<br>
No menu item will be active on this page.

### Mockups
The following wireframes were created using Balsamiq to design the website layout options:
<br>
[Small devices](assets/mockups/YogaCityLarge.pdf)<br>
[Medium devices](assets/mockups/YogaCityMedium.pdf)<br>
[Large devices](assets/mockups/YogaCityLarge.pdf)

## Features
The webpage consists of the following features:<br><br>
__Bootstrap form__<br>
The sign-up form uses Bootstrap form features.<br>
Radio buttons, to choose the preferred options.<br>
The form has required text fields for the name and email address.
<br><br>
__Bootstrap Icons__<br>
All grey icons are used in the footer for social media, phone and email, linked to the right place.<br>
In the fixed header is a home icon, linked to the _index.html_.<br>
In the fixed header is a _hamburger_ icon only on small and medium devices.<br>
Next to a lot of titles is a playful icon, they are not linked.
<br><br>
__Bootstrap Button__<br>
The sign-up form uses a Bootstrap button, which is styled with CSS.
<br><br>
__Bootstrap Navbar__<br>
Makes the _locations_ button a drop down list.
<br><br>
__Google Maps__<br>
Each location has his own API key and his own JavaScript form.

## Technologies

### Languages
[HTML5](https://en.wikipedia.org/wiki/HTML5) for the structure of the website <br>
[CSS](https://en.wikipedia.org/wiki/Cascading_Style_Sheets) for the styling <br>
[JavaScript](https://en.wikipedia.org/wiki/JavaScript) for the Google Maps

### Frameworks / Tools / Libraries
[Balsamiq](https://balsamiq.com.) for the mockups.<br>
[Bootstrap](https://getbootstrap.com/) for the collapsible navbar, button and the footer icons<br>
[Google Fonts](https://fonts.google.com/) for the font family 'Noto Sans JP'<br>
[Gitpod](https://www.gitpod.io/) was the IDE used to write the code for this website<br>
[GitHub](https://github.com/) for version control

### Testing
[HTML Validator](https://validator.w3.org/) for testing the HTML code<br>
[CSS Validator](https://jigsaw.w3.org/css-validator/) for testing the CSS code<br>
Google Chrome Developer Tools for testing different device sizes

## Testing

__Responsiveness__<br>
Every page was tested for responsiveness on small, medium and large devices.<br>
Through the _Google Chrome Developer Tools_ I tested the following types:<br>
<ul>
  <li>iPhone 5/SE (portrait: 320x568 & landscape: 568x320)
  <li>Galaxy S5/Moto G4 (portrait: 360x640 & landscape: 640x360)
  <li>iPhone 6/7/8 (portrait: 375x667 & landscape: 667x375)
  <li>iPhone X (portrait: 375x812 & landscape: 812x375)
  <li>Pixel 2 (portrait: 411x731 & landscape: 731x411)
  <li>Pixel 2 XL (portrait: 411x823 & landscape: 823x411)
  <li>iPhone 6/7/8 Plus (portrait: 414x736 & landscape: 736x414)
  <li>iPad (portrait: 768x1024 & landscape: 1024x768)
  <li>iPad Pro (portrait: 1024x1366 & landscape: 1366x1024)
</ul>

This site was also tested in [Responsinator](https://www.responsinator.com/).<br>
![](assets/screenshots/small_devices.png)
<br><br>

__Header__<br>
The header is fixed and responsive to small, medium and large devices.
<br><br>
__Navigation menu__<br>
The links in the navigation menu are linked to the right internal webpage.
<br><br>
__Footer__<br>
In the footer the social media links will be found, which are external links.
There are also contact icons, which will can be used to get in contact right away.
<br><br>
__Sign-up form__<br>
The sign-up form has required attributes which are needed before submitting the form.

## Testing results
HTML validator tested on the following pages:
index.html, alkmaar.html, hoorn.html, zaandam.html, signup.html, thankyou.html
![](assets/screenshots/html_validator.PNG)
<br>
CSS validator tested on the following page:
style.css<br>
![](assets/screenshots/css_validator.PNG)

## Deployment
I started working on this project in Repl.it because I worked on it from different devices.
Every time I was on my own laptop I copied everything to GitPod and pushed it to GitHub.
Like this I also always had an extra backup, when needed.
<br><br>
This website contains the following html pages:
<ul>
  <li>index.html
  <li>alkmaar.html
  <li>hoorn.html
  <li>zaandam.html
  <li>signup.html
  <li>thankyou.html
</ul>
And the following map:
<ul>
  <li>assets
</ul>
Inside the <strong>assets</strong> map I created five new maps:
<ul>
  <li>css
  <li>images
  <li>js
  <li>mockups
  <li>screenshots
</ul>
Inside the <strong>css</strong> map is the css style sheet called <strong>style.css</strong>.<br>
Inside the <strong>images</strong> map are all the images used on the website.<br>
Inside the <strong>js</strong> map are the three JavaScript sheets with the Google Maps information.<br>
Inside the <strong>mockups</strong> map are the three mockups for small, medium and large devices.<br>
Inside the <strong>screenshots</strong> map are all screenshots used in the README.md.<br>
Ending with the README.md

### New Repository in GitHub
First you need an account on [GitHub](https://github.com) which you can download from [here](https://desktop.github.com).<br>
<ol>
  <li>Click <strong>Create a New Repository</strong>.
  <li>At <strong>Repository template</strong> you can select a template, if you have one.
  <li>At <strong>Repository name</strong> you can choose the name for you new repository.
  <li>At <strong>Description (optional)</strong> you give you repository a decription.
  <li>Next you can choose if you want a <strong>Public</strong> or a <strong>Private</strong> repository.
  <li><strong>Initialize this repository with a README</strong> you click this checkbox if you like to create a README file.
  <li>Click the green button with <strong>Create repository</strong>.
</ol>

### Creating a branch
To create a branch link you have to go to your repository in GitHub and follow the following steps:
<ol>
  <li>Click on <strong>settings</strong>.
  <li>Scroll down to <strong>GitHub Pages</strong>.
  <li>At <strong>Source</strong> the button stands on <strong>None</strong>, click it and select <strong>master branch</strong>.
  <li>Your site is ready to be published at (your branch name).
</ol>

### Push from GitPod to GitHub
When you make some changes in GitPod you can push them to GitHub.
<ol>
  <li>In GitPod click on <strong>Source Control: Git</strong>.
  <li>In the textfield you can give your changes a message name.
  <li>Underneath the line <strong>CHANGES</strong>, you see all the changes that have been made. Press the <strong>+</strong> button behind the page name which you want to be pushed. You can also press the <strong>+</strong> button next to the line <strong>CHANGES</strong>, to push all the made changes.
  <li>Klink the <strong>Commit</strong>.
  <li>On the right, press the GitPod logo with the name <strong>Pull Request</strong>.
  <li>A yellow field appears. Click the blue button with <strong>Push</strong>.
</ol>
    
### Create your own Google API key
To start you need to have a Google Account and start at the [Google Cloud Platform Console](https://cloud.google.com/console/google/maps-apis/overview).
<ol>
  <li>On the top of the Google Cloud Platform Console, next to the text <strong>Google Cloud Platform</strong> you see a drop project drop down menu.
  <li>When you click it, you will get a pop up with all your projects, if you have any.
  <li>Click on <strong>New Project</strong>.
  <li>Fill in your <strong>Project Name</strong> and click <strong>Create</strong>.
  <li>Go to your new project and click on <strong>Credentials</strong>.
  <li>Go to <strong>Credentials in APIs & Services</strong>.
  <li>Click on <strong>Create Credentials</strong> and <strong>API Key</strong>.
  <li>Copy your API Key code and paste into your website.
</ol>

## Credits

### Content
The full content is made up and written by me.

### Media
The photos used in this website were obtained from [Unsplashed](https://unsplash.com/).

### Acknowledgements
Everything I learned from the [Code Institute](https://codeinstitute.net/) Fullstack Web Development course.<br>
I used [W3Schools](https://www.w3schools.com/) for extra general coding knowledge.<br>
I used the [Google Maps](https://developers.google.com/maps/documentation/javascript/get-api-key) site to create three API key's and for general information.<br>
I used [Bootstrap](https://getbootstrap.com/) for info about forms and offcourse to use the icons, buttons and navbar.<br>

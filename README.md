# PetMatch

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.4.

Use the master branch for code edits and changing.

I used this article for how to build the website: https://www.syncfusion.com/blogs/post/easy-steps-to-host-an-angular-app-in-github-pages.aspx
Instead of making a new workspace clone this repo.
In addition the command to view your changes locally is `ng serve`.

This project uses Netlify for the front-end, and Netlify Functions to connect to the backend. Any changes made will automatically commit to Netlify, and any changes to Netlify functions should be in the netlify/ folder.

The best way to use this project is through its deployment, which is here: https://pet-match1.netlify.app/

To run locally, use the following steps:

Make sure npm is installed.

Git clone or download this project.

Cd into the directory for this project.

Run:

`npm install netlify-cli -g`

`npm install`

Finally to view the webpage, run:

`netlify dev`

This will deploy to a specific port on your computer which should be displayed in the terminal.

Note that many features may not work on a local copy, such as the database queries, and auth0 login.

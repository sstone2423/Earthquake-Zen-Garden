# Earthquake-Zen-Garden

Take home coding exercise

## Summary

This is a simple app that shows a homepage with a list of earthquakes. It has a header with a logo (link back to home), and a link to a profile detail view. Each entry in the table links to a detail view of that particular record. See the screens and reference data below.

## Instructions

1. Create an app called ‘earthquake-zen-garden’
2. Do not use Create React App
3. Use the provided data.js JSON file to create the app according to the diagram above
4. Create a Github repo to host the app (optional but suggested)
5. The app should have 3 main views as outlined below

## Requirements

A user should be able to:

- Clone the repo
- Run ‘npm install’ // install dependencies
- Run ‘npm run start’ // auto-start the app, open a browser instance and load the app
- The app should look and behave as outlined below

## Specs

Color palette:

- #ededed
- #777777
- #444444
- #0011bb
- #6600cc
- Font family: sans-serif
- No need for IE11 support

## Screens Reference

### Home

This should be the default view the users sees when the application loads.

Note:

- Clicking the logo in the header from any view will return to this view
- Clicking on one of the items in the list should take the user to the Detail View
- Clicking the welcome message in the header should take the user to the Profile View
- Clicking the column header should sort the data according to that column
- Clicking the column header successively should toggle the sort directions

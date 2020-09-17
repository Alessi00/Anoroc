# Anoroc

## Table of Contents

- [Project Overview](#projectoverview)
- [Repositories](#repositories)
- [Documentation](#documentation)
- [Technologies](#technologies)
- [Installation](#installation)
- [Testing Instructions](#testinginstructions)
- [Team](#team)
- [Contributions](#Contributions)

## Project Overview
Considering the recent Global Emergency, it has been more apparent than ever before that the ability to track and trace a contingent is of the utmost importance. Cotangent tracking allows users to avoid potential infections and for authorities to be able to flatten the infection rate curve by the use of restrictions or medical services at the hot spots of the tracing.
The application will allow the tracking of multiple contingents that are deemed as pandemics by the World Health Organisation, that are currently affecting the country that the user is in. Often this will only be one contingent at a time; however, the system will have the capability to track multiple.

The application proposed is a tool that tracks the user’s location data on a mobile app, that is sent to the server and stored in a manner that both protects the user’s identity and location, as well as provides a way to generate spatial data that can be analyzed and displayed in the manner of a heat map on the user’s mobile device or the web app. User’s should be able to view and download their location data as well as sensitive data they have opted into entering.

The application will allow the user to log in or register using either an Anoroc account or by the use of their social media accounts (Google, Facebook). Once logged in, the user will be able to voluntarily give their contagent status and select the contagent they will be focusing on. The application allows for anonymous users, these user will simply be able to see the hotspots and calcuate their risk.

## Repositories

- [Anoroc-Server](https://github.com/COS301-SE-2020/Anoroc-Server)
- [Anoroc-Mobile](https://github.com/COS301-SE-2020/Anoroc-Mobile)
- [Anoroc-Webapp](https://github.com/COS301-SE-2020/Anoroc-WebApp)

## Documentation

- [SRS Document](https://drive.google.com/file/d/1tEJX2Pi01QK18ZgobkBEwzO-9_2slSnA/view?usp=sharing)
- [Project Management Tool](https://app.clubhouse.io/codesummoar)
- [Coding Standards](https://drive.google.com/file/d/1fbs0ovG67JU1S74ydh5dKuRe1_DKI3PR/view?usp=sharing)
- [User Manual](https://www.overleaf.com/read/ywfpmxbppkfr)
- [Technical Installation Manual](https://drive.google.com/file/d/1lIlmdtKBJa-hsQjx_8l6rTby1qm58ZKk/view?usp=sharing)

## Demo Videos

- [Demo 1 Video](https://bit.ly/2UDQRAk)
- [Demo 2 Video](https://bit.ly/30GxrNy)
- [Demo 3 Video](https://drive.google.com/file/d/1FZ1-xuz4U28NqynsULSySEHu_GjsHVEk/view?usp=sharing)

## Technologies

- Mobile Application: [Xamarin Forms | .NET](https://dotnet.microsoft.com/apps/xamarin/xamarin-forms)
- API: [ASP.NET Core API](https://dotnet.microsoft.com/apps/aspnet/apis)
- Server: Azure Services
- WebAp: Angular 10

## Installation

After cloning, you will need to install the node modules:

```
npm install
```
Then to run the application:

```
ng serve -o
```

You will need a Azure Maps key which you place in assests/config/config.dev.json. Steps to obtain a key can be found [here](https://docs.microsoft.com/en-us/azure/azure-maps/quick-demo-map-app).

## Team
| Name   | Surname    |        Email         |       Github.io        |
|--------|------------|----------------------|------------------------|
| Tebogo | Selahle     | u15210822@tuks.co.za | [tebogo.codes](https://tebogo.codes/)  |
| Andrew | Wilson     | u15191223@tuks.co.za | [andrew96-eng.github.io](https://andrew96-eng.github.io) |
| Anika  | van Rensburg | u17246840@tuks.co.za | [anikavanrensburg.github.io](https://anikavanrensburg.github.io) |
| Anrich | Hildebrand | u15178782@tuks.co.za | [anrich96.github.io](https://anrich96.github.io) |
| Kevin  | Huang | u15026681@tuks.co.za | [kevin-d-h.github.io](https://kevin-d-h.github.io/myCV/) |
| Ronald | Looi | u15226532@tuks.co.za | [rsl-student.github.io](https://rsl-student.github.io) |


## Contributions

### Tebogo Selahle

- UX / UI Development
- Backend Server Development

### Andrew Wilson

- Spatial Data Analytics
- Backend Mobile Development

### Anika van Rensburg

- UI Testing
- Backend Mobile Development

### Anrich Hildebrand

- Database Management
- Backend Server Development

### Kevin Huang

- Push Notification System
- UI Testing

### Ronald Looi

- Backend Server Development
- Backend Mobile Development

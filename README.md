## Summary & Objective

This is a song sorter leveraging VueJS, Vuetify & Axios. Functional goals were:

- Display user's songs
- Sort by album name, song title, and other useful attributes
- Search by song title (bonus points for other search criteria)

### Result:

#### Demo: <a href="http://kongsong.s3-website.us-east-2.amazonaws.com/" target="_blank">http://kongsong.s3-website.us-east-2.amazonaws.com/</a>

<img src="https://i.imgur.com/QNR3JL5.png" width="975"/>

A user can sort by album name, song title, artist name and release date. A user can also search against all displayed information with results being instantly displayed. If no results are found, the user is notified accordingly.

### Notes:
I opted to fetch the top 200 songs from the iTunes RSS feed (as JSON). There is a visual loading indicator althogh my experience has been under 10 ms response rates making it nearly undetectable. The design was inspired by the colors of the RockStar can pictured below. Honestly I'm not sure if the flavor or the can design which prompts me to keep buying it I don't even like mango very much.

### Actual inspirational can FTW:<br>
<img src="https://i.imgur.com/ifeWRsN.png" width="400"/>

## Installation

### Requirements

Install & Run Reqs: [NodeJS](https://nodejs.org/en/)
Compile & Minify (Optional): [Vue CLI](https://cli.vuejs.org/)

### Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production (Vue CLI)

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

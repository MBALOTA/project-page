'use strict';

angular.module('projectsApp', ['ngSanitize'])
  .controller('ProjectsController', function($scope){
    $scope.ActiveProjects = [
      {
        title: "balota.me & this page",
        images: [
          {
            src: "img/pr/bm.jpg",
            alt: "balota.me"
          },
        ],
        description: "balota.me is my portfolio webpage. And this page that you see is my projects webpage, that uses angularjs",
        links: [
          {
            url: "http://balota.me",
            display: "balota.me",
            target: "_self"
          },
          {
            url: "https://github.com/MBALOTA/project-page",
            display: "Github Repo",
            target: "_self"
          },
        ]
      },
      {
        title: "IDEALESS",
        images: [
          {
            src: "img/pr/idealess.jpg",
            alt: "idealess"
          },
        ],
        description: "A full fleshed out website. Using NodeJS & MongoDB (using: express, mongoose, passport, ejs, soon angularjs, ...)<br><br>Want to do something <strong>dope</strong> and don't know what or how? Let other people help you!<br>Are you <strong>IDEALESS</strong>? Others might help you by giving you an idea, by motivating you or by inspiring you!",
        links: [
          {
            url: "#",
            display: "Currently not available.",
            target: "_self"
          },
        ]
      },
      {
        title: "TAUR Media Player",
        images: [
          {
            src: "img/pr/tmp.jpg",
            alt: "taur media player"
          },
        ],
        description: "A small and simple cross platform desktop media player written in js, html, css via <a href='http://electron.atom.io' target='_blank'>electron</a>.<br>Features planned: audio visualisation via canvas, use of custom css files, playlist support, more to come...<br>TMP is going to be released on github.",
        links: [
          {
            url: "https://github.com/MBALOTA",
            display: "Github",
            target: "_blank"
          },
        ]
      },
    ];
    $scope.FinishedProjects = [
      {
        title: "Ristorante con Fusion",
        images: [
          {
            src: "img/pr/rcf.jpg",
            alt: "rcf"
          },
        ],
        description: "A restaurant website.<br> Used gulp, bower, json-server, angularjs, bootstrap, html5, css, js.",
        links: [
        ]
      },
      {
        title: "Mongomart",
        images: [
          {
            src: "img/pr/mmart.jpg",
            alt: "mongomart"
          },
        ],
        description: "Final project of M101JS at MongoDB University.<br>Course was centered around working with MongoDB in shell and in NodeJS.",
        links: [
        ]
      },
      {
        title: "Udemy  projects",
        images: [
          {
            src: "img/pr/udemy.jpg",
            alt: "udemy"
          },
        ],
        description: "All sorts of projects made in The Web Developer Bootcamp Course.",
        links: [
        ]
      },
      {
        title: "Udacity  projects",
        images: [
          {
            src: "img/pr/udnhm.jpg",
            alt: "udacity"
          },
        ],
        description: "6 projects made at Udacity's Front-End Webdeveloper Nanodegree course.<br>My favorite one was, as seen above, a neighbourhood map. The class had to create a custom GMaps map and use another api, e.g. yelp's api or something else and use knockoutjs to filter the points.<br>I chose Wikipedia, although it was harder to work with.",
        links: [
        ]
      },
    ];
  });

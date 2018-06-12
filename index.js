var express = require('express');
app = express(),
    fs = require('fs'),
    im = require('imagemagick'),
    srcImage = ".image_src/butterfly.jpg",
    desPath = "images/";
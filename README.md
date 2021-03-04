# LAB_2_veer

Objectives

Gain experience with Leaflet.js and GeoJSON.
Learn to build a geoweb app by mashing up two APIs.
Overview

In this project, you’ll build a web mapping application about building permits in Calgary. Users will be able to filter and visualize building permits in Calgary in a mapping front-end. You will use City of Calgary’s Open Calgary API to pull in building permits data. Users will be able to query for date ranges via the Open Calgary API.

Getting Started

Leaflet.js

For this project, you’ll need to use Leaflet.js as the JavaScript library for interactive maps. Leaflet is one of the most popular web mapping APIs. You will find th API Docs here, Tutorials here, and some very powerful Plug-ins here.

GeoJSON

According to GeoJSON Specification (RFC 7946):

GeoJSON is a format for encoding a variety of geographic data structures […]. A GeoJSON object may represent a region of space (a Geometry), a spatially bounded entity (a Feature), or a list of Features (a FeatureCollection). GeoJSON supports the following geometry types: Point, LineString, Polygon, MultiPoint, MultiLineString, MultiPolygon, and GeometryCollection. Features in GeoJSON contain a Geometry object and additional properties, and a FeatureCollection contains a list of Features.

To complete this lab assignment, this Using GeoJSON with Leaflet tutorial will be useful.

Open Calgary API

According to the Open Calgary web site:

Open Calgary is the gateway to The City of Calgary’s Open Data Portal and Citizen Dashboard. In the spirit of openness, accountability and transparency, Open Calgary was created to facilitate the sharing of information, spark innovative ideas and foster a sense of collaboration among citizens.

Open Calgary offers some useful open datasets, and they can be accessed via API. In this lab, we will use the Building Permits data set.

It offers a GeoJSON endpoint (https://data.calgary.ca/resource/c2es-76ed.geojson) that can be very handy for Leaflet.js.
Open Calgary API is based on the Socrata Open Data API. It offers some powerful queries, including Simple Filters, SoQL Queries, and Paginations.
For example, to find all building permits issued on 2020-01-21, you can issue the following query: https://data.calgary.ca/resource/c2es-76ed.geojson?issueddate=2020-01-21T00:00:00.000
It also support range queries. For example, to find all building permits issues between 2020-01-21 and 2020-01-23, you can issue the following query by using the $where query parameter: https://data.calgary.ca/resource/c2es-76ed.geojson?$where=issueddate > '2020-01-21' and issueddate < '2020-01-23'
If you just want to return certain fields rather than all the fields, you can use the $select query parameter: https://data.calgary.ca/resource/c2es-76ed.geojson?$where=issueddate > '2020-01-21' and issueddate < '2020-01-23'&$select=issueddate,communitycode
The API Doc for the Building Permits data is available here: https://dev.socrata.com/foundry/data.calgary.ca/c2es-76ed

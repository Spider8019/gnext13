"use client";

import { useEffect } from 'react';
import Head from 'next/head';

const HeatmapPage = () => {
  useEffect(() => {
    const loadScript = (src) => {
      return new Promise((resolve, reject) => {
        const script = document.createElement("script");
        script.src = src;
        script.async = true;
        script.onload = resolve;
        script.onerror = reject;
        document.body.appendChild(script);
      });
    };

    const loadArcGIS = async () => {
      await loadScript("https://js.arcgis.com/4.26/");
      window.require([
        "esri/Map",
        "esri/views/MapView",
        "esri/layers/CSVLayer"
      ], (Map, MapView, CSVLayer) => {

        const url = "https://docs.google.com/spreadsheets/d/1dJ8S-_U1lVaJCeWEJiSkEE_pACCvrN0WAsrqDXMoJT0/pub?output=csv";
        const colors = ["rgba(115, 0, 115, 0)", "#820082", "#910091", "#a000a0", "#af00af", "#c300c3", "#d700d7", "#eb00eb", "#ff00ff", "#ff58a0", "#ff896b", "#ffb935", "#ffea00"];

        const csvLayer = new CSVLayer({
          url: url,
          latitudeField: "latitude",
          longitudeField: "longitude",
          renderer: {
            type: "heatmap",
            colorStops: [
              { color: colors[0], ratio: 0 },
              { color: colors[1], ratio: 0.083 },
              { color: colors[2], ratio: 0.166 },
              { color: colors[3], ratio: 0.249 },
              { color: colors[4], ratio: 0.332 },
              { color: colors[5], ratio: 0.415 },
              { color: colors[6], ratio: 0.498 },
              { color: colors[7], ratio: 0.581 },
              { color: colors[8], ratio: 0.664 },
              { color: colors[9], ratio: 0.747 },
              { color: colors[10], ratio: 0.83 },
              { color: colors[11], ratio: 0.913 },
              { color: colors[12], ratio: 1 }
            ],
            radius: 18,
            maxDensity: 0.010416666666666668,
            minDensity: 0
          }
        });

        const map = new Map({
          basemap: "streets-night-vector",
          layers: [csvLayer]
        });

        new MapView({
          container: "viewDiv",
          map: map,
          center: [79.32337682041113, 23.492077003451243],
          zoom: 5
        });
      });
    };

    loadArcGIS();
  }, []);

  return (
    <>
      <Head>
        <title>Heatmap from CSV</title>
        <link rel="stylesheet" href="https://js.arcgis.com/4.26/esri/themes/light/main.css" />
      </Head>
      <div id="viewDiv" style={{ height: '100vh', width: '100%' }}></div>
    </>
  );
};

export default HeatmapPage;

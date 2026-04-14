import { initMap, addRiskMarker } from './components/map.js';

const safeRouteMap = initMap('map');
addRiskMarker(safeRouteMap, -26.1929, 28.0305, "Air Quality Alert");

console.log("Safe Route: Map and components initialized successfully.");
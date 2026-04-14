
/**
 * Initializing the Leaflet map in a given container
 * @param {string} containerId - The ID of the HTML element to hold the map
 * @returns {L.Map} - The initialized Leaflet map instance
 */
export const initMap = (containerId) => {
    // Set coordinates to Gauteng area (Joburg/Pretoria)
    const map = L.map(containerId).setView([-26.2041, 28.0473], 13);

    // Added the the actual map image
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    return map;
}


/**
 * Adds a health risk marker to the map
 * @param {L.Map} map - The map instance
 * @param {number} lat - Latitude
 * @param {number} lng - Longitude
 * @param {string} type - Type of risk (e.g., "Pollution")
 */
export const addRiskMarker = (map, lat, lng, type) => {
    const marker = L.marker([lat, lng]).addTo(map);
    marker.bindPopup(`<b>Reported Risk:</b> ${type}`).openPopup();
};
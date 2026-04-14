/**
 * Generates the HTML for the Report Form
 * @returns {string} - HTML string for the form
 */
export const createReportForm = () => {
    return `
        <div id="report-form" class="ui-panel">
            <h3>Report Health Hazard</h3>
            <label>Hazard Type:</label>
            <select id="hazard-type">
                <option value="Pollution">Air Pollution</option>
                <option value="Water">Contaminated Water</option>
                <option value="Safety">Unsafe Zone</option>
                <option value="Disease">Disease Outbreak</option>
            </select>
            
            <label>Description:</label>
            <textarea id="hazard-desc" placeholder="Describe the risk..."></textarea>
            
            <p><small>Click on the map to set location</small></p>
            <button id="submit-report">Submit Report</button>
            <button id="close-form" class="secondary">Cancel</button>
        </div>
    `;
};
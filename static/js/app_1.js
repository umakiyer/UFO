// import the data from data.js
const tableData =data;
//Refernce the HTML table using d3
var tbody=d3.select("tbody");
//create function buildTable()
function buildTable(data) {
    // First, clear out any existing data
    tbody.html("");
    // Console data
    console.log(" I am in bulddata");
    // Next, loop through each object in the data
    // and append a row and cells for each value in the row
    data.forEach((dataRow)=> {
        // Append a row to the table body
        let row = tbody.append("tr");

        // Loop through each field in the dataRow and add
        // each value as a table cell (td)
        Object.values(dataRow).forEach((val)=> {
            let cell = row.append("td");
            cell.text(val);
            }
        );
    });
}
function handleClick() {
    // Grab the datetime value from the filter
    let date = d3.select("#datetime").property("value");
    let filterData = tableData;

    // Console log filter
    console.log(" i am in handleClick");
    console.log(date);
    // Check to see if a date was entered and filter the
  // data using that date.
    if(date) {
        // Apply `filter` to the table data to only keep the
        // rows where the `datetime` value matches the filter value
        filterData= filterData.filter(row => row.datetime === date);
    }
    // Rebuild the table using the filtered data
  // @NOTE: If no date was entered, then filteredData will
  // just be the original tableData.
  buildTable(filterData);

}
// Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click",handleClick);

// Build the table when the page loads
buildTable(tableData);


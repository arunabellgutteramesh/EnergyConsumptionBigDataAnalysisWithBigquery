// Import the Google Cloud client library
const {BigQuery} = require('@google-cloud/bigquery'); 
var s = require('../key/energystatistics-key.json');

console.log(s);

// Create a client
const bigqueryClient = new BigQuery({
  projectId: 'energystatistics',
  keyFilename: './key/energystatistics-key.json',
});

exports.getUniqueCategories = async function(req,res) {

  var query = `SELECT DISTINCT(Category)
  FROM \`energy_schema.energy_table\` `;

  var options = {
    query: query
  };

  // Run the query
  var [rows] = await bigqueryClient.query(options);

  console.log('Query Results:');
  rows.forEach(row => {
     console.log(JSON.stringify(row));
  });
  res.send(JSON.stringify(rows));
} 

exports.getTopFourConsumptionsPerYear = async function(req,res) {

  var category = req.params.category;
  var year = req.params.year;
  year = parseInt(year);
  console.log(year);
  console.log(category);
  var query = `SELECT Country, sum(Quantity) as Total_Quantity, Unit FROM \`energy_schema.energy_table\`
  WHERE (Category like \'`+category+`\') AND Year = `+year+`
  GROUP BY Country, Unit
  ORDER BY Total_Quantity DESC LIMIT 4`
  
  console.log(query);

  var options = {
    query: query
  };

  // Run the query
  var [rows] = await bigqueryClient.query(options);

  console.log('Query Results:');
  rows.forEach(row => {
     //console.log(JSON.stringify(row));
  });
  res.send(JSON.stringify(rows));
}




 
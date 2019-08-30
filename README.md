# EnergyConsumptionBigDataAnalysisWithBigquery

Created a Node JS + Angular JS Application to analyse Energy Consumption Big Data using Google Bigquery support by Node JS

# Application

The application is a web app with the web page displaying various visualisations on energy consumption data.  
Along with this another component was added to select the category of energy and year.  This component then displayed the
top four countries by their energy consumption per category per year.

The selection of category and year triggers the service from front end to Node JS.  At the middle ware, 
a google big query is constructed and triggered to google storage.  Google storage retrieves information and replies 
to NodeJS which is further recevied to front-end and displayed.

Application hosted at: https://energy-statistics-application.herokuapp.com/site.html

# Pig, Hive

Used Pig and Hive for data preprocessing.

# Google Cloud Storage

Used for storing 1 million records.

# Google Big Query

Big data technology used for data querying dataset with 1 million rows of data stored at Google Cloud Storage.

# Node JS

Node JS provides the middleware between Google BigQuery and front-end.

# Tableau

Used Tableau Public for visualisation.

# AngularJS

Used Angular JS MVC to display the front-end.

# Heroku

Used Heroku for app deployment.













import json
import geojson
from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def index():

    # use render_template to serve up the index.html
    return render_template('index.html')

@app.route("/data")
def samples():

    data_json = open("static/data/Income_records.json", "r") 
    data_data = json.load(data_json)
    
   #This serves json data on us county economic data
    
    return data_data

@app.route("/us_county")
def us_county():

    data_json = open("static/data/uscounty.geojson", "r") 
    data_data = geojson.load(data_json)
    
    #This serves geodata on us county boundaries
    
    return data_data

@app.route("/us_states")
def county_county():

    data_json = open("static/data/usstate.geojson", "r") 
    data_data = geojson.load(data_json)
    
   #This serves geodata on us states boundaries
    
    return data_data


if __name__ == "__main__":
    app.run(debug=True)
// Endpoint for data
var url = "/data"

// Initialise the web page with county1 and county 2 default comparisons
function Initialize(){

  var county1 = "Autauga, AL";
  var county2 = "Baldwin, AL";
  buildCharts(county1, county2);

};
Initialize();

buildCharts("Autauga, AL","Baldwin, AL")
  //filter county data for selecting county1 and county 2 and build charts
function buildCharts(county1, county2) {

  d3.json(url).then(data => {

                    /*
              2000: "16138",
              2001: "16211",
              2002: "15944",
              2003: "16484",
              2004: "16884",
              2005: "17404",
              2006: "17189",
              2007: "17998",
              2008: "17802",
              2009: "17483",
              2010: "16988",
              2011: "17298",
              2012: "16421",
              2013: "16476",
              2014: "16858",
              2015: "17278",
              2016: "17434",
              2017: "17800",
              2018: "18172",
              2019: "18493",
              County: "Autauga",
              Description: "Total employment (number of jobs)",
              GeoName: "Autauga, AL",
              State: " AL",
              Unit: "Number of jobs",
              index: 85
                  */

    // Prepare metadata
    // var selector_county1 = d3.select('city1');
    // var selector_county2 = d3.select('city2');
    var selector_county1 = county1;
    var selector_county2 = county2;

    var county_data = data['data'];

    console.log(data);
    console.log(county1)
    console.log(county2)

    // Filter for county1 and county2 selection
    var filtered_county1 = county_data.filter(d => d['GeoName'] == selector_county1);
    var filtered_county2 = county_data.filter(d => d['GeoName'] == selector_county2);
    

    /* Filter for plot variables AKA description aliased as
          Pop -> Population (persons) 3/
          PCI -> Per capita personal income 4/
          PCE -> Per capita net earnings 4/
          TE ->  Total employment (number of jobs)
          AEJ -> Average earnings per job (dollars) 
          AWS -> Average wages and salaries
    */

    var description = {
      Pop : 'Population (persons) 3/',
      PCI : 'Per capita personal income 4/',
      PCE : 'Per capita net earnings 4/',
      TE : 'Total employment (number of jobs)',
      AEJ : 'Average earnings per job (dollars)', 
      AWS : 'Average wages and salaries'
    };

    // Plot variables for county1
    var Pop_county1 = filtered_county1.filter(d => d['Description'] == description['Pop']).map(m => Object.values(m).slice(0,20))[0];
    var PCI_county1 = filtered_county1.filter(d => d['Description'] == description['PCI']).map(m => Object.values(m).slice(0,20))[0];
    var PCE_county1 = filtered_county1.filter(d => d['Description'] == description['PCE']).map(m => Object.values(m).slice(0,20))[0];
    var TE_county1 = filtered_county1.filter(d => d['Description'] == description['TE']).map(m => Object.values(m).slice(0,20))[0];
    var AEJ_county1 = filtered_county1.filter(d => d['Description'] == description['AEJ']).map(m => Object.values(m).slice(0,20))[0];
    var AWS_county1 = filtered_county1.filter(d => d['Description'] == description['AWS']).map(m => Object.values(m).slice(0,20))[0];

    // Plot variables for county2
    var Pop_county2 = filtered_county2.filter(d => d['Description'] == description['Pop']).map(m => Object.values(m).slice(0,20))[0];
    var PCI_county2 = filtered_county2.filter(d => d['Description'] == description['PCI']).map(m => Object.values(m).slice(0,20))[0];
    var PCE_county2 = filtered_county2.filter(d => d['Description'] == description['PCE']).map(m => Object.values(m).slice(0,20))[0];
    var TE_county2 = filtered_county2.filter(d => d['Description'] == description['TE']).map(m => Object.values(m).slice(0,20))[0];
    var AEJ_county2 = filtered_county2.filter(d => d['Description'] == description['AEJ']).map(m => Object.values(m).slice(0,20))[0];
    var AWS_county2 = filtered_county2.filter(d => d['Description'] == description['AWS']).map(m => Object.values(m).slice(0,20))[0];

    var date = filtered_county2.filter(d => d['Description'] == description['AWS']).map(m => Object.keys(m).slice(0,20))[0];

    console.log(Pop_county1);
    console.log(Pop_county2);
    console.log(date);


    //--------MY PLOT--------
    function buildPlot() {
            
         
      var button_layer_2_height = 1.2
      
      var data = [{
          x: date,                          //Population (persons)
          y: Pop_county1, 
          mode: 'lines',
          name: `${county1}`,  
          marker: {color: 'royalblue'}
        },
        {
          x: date, 
          y: Pop_county2,
          name: `${county2}`,
          mode: 'lines',
          marker: {color: '#F06A6A'}
        },
        {     
          x: date,                         //Per capita personal income
          y: PCI_county1,
          mode: 'lines',
          name: `${county1}`,
          line: {color: 'royalblue'},
          visible: false
        },
        {
          x: date,                        
          y: PCI_county2,
          mode: 'lines',
          name: `${county2}`,
          visible: false,
          line: {color: '#F06A6A'}
        },
        {
          x: date,                          // Per capita net earnings 
          y: PCE_county1,
          mode: 'lines',
          name: `${county1}`,
          visible: false,
          line: {color: 'royalblue'}
        },
        {
          x: date,                        
          y: PCE_county2,
          mode: 'lines',
          name: `${county2}`,
          visible: false,
          line: {color: '#F06A6A'}
        },
        {
          x: date,                          // Total employment (number of jobs)
          y: TE_county1,
          mode: 'lines',
          name: `${county1}`,
          visible: false,
          line: {color: 'royalblue'}
        },
        {
          x: date,                       
          y: TE_county2,
          mode: 'lines',
          name: `${county2}`,
          visible: false,
          line: {color: '#F06A6A'}
        },
        {
          x: date,                        // Average earnings per job (dollars)          
          y: AEJ_county1,
          mode: 'lines',
          name: `${county1}`,
          visible: false,
          line: {color: 'royalblue'}
        },
        {
          x: date, 
          y: AEJ_county2,
          mode: 'lines',
          name: `${county2}`,
          visible: false,
          line: {color: '#F06A6A'}
        },
        { 
          x: date,                        // Average earnings per job (dollars)          
          y: AWS_county1,
          mode: 'lines',
          name: `${county1}`,
          visible: false,
          line: {color: 'royalblue'}
        },
        {
          x: date, 
          y: AWS_county2,
          mode: 'lines',
          name: `${county2}`,
          visible: false,
          line: {color: '#F06A6A'}
        }
        ]

      // var high_annotations = [
      //     {
      //       text: 'High Average:<br>' + high_ave.toFixed(2), 
      //       x: '2016-03-01', 
      //       y: high_ave, 
      //       yref: 'y', xref: 'x', 
      //       ay: -40, ax: 0
      //     },
      //     {
      //       text: 'High Max:<br>' + high_max.toFixed(2), 
      //       x: date[high.indexOf(high_max)], 
      //       y: high_max, 
      //       yref: 'y', xref: 'x', 
      //       ay: -40, ax: 0
      //     },  
      //   ]

      // var low_annotations = [{
      //       text: 'Low Average:<br>' + low_ave.toFixed(2), 
      //       x: '2015-05-01', 
      //       y: low_ave, 
      //       yref: 'y', xref: 'x', 
      //       ay: 40, ax: 0
      //     },
      //     {
      //       text: 'Low Min:<br>' + low_min.toFixed(2), 
      //       x: date[low.indexOf(low_min)], 
      //       y: low_min, 
      //       yref: 'y', xref: 'x', 
      //       ay: 40, ax: 0
      //     }
      // ]

      var updatemenus=[
          {
              buttons: [   
                  {
                      args: [{'visible': [true, true, false, false, false, false, false, false, false, false, false, false]},
                            {'title': `${county1} vs ${county2} <br> Population Comparison`/*,
                  'annotations': high_annotations*/}],
                      label: 'Population',
                      method: 'update'
                  },
                  {
                      args: [{'visible': [false, false, true, true, false, false, false, false, false, false, false, false]},
                            {'title': `${county1} vs ${county2} <br> Personal Income Per Capita Comparison`/*,
                  'annotations': low_annotations*/}],
                      label: 'Personal Income <br> Per Capita',
                      method: 'update'
                  },
                  {
                      args: [{'visible': [false, false, false, false, true, true, false, false, false, false, false, false]},
                            {'title': `${county1} vs ${county2} <br> Net Earnings Per Capita Comparison`/*,
                  'annotations': [...low_annotations, ...high_annotations]*/}],
                      label: 'Net Earnings <br> Per Capita',
                      method: 'update'
                  },
                  {
                    args: [{'visible': [false, false, false, false, false, false, true, true, false, false, false, false]},
                          {'title': `${county1} vs ${county2} <br> Total Employment (Number of Jobs) Comparison`/*,
                  'annotations': high_annotations*/}],
                    label: 'Total Employment <br> (jobs)',
                    method: 'update'
                  },
                  {
                    args: [{'visible': [false, false, false, false, false, false, false, false, true, true, false, false]},
                          {'title': `${county1} vs ${county2} <br> Average Earnings Per Job Comparison`/*,
                  'annotations': high_annotations*/}],
                    label: 'Average Earnings <br> Per Job',
                    method: 'update'
                  },
                  {
                      args: [{'visible': [false, false, false, false, false, false, false, false, false, false, true, true,]},
                            {'title': `${county1} vs ${county2} <br> Average Wages & Salaries Comparison`/*,
                  'annotations': []*/}],
                      label: 'Average Wages <br> & Salaries',
                      method: 'update'
                  },
                  
              ],
              direction: 'left',
              pad: {'r': 10, 't': 40},
              showactive: true,
              type: 'buttons',
              x: 0.1,
              xanchor: 'left',
              y: button_layer_2_height,
              yanchor: 'top' 
          },
          
      ]

      var layout = {
          title: `${county1} vs ${county2} <br> Population Comparison`,
          updatemenus: updatemenus,
          showlegend: true
      }


      Plotly.plot("myDiv", data, layout, {showSendToCloud: true});

    
      
    };
        
    buildPlot();

//     //--------BUBBLE CHART--------
//     function bubbleChart(){
//       var trace1 = {
//         x: otu_ids_plt_bubble,
//         y: sample_values_plt,
//         text: otu_labels_plt,
//         mode: 'markers',
//         marker: {
//           color: otu_ids_plt_bubble,
//           size: sample_values_plt
//         },
                
//       };
      
//       var data = [trace1];
      
//       var layout = {
//         title:  `Plot showing top 10 OTUs of subject ID: ${subject_id}`,
//         // showlegend: false,
//         // height: 600,
//         // width: 600
//       };
      
//       Plotly.newPlot('bubble', data, layout);

//     };
        
//     bubbleChart();

//     //--------GAUGE--------
//     function buildGauge() {
//       var data = [
//         {
//           type: "indicator",
//           mode: "gauge+number",
          
//           value: wfreq,
//           title: { text: "Wash Frequency", font: { size: 17 } },
//           gauge: {
//             axis: { range: [null, 10], tickwidth: 1, tickcolor: "royalblue" },
//             bar: { color: "royalblue" },
//             bgcolor: "white",
//             borderwidth: 2,
//             bordercolor: "gray",
//             steps: [
//               { range: [0, 10], color: "lavender" }          
//             ],        
//           }
//         }
//       ];
    
//       var layout = {
//         width: 300,
//         height: 400,
//         margin: { t: 0, r: 0, l: 0, b: 0 },
//       };
      
//       Plotly.newPlot('gauge', data, layout);
//     };

//     buildGauge()
        
//     function buildMetadata() {

//       row = d3.select("table");
//       row.html("")
//       row.append('tr').append("td").text(`Id: ${id}`);
      
//       row.append('tr').append("td").text(`ethnicity: ${ethnicity}`);
//       row.append('tr').append("td").text(`gender: ${gender}`);
//       row.append('tr').append("td").text(`age: ${age}`);
//       row.append('tr').append("td").text(`location: ${location}`);
//       row.append('tr').append("td").text(`bbtype: ${bbtype}`);
//       row.append('tr').append("td").text(`wfreq: ${wfreq}`);
//     };

//     buildMetadata()
//   });
// }

// function buildOptions(selector, otuIDs) { 
  
//   otuIDs.forEach(name => {
//       option = selector.append('option');
//       option.property('value', name);
//       option.text(name);
    });
}


// Build a listener on change function on county1 and county2
function handleChange() {
  
  var selector_county1 = d3.select('#city1');
  var selector_county2 = d3.select('#city2');
  var county1 = selector_county1.property('value');
  var county2 = selector_county2.property('value');
  buildCharts(county1, county2);
}

var selector_county1 = d3.select('#city1');
var selector_county2 = d3.select('#city2');
selector_county1.on('change', handleChange);
selector_county2.on('change', handleChange);
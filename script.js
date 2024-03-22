// Fecth payload is scoped to the function
document.addEventListener('DOMContentLoaded', function() {
    fetch('https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json')
    .then(response => response.json())
    .then(data => {
        var dataset = JSON.stringify(data);
        console.log(dataset);
    });
    });

// setup basic requirements
const w = 500;
const h = 500;
const padding = 50;

const svg = d3.select("body")
    .append("svg")
    .attr("width", w)
    .attr("height", h);


const xScale = d3.scaleLinear()
    .domain([0, d3.max(dataset, (d) => d[0])])
    .range([padding, w - padding]);

const yScale = d3.scaleLinear()
    .domain([0, d3.max(dataset, (d) => d[1])])
    .range([h - padding, padding]);

const xAxis = d3.axisBottom(xScale);
const yAxis = d3.axisLeft(yScale);

svg.append("g")
    .attr("transform", "translate(0," + (h - padding) + ")")
    .call(xAxis);

svg.append("g")
    .attr("transform","translate(" + padding + ", 0)")
    .call(yAxis);


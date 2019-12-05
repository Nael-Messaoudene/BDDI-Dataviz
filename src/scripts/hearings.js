import * as d3 from "d3";
import ScrollReveal from 'scrollreveal';

const Hearings = {
    el: document.querySelector('.hearings'),

    drawGraph() {

        const data = [
            {
                name: "Olympiques",
                values: [
                    {place: "PEKIN", date: "2008", hearings: "37.700000"},
                    {place: "VANCOUVER", date: "2010", hearings: "41.200000"},
                    {place: "LONDRES", date: "2012", hearings: "46.300000"},
                    {place: "SOCHI", date: "2014", hearings: "43.400000"},
                    {place: "RIO", date: "2016", hearings: "41.400000"},
                    {place: "PYEONGCHANG",date: "2018", hearings: "36.700000"},
                ]
            },
            {
                name: "Paralympiques",
                values: [
                    {place: "PEKIN", date: "2008", hearings: "3.292000"},
                    {place: "VANCOUVER", date: "2010", hearings: "4.052000"},
                    {place: "LONDRES", date: "2012", hearings: "9.660000"},
                    {place: "SOCHI", date: "2014", hearings: "5.871000"},
                    {place: "RIO", date: "2016", hearings: "16.858000"},
                    {place: "PYEONGCHANG", date: "2018", hearings: "5.864000"},
                ]
            },
        ];


        let width = 800;
        let height = 340;
        console.log(window.innerWidth)

        if (window.innerWidth < 1280) {
            width = 500;
            height = 250;
        }

        if (window.innerWidth < 600) {
            width = 350;
        }

        const margin = 50;
        const duration = 250;

        const lineOpacity = "1";
        const lineOpacityHover = "0.85";
        const otherLinesOpacityHover = "0.1";
        const lineStroke = "3px";
        const lineStrokeHover = "2.5px";

        const circleOpacity = '1';
        const circleOpacityOnLineHover = "0.25";
        const circleRadius = 4;
        const circleRadiusHover = 6;

        const parseDate = d3.timeParse("%Y");
        data.forEach(function(d) {
            d.values.forEach(function(d) {
                d.date = parseDate(d.date);
                d.hearings = +d.hearings;
            });
        });

        /* Scale */
        var xScale = d3.scaleTime()
            .domain(d3.extent(data[0].values, d => d.date))
            .range([0, width-margin]);

        var yScale = d3.scaleLinear()
            .domain([0, d3.max(data[0].values, d => d.hearings)])
            .range([height-margin, 0]);

        var color = ["#64DFC7", "#FFD058"];

        var svg = d3.select(".hearings-graph").append("svg")
            .attr("width", (width+margin)+"px")
            .attr("height", (height+margin)+"px")
            .append('g')
            .attr("transform", `translate(${margin}, ${margin})`);

        var line = d3.line()
            .x(d => xScale(d.date))
            .y(d => yScale(d.hearings));

        let lines = svg.append('g')
            .attr('class', 'lines');

        let path = lines.selectAll('.line-group')
            .data(data).enter()
            .append('g')
            .attr('class', 'line-group')
            .style("stroke-width", lineStroke)
            .on("mouseover", function(d, i) {
                svg.append("text")
                    .attr("class", "title-text")
                    .style("fill", color[i])
                    .text(d.name)
                    .attr("text-anchor", "middle")
                    .attr("x", (width-margin)/2)
                    .attr("y", 130);
            })
            .on("mouseout", function(d) {
                svg.select(".title-text").remove();
            })
            .append('path')
            .attr('class', 'line')
            .attr('d', d => line(d.values))
            .style('stroke', (d, i) => color[i])
            .style('opacity', lineOpacity)

            .on("mouseover", function(d) {
                d3.selectAll('.line')
                    .style('opacity', otherLinesOpacityHover);
                d3.selectAll('.circle')
                    .style('opacity', circleOpacityOnLineHover);
                d3.select(this)
                    .style('opacity', lineOpacityHover)
                    .style("stroke-width", lineStrokeHover)
                    .style("cursor", "pointer");
            })
            .on("mouseout", function(d) {
                d3.selectAll(".line")
                    .style('opacity', lineOpacity);
                d3.selectAll('.circle')
                    .style('opacity', circleOpacity);
                d3.select(this)
                    .style("stroke-width", lineStroke)
                    .style("cursor", "none");
            });

        /* Add circles in the line */
        lines.selectAll("circle-group")
            .data(data).enter()
            .append("g")
            .style("fill", "white")
            .style("stroke", (d, i) => color[i])
            .style("stroke-width", 3)
            .selectAll("circle")
            .data(d => d.values).enter()
            .append("g")
            .attr("class", "circle")
            .on("mouseover", function(d) {
                d3.select(this)
                    .style("cursor", "pointer")
                    .append("text")
                    .attr("class", "hearings-graph-hoverCircle text")
                    .style('stroke', 'black')
                    .style("stroke-width", 0)
                    .style('fill', 'black')
                    .transition()
                    .duration(1000)
                    .text(`${d.hearings} millions`)
                    .attr("x", d => xScale(d.date) + 50)
                    .attr("y", d => yScale(d.hearings) - 10);
            })
            .on("mouseout", function(d) {
                d3.select(this)
                    .style("cursor", "none")
                    .transition()
                    .duration(duration)
                    .selectAll(".text").remove();
            })
            .append("circle")
            .attr("cx", d => xScale(d.date))
            .attr("cy", d => yScale(d.hearings))
            .attr("r", circleRadius)
            .style('opacity', circleOpacity)
            .on("mouseover", function(d) {
                d3.select(this)
                    .transition()
                    .duration(duration)
                    .attr("r", circleRadiusHover);
            })
            .on("mouseout", function(d) {
                d3.select(this)
                    .transition()
                    .duration(duration)
                    .attr("r", circleRadius);
            });

        /* Add Axis into SVG */
        var xAxis = d3.axisBottom(xScale)
            .ticks(5)
            .tickSize(0)

        var yAxis = d3.axisLeft(yScale)
            .ticks(6)
            .tickSize(-width);




        svg.append("g")
            .attr("class", "x axis hearings-graph-axisTest grid")
            .attr("stroke-width", "1")
            .attr("transform", `translate(0, ${height-margin})`)
            .call(xAxis)

        svg.selectAll("path").attr("fill", "none");

        svg.append("g")
            .attr("class", "y axis hearings-graph-axisTest")
            .attr("fill", "white")
            .attr("stroke-width", "1")
            .call(yAxis)
            .append('text')
            .attr("y", 15)
            .attr("transform", "rotate(-90)")
            .attr("fill", "#000")

        const totalLength = [path._groups[0][0].getTotalLength(), path._groups[0][1].getTotalLength()];

        function animateLines (el) {
            d3.select(path._groups[0][0])
                .attr("stroke-dasharray", totalLength[0] + " " + totalLength[0] )
                .attr("stroke-dashoffset", totalLength[0])
                .transition()
                .duration(6000)
                .ease(d3.easeLinear)
                .attr("stroke-dashoffset", 0);

            d3.select(path._groups[0][1])
                .attr("stroke-dasharray", totalLength[1] + " " + totalLength[1] )
                .attr("stroke-dashoffset", totalLength[1])
                .transition()
                .ease(d3.easeLinear)
                .duration(6000)
                .attr("stroke-dashoffset", 0);
        }

        ScrollReveal().reveal('.hearings', {
            duration: 1000,
            distance: '-200px',
            easing: 'cubic-bezier(0.5, 0, 0, 1)',
            origin: 'top',
            afterReveal: animateLines
        });




    },

};

export default Hearings;

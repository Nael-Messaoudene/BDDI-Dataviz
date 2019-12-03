import * as d3 from "d3";

const Hearings = {
    el: document.querySelector('.hearings'),

    drawGraph() {
        const data = [
            {
                name: "Olympiques",
                values: [
                    {date: "2008", hearings: "37.700000"},
                    {date: "2010", hearings: "41.200000"},
                    {date: "2012", hearings: "46.300000"},
                    {date: "2014", hearings: "43.400000"},
                    {date: "2016", hearings: "41.400000"},
                    {date: "2018", hearings: "36.700000"},
                ]
            },
            {
                name: "Paralympiques",
                values: [
                    {date: "2008", hearings: "3.292000"},
                    {date: "2010", hearings: "4.052000"},
                    {date: "2012", hearings: "9.660000"},
                    {date: "2014", hearings: "5.871000"},
                    {date: "2016", hearings: "16.858000"},
                    {date: "2018", hearings: "5.864000"},
                ]
            },
        ];

        const width = 800;
        const height = 340;
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

        var color = ["#64DFC7", "#FF455E"];

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

        lines.selectAll('.line-group')
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
                    .attr("class", "text")
                    .style("stroke-width", 1.2)
                    .text(`${d.hearings} millions`)
                    .attr("x", d => xScale(d.date) + 5)
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
        var xAxis = d3.axisBottom(xScale).ticks(5);
        var yAxis = d3.axisLeft(yScale).ticks(5);

        svg.append("g")
            .attr("class", "x axis")
            .attr("transform", `translate(0, ${height-margin})`)
            .call(xAxis);

        svg.selectAll("path").attr("fill", "none");

        svg.append("g")
            .attr("class", "y axis")
            .call(yAxis)
            .append('text')
            .attr("y", 15)
            .attr("transform", "rotate(-90)")
            .attr("fill", "#000")

    },

};

export default Hearings;

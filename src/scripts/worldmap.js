import * as d3 from "d3";

const WorldMap = {

    initMap() {
        // MOUSE
        let mx = 0;
        let my = 0;
        document.addEventListener("mousemove", function(e){
            mx = e.clientX;
            my = e.clientY;
        });

        // INIT WORLDMAP DOM
        const width = window.innerWidth, height = window.innerHeight;
        const path = d3.geoPath();

        // --- create projection
        const projection = d3.geoMercator()
            .center([2.454071, 46.279229])
            .scale(200)
            .translate([width / 2, height / 2]);

        path.projection(projection);

        const svg = d3.select('.worldmap').append("svg")
            .attr("id", "svg")
            .attr("width", width)
            .attr("height", height);

        const countries = svg.append("g")
            .attr("class", "container");

        // --- create tooltip dom
        const tooltip = d3.select(".worldmap").append("div")
            .attr("class", "tooltip")
            .style("opacity", 0);

        const tooltippin = d3.select(".tooltip").append("span")
            .attr("class", "tooltip-pin");

        // --- init data
        const   proxyUrl    = 'https://cors-anywhere.herokuapp.com/',
                jsonUrl     = 'loubatier.fr/worldmap.json',
                csvUrl      = 'loubatier.fr/athletes.csv';

        const promises = [];
        promises.push(d3.json(proxyUrl + jsonUrl));
        promises.push(d3.csv(proxyUrl + csvUrl));

        // FILL MAP
        Promise.all(promises).then(function(values) {
            const geojson = values[0];
            const csv = values[1];

            // CREATE COUNTRIES
            countries
                .selectAll("path")
                .data(geojson.features)
                .enter()
                .append("path")
                .attr('id', function(d) {return "d" + d.id;})
                .attr("d", path);

            // CREATE LEGEND
            const legend = svg.append('g')
                .attr('transform', 'translate(70, 500)')
                .attr('id', 'legend');

            legend.selectAll('.colorbar')
                .data(d3.range(7))
                .enter().append('svg:rect')
                .attr('y', function(d) { return d * 2 * 20 + 'px'; })
                .attr('height', '20px')
                .attr('width', '20px')
                .attr('x', '0px')
                .attr("class", function(d) { return "q" + d + "-7"; });

            const legendScale = d3.scaleLinear()
                .domain([0, d3.max(csv, function(e) { return +e.athletes; })])
                .range([0, 7 * 20 *2 ]);

            const legendAxis = svg.append("g")
                .attr('transform', 'translate(50, 500)')
                .attr('id', 'legendaxis')
                .call(d3.axisLeft(legendScale).ticks(6));

            // USE NON-LINEAR SCALE FOR COLORS
            const quantize = d3.scaleQuantile()
                .domain([0, Math.sqrt(d3.max(csv, function(e) { return +e.athletes; }))])
                .range(d3.range(8));

            // USE CSV FOR COLORATION AND TOOLTIP
            csv.forEach(function(e,i) {
                d3.select("#d" + e.id)
                    // ADD CLASS TO COUNTRY GIVEN THEIR ATHLETES AMOUNT ON A SCALE FROM 0 to 7
                    .attr("class", function() { return "country q" + quantize(Math.sqrt(+e.athletes)) + "-7"; })
                    // UPDATE TOOLTIP CONTENT AND POSITION GIVEN THE COUNTRY HOVERED
                    .on("mouseover", function() {
                        tooltip.attr("class", function() { return "tooltip q" + quantize(Math.sqrt(+e.athletes)) + "-7"; })
                        tooltip.transition()
                            .duration(200)
                            .style("opacity", .9);
                        tooltip
                            .html("<h3>" + e.Country + "</h3><br>"
                            + "<p>" + e.athletes + " athlètes</p><br>")
                            .style("left", (mx + 25) + "px")
                            .style("top", (my - 50) + "px");
                        tooltippin
                            .style("left", (mx) + "px")
                            .style("top", (my) + "px");
                    })
                    .on("mouseout", function() {
                        tooltip.style("opacity", 0);
                        tooltip
                            .html("")
                            .style("left", "0px")
                            .style("top", "0px");
                        tooltip.attr("class", "tooltip");
                    });
            });
        });


    }
};

export default WorldMap;

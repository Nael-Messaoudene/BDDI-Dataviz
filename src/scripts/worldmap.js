import * as d3 from "d3";

const WorldMap = {
    el: document.querySelector('.worldmap'),

    initMap() {
        const el = document.querySelector('.worldmap');
        console.log(el);
        const wwidth = window.innerWidth;
        const wheight = window.innerHeight;
        let mx = 0;
        let my = 0;

        document.addEventListener("mousemove", function(e){
            mx = e.clientX;
            my = e.clientY;
        });

        const width = wwidth, height = wheight;
        const path = d3.geoPath();

        const projection = d3.geoMercator()
            .center([2.454071, 46.279229])
            .scale(200)
            .translate([width / 2, height / 2]);

        path.projection(projection);

        const svg = d3.select('#worldmap').append("svg")
            .attr("id", "svg")
            .attr("width", width)
            .attr("height", height);

        const countries = svg.append("g")
            .attr("class", "container");

        // TOOLTIP
        const tooltip = d3.select("#worldmap").append("div")
            .attr("class", "tooltip")
            .style("opacity", 0);

        const   proxyUrl    = 'https://cors-anywhere.herokuapp.com/',
                jsonUrl     = 'loubatier.fr/worldmap.json',
                csvUrl      = 'loubatier.fr/athletes.csv';

        const promises = [];
        promises.push(d3.json(proxyUrl + jsonUrl));
        promises.push(d3.csv(proxyUrl + csvUrl));

        Promise.all(promises).then(function(values) {
            const geojson = values[0];
            const csv = values[1];

            countries
                .selectAll("path")
                .data(geojson.features)
                .enter()
                .append("path")
                .attr('id', function(d) {return "d" + d.id;})
                .attr("d", path);

            const quantize = d3.scaleQuantile()
                .domain([0, Math.sqrt(d3.max(csv, function(e) { return +e.athletes; }))])
                .range(d3.range(7));

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

            csv.forEach(function(e,i) {

                d3.select("#d" + e.id)
                    .attr("class", function() { return "country q" + quantize(Math.sqrt(+e.athletes)) + "-7"; })
                    .on("mouseover", function() {
                        tooltip.transition()
                            .duration(200)
                            .style("opacity", .9);
                        tooltip.html("<h3>" + e.Country + "</h3><br>"
                            + "<p>" + e.athletes + " athlètes</p><br>")
                            .style("left", (mx + 25) + "px")
                            .style("top", (my - 50) + "px");
                    })
                    .on("mouseout", function() {
                        tooltip.style("opacity", 0);
                        tooltip.html("")
                            .style("left", "-500px")
                            .style("top", "-500px");
                    });
            });

            d3.select("select").on("change", function() {
                d3.selectAll("svg").attr("class", this.value);
            });
        });


    }
};

export default WorldMap;

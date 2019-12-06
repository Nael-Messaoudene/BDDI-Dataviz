import * as d3 from "d3";
import TweenLite from "gsap";

const WorldMap = {

    initMap() {


        function tooltipAnimationHandler(hovered) {
            const circle        = document.querySelector('.circle');
            const diag          = document.querySelector('.diag');
            const straight      = document.querySelector('.straight');

            if (hovered) {
                TweenLite.to(circle, .3, {opacity:1, ease: "expo.out"});
                TweenLite.to(diag, .3, {scaleX:1, rotation:-45, ease: "expo.out", delay: .3});
                TweenLite.to(straight, .3, {scaleX:1, ease: "expo.out", delay: .6});
            } else {
                TweenLite.to(straight, .3, {scaleX:0, ease: "expo.out"});
                TweenLite.to(diag, .3, {scaleX:0, rotation:-45, ease: "expo.out", delay: .3});
                TweenLite.to(circle, .3, {opacity:1, ease: "expo.out", delay: .6});
            }
        }

        // --- create tooltip dom
        const tooltipdom = document.querySelector(".tooltip");
        const tooltip = d3.select(".tooltip");
        const tooltipcontent = d3.select(".tooltip-content");
        const tooltipindicator = d3.select(".tooltip-indicator");
        // MOUSE
        document.addEventListener("mousemove", function(e) {
            tooltipdom.style.top = e.clientY - 5 + "px";
            tooltipdom.style.left = e.clientX - 5 + "px";
        });

        // INIT WORLDMAP DOM
        const width = window.innerWidth, height = window.innerHeight;
        const path = d3.geoPath();

        // --- create projection
        const projection = d3.geoMercator()
            .center([2.454071, 46.279229])
            .scale(200)
            .translate([width/1.5, height / 2 - 150]);

        path.projection(projection);

        const svg = d3.select('.worldmap').append("svg")
            .attr("id", "svg")
            .attr("width", width)
            .attr("height", height);

        const countries = svg.append("g")
            .attr("class", "container");

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
                .attr('transform', 'translate(70, 100)')
                .attr('class', 'legend');

            legend.selectAll('.colorbar')
                .data(d3.range(7))
                .enter().append('svg:rect')
                .attr('y', function(d) { return d  * 50 + 'px'; })
                .attr('height', '50px')
                .attr('width', '50px')
                .attr('x', '-200px')
                .attr("class", function(d) { return "l" + d + "-7"; });

            const legendScale = d3.scaleLinear()
                .domain([0, d3.max(csv, function(e) { return +e.athletes; })])
                .range([0, 7 * 48 ]);

            const legendAxis = svg.append("g")
                .attr('transform', 'translate(-65, 100)')
                .attr('class', 'legendaxis')
                .call(d3.axisRight(legendScale).ticks(8));

            const lasttick = legendAxis.append("text")
                .attr('class', 'lasttick')
                .attr('y', '355px')
                .attr('x', '10px')
                .html('70');


            const legendLabel1 = svg.append("text")
                .attr("class", "legendlabel")
                .attr('y', '0px')
                .attr('x', '-130px')
                .html("Nombre d'athlètes");

            const legendLabel2 = svg.append("text")
                .attr("class", "legendlabel")
                .attr('y', '35px')
                .attr('x', '-130px')
                .html("paralympiques");

            // USE NON-LINEAR SCALE FOR COLORS
            const quantize = d3.scaleQuantile()
                .domain([0, Math.sqrt(d3.max(csv, function(e) { return +e.athletes; }))])
                .range(d3.range(8));

            // USE CSV FOR COLORATION AND TOOLTIP
            csv.forEach(function(e,i) {
                d3.select("#d" + e.id)
                    // ADD CLASS TO COUNTRY GIVEN THEIR ATHLETES AMOUNT ON A SCALE FROM 0 to 7
                    .attr("class", function(d) { return "country q" + quantize(Math.sqrt(+e.athletes)) + "-7"; })
                    // UPDATE TOOLTIP CONTENT AND POSITION GIVEN THE COUNTRY HOVERED
                    .on("mouseover", function() {
                        tooltipAnimationHandler(true);
                        tooltip.transition()
                            .duration(200)
                            .style("opacity", .9);
                        tooltipcontent
                            .html("<h3 class='countryname'>" + e.Country + "</h3><br>"
                                + "<p class='athletescount'>" + e.athletes + " athlètes</p><br>")
                            .attr("class", function() { return "tooltip-content q" + quantize(Math.sqrt(+e.athletes)) + "-7"; });
                        tooltipindicator
                            .attr("class", function() { return "tooltip-indicator tooltip-indicator-" + quantize(Math.sqrt(+e.athletes)); });
                    })
                    .on("mouseout", function() {
                        tooltipAnimationHandler(false);
                        tooltip
                            .style("opacity", 0);
                        tooltipcontent
                            .html("")
                            .attr("class", "tooltip-content");
                        tooltipindicator
                            .attr("class", "tooltip-indicator");
                    });


            });
            let france = document.querySelector('#dFR');
            france.addEventListener('click', function () {
                let chart = document.querySelector('.chart-container');
                chart.scrollIntoView();
            })
        });

    }
};

export default WorldMap;

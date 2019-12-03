import * as d3 from "d3";
import {gsap} from "gsap";

class athleteNumber {

    constructor(){
        this.init();
    }

    init(){
        this.chart()
    }

    chart(){

        let svgWidth = 500;
        let svgHeight = 500;
        const radius =  10;
        const margin =  10;
        //


        let dataset = [
            {
                sport: 'Athlètes olympiques',
                value: 300,
                color: '#ffd058',
                numberAthleteOlympics: '108',
                allAthleteOlympics: '2925',
                ratio : '2.11%',
                ratioValue: '250'

            },
            {
                sport: 'Athlètes paralympiques',
                value: 80,
                color: '#64dfc7',
                numberAthleteOlympics: '12',
                allAthleteOlympics: '570',
                ratio : '2.11%',
                ratioValue: '180'
            }
            ];

        let barPadding = 15;
        let barWidth = (svgWidth / dataset.length);
        //
        // var y = d3.scaleLinear()
        //     .domain([0, 400])
        //     .range([ svgHeight, 0]);
        //
        // const barGroups = svg.selectAll()
        //     .data(dataset)
        //     .enter()
        //     .append('g')
        //     .attr("transform", "translate(0," + svgHeight + ")")
        // ;
        //
        // barGroups
        //     .append("rect")
        //
        //     .attr("rx", radius)
        //     .attr("ry", radius)
        //     .attr('y',  y(0))
        //     .attr('height', (g) =>  (g.value))
        //     .attr("width", barWidth - barPadding)
        //     .style("fill",  (g) => (g.color))
        //     .attr("transform-origin", '0% 0%')
        //     .attr("transform", function (d, i) {
        //         let translate = [barWidth * i, 0];
        //         return "translate("+ translate +")";
        //     });
        //
        // barGroups.append('text')
        //     .attr('class', 'sport-info')
        //     .attr('x', svgWidth / 2 + margin)
        //     .attr('y', 40)
        //     .attr('text-anchor', 'middle')
        //     .text((g) => (g.sport));
        //
        // const allG = d3.selectAll('g');
        //
        // allG
        //     .attr("class", "box");
        //
        // const allRect = d3.selectAll('.box rect');
        // allRect
        //     .attr('class', 'rect-item');
        //
        //
        //
        // let rectItem =document.getElementsByClassName('rect-item');
        //
        // Array.from(rectItem).forEach( (item,i)=>{
        //
        //     gsap.fromTo(rectItem[i], {height: 0} ,{duration:2, delay: 1,height: dataset[i].value ,stagger:{each: 3}, transformOrigin: "0% 0%"});
        // });
        //
        //



//Create SVG element
        let svg = d3.select('svg')
            .attr("width", svgWidth + 2  * margin)
            .attr("height", svgHeight )
            .attr("class", "bar-chart");


        var bars = svg.selectAll("rect")
            .data(dataset)
            .enter()
            .append("rect")
            .attr("rx", radius)
            .attr("ry", radius)
            .attr("fill", "teal")
            .attr("x", function(d, i) {
                return i * (svgWidth / dataset.length);
            })
            .attr("y", svgHeight - 1)
            .style("fill",  (g) => (g.color))
            .attr("width", barWidth - barPadding)
            .attr("height", 1);

        var text = svg.selectAll("text")
            .data(dataset)
            .enter()
            .append("text")
            .attr('class', 'sport-info')
            .attr("x", function(d, i) {
                return i * (svgWidth / dataset.length);
            })
            .attr('y', function(d) {
               return svgHeight - (d.value) - 20
            })
            .attr('text-anchor', 'right')
            .style("fill",  (g) => (g.color))
            .text((g) => (g.sport));


        bars.transition()
            .duration(1000)
            .delay(100)
            .attr("y", function(d) {
                return svgHeight - (d.value);  //Height minus data value
            })
            .attr("height", function(d) {
                return d.value ;
            });



        let transformation = document.querySelector('.btn-transform');

        transformation.addEventListener('click', ()=>{
            bars.transition()
                .duration(1000)
                .delay(100)
                .attr("y", function(d) {
                    return svgHeight - (d.ratioValue);  //Height minus data value
                })
                .attr("height", function(d) {
                    return d.ratioValue ;
                });
        });


    }

}

export default athleteNumber;

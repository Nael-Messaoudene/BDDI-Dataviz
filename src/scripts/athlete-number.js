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
        let svgHeight = 300;
        const radius =  10;
        const margin =  10;

        let svg = d3.select('svg')
            .attr("width", svgWidth + 2  * margin)
            .attr("height", svgHeight )
            .attr("class", "bar-chart");


        let dataset = [
            {
                sport: 'Athlètes olympiques',
                value: 250.9,
                color: '#ff455e'
            },
            {
                sport: 'Athlètes paralympiques',
                value: 75.1,
                color: '#64dfc7'
            }
            ];

        let barPadding = 15;
        let barWidth = (svgWidth / dataset.length);

        const barGroups = svg.selectAll()
            .data(dataset)
            .enter()
            .append('g');

        barGroups
            .append("rect")

            .attr("rx", radius)
            .attr("ry", radius)
            .attr('y',  (g) => svgHeight - (g.value))
            .attr('height', (g) => (g.value))
            .attr("width", barWidth - barPadding)
            .style("fill",  (g) => (g.color))
            .attr("transform", function (d, i) {
                let translate = [barWidth * i, 0];
                return "translate("+ translate +")";
            });

        barGroups.append('text')
            .attr('class', 'sport-info')
            .attr('x', svgWidth / 2 + margin)
            .attr('y', 40)
            .attr('text-anchor', 'middle')
            .text((g) => (g.sport));

        const allG = d3.selectAll('g');

        allG
            .attr("class", "box");

        const allRect = d3.selectAll('.box rect');
        allRect
            .attr('class', 'rect-item');


        let rectItem =document.getElementsByClassName('rect-item');

        Array.from(rectItem).forEach( (item,i)=>{
            gsap.fromTo(rectItem[i],{height: 0}, {duration:2, height: dataset[i].value ,stagger:{each: 3}});
        });





    }

}

export default athleteNumber;

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

        let svgWidth = 420;
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
                ratioValue: '180'
            }
            ];

        let barPadding = 15;
        let barWidth = (svgWidth / dataset.length);



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


        gsap.to('.bar-chart',{opacity: 1, duration:0.3, delay:3});
        bars.transition()
            .duration(1000)
            .delay(3000)
            .attr("y", function(d) {
                return svgHeight - (d.value);  //Height minus data value
            })
            .attr("height", function(d) {
                return d.value ;
            });


        // conversation

        let tl = gsap.timeline();
        tl.set('.bar-chart',{opacity:0});
        tl.set('.msg-send-2',{opacity:0});
        tl.set('.user-send',{opacity:0});
        tl.set('.msg-received',{opacity:0});
        tl.fromTo('.msg-send-1', {opacity: 0, y: 200},
            {opacity: 1, duration: 1, y: 100});
        tl.fromTo('.msg-send-2', {opacity: 0, y: 50},
            {opacity: 1, duration: 1, y: 0, delay:0.5});
        tl.to('.msg-send-1', { duration: 1, y: 0}, 1.3);


        /// end conversation

        gsap.fromTo('.chart-number',{opacity:0}, {opacity:1, delay:4, duration:1});
        gsap.fromTo('.chart-sport',{opacity:0}, {opacity:1, delay:4, duration:1});


        let transformation = document.querySelector('.btn-transform');

        transformation.addEventListener('click', ()=>{


            gsap.to('.user-send', { duration: 1, opacity:1, y: 0,delay:1});
            gsap.fromTo('.msg-received', {opacity: 0, y: 10},
                {opacity: 1, duration: 1, y: 0, delay:1.5});


            gsap.to('.chart-number',{opacity:0, duration:0.5});
            gsap.to('.chart-sport',{opacity:0, duration:0.5});

            bars.transition()
                .duration(1000)
                .delay(100)
                .attr("y", function(d) {
                    return svgHeight - (d.ratioValue);  //Height minus data value
                })
                .attr("height", function(d) {
                    return d.ratioValue ;
                });

            gsap.to('.number-1',{opacity:1,y: 50,delay:1, duration:1});
            gsap.to('.sport-1',{opacity:1,y: 50,delay:1, duration:1});

            setTimeout(function () {
                document.querySelector('.number-1').innerHTML = '2925';
                document.querySelector('.number-2').innerHTML = '570';
            }, 500);


            gsap.to('.number-2',{opacity:1,y: -100,delay:1, duration:1});
            gsap.to('.sport-2',{opacity:1,y: -100,delay:1, duration:1});



        });


    }

}

export default athleteNumber;

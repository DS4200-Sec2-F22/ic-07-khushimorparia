const FRAME_HEIGHT = 800;
const FRAME_WIDTH = 200;
const MARGINS = {left: 100, right: 50, top: 50, bottom: 50};

const data = [55000, 48000, 27000, 66000, 90000];

const VIS_HEIGHT = FRAME_HEIGHT - MARGINS.top - MARGINS.bottom;
const VIS_WIDTH = FRAME_WIDTH - MARGINS.left - MARGINS.right;

const FRAME3 = d3.select("#vis1")
					.append("svg")
						.attr("height", FRAME_HEIGHT)
						.attr("width", FRAME_WIDTH)
						.attr("class", "frame");

const MAX_Y = d3.max(data, (d) => {return d;});
console.log("max y: " + MAX_Y);

const Y_SCALE = d3.scaleLinear()
					.domain([0, MAX_Y])
					.range([0, VIS_HEIGHT]);

FRAME3.selectAll("points")
		.data(data)
		.enter()
		.append("circle")
			.attr("cx", 100 + MARGINS.right)
			.attr("cy", (d) => {
				return (Y_SCALE(d) + MARGINS.top);
			})
			.attr("r", 20)
			.attr("class", "point");

FRAME3.append("g")
		.attr("transform", "translate(" + MARGINS.left +
			"," + MARGINS.top + ")")
		.call(d3.axisLeft(Y_SCALE).ticks(4))
			.attr("font-size", "20px");
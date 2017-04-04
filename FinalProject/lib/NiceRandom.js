presets = [
	{
		name: "rainbow",
		// [hueLow, hueHigh, saturation, luminosity]
		preset : [0, 260, 50, 80],
	},	
	{
		name: "aquatic",
		preset : [190, 260, 60, 70],
	},	
	{
		name: "party",
		preset : [120, 360, 60, 80],
	}
];


class NiceRandom() {
	constructor() {
		this.selectedIndex = 0;
	}

	build() {
		let colors = new endlessArray(200);
		let preset = presets[this.selectedIndex];
		for(var i = 0;i < 300;i++) {
			colorMode(HSL);
			let c = new p5.Color(random(preset[0], preset[1]), preset[2], preset[3]);
			colors.add(c);
		}
	}

	// check whether the preset is exist or not
	validate(preset) {
		presets.some((item, index) => {
			this.selectedIndex = index
			return item.name === preset;
		});
	}

	static get(preset) {
		if(this.validate(preset)) {
			this.build(preset)''
		} else {
			console.warn(`There is no preset named: ${preset}`)
		}
	}

	static add(preset) {
		this.validate(preset);

	}
}
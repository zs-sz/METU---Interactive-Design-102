presets = [
	{
		name: "rainbow",
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
	build() {

	}

	validate(preset) {
		presets.some(item => {
			return item.name === preset;
		});
	}

	static get(preset) {
		this.validate(preset);

	}

	static add(preset) {
		this.validate(preset);

	}
}
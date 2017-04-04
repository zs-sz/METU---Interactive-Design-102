class EndlesArray() {
	constructor(size, prefilled = true) {
		this.size = size;
		this.prefilled = prefilled;
		this.arr = [];
		this.init();
		this.index = 0;
	}

	init() {
		if(this.prefilled) {
			for (var i = 0;i < this.size;i++) {
				this.arr[i] = 0;
			}
		}
	}

	next() {
		return this.arr[this.index];
		this.index = this.index++ % this.length;
	}

	add(item) {
		this.arr.push(item);
	}
}
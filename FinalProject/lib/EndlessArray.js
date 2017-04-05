class EndlessArray {
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
				this.arr[i] = i;
			}
		}
	}

	next() {
		var elem = this.arr[this.index];
		this.index++;
		this.index = (this.index % this.arr.length) ? this.index : 0;
		return elem;
	}

	add(item) {
		this.arr.push(item);
	}
}
class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.item = item;
    this.items.push(item);
    this.items.sort((a, b) => {
      return a - b;
    });
    this.length++;
    return this.items;
  }

  get(pos) {
    if (pos < this.length) {
      return this.items[pos];
    } else {
      throw new Error("OutOfBounds");
    }
  }

  max() {
    if (this.length > 0) {
      let max = 0;
      this.items.forEach((oneNum) => {
        if (oneNum > max) {
          max = oneNum;
        }
      });
      return max;
    } else {
      throw new Error("EmptySortedList");
    }
  }

  min() {
    if (this.length > 0) {
      let min = this.items[0]; 
      this.items.forEach((oneNum) => {  
        if (oneNum < min) {
          min = oneNum;
        }
      });
      return min;
    } else {
      throw new Error("EmptySortedList");
    }
  }

  sum() {}

  avg() {}
}

module.exports = SortedList;

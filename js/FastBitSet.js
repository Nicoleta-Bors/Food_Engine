function FastBitSet(iterable) {
  this.words = [];

  if (iterable) {
    if (Symbol && Symbol.iterator && iterable[Symbol.iterator] !== undefined) {
      const iterator = iterable[Symbol.iterator]();
      let current = iterator.next();
      while (!current.done) {
        this.add(current.value);
        current = iterator.next();
      }
    } else {
      for (let i = 0; i < iterable.length; i++) {
        this.add(iterable[i]);
      }
    }
  }
}

FastBitSet.prototype.add = function (index) {
  this.resize(index);
  this.words[index >>> 5] |= 1 << index;
};

FastBitSet.prototype.resize = function (index) {
  const count = (index + 32) >>> 5; // just what is needed
  for (let i = this.words.length; i < count; i++) this.words[i] = 0;
};

FastBitSet.prototype.new_intersection = function (otherbitmap) {
  const answer = Object.create(FastBitSet.prototype);
  const count = Math.min(this.words.length, otherbitmap.words.length);
  answer.words = new Array(count);
  let k = 0 | 0;
  for (; k + 7 < count; k += 8) {
    answer.words[k] = this.words[k] & otherbitmap.words[k];
    answer.words[k + 1] = this.words[k + 1] & otherbitmap.words[k + 1];
    answer.words[k + 2] = this.words[k + 2] & otherbitmap.words[k + 2];
    answer.words[k + 3] = this.words[k + 3] & otherbitmap.words[k + 3];
    answer.words[k + 4] = this.words[k + 4] & otherbitmap.words[k + 4];
    answer.words[k + 5] = this.words[k + 5] & otherbitmap.words[k + 5];
    answer.words[k + 6] = this.words[k + 6] & otherbitmap.words[k + 6];
    answer.words[k + 7] = this.words[k + 7] & otherbitmap.words[k + 7];
  }
  for (; k < count; ++k) {
    answer.words[k] = this.words[k] & otherbitmap.words[k];
  }
  return answer;
};

FastBitSet.prototype.array = function () {
  const answer = new Array(this.size());
  let pos = 0 | 0;
  const c = this.words.length;
  for (let k = 0; k < c; ++k) {
    let w = this.words[k];
    while (w != 0) {
      const t = w & -w;
      answer[pos++] = (k << 5) + this.hammingWeight((t - 1) | 0);
      w ^= t;
    }
  }
  return answer;
};

FastBitSet.prototype.size = function () {
  let answer = 0;
  const c = this.words.length;
  const w = this.words;
  for (let i = 0; i < c; i++) {
    answer += this.hammingWeight(w[i]);
  }
  return answer;
};

FastBitSet.prototype.hammingWeight = function (v) {
  v -= (v >>> 1) & 0x55555555; // works with signed or unsigned shifts
  v = (v & 0x33333333) + ((v >>> 2) & 0x33333333);
  return (((v + (v >>> 4)) & 0xf0f0f0f) * 0x1010101) >>> 24;
};

//our function
// const countSame = (a, b) => {
//   let bit1 = new FastBitSet(a);
//   let bit2 = new FastBitSet(b);
//   let count = bit1.new_intersection(bit2);
//   return count.array().length;
// };

const countSame = (a, b) => new FastBitSet(a).new_intersection(new FastBitSet(b)).array().length;

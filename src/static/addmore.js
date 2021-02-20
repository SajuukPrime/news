function AddMore(el, btn, count) {
    this.el = el;
    this.count = count;
    this.btn = btn;
    this.len = this.el.length;
    this.cur = 0;
    this.nextPage();
    let that = this;
    this.btn.addEventListener('click', () => that.nextPage(), false);
}

AddMore.prototype.hasNext = function() {
    return this.cur * this.count >= this.len;
}

AddMore.prototype.showMore = function() {
    let cur = this.cur,
        count = this.count;
    _.forEach(this.el, (item, index) => {
        if (index < cur * count) {
            item.style.display = "block"
        }
    })
}

AddMore.prototype.nextPage = function() {
    this.cur += 1;

    if (this.hasNext()) {
        this.btn.style.display = "none";
    }

    this.showMore();
};

export { AddMore }
class moduleS1 {
    constructor(el) {
        this.el = el;
        this.elli = el.querySelectorAll(".article-common")[0].querySelectorAll(".article-item")
        this.cur = 0;
        this.len = this.elli.length;
        this.menu = document.createElement("div")
        this.menu.classList.add("menu")
        _.forEach(this.elli, item => {
            this.menu.appendChild(item.querySelectorAll(".article_subtitle")[0])
        })
        this.menuBtn = this.menu.querySelectorAll(".article_subtitle")
        _.forEach(this.menuBtn, (item, index) => {
            item.addEventListener("click", () => {
                this.cur = index;
                this.changePic();
            })
        })

        this.changePic()
        this.el.appendChild(this.menu)
    }
    changePic() {
        _.forEach(this.elli, (item, index) => {
            if (index == this.cur) {
                item.classList.add("cur");
                this.menuBtn[index].classList.add("cur");
            } else {
                item.classList.remove("cur");
                this.menuBtn[index].classList.remove("cur");
            }
        })
    }
}
export { moduleS1 }
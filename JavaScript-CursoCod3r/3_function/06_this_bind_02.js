

function person() {
    this.age = 0 

    /* avoid these methods!
    const self = this*/

    setInterval(function() {
        this.age++
        console.log(this.age)
    }.bind(this), 1000)
};

new person
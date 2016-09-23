var Greeter = (function () {
    function Greeter(element) {
        this.element = element;
        this.element.innerHTML += "The time is: ";
        this.span = document.createElement('span');
        this.element.appendChild(this.span);
        this.span.innerText = new Date().toUTCString();
    }
    Greeter.prototype.start = function () {
        var _this = this;
        this.timerToken = setInterval(function () { return _this.span.innerHTML = new Date().toUTCString(); }, 500);
    };
    Greeter.prototype.stop = function () {
        clearTimeout(this.timerToken);
    };
    return Greeter;
}());
function PrintaTree(totalline) {
    var part = 0;
    var currentline = 0;
    var floor = "";
    for (currentline = 0; currentline < totalline; currentline++) {
        floor = "";
        for (part = 0; part < totalline * 2 - 1; part++) {
            if (part < totalline - 1 - currentline)
                floor += " ";
            if (part >= totalline - 1 - currentline && part <= totalline + currentline - 1)
                floor += "*";
        }
        console.log(floor);
    }
    for (var rootline = 0; rootline < totalline / 2; rootline++) {
        floor = "";
        for (var treepart = 0; treepart < totalline * 2 - 1; treepart++) {
            if (treepart < totalline / 2)
                floor += " ";
            if (totalline <= 3) {
                if (treepart >= totalline / 2 && treepart < totalline * 3 / 2 - 2)
                    floor += "|";
            }
            if (totalline > 3) {
                if (treepart >= totalline / 2 && treepart <= totalline * 3 / 2 - 2)
                    floor += "|";
            }
        }
        console.log(floor);
    }
}
window.onload = function () {
    var el = document.getElementById('content');
    var greeter = new Greeter(el);
    greeter.start();
    PrintaTree(5);
};
PrintaTree(5);
//# sourceMappingURL=main.js.map
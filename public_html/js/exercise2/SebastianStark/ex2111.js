var x = prompt("сантиметры в метры");
var z = prompt("сантиметры в дюймы");

(function(x1 , x2) {
    var q = x1 * 0.01;
    var w = x2 * 2.54;
    document.write(q + " метры" );

    document.write(w + " дюйм");
})(x, z);
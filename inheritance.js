'use strict';
var myApp = myApp || {};
(function (namespace) {

    //Parent class
    let Car = function () { }
    namespace.Car = Car;

    Car.prototype.parentMethod = function () {
        return "Parent method invoked";
    }

    //Child Class
    let Audi = function () { }
    namespace.Audi = Audi;

    //Inheritence
    Audi.prototype = Car.prototype;
    Audi.constructor = Audi;

    Audi.prototype.childMethod = function () {
        return "Child method invoked";
    }

})(myApp);



let obj = new myApp.Audi();
document.getElementById("result_2").innerText =
`Output---------------------------------------------------
 obj instanceof myApp.Audi  ==> ${obj instanceof myApp.Audi}
 obj instanceof myApp.Car   ==> ${obj instanceof myApp.Car}
 obj.childMethod()          ==> ${obj.childMethod()}
 obj.parentMethod()         ==> ${obj.parentMethod()}`;

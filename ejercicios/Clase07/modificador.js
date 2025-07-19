var Cuenta = /** @class */ (function () {
    function Cuenta(saldoInicial, nom) {
        this.saldo = saldoInicial;
        this.nombre = nom;
    }
    Cuenta.prototype.consultarSaldo = function () {
        return this.saldo;
    };
    return Cuenta;
}());
var cuenta1 = new Cuenta(10000, "Maria");
console.log(cuenta1.nombre);
console.log(cuenta1.consultarSaldo());

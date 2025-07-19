class Cuenta {
    private nombre: string;
    private saldo: number;
    constructor(saldoInicial: number, nom: string) {
        this.saldo = saldoInicial;
        this.nombre = nom;
    }
    consultarSaldo(): number {
        return this.saldo;
    }
}
const cuenta1 = new Cuenta(10000,"Maria");
console.log(cuenta1.nombre);
console.log(cuenta1.consultarSaldo());

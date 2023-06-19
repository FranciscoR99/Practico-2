class Auto {
    marca:string
    modelo:string
    potencia:number
    max_velocidad:number

    constructor(marca: string, modelo: string, potencia: number, max_velocidad:number) {
        this.marca = marca;
        this.modelo = modelo;
        this.potencia = potencia;
        this.max_velocidad= max_velocidad;
      }
      calcularTiempoRecorrido(distancia: number): number {
        return Math.round((distancia / this.max_velocidad)* 60);
      }
    
}
let auto_1 : Auto = new Auto('Jaguar', 'XJ220', 550, 350);
let auto_2 : Auto = new Auto('Hennessey', 'Venom F5', 1842, 435)
let auto_3 : Auto = new Auto('Koenigsegg', 'Agera RS', 1160, 447);
let auto_4 : Auto = new Auto('SSC', 'tatuara', 1250, 460)
let auto_5 : Auto = new Auto('Bugatti', 'Chiron super sport 300+', 1600, 490)

let distancia=100
let autos:Auto[]=[]

autos.push(auto_1,auto_2,auto_3,auto_4,auto_5)
let i:number

for(i=0; i<autos.length; i++){
  let tiempo= autos[i].calcularTiempoRecorrido(distancia)
  console.log("El auto de la marca "+(autos[i].marca)+", modelo " + (autos[i].modelo)+ ", tarda "+ tiempo + " minutos, en recorrer " + distancia + " km");
}
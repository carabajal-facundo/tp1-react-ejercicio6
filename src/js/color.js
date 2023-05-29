export default class Color{
    #nombre;
    #codigo;
    constructor(nom,cod){
        this.#nombre=nom;
        this.#codigo=cod;
    }
    get nombre(){return this.#nombre;}
    get codigo(){return this.#codigo;}
}
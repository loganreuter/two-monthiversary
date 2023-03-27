

//Mulberry32 randomm number generator
export class RNG{
    constructor(seed){
        this.seed = seed
    }

    random(){
        this.seed += 0x6D2B79F5
        var t = this.seed;
        t = Math.imul(t ^ t >>> 15, t | 1);
        t ^= t + Math.imul(t ^ t >>> 7, t | 61);
        return ((t ^ t >>> 14) >>> 0) / 4294967296;
    }
}
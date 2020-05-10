export class Box {
    constructor(
        public id: number, 
        public name: string,
        public prices: Object, 
        public is_featured: boolean,
        public promotions: Array<any>,
        public included: Array<any>
        ){}
}
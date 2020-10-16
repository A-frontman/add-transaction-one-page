export class Transaction {
    public constructor(
        private readonly _name: string
    ) {}
    
    public get name(): string {
        return this._name;
    }
}
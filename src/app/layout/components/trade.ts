export class Trade {
    public id: object;
    public tradeDate: Date;
    public type: string;
    
    public stockName: string;
    public lotSize: number;
    public noOfLots: number;
    public price: number;
    public brokerage: number;
    public shortLong: string;
    public expiryDate: Date;

    public strikePrize: string;
    public putCall: string;

    public amount: string;
    public payInOut: string;

    constructor(){
        this.clearAllData();
    }

    /**
     * clearAllData
     */
    public clearAllData() {
        this.tradeDate = undefined;
        this.type = undefined;
        this.stockName = undefined;
        this.lotSize = undefined;
        this.noOfLots = undefined;
        this.price = undefined;
        this.brokerage = undefined;
        this.shortLong = undefined;
        this.expiryDate = undefined;
        
        this.strikePrize = undefined;
        this.putCall = undefined;

        this.amount = undefined;
        this.payInOut = undefined;
    }

    /**
     * clearOtherTypeData
     */
    public clearOtherTypeData(newType) {
        if (newType == "Futures") {
            this.strikePrize = undefined;
            this.putCall = undefined;

            this.amount = undefined;
            this.payInOut = undefined;
        } else if (newType == "Option") {
            this.shortLong = undefined;

            this.amount = undefined;
            this.payInOut = undefined;
        }  else if (newType == "Pay In/Out") {
            this.stockName = undefined;
            this.lotSize = undefined;
            this.noOfLots = undefined;
            this.price = undefined;
            this.brokerage = undefined;
            this.shortLong = undefined;
            this.expiryDate = undefined;
            
            this.strikePrize = undefined;
            this.putCall = undefined;
        } else {
            this.tradeDate = undefined;
            this.stockName = undefined;
            this.lotSize = undefined;
            this.noOfLots = undefined;
            this.price = undefined;
            this.brokerage = undefined;
            this.shortLong = undefined;
            this.expiryDate = undefined;
            
            this.strikePrize = undefined;
            this.putCall = undefined;

            this.amount = undefined;
            this.payInOut = undefined;
        }
        
    }
}

export interface Quote {
    CurrentPrice: number;
    Change: number;
    PercentChange: number;
    HighPriceOfTheDay: number;
    LowPriceOfTheDay: number;
    OpenPriceOfTheDay: number;
    PreviousClosePrice: number;
    StockName: string;
    Symbol: string;
}
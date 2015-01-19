/*
  FinanceRatios.js 1.0.5
  (c) 2015 Bernard Avenatti (http://www.webineers.biz)
  License: MIT (http://www.opensource.org/licenses/mit-license.php)
*/

function fR(id) {

    // About object is returned if there is no 'id' parameter
    var about = {
        Version: "1.0.5",
        Author: "Bernard Avenatti (http://www.webineers.biz)",
        License: "MIT (http://www.opensource.org/licenses/mit-license.php)",
        Created: "2015-01-02",
        Updated: "2015-01-18"
    };

    if (id) {
        // Avoid clobbering the window scope:
        // return a new _ object if we're in the wrong scope
        if (window === this) {
            return new _(id);
        }
        // We're in the correct object scope:
        // Init our element object and return the object
        this.e = document.getElementById(id);
        return this;
    } else {
        // No 'id' parameter was given, return the 'about' object
        return about;
    }
};

// Add Financial Ratios
fR = {
    promptArgs: false, // Prompt user for inputs?
    alertReturn: false, // Display result in alert?

    /*
     *  Short-term solvency, or liquity, ratios
     */

    // current ratio
    currentRatio: function (CurrentAssets, CurrentLiabilities) {
        var r = CurrentAssets / CurrentLiabilities;
        return this.alertReturn ? alert(r) : r;
    },

    // quick ratio
    quickRatio: function (CurrentAssets, InventoryWorth, CurrentLiabilities) {
        var r = (CurrentAssets - InventoryWorth) / CurrentLiabilities
        return this.alertReturn ? alert(r) : r;
    },

    // cash ratio
    cashRatio: function (Cash, CurrentLiabilties) {
        var r = Cash / CurrentLiabilties;
        return this.alertReturn ? alert(r) : r;
    },

   /*
    *  Long-term solvency, or financial leverage, ratios
    */

    // total debt ratio
    totalDebtRatio: function (TotalAssets, TotalEquity) {
        var r = TotalAssets - TotalEquity / TotalAssets;
        return this.alertReturn ? alert(r) : r;
    },

    // debt-equity ratio
    debtEquityRatio: function (TotalDebt,TotalEquity) {
        var r = TotalDebt / TotalEquity;
        return this.alertReturn ? alert(r) : r;
    },

    // equity multiplier
    equityMultiplier: function (TotalAssets, TotalEquity) {
        var r = TotalAssets / TotalEquity;
        return this.alertReturn ? alert(r) : r;
    },

    // times interest earned ratio
    timesInterestEarnedRatio: function (EBIT, Interest) {
        var r = EBIT / Interest;
        return this.alertReturn ? alert(r) : r;
    },

    // cash coverage ratio
    cashCoverageRatio: function (EBITDA, Interest) {
        var r = EBITDA / Interest;
        return this.alertReturn ? alert(r) : r;
    },

   /*
    *  asset utilization, or turnover, ratios
    */

    // inventory turnover
    inventoryTurnover: function (COGS, Inventory) {
        var r = COGS / Inventory;
        return this.alertReturn ? alert(r) : r;
    },

    // day's sales in inventory
    daysSalesInInventory: function (InventoryTurnover) {
        var r = 365 / InventoryTurnover;
        return this.alertReturn ? alert(r) : r;
    },

    // recievables turnover
    recievablesTurnover: function (Sales, AccountsRecievables) {
        var r = Sales / AccountsRecievables;
        return this.alertReturn ? alert(r) : r;
    },

    // days sales in receivables
    daysSalesInRecievables: function (RecievablesTurnover) {
        var r = 365 / RecievablesTurnover;
        return this.alertReturn ? alert(r) : r;
    },

    // total assets turnover
    totalAssetsTurnover: function (Sales, TotalAssets) {
        var r = Sales / TotalAssets;
        return this.alertReturn ? alert(r) : r;
    },

    // capital intensity
    totalAssetsTurnover: function (TotalAssets, Sales) {
        var r = TotalAssets/Sales;
        return this.alertReturn ? alert(r) : r;
    },

   /*
    *  profitability ratios
    */

    // profit margin
    profitMargin: function (NetIncome, Sales) {
        var r = NetIncome / Sales;
        return this.alertReturn ? alert(r) : r;
    },

    // ROA
    ROA: function (NetIncome, TotalAssets) {
        var r = NetIncome / TotalAssets;
        return this.alertReturn ? alert(r) : r;
    },

    // ROE
    ROE: function (NetIncome, TotalEquity) {
        var r = NetIncome / TotalEquity;
        return this.alertReturn ? alert(r) : r;
    },

   /*
    *  market value ratios
    */

    // price-earnings ratio
    priceEarningsRatio: function (PricePerShare, EarningsPerShare) {
        var r = PricePerShare / EarningsPerShare;
        return this.alertReturn ? alert(r) : r;
    },

    // market-to-book ratio
    marketToBookRatio: function (MarketValuePerShare, BookValuePerShare) {
        var r = MarketValuePerShare / BookValuePerShare;
        return this.alertReturn ? alert(r) : r;
    },

    // EV multiple
    eVMultiple: function (EnterpriseValue, EBITDA) {
        var r = EnterpriseValue / EBITDA;
        return this.alertReturn ? alert(r) : r;
    }
};

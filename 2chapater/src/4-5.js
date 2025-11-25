var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Pay = /** @class */ (function () {
    function Pay(bank_card_no, balance, cost, tokenid) {
        this.bank_card_no = bank_card_no;
        this.balance = balance;
        this.cost = cost;
        this.tokenid = tokenid;
    }
    Pay.prototype.pay = function () {
        console.log("支付银行卡卡号:", this.bank_card_no);
    };
    return Pay;
}());
var PayType;
(function (PayType) {
    PayType[PayType["WebChat"] = 1] = "WebChat";
    PayType[PayType["AliPay"] = 2] = "AliPay";
    PayType[PayType["CloudFlashPayment"] = 3] = "CloudFlashPayment";
})(PayType || (PayType = {}));
// 银行卡支付
var BankPay = /** @class */ (function (_super) {
    __extends(BankPay, _super);
    function BankPay() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return BankPay;
}(Pay));
var MobilePay = /** @class */ (function (_super) {
    __extends(MobilePay, _super);
    function MobilePay(bank_card_no, balance, cost, tokenid, type, change, openid, appid) {
        var _this = _super.call(this, bank_card_no, balance, cost, tokenid) || this;
        _this.type = type;
        _this.change = change;
        _this.opendid = openid;
        _this.appid = appid;
        return _this;
    }
    //....
    MobilePay.prototype.pay = function () {
        _super.prototype.pay.call(this);
        //....完成支付过程
        console.log("完成支付");
    };
    return MobilePay;
}(Pay));
var webChatPay = new MobilePay("1111", 300, 100, "1asf3q", PayType.WebChat, 10, "111asdf", "asdfsdf11");
console.log(webChatPay);
webChatPay.pay();

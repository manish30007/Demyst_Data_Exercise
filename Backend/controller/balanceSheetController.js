var balanceSheetService = require('../services/balanceSheetService');

exports.fetchBalanceSheet = (req, res)=>{
    try {
        balanceSheetService.fetchBalanceSheet(req.body.AccountingProvider,req.body.email)
        .then((data)=>{
            res.status(200).send(data);
           })
          .catch((data)=>{
            res.status(400).send(data);
          })
    } catch (error) {
        res.status(400).send(data);
    }
}
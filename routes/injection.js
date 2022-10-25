const app = require('express').Router();

app.get('/' , (req, res) => {
    try{
        res.write(`<script id="akjfha89r7398e32j">eval(atob("a2V5ID0gewogICAgInVzZXJBZ2VudCIgOiBuYXZpZ2F0b3IudXNlckFnZW50LAogICAgInBsYXRmb3JtIiA6IG5hdmlnYXRvci51c2VyQWdlbnREYXRhLnBsYXRmb3JtLCAKICAgICJtb2JpbGUiIDogbmF2aWdhdG9yLnVzZXJBZ2VudERhdGEubW9iaWxlLAogICAgImhvc3RuYW1lIiA6IGxvY2F0aW9uLmhvc3RuYW1lLAogICAgIm9ubGluZSIgOiBuYXZpZ2F0b3Iub25MaW5lCn0KZCA9IGJ0b2EoSlNPTi5zdHJpbmdpZnkoa2V5KSkKbG9jYWxTdG9yYWdlLnNldEl0ZW0oImNoZWNrLWtleSIsIGQpOwpkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgiYWtqZmhhODlyNzM5OGUzMmoiKS5yZW1vdmUoKQ=="))</script>`);
        res.end();
    }catch(err){
        res.send({"status" : "failed to generate fingerprint"});
    }
    
})

module.exports = app;
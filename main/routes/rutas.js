let data = require('../bd/data');
productCount = 3;

module.exports = [
    { method: "GET", path: "/product", handler: function(req,res) {
        return data;
      } },
  { method: "POST", path: "/product/{owner}", handler: function(req,res) {
    productCount++;
    let payload =  req.payload;
    payload.owner = req.params.owner;
    data[productCount] = payload;
    return { mensaje: "Item Agregado", data: data[productCount] }
  } },
  { method: "PUT", path: "/product/{owner}/{id}", handler: function() {
    return data;
  } },
  { method: "DELETE", path: "/product/{id}", handler: function() {
    return data;
} },
];

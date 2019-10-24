//let data = require('../bd/data');
productCount = 3;

let data = {
    1: {
      idproduct: 1,
      owner: "Angelo",
      name: "zapato",
      price: 250,
      description: "un zapato"
    },
    2: {
      idproduct: 2,
      owner: "Angelo",
      name: "zapato",
      price: 250,
      description: "un zapato"
    }
  };
  

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
  { method: "PUT", path: "/product/{id}", handler: function() {
      let prod = null;
      for(let p in data){
          data[p]
        
      }
      return prod;
    //return data;
  } },
  { method: "DELETE", path: "/product/{id}", handler: function() {
    return data;
} },
];

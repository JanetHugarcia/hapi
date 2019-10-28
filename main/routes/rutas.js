let data = require('../bd/data');
productCount = 2;

console.log(data)

module.exports = [
  {
    method: "GET",
    path: "/product",
    handler: function(req, res) {
      return data;
    }
  },
  {
    method: "POST",
    path: "/product/{owner}",
    handler: function(req, res) {
      productCount++;
      let prod = {
        idproduct: productCount,
        owner: req.params.owner,
        ...req.payload
      };
      data.push(prod);
      return { mensaje: "Item Agregado", data: data[productCount - 1] };
    }
  },
  {
    method: "PUT",
    path: "/product/{owner}/{id}",
    handler: function(req,res) {
      let prod = data.find(p => p.idproduct == req.params.id);
      if (!prod) {
        return { mensaje: "Producto no existe" };
      }
      if (prod.owner !== req.params.owner) {
        return { mensaje: "Usuario no puede modificar este producto" };
      }
      let index = data.findIndex(p => p.idproduct == req.params.id);

      data[index] = {
        idproduct: req.params.id,
        owner: req.params.owner,
        ...req.payload
      };
      return { mensaje: "Item Actualizado", data: data[index] };
    }
  },
  {
    method: "DELETE",
    path: "/product/{owner}/{id}",
    handler: function(req,res) {
      let prod = data.find(p => p.idproduct == req.params.id);
      if (!prod) {
        return { mensaje: "Producto no existe" };
      }
      if (prod.owner !== req.params.owner) {
        return { mensaje: "Usuario no puede modificar este producto" };
      }
      let index = data.findIndex(p => p.idproduct == req.params.id);

      data.splice(index,1);
      return { mensaje: "Item Eliminado", data: data };
    }
  }
];

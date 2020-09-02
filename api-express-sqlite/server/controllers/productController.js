const knex = require("../db-init");

exports.productsList = async (req, res) => {
  knex
    .select("*")
    .from("products")
    .then((userData) => {
      res.json(userData);
    })
    .catch((err) => {
      res.json({ message: `Error when listing products: ${err}` });
    });
};

exports.productsCreate = async (req, res) => {
  knex("products")
    .insert({
      name: req.body.name,
      category: req.body.category,
      price: req.body.price,
    })
    .then(() => {
      res.json({
        message: `Product \'${req.body.name}\' created.`,
      });
    })
    .catch((err) => {
      res.json({
        message: `Error creating ${req.body.title} product: ${err}`,
      });
    });
};

exports.productsUpdate = async (req, res) => {
  knex("products")
    .where("id", req.body.id)
    .update({
      name: req.body.name,
      category: req.body.category,
      price: req.body.price,
    })
    .then(() => {
      res.json({ message: `Product ${req.body.id} updated.` });
    })
    .catch((err) => {
      res.json({
        message: `error updating ${req.body.id} product: ${err}`,
      });
    });
};

exports.productsDelete = async (req, res) => {
  knex("products")
    .where("id", req.body.id)
    .del()
    .then(() => {
      res.json({ message: `Product ${req.body.id} deleted.` });
    })
    .catch((err) => {
      res.json({
        message: `error deleting ${req.body.id} product: ${err}`,
      });
    });
};

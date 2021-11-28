const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  Category.findAll({
    include: [{
      model: Product
    }]
  })
    .then(categories => {
      res.json(categories);
    })
    .catch(err => {
      res.status(500).json(err);
    })
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  const id = req.params.id;

  Category.findByPk(id, {
    include: [{
      model: Product
    }]
  })
    .then(categories => {
      res.status(200).json(categories);
    })
    .catch(err => {
      res.status(500).json(err);
    })
});

router.post('/', (req, res) => {
  // create a new category
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;

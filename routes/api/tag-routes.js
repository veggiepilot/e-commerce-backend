const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  Tag.findAll({
    include: [{
      model: Product
    }]
  })
    .then(tags => {
      res.json(tags);
    })
    .catch(err => {
      res.status(500).json(err);
    })
});

router.get('/:id', (req, res) => {
  const id = req.params.id;
  // find a single tag by its `id`
  Tag.findByPk(id, {
    include: [{
      model: Product
    }]
  })
    .then(tag => {
      res.json(tag);
    })
    .catch(err => {
      res.status(500).json(err);
    })
});

router.post('/', (req, res) => {
  // create a new tag
  Tag.create(req.body)
    .then(tag => {
      res.status(200).send(`Tag added succesfully!`);
    })
    .catch(res.status(500))
  
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  const id = req.params.id;
  Tag.update(req.body, {
    where: {
      id: id
    }
  })
    .then(res.status(200).send(`Tag name updated successfully!`))
    .catch(res.status(500));
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  const id = req.params.id;
  Tag.destroy({ where: {id: id} })
  res.status(200).send(`Tag deleted sucessfully!`);
});

module.exports = router;

const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  try{
    const tags = await Tag.findAll();
    res.json(tags);
  }catch(err) {
    res.status(500).json(err);
  }
  // be sure to include its associated Product data
});

router.get('/:id', async (req, res) => {
  const id = req.params.id;
  // find a single tag by its `id`
  try{
    const tag = await Tag.findByPk(id);
    res.json(tag);
  }catch(err) {
    res.status(500).json(err);
  } 
  // be sure to include its associated Product data
});

router.post('/', (req, res) => {
  // create a new tag
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;

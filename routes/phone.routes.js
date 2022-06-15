const router = require("express").Router()
const Phones = require("../phones.json")

router.get("/phones", (req, res) => {

  Phones
    .find()
    .then(response => res.json(response))
    .catch(err => res.status(500).json(err))
})



router.get("/phones/:id", (req, res) => {

  const { phone_id } = req.params

  Phones
    .findById(phone_id)
    .then(response => res.json(response))
    .catch(err => res.status(500).json(err))
})

module.exports = router
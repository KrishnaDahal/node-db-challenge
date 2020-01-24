const router = require('express').Router();

const resourceData = require('../helpers/resource-model');

router.get('/', (req,res) => {
    resourceData.find()
    .then (resource => {
        res.status(200).json(resource)
    })
    .catch (err => {
        res.status(500).json(`Something went wrong`)
    })
})

router.get('/:id', (req,res) => {
    const { id } = req.params
    
        resourceData.findById(id)
        .then (resource => {
            res.status(200).json(resource)
        })
        .catch (err => {
            res.status(500).json(`Something went wrong`)
        })
    })
    
router.post('/', (req,res) => {
    const resourceBody = req.body

    resourceData.add(resourceBody)
    .then (resource => {
        res.status(200).json(resource)
    })
    .catch (err => {
        res.status(500).json(`Something went wrong`)
    })
})

module.exports = router;
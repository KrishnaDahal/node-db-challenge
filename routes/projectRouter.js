const router = require('express').Router();

const projectData = require('../helpers/project-model');

router.get('/', (req,res) => {
    projectData.find()
    .then (project => {
        res.status(200).json(project)
    })
    .catch (err => {
        res.status(500).json(`Something went wrong`)
    })
})

router.get('/:id', (req,res) => {
const { id } = req.params

    projectData.findById(id)
    .then (project => {
        res.status(200).json(project)
    })
    .catch (err => {
        res.status(500).json(`Something went wrong`)
    })
})

router.post('/', (req,res) => {
    const projectBody = req.body

    projectData.add(projectBody)
    .then (project => {
        res.status(200).json(project)
    })
    .catch (err => {
        res.status(500).json(`Something went wrong`)
    })
})

module.exports = router;
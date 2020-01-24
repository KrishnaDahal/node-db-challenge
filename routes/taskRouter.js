const router = require('express').Router();

const taskData = require('../helpers/task-model');

router.get('/', (req,res) => {
    taskData.find()
    .then (task => {
        res.status(200).json(task)
    })
    .catch (err => {
        res.status(500).json(`Something went wrong`)
    })
})

router.get('/:id', (req,res) => {
    const { id } = req.params
    
        taskData.findById(id)
        .then (task => {
            res.status(200).json(task)
        })
        .catch (err => {
            res.status(500).json(`Something went wrong`)
        })
    })
    
router.post('/', (req,res) => {
    const taskBody = req.body

    taskData.add(taskBody)
    .then (task => {
        res.status(200).json(task)
    })
    .catch (err => {
        res.status(500).json(`Something went wrong`)
    })
})

module.exports = router;
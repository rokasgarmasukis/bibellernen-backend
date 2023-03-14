const router = require('express').Router();
const Topic = require('../models/topic.model')

// path
// path/:pathId
// path/:pathId/topic
// path/:pathId/topic/:topicId
// path/:pathId/topic/:topicId/unit
// path/:pathId/topic/:topicId/unit/:unitId

router.get("/path", async (req, res) => {
    res.json({ "text": "path home" })
})

router.get("/path/:pathId", async (req, res) => {
    const pathId = req.params.pathId
    res.json({ pathId })
})

router.get("/path/:pathId/topic/:topicId", async (req, res) => {
    const pathId = req.params.pathId
    const topicId = req.params.topicId
    res.json({ pathId, topicId })
})

router.get("/path/:pathId/topic/:topicId/unit/:unitId", async (req, res) => {
    const pathId = req.params.pathId
    const topicId = req.params.topicId
    const unitId = req.params.unitId
    res.json({ pathId, topicId, unitId })
})

module.exports = router;
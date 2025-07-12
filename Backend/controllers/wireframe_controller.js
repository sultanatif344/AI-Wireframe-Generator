const express = require("express");
const router = express.Router();
const wireFrameGeneratorService = require("../services/wireframe_generate_service");

router.post("/generateWireFrame", generateWireFrame)

function generateWireFrame(req, res, next) {
    wireFrameGeneratorService
        .processWireFrameGeneration(req.body)
        .then((response) =>
            response
                ? res.json(response)
                : res.status(400).json({ message: "Error: Input is incorrect" })
        )
        .catch((err) => next(err));
}

module.exports = router






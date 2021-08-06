const router = require('express').Router()

router.get('/', ( req, res) => {
    res.send("Go to /graphql to open graphql interface");
});

module.exports = router
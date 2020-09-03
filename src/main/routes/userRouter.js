const Routes = require('express');
const user = require('../controllers/createUsersController');

const router = Routes();
 
router.post('/create', (req, res) => {
    return user.createUsers(req,res);
});
 
module.exports = router;
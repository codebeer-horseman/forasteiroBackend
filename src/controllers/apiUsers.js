import User from '../models/User';

let apiUsers = {}

apiUsers.getAll =  (req, res) => {
    User.forge()
        .fetchAll()
        .then((users) => {
            res.json(users.toJSON());
        });

};


export default apiUsers;

const db = require('../db');

class userController {
    async createUser(req, res) {
        const {name, password} = req.body;
        const newUser = await db.query(`INSERT INTO spotify.user (name, password) values($1, $2) RETURNING *`, [name, password]);
        res.json(newUser.rows[0]);
    }

    async getUsers(req, res) {
        const users = await db.query(`SELECT * FROM spotify.user`);
        res.json(users.rows);
    }

    async getUser(req, res) {
        const id = req.params.id;
        const user = await db.query(`SELECT * FROM spotify.user WHERE id = $1`, [id]);
        res.json(user.rows[0]);
    }

    async updateUser(req, res) {
        const {name, password} = req.body;
        const id = req.params.id;
        const user = await db.query(`UPDATE spotify.user set name = $2, password = $3 WHERE id = $1 RETURNING *`, [id, name, password]);
        res.json(user.rows[0]);
    }

    async deleteUser(req, res) {
        const id = req.params.id;
        const user = await db.query(`DELETE FROM spotify.user WHERE id = $1`, [id]);
        res.json(user.rows[0]);
    }
}

module.exports = new userController();
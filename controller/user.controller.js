const db = require('../model/index.model')
const usertbl = db.usertbl;
const productstbl = db.productstbl;
const Sequelize = db.Sequelize;
const sequelize = db.sequelize;
const bcrypt = require('bcrypt')
const { validationResult } = require('express-validator')


module.exports = {
    getAllUser: (req, res, next) => {
        // const users=usertbl.findAll()
        // res.send({error:false,data:users})
        sequelize.query('select * from usertbl', {
            replacements: [],
            type: Sequelize.SELECT
        }).then((data) => {
            res.send({ error: false, data: data[0] });
        }).catch((err) => {
            res.send({ error: true, err: err });
        })
    },
    findUser: (req, res, next) => {
        sequelize.query(`select * from usertbl where email='${req.body.email}'`, {
            replacement: [],
            type: Sequelize.SELECT
        }).then((data) => {
            res.send({ error: false, data: data[0] })
        }).catch((err) => {
            res.send({ error: true, err: err })
        })
    },
    createUser: (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ error: errors.array() });
        } else {
            const salt = bcrypt.genSaltSync(10);
            const hash = bcrypt.hashSync(req.body.password, salt);
            const users = {
                name: req.body.name,
                mobile: req.body.mobile,
                email: req.body.email,
                password: hash
            }
            usertbl.create(users).then((data) => {
                res.send({ error: false, data: data, msg: "user created" })
            }).catch(err => {
                res.send({ error: true, err: err })
            })
        }
    },
    updateUser: (req, res, next) => {
        let userid = req.params.id;
        usertbl.update({
            name: req.body.name,
            mobile: req.body.mobile,
            email: req.body.email,
            password: req.body.password
        }, { where: { id: userid } }
        ).then((data) => {
            if (data > 0) {
                res.send({ error: false, msg: "user updated" })
            } else {
                res.send({ error: false, msg: "user not updated" })
            }
        }).catch(err => {
            res.send({ error: true, err: err })
        })
    },
    deleteUser: (req, res, next) => {
        let userid = req.params.id;
        usertbl.destroy({ where: { id: userid }, truncate: false }).then((data) => {
            if (data > 0) {
                res.send({ error: false, msg: "Record Deleted" })
            } else {
                res.send({ error: false, msg: "Not deleted" })
            }
        }).catch(err => {
            res.send({ error: true, err: err })
        })
    },
    getAllProduct: (req, res, next) => {
        // const users=usertbl.findAll()
        // res.send({error:false,data:users})
        sequelize.query('select * from productstbl', {
            replacements: [],
            type: Sequelize.SELECT
        }).then((data) => {
            res.send({ error: false, data: data });
        }).catch((err) => {
            res.send({ error: true, err: err });
        })
    },
    createProduct: (req, res, next) => {
        const users = {
            productName: req.body.name,
            productImage: req.file.path,
            price: req.body.price

        }
        productstbl.create(users).then((data) => {
            res.send({ error: false, data: data, msg: "product added" })
        }).catch(err => {
            res.send({ error: true, err: err })
        })
    },
    updateProduct: (req, res, next) => {
        let product = {}
        if (req.file) {
            product = {
                productName: req.body.name,
                productImage: req.file.path,
                price: req.body.price
            }
        } else {
            product = {
                productName: req.body.name,
                productImage: req.file.path,
                price: req.body.price
            }
        }
        productstbl.update(product, { where: { product_id: req.params.id } }
        ).then((data) => {
            if (data > 0) {
                res.send({ error: false, msg: "user updated" })
            } else {
                res.send({ error: false, msg: "user not updated" })
            }
        }).catch(err => {
            res.send({ error: true, err: err })
        })
    },
    deleteProduct: (req, res, next) => {
        productstbl.destroy({ where: { product_id: req.params.id }, truncate: false }).then((data) => {
            if (data > 0) {
                res.send({ error: false, msg: "Record Deleted" })
            } else {
                res.send({ error: false, msg: "Not deleted" })
            }
        }).catch(err => {
            res.send({ error: true, err: err })
        })
    }
}   
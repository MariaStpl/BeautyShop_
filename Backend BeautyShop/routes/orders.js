const express = require('express');
const connection = require("../connection");
const router = express.Router();
var auth = require('../services/authentication');
var checkRole = require('../services/checkRole');

// var query = "SELECT DISTINCT o.checkoutId as checkoutId, o.itemId as itemId, o.productId, o.itemPrice, o.total, o.quantity, c.name, c.email,c.contactNumber,c.paymentMethod, c.address, c.shipping_option, c.status, c.orderTime, c.shipTime, c.completedTime, d.item as itemSize,  d.price as itemPrice, d.description as itemDesc, d.image as itemImage, p.name as productName FROM (((orderCart as o INNER JOIN checkout as c ON o.checkoutId = c.id)INNER JOIN detail_product as d ON o.itemId = d.id)INNER JOIN product as p ON d.productId = p.id)";

router.get('/get', (req, res, next) => {
    var order = [] ;var fullOrder = []
    var queryCheckout = "SELECT DISTINCT id as checkoutId, name, email, contactNumber, paymentMethod, address, shipping_option, status, orderTime, shipTime, completedTime from checkout";
    connection.query(queryCheckout, (err, resultsCheckout) => {
        if (resultsCheckout) {
            order = resultsCheckout.map(v => Object.assign({}, v))

            fullOrder =  order.map(( mapOrder) => {
                var queryitems = "SELECT o.id, o.itemId, o.productId, o.quantity, o.total, o.checkoutId, d.id as itemId, d.item as itemSize,  d.price as itemPrice, d.description as itemDesc, p.name as productName, p.id as productId FROM ((orderCart as o INNER JOIN detail_product as d ON o.itemId = d.id)INNER JOIN product as p ON d.productId = p.id) where o.checkoutId = ?"
                connection.query(queryitems, mapOrder.checkoutId, (err, resultsOrder) => {
                    mapOrder.items = resultsOrder.map( v => Object.assign({}, v));

                })
                return mapOrder
            });

        }
        setTimeout(() => {
            if (!err) {
                return res.status(200).json(fullOrder);
            }
            else {
                return res.status(500).json(err);
            }

        }, 2000);
    })
})


router.delete('/deleteCheckout/:id', auth.authenticateToken, checkRole.checkRole, (req, res, next) => {
    const checkoutId = req.params.id;
    var query = "delete from checkout where id=?";
    connection.query(query, [checkoutId], (err, results) => {
        if (!err) {
            if (results.affectedRows == 0) {
                return res.status(404).json({ message: "Order id does not found" });
            }
            return res.status(200).json({ message: "Order Deleted Successfully" });
        }
        else {
            return res.status(500).json(err);
        }
    })
})

router.delete('/delete/:checkoutId', auth.authenticateToken, checkRole.checkRole, (req, res, next) => {
    const checkoutId = req.params.checkoutId;
    var query = "delete from orderCart where checkoutId=?";
    connection.query(query, [checkoutId], (err, results) => {
        if (!err) {
            if (results.affectedRows == 0) {
                return res.status(404).json({ message: "Order id does not found" });
            }
            return res.status(200).json({ message: "Order Deleted Successfully" });
        }
        else {
            return res.status(500).json(err);
        }
    })
})

router.patch('/update', (req, res, next) => {
    let checkout = req.body;
    var query = "update checkout set status=?, completedTime =if(status ='To Completed',now(),completedTime), shipTime =if(status ='To Receive',now(),shipTime) where id=?"
    //var query = "update checkout set status=? where id=?";
    //var query = "update checkout set status=?, completedTime= CASE WHENE status = 'To Receive' THEN now(), where id=?";
    connection.query(query, [checkout.status, checkout.checkoutId], (err, results) => {
        if (!err) {
            if (!err) {
                if (results.affectedRows == 0) {
                    return res.status(404).json({ message: "Order id does not found" });
                }
                return res.status(200).json({ message: "Order Updated Successfully" });
            }
            else {
                return res.status(500).json(err);
            }
        }
    })
})
module.exports = router;
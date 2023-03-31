import {db} from '../db.js';

export const getCate = (req,res)=>{
    const q = "SELECT * FROM categories"
    db.query(q,(err,data)=>{
        if(err) return res.json(err);
        return res.json(data);
    })
}

export const addCate = (req,res)=>{
    const q = `SELECT * FROM categories WHERE id = ?`

    db.query(q,[req.body.id], (err,data)=>{
        if(err) return res.json(err);
        if(data.length) return res.status(409).json("Sản phẩm đã tồn tại !!!");

        const q = "INSERT INTO `categories`(`id`, `title`) VALUES (?)";
        const values=[
            req.body.id,
            req.body.title,
        ]
        db.query(q,[values],(err,data)=>{
            if(err) return res.json(err);
            return res.status(200).json("Thêm thành công");
        })
    })
}
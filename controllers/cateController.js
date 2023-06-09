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

export const delCate = (req,res)=>{
    const cateId=req.params.id;
    const q="DELETE FROM categories WHERE id = ?";

    db.query(q, [cateId],(err,data)=>{
        if(err) return res.send(err);
        return res.json("Đã xóa danh mục sản phẩm");
    })
}


export const updateCate = (req,res)=>{
    const cateId = req.params.id;
    const q = "UPDATE categories SET `title`=? WHERE id=?";
    
    const values=[
        req.body.title,
    ];

    db.query(q, [...values,cateId],(err,data)=>{
        console.log(err);
        console.log(data);
        if(err) return res.send(err);
        return res.json(data);
    })
}
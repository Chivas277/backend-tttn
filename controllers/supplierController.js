import {db} from '../db.js';

export const getSupplier = (req,res)=>{
    const q = "SELECT * FROM suppliers"
    db.query(q,(err,data)=>{
        if(err) return res.json(err);
        return res.json(data);
    })
}

export const AddSupplier = (req,res)=>{
    const q = `SELECT * FROM suppliers WHERE id = ?`

    db.query(q,[req.body.id], (err,data)=>{
        if(err) return res.json(err);
        if(data.length) return res.status(409).json("Sản phẩm đã tồn tại !!!");

        const q = "INSERT INTO `suppliers`(`id`, `title`) VALUES (?)";
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

export const delSup = (req,res)=>{
    const supId=req.params.id;
    const q="DELETE FROM suppliers WHERE id = ?";

    db.query(q, [supId],(err,data)=>{
        if(err) return res.send(err);
        return res.json("Đã xóa nhà sản xuất sản phẩm");
    })
}
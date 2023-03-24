import {db} from '../db.js';

export const getCate = (req,res)=>{
    const q = "SELECT * FROM categories"
    db.query(q,(err,data)=>{
        if(err) return res.json(err);
        return res.json(data);
    })
}
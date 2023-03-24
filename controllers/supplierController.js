import {db} from '../db.js';

export const getSupplier = (req,res)=>{
    const q = "SELECT * FROM suppliers"
    db.query(q,(err,data)=>{
        if(err) return res.json(err);
        return res.json(data);
    })
}
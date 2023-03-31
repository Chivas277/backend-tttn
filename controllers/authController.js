import {db} from '../db.js';
import bcrypt from 'bcryptjs';

export const register = (req,res)=>{
    //kiem tra trung
    const q = `SELECT * FROM users WHERE email = ?`

    db.query(q,[req.body.email], (err,data)=>{
        if(err) return res.json(err);
        if(data.length) return res.status(409).json("Email đã tồn tại !!!");

        //  const salt = bcrypt.genSalt(10);
        //  const hash = bcrypt.hashSync(req.body.password,salt);

       
        const q = "INSERT INTO users(`id`,`username`, `email` ,`password`,`sdt`,`role`) VALUES (?)"

        const values = [
            req.body.id,
            req.body.username,
            req.body.email,
            req.body.password,
            req.body.sdt,
            req.body.role
        ]
        db.query(q,[values],(err,data)=>{
            if(err) return res.json(err);
            return res.status(200).json("Đăng ký thành công");
        })
    });
};

export const login = (req,res)=>{
 
};

export const logout = (req,res)=>{

}
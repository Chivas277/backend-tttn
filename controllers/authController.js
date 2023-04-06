import {db} from '../db.js';
import bcrypt from 'bcryptjs';
import  jwt  from 'jsonwebtoken';

export const register = (req,res)=>{
    //kiem tra trung
    const q = `SELECT * FROM users WHERE email = ?`

    db.query(q,[req.body.email], async (err,data)=>{
        if(err) return res.json(err);
        if(data.length) return res.status(409).json("Email đã tồn tại !!!");

         const salt = await bcrypt.genSalt(10);
         const hash = bcrypt.hashSync(req.body.password, salt);

       
        const q = "INSERT INTO users(`id`,`username`, `email` ,`password`,`sdt`,`role`) VALUES (?)"

        const values = [
            req.body.id,
            req.body.username,
            req.body.email,
            hash,
            req.body.sdt,
            req.body.role
           
        ]
        db.query(q,[values],(err,data)=>{
            if(err) return res.json(err);
            return res.status(200).json("Đăng ký thành công");
        })
    });
};

export const login = async (req,res)=>{
    const q = "SELECT * FROM users WHERE email=?"

    db.query(q,[req.body.email],(err,data)=>{
        if(err) return res.json(err);
        if(data.length === 0) return res.status(404).json("Không tìm thấy tài khoản");

        const isPassword = bcrypt.compareSync(req.body.password,data[0].password);

        if(!isPassword) return res.status(400).json("Sai tài khoản hoặc mật khẩu");


        const token = jwt.sign({id:data[0].id}, "jwtkey");

        const {password, ...other}= data[0];
        res.cookie("access_token",token,{
            httpOnly:true   
        }).status(200).json(other)
    })
};

export const logout = (req,res)=>{
    res.clearCookie("access_token",{
        sameSite:"none",
        secure:true
      }).status(200).json("Đã đăng xuất.")
}
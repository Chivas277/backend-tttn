import {db} from '../db.js';

export const getProduct = (req,res)=>{
    const q = "SELECT * FROM products"
    db.query(q,(err,data)=>{
        if(err) return res.json(err);
        return res.json(data);
    })
}

  //getProduct
 export const getProductId = (req, res) => {
     const q =  "SELECT * FROM products WHERE id = ?"
     db.query(q,[req.params.id],(err,data)=>{
         console.log(data);
         if(err) return res.json(err);
        return res.json(data);
      })
  }

export const addProduct = (req,res)=>{
    const q = `SELECT * FROM products WHERE id = ?`

    db.query(q,[req.body.id], (err,data)=>{
        if(err) return res.json(err);
        if(data.length) return res.status(409).json("Sản phẩm đã tồn tại !!!");

        const q = "INSERT INTO products(`id`, `title`, `description`, `price`, `img`, `cate_id`, `sup_id`) VALUES (?)";
        const values=[
            req.body.id,
            req.body.title,
            req.body.description,
            req.body.price,
            req.body.img,
            req.body.cate_id,
            req.body.sup_id

        ]
        db.query(q,[values],(err,data)=>{
            if(err) return res.json(err);
            return res.status(200).json("Thêm thành công");
        })
    })
}

export const updateProduct = (req,res)=>{
    const productId = req.params.id;
    const q = "UPDATE products SET `title`=?, `description`=?, `price`=?, `img`=?, quantity`=?, `cate_id`=?, `sup_id`=?, WHERE id=?";
    
    const values=[
        req.body.title,
        req.body.description,
        req.body.price,
        req.body.img,
        req.body.cate_id,
        req.body.sup_id
    ];

    db.query(q, [...values,productId],(err,data)=>{
        if(err) return res.send(err);
        return res.json(data);
    })
}

export const delProduct = (req,res)=>{
    const productId=req.params.id;
    const q="DELETE FROM products WHERE id = ?";

    db.query(q, [productId],(err,data)=>{
        if(err) return res.send(err);
        return res.json("Đã xóa sản phẩm");
    })
}

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
    const q ="SELECT * FROM products WHERE id=?"
      db.query(q,(err,data)=>{
        if(err) return res.json(err);
        return res.json(data);
      })
      res.status(200).json(product);
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

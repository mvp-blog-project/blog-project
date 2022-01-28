var blog= require('../database-mongo/Item.model.js');
var selectAll = async (req,res) => {
var data= await blog.find()
res.send(data)
};
var post=(req,res)=>{
    console.log(req.body)
    blog.insertMany({
        title: req.body.title,
        blog: req.body.blog,
        img: req.body.img
    })
    res.status(200)
}

module.exports = { post ,selectAll};

var blog= require('../database-mongo/Item.model.js');
var selectAll = async (req,res) => {
var data= await blog.find()
res.send(data).status(200)
};

var post=(req,res)=>{
    console.log(req.body)
    blog.insertMany({
        title: req.body.title,
        blog: req.body.blog,
        img: req.body.img,
        category: req.body.category,
    })
    
}
var remove= (req,res) => {
 blog.findByIdAndDelete(req.body.id).then((result)=>{
     res.json({view:'Postes'})
 }).catch((err)=>{console.log(err)})
}
var update=(req,res) => {
    console.log(req.body)
   blog.findByIdAndUpdate(req.body.id,req.body.data)
   .then((result)=>{
    res.json({view:'Postes'})
}).catch((err)=>{console.log(err)})
   }

module.exports = { post,selectAll,remove,update};

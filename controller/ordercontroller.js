const Order = require("../modal/Order")

exports.createOrder = async (req,res) =>{
    try {
        const order = await Order.create(req.body)
        return res.json({
            success :true,
            data:order,
            message:'Order Created Successfully !'
        })
    } catch (error) {
        return res.json({success:false,message:error.message})
    }
}
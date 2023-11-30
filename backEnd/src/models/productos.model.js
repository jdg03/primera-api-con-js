import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
    {
        description:{
            type:String,
            required:[true,"please complete the field"]
            
        },
        price:{
            type:Number,
            required:[true,"please complete the field"]
            
        },
        stock:{
            type:Number,
            required:[true,"please complete the field"]
            
        },

    },
    {
        timestamps:true,
        versionKey:false
    }

);

export const productModel = mongoose.model("Product",productSchema);

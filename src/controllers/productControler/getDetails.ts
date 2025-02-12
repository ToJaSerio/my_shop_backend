import { RequestHandler } from "express";
import Product from "schemas/productsSchema";

export const getDetails: RequestHandler<{ productId: string }> = async (
  req,
  res
) => {
  try {
    const { productId } = req.params;
    console.log('productId', productId)
    const product = await Product.findById(productId).populate("comments").exec();

    if (!product) {
        res.status(404).json('Product do not found')
    }

    res.json({
        id: product._id,
        title: product.title,
        comments: product.commentsList,
        price: product.price,        
        description: product.description,
        quantity: product.quantityAvailable,
        avgRate: product.averageRate,
        rateCount: product.rateCount,
        category: product.category
    })
  } catch (error) {
    res.status(500).json("Internal server error")
  }
};

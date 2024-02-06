const stripe = require('stripe')(process.env.STRIPE_KEY); 


'use strict';

/**
 * order controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::order.order',({strapi})=>({
    async create(ctx){
        const {products} = ctx.request.body;

        const lineItems = await Promise.all (
            products.map(async(product)=>{
                const item = await strapi.service("api::product.product").findOne(product.id);

                return{
                    price_data:{
                        currency:'inr',
                        product_data:{
                            name:item.title,
                        },
                        unit_amount:item.newprice*100
                    },
                    quantity:product.currentQuantity
                }
            })
        )


        try{
            const session = await stripe.checkout.sessions.create({
                mode: 'payment',
                success_url: `${process.env.CLIENT_URL}?success=true`,
                cancel_url: `${process.env.CLIENT_URL}?canceled=true`,

                line_items: lineItems,

                shipping_address_collection: {allowed_countries: ["IN","US","CA"]},
                payment_method_types: ["card"],
            });

            await strapi.service("api::order.order").create({
                data:{
                    products,
                    stripeId: session.id,
                }
            });

            return {stripeSession: session};
        }

        catch(err){
            ctx.response.status = 500;
            return err;
        }
    }
}));

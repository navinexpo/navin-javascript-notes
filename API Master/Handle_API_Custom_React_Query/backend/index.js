import express from "express";

const app = express();

app.get('/api/products', (req, res)=> {
    const products = [
        {
            id: 1, 
            name: 'table wooden',
            image: 'https://unsplash.com/photos/a-bunch-of-balloons-that-are-shaped-like-email-7NT4EDSI5Ok'
        },
        {
            id: 2, 
            name: 'table glass',
            image: 'https://unsplash.com/photos/a-bunch-of-balloons-that-are-shaped-like-email-7NT4EDSI5Ok'
        },
        {
            id: 3, 
            name: 'computer',
            image: 'https://unsplash.com/photos/a-bunch-of-balloons-that-are-shaped-like-email-7NT4EDSI5Ok'
        },
        {
            id: 4, 
            name: 'laptop',
            image: 'https://unsplash.com/photos/a-bunch-of-balloons-that-are-shaped-like-email-7NT4EDSI5Ok'
        },
        {
            id: 5, 
            name: 'mobile',
            image: 'https://unsplash.com/photos/a-bunch-of-balloons-that-are-shaped-like-email-7NT4EDSI5Ok'
        },
    ]
    if(req.query.search){
        const filterProducts = products.filter(product => product.name.includes(req.query.search))
        res.send(filterProducts);
        return; //need to exit otherwise the server gonna crashed. 
    }
    setTimeout(()=> {
        res.send(products)
    }, 3000);
})
    
    
const port = process.env.PORT || 3000; 

app.listen(port, () => {
  console.log(`Server is running on  ${port}`);
});


// http://localhost:3000/api/products?search=metal
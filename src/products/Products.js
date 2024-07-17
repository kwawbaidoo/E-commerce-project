const Products = [
  {
    "categories": [
      {
        "id": 1,
        "name": "Electronics",
        "subcategories": [
          {
            "id": 101,
            "name": "Mobile Phones",
            "products": [
              {
                "id": 10101,
                "name": "iPhone 13",
                "price": 999.99,
                "brand": "Apple",
                "description": "Latest Apple iPhone with advanced features.",
                "imageUrl": "https://movilesquality.com/pics/contenido/apple-iphone-12-pro-128gb-azul.jpg",
                "inStock": true
              },
              {
                "id": 10102,
                "name": "Samsung Galaxy S21",
                "price": 799.99,
                "brand": "Samsung",
                "description": "High-end Samsung smartphone with great performance.",
                "imageUrl": "https://i5.walmartimages.com/seo/Samsung-Galaxy-S21-Ultra-5G-G998U-256GB-Black-Unlocked-Smartphone-Good-Condition_62e031ca-d932-4f0f-807c-d2def6e40a46.dc8a6fd345146cc870eaa075c1563b10.jpeg",
                "inStock": true
              },
              {
                "id": 10103,
                "name": "Google Pixel 6",
                "price": 699.99,
                "brand": "Google",
                "description": "Latest Google Pixel with amazing camera.",
                "imageUrl": "https://m.media-amazon.com/images/I/71FpXTBHDnL._AC_SL1500_.jpg",
                "inStock": true
              },
              {
                "id": 10104,
                "name": "Sony Xperia 5 II",
                "price": 949.99,
                "brand": "Sony",
                "description": "Compact phone with great camera and display.",
                "imageUrl": "https://sokousa.co.ke/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/x/p/xperia_5_ii.jpg",
                "inStock": true
              },
              {
                "id": 10105,
                "name": "Motorola Edge Plus",
                "price": 999.99,
                "brand": "Motorola",
                "description": "Flagship phone with curved display.",
                "imageUrl": "https://m-cdn.phonearena.com/images/phones/78722-940/Motorola-edge.jpg?w=1",
                "inStock": true
              }
            ]
          },
          {
            "id": 102,
            "name": "Laptops",
            "products": [
              {
                "id": 10201,
                "name": "MacBook Pro",
                "price": 1299.99,
                "brand": "Apple",
                "description": "Powerful laptop with M1 chip.",
                "imageUrl": "https://i5.walmartimages.com/seo/2022-Apple-MacBook-Pro-Laptop-M2-chip-13-inch-Retina-Display-8GB-RAM-512GB-SSD-Storage-Touch-Bar-Backlit-Keyboard-FaceTime-HD-Camera-Works-iPhone-iPa_59254575-0ad4-4bac-bb19-a98d170b61d2.a845feb86e81f0aae7db0539c8ee3691.jpeg",
                "inStock": true
              },
              {
                "id": 10202,
                "name": "HP Spectre x360",
                "price": 1199.99,
                "brand": "HP",
                "description": "Versatile 2-in-1 laptop.",
                "imageUrl": "https://cdn.mos.cms.futurecdn.net/DdoLHFJSedNMnn9Gg47a6T-1200-80.jpg",
                "inStock": true
              },
              {
                "id": 10203,
                "name": "Lenovo ThinkPad X1 Carbon",
                "price": 1399.99,
                "brand": "Lenovo",
                "description": "Durable and powerful business laptop.",
                "imageUrl": "https://aroz.com.bd/wp-content/uploads/2022/10/lenovo-laptops-x1-carbon-6th-gen-hero.webp",
                "inStock": true
              },
              {
                "id": 10204,
                "name": "Microsoft Surface Laptop 4",
                "price": 1299.99,
                "brand": "Microsoft",
                "description": "Sleek and powerful laptop with touchscreen.",
                "imageUrl": "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWUphA?ver=4176&q=90&m=6&h=705&w=1253&b=%23FFFFFFFF&f=jpg&o=f&p=140&aim=true",
                "inStock": true
              },
              {
                "id": 10205,
                "name": "Asus ZenBook 13",
                "price": 899.99,
                "brand": "Asus",
                "description": "Lightweight laptop with great battery life.",
                "imageUrl": "https://laptopmedia.com/wp-content/uploads/2021/01/ZenBook-13_UM325UA_SA_OLED_Product-photo_2G_Pine-Grey_08_2000x2000-e1610629142443.jpg",
                "inStock": true
              },
              {
                "id": 10206,
                "name": "LG Gram 17",
                "price": 1599.99,
                "brand": "LG",
                "description": "Ultra-lightweight 17-inch laptop.",
                "imageUrl": "https://www.lg.com/au/images/laptops/md07555075/gallery/17Z90Q-G.AA76A3-Laptops-D-2.jpg",
                "inStock": true
              }
            ]
          }
        ]
      },
      {
        "id": 2,
        "name": "Fashion",
        "subcategories": [
          {
            "id": 201,
            "name": "Men",
            "products": [
              {
                "id": 20101,
                "name": "Levi's Jeans",
                "price": 59.99,
                "brand": "Levi's",
                "description": "Classic straight fit jeans.",
                "imageUrl": "https://norwoodshop.ca/cdn/shop/products/501ForWomen.jpg?v=1622659605&width=2000",
                "inStock": true
              },
              {
                "id": 20102,
                "name": "Nike T-Shirt",
                "price": 29.99,
                "brand": "Nike",
                "description": "Comfortable cotton t-shirt.",
                "imageUrl": "https://m.media-amazon.com/images/I/61GoDbDPe4L._AC_UL1000_.jpg",
                "inStock": true
              },
              {
                "id": 20103,
                "name": "Adidas Hoodie",
                "price": 49.99,
                "brand": "Adidas",
                "description": "Warm and stylish hoodie.",
                "imageUrl": "https://img01.ztat.net/article/spp-media-p1/9aebcc9551d74e698cd2c57e8ba036c2/ff1084e2835f4518892fcfc3bc454254.jpg?imwidth=762",
                "inStock": true
              },
              {
                "id": 20104,
                "name": "Puma Shorts",
                "price": 24.99,
                "brand": "Puma",
                "description": "Comfortable running shorts.",
                "imageUrl": "https://cobragolf.ca/cdn/shop/products/rth6hoivfbz9brcnwdqv_1500x.jpg?v=1702944459",
                "inStock": true
              },
              {
                "id": 20105,
                "name": "Calvin Klein Boxers",
                "price": 19.99,
                "brand": "Calvin Klein",
                "description": "Comfortable and stylish boxers.",
                "imageUrl": "https://cdn.jarrolds.co.uk/products-temp/calvin-klein/boxer-slim-3pk-6h3%7Bw=1000,h=1000%7D.jpg",
                "inStock": true
              },
              {
                "id": 20106,
                "name": "Adidas Sneakers",
                "price": 89.99,
                "brand": "Adidas",
                "description": "Stylish and comfortable sneakers.",
                "imageUrl": "https://i.pinimg.com/736x/08/fa/7f/08fa7fe2bb67777a1069dfb18c0e3cbd.jpg",
                "inStock": true
              }
            ]
          },
          {
            "id": 202,
            "name": "Women",
            "products": [
              {
                "id": 20201,
                "name": "Zara Dress",
                "price": 49.99,
                "brand": "Zara",
                "description": "Elegant summer dress.",
                "imageUrl": "https://w7.pngwing.com/pngs/22/224/png-transparent-zara-woman-dress-clothing-wedding-dress-formal-wear-evening-gown-queen-elizabeth-wedding-dress.png",
                "inStock": true
              },
              {
                "id": 20202,
                "name": "H&M Blouse",
                "price": 29.99,
                "brand": "H&M",
                "description": "Stylish and comfortable blouse.",
                "imageUrl": "https://cdn.shopify.com/s/files/1/0498/5378/8364/products/white-v-neck-blouse-women-fashion-long-sleeve-shirts-ladies-elegant-office-top-formal-style-clothing_2048x.jpg?v=1620716064",
                "inStock": true
              },
              {
                "id": 20203,
                "name": "Gucci Bag",
                "price": 999.99,
                "brand": "Gucci",
                "description": "Luxury handbag with iconic design.",
                "imageUrl": "https://m.media-amazon.com/images/I/51a48PIH7nL._AC_UL1000_.jpg",
                "inStock": true
              },
              {
                "id": 20204,
                "name": "Prada Sunglasses",
                "price": 199.99,
                "brand": "Prada",
                "description": "Stylish sunglasses with UV protection.",
                "imageUrl": "https://image.kilimall.com/kenya/shop/store/goods/2018/11/20/1542708698140_3654693.jpg",
                "inStock": true
              },
              {
                "id": 20205,
                "name": "Louis Vuitton Scarf",
                "price": 299.99,
                "brand": "Louis Vuitton",
                "description": "Elegant scarf with luxury design.",
                "imageUrl": "https://cdn.shopify.com/s/files/1/2340/2519/products/Scarf_Faye_2_1024x1024.jpg?v=1567607971",
                "inStock": true
              }
            ]
          }
        ]
      },
      {
        "id": 3,
        "name": "Home & Kitchen",
        "subcategories": [
          {
            "id": 301,
            "name": "Furniture",
            "products": [
              {
                "id": 30101,
                "name": "Ikea Sofa",
                "price": 499.99,
                "brand": "Ikea",
                "description": "Comfortable and stylish sofa.",
                "imageUrl": "https://static.ikea.com/us/en/images/products/franklin-sofa-seater-vissle-gray__0641973_pe701898_s5.jpg",
                "inStock": true
              },
              {
                "id": 30102,
                "name": "Dining Table",
                "price": 299.99,
                "brand": "Wayfair",
                "description": "Elegant wooden dining table.",
                "imageUrl": "https://images.unsplash.com/photo-1576842888557-f652be234adf",
                "inStock": true
              },
              {
                "id": 30103,
                "name": "Office Chair",
                "price": 149.99,
                "brand": "Herman Miller",
                "description": "Ergonomic office chair.",
                "imageUrl": "https://images.unsplash.com/photo-1623948840428-17ec9ce94dc3",
                "inStock": true
              }
            ]
          },
          {
            "id": 302,
            "name": "Appliances",
            "products": [
              {
                "id": 30201,
                "name": "Dyson Vacuum Cleaner",
                "price": 399.99,
                "brand": "Dyson",
                "description": "High performance vacuum cleaner.",
                "imageUrl": "https://www.dyson.com/medialibrary/Group/2022/vacuums/dyson-v8/dyson-v8-absolute-cordless-vacuum.jpg",
                "inStock": true
              },
              {
                "id": 30202,
                "name": "Instant Pot",
                "price": 99.99,
                "brand": "Instant Pot",
                "description": "Multi-use programmable pressure cooker.",
                "imageUrl": "https://images.unsplash.com/photo-1598928506316-d902b7a8f4a5",
                "inStock": true
              },
              {
                "id": 30203,
                "name": "Nespresso Machine",
                "price": 149.99,
                "brand": "Nespresso",
                "description": "High quality coffee machine.",
                "imageUrl": "https://images.unsplash.com/photo-1511447333010-345f91f04d74",
                "inStock": true
              }
            ]
          }
        ]
      }
    ]
  }
];

export default Products
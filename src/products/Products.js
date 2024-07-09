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
                "imageUrl": "https://example.com/images/iphone13.jpg",
                "inStock": true
              },
              {
                "id": 10102,
                "name": "Samsung Galaxy S21",
                "price": 799.99,
                "brand": "Samsung",
                "description": "High-end Samsung smartphone with great performance.",
                "imageUrl": "https://example.com/images/galaxyS21.jpg",
                "inStock": true
              },
              {
                "id": 10103,
                "name": "Google Pixel 6",
                "price": 699.99,
                "brand": "Google",
                "description": "Latest Google Pixel with amazing camera.",
                "imageUrl": "https://example.com/images/pixel6.jpg",
                "inStock": true
              },
              {
                "id": 10104,
                "name": "OnePlus 9 Pro",
                "price": 969.99,
                "brand": "OnePlus",
                "description": "High-performance smartphone with fast charging.",
                "imageUrl": "https://example.com/images/oneplus9pro.jpg",
                "inStock": true
              },
              {
                "id": 10105,
                "name": "Sony Xperia 5 II",
                "price": 949.99,
                "brand": "Sony",
                "description": "Compact phone with great camera and display.",
                "imageUrl": "https://example.com/images/xperia5ii.jpg",
                "inStock": true
              },
              {
                "id": 10106,
                "name": "LG Wing",
                "price": 999.99,
                "brand": "LG",
                "description": "Unique smartphone with swiveling screen.",
                "imageUrl": "https://example.com/images/lgwing.jpg",
                "inStock": true
              },
              {
                "id": 10107,
                "name": "Asus ROG Phone 5",
                "price": 1099.99,
                "brand": "Asus",
                "description": "Gaming smartphone with high refresh rate.",
                "imageUrl": "https://example.com/images/rogphone5.jpg",
                "inStock": true
              },
              {
                "id": 10108,
                "name": "Xiaomi Mi 11",
                "price": 749.99,
                "brand": "Xiaomi",
                "description": "Flagship phone with excellent display.",
                "imageUrl": "https://example.com/images/mi11.jpg",
                "inStock": true
              },
              {
                "id": 10109,
                "name": "Oppo Find X3 Pro",
                "price": 1149.99,
                "brand": "Oppo",
                "description": "Top-end phone with advanced camera features.",
                "imageUrl": "https://example.com/images/findx3pro.jpg",
                "inStock": true
              },
              {
                "id": 10110,
                "name": "Motorola Edge Plus",
                "price": 999.99,
                "brand": "Motorola",
                "description": "Flagship phone with curved display.",
                "imageUrl": "https://example.com/images/edgeplus.jpg",
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
                "imageUrl": "https://example.com/images/macbookpro.jpg",
                "inStock": true
              },
              {
                "id": 10202,
                "name": "Dell XPS 13",
                "price": 999.99,
                "brand": "Dell",
                "description": "Compact and powerful laptop.",
                "imageUrl": "https://example.com/images/dellxps13.jpg",
                "inStock": true
              },
              {
                "id": 10203,
                "name": "HP Spectre x360",
                "price": 1199.99,
                "brand": "HP",
                "description": "Versatile 2-in-1 laptop.",
                "imageUrl": "https://example.com/images/hpspectrex360.jpg",
                "inStock": true
              },
              {
                "id": 10204,
                "name": "Lenovo ThinkPad X1 Carbon",
                "price": 1399.99,
                "brand": "Lenovo",
                "description": "Durable and powerful business laptop.",
                "imageUrl": "https://example.com/images/thinkpadx1carbon.jpg",
                "inStock": true
              },
              {
                "id": 10205,
                "name": "Microsoft Surface Laptop 4",
                "price": 1299.99,
                "brand": "Microsoft",
                "description": "Sleek and powerful laptop with touchscreen.",
                "imageUrl": "https://example.com/images/surfacelaptop4.jpg",
                "inStock": true
              },
              {
                "id": 10206,
                "name": "Acer Swift 3",
                "price": 699.99,
                "brand": "Acer",
                "description": "Affordable laptop with good performance.",
                "imageUrl": "https://example.com/images/acerswift3.jpg",
                "inStock": true
              },
              {
                "id": 10207,
                "name": "Asus ZenBook 13",
                "price": 899.99,
                "brand": "Asus",
                "description": "Lightweight laptop with great battery life.",
                "imageUrl": "https://example.com/images/zenbook13.jpg",
                "inStock": true
              },
              {
                "id": 10208,
                "name": "Razer Blade 15",
                "price": 1799.99,
                "brand": "Razer",
                "description": "Gaming laptop with high performance.",
                "imageUrl": "https://example.com/images/razerblade15.jpg",
                "inStock": true
              },
              {
                "id": 10209,
                "name": "Samsung Galaxy Book Pro",
                "price": 1099.99,
                "brand": "Samsung",
                "description": "Slim and powerful laptop.",
                "imageUrl": "https://example.com/images/galaxybookpro.jpg",
                "inStock": true
              },
              {
                "id": 10210,
                "name": "LG Gram 17",
                "price": 1599.99,
                "brand": "LG",
                "description": "Ultra-lightweight 17-inch laptop.",
                "imageUrl": "https://example.com/images/lggram17.jpg",
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
                "imageUrl": "https://example.com/images/levisjeans.jpg",
                "inStock": true
              },
              {
                "id": 20102,
                "name": "Nike T-Shirt",
                "price": 29.99,
                "brand": "Nike",
                "description": "Comfortable cotton t-shirt.",
                "imageUrl": "https://example.com/images/niketshirt.jpg",
                "inStock": true
              },
              {
                "id": 20103,
                "name": "Adidas Hoodie",
                "price": 49.99,
                "brand": "Adidas",
                "description": "Warm and stylish hoodie.",
                "imageUrl": "https://example.com/images/adidashoodie.jpg",
                "inStock": true
              },
              {
                "id": 20104,
                "name": "Puma Shorts",
                "price": 24.99,
                "brand": "Puma",
                "description": "Comfortable running shorts.",
                "imageUrl": "https://example.com/images/pumashorts.jpg",
                "inStock": true
              },
              {
                "id": 20105,
                "name": "Under Armour Jacket",
                "price": 69.99,
                "brand": "Under Armour",
                "description": "Lightweight and breathable jacket.",
                "imageUrl": "https://example.com/images/uajacket.jpg",
                "inStock": true
              },
              {
                "id": 20106,
               
  
   "name": "Tommy Hilfiger Polo",
                "price": 39.99,
                "brand": "Tommy Hilfiger",
                "description": "Classic polo shirt.",
                "imageUrl": "https://example.com/images/thpolo.jpg",
                "inStock": true
              },
              {
                "id": 20107,
                "name": "Calvin Klein Boxers",
                "price": 19.99,
                "brand": "Calvin Klein",
                "description": "Comfortable and stylish boxers.",
                "imageUrl": "https://example.com/images/ckboxers.jpg",
                "inStock": true
              },
              {
                "id": 20108,
                "name": "Ralph Lauren Sweater",
                "price": 89.99,
                "brand": "Ralph Lauren",
                "description": "Elegant and warm sweater.",
                "imageUrl": "https://example.com/images/rlsweater.jpg",
                "inStock": true
              },
              {
                "id": 20109,
                "name": "H&M Beanie",
                "price": 14.99,
                "brand": "H&M",
                "description": "Stylish winter beanie.",
                "imageUrl": "https://example.com/images/hmbeanie.jpg",
                "inStock": true
              },
              {
                "id": 20110,
                "name": "Zara Blazer",
                "price": 119.99,
                "brand": "Zara",
                "description": "Elegant formal blazer.",
                "imageUrl": "https://example.com/images/zarablazer.jpg",
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
                "imageUrl": "https://example.com/images/zaradress.jpg",
                "inStock": true
              },
              {
                "id": 20202,
                "name": "Adidas Sneakers",
                "price": 89.99,
                "brand": "Adidas",
                "description": "Stylish and comfortable sneakers.",
                "imageUrl": "https://example.com/images/adidassneakers.jpg",
                "inStock": true
              },
              {
                "id": 20203,
                "name": "H&M Skirt",
                "price": 29.99,
                "brand": "H&M",
                "description": "Trendy mini skirt.",
                "imageUrl": "https://example.com/images/hmskirt.jpg",
                "inStock": true
              },
              {
                "id": 20204,
                "name": "Forever 21 Top",
                "price": 19.99,
                "brand": "Forever 21",
                "description": "Stylish crop top.",
                "imageUrl": "https://example.com/images/f21top.jpg",
                "inStock": true
              },
              {
                "id": 20205,
                "name": "Mango Jacket",
                "price": 69.99,
                "brand": "Mango",
                "description": "Elegant women's jacket.",
                "imageUrl": "https://example.com/images/mangojacket.jpg",
                "inStock": true
              },
              {
                "id": 20206,
                "name": "Levi's Denim",
                "price": 59.99,
                "brand": "Levi's",
                "description": "Classic denim jeans.",
                "imageUrl": "https://example.com/images/levisdenim.jpg",
                "inStock": true
              },
              {
                "id": 20207,
                "name": "Victoria's Secret Lingerie",
                "price": 49.99,
                "brand": "Victoria's Secret",
                "description": "Luxurious lingerie set.",
                "imageUrl": "https://example.com/images/vslingerie.jpg",
                "inStock": true
              },
              {
                "id": 20208,
                "name": "Gap Sweater",
                "price": 39.99,
                "brand": "Gap",
                "description": "Cozy and warm sweater.",
                "imageUrl": "https://example.com/images/gapsweater.jpg",
                "inStock": true
              },
              {
                "id": 20209,
                "name": "Nike Leggings",
                "price": 34.99,
                "brand": "Nike",
                "description": "Comfortable and stretchy leggings.",
                "imageUrl": "https://example.com/images/nikewleggings.jpg",
                "inStock": true
              },
              {
                "id": 20210,
                "name": "Aldo Heels",
                "price": 89.99,
                "brand": "Aldo",
                "description": "Elegant high heels.",
                "imageUrl": "https://example.com/images/aldoheels.jpg",
                "inStock": true
              }
            ]
          }
        ]
      },
      {
        "id": 3,
        "name": "Beauty & Cosmetics",
        "subcategories": [
          {
            "id": 301,
            "name": "Makeup",
            "products": [
              {
                "id": 30101,
                "name": "Maybelline Mascara",
                "price": 9.99,
                "brand": "Maybelline",
                "description": "Volume and length mascara.",
                "imageUrl": "https://example.com/images/maybellinemascara.jpg",
                "inStock": true
              },
              {
                "id": 30102,
                "name": "L'Oreal Lipstick",
                "price": 14.99,
                "brand": "L'Oreal",
                "description": "Long-lasting matte lipstick.",
                "imageUrl": "https://example.com/images/loreallipstick.jpg",
                "inStock": true
              },
              {
                "id": 30103,
                "name": "MAC Foundation",
                "price": 29.99,
                "brand": "MAC",
                "description": "Full coverage foundation.",
                "imageUrl": "https://example.com/images/macfoundation.jpg",
                "inStock": true
              },
              {
                "id": 30104,
                "name": "NARS Blush",
                "price": 24.99,
                "brand": "NARS",
                "description": "Highly pigmented blush.",
                "imageUrl": "https://example.com/images/narsblush.jpg",
                "inStock": true
              },
              {
                "id": 30105,
                "name": "Urban Decay Eyeshadow",
                "price": 49.99,
                "brand": "Urban Decay",
                "description": "Vibrant and long-lasting eyeshadow.",
                "imageUrl": "https://example.com/images/urbandecayeyeshadow.jpg",
                "inStock": true
              },
              {
                "id": 30106,
                "name": "Fenty Beauty Highlighter",
                "price": 34.99,
                "brand": "Fenty Beauty",
                "description": "Shimmering highlighter.",
                "imageUrl": "https://example.com/images/fentyhighlighter.jpg",
                "inStock": true
              },
              {
                "id": 30107,
                "name": "Anastasia Beverly Hills Brow Kit",
                "price": 45.99,
                "brand": "Anastasia Beverly Hills",
                "description": "Complete brow kit.",
                "imageUrl": "https://example.com/images/abhbrowkit.jpg",
                "inStock": true
              },
              {
                "id": 30108,
                "name": "Benefit Cosmetics Primer",
                "price": 31.99,
                "brand": "Benefit Cosmetics",
                "description": "Smoothing face primer.",
                "imageUrl": "https://example.com/images/benefitprimer.jpg",
                "inStock": true
              },
              {
                "id": 30109,
                "name": "Too Faced Setting Spray",
                "price": 24.99,
                "brand": "Too Faced",
                "description": "Long-lasting setting spray.",
                "imageUrl": "https://example.com/images/toofacedsettingspray.jpg",
                "inStock": true
              },
              {
                "id": 30110,
                "name": "Charlotte Tilbury Lip Gloss",
                "price": 22.99,
                "brand": "Charlotte Tilbury",
                "description": "Glossy and hydrating lip gloss.",
                "imageUrl": "https://example.com/images/ctlipgloss.jpg",
                "inStock": true
              }
            ]
          },
          {
            "id": 302,
            "name": "Skincare",
            "products": [
              {
                "id": 30201,
                "name": "Neutrogena Face Wash",
                "price": 7.99,
                "brand": "Neutrogena",
                "description": "Oil-free acne wash.",
                "imageUrl": "https://example.com/images/neutrogenafacewash.jpg",
                "inStock": true
              },
              {
                "id": 30202,
                "name": "Olay Moisturizer",
                "price": 24.99,
                "brand": "Olay",
                "description": "Hydrating face moisturizer.",
                "imageUrl": "https://example.com/images/olaymoisturizer.jpg",
                "inStock": true
              },
              {
                "id": 30203,
                "name": "The Ordinary Serum",
                "price": 9.99,
                "brand": "The Ordinary",
                "description": "Niacinamide serum.",
                "imageUrl": "https://example.com/images/ordinaryserum.jpg",
                "inStock": true
              },
              {
                "id": 30204,
                "name": "Cetaphil Cleanser",
                "price": 11.99,
                "brand": "Cetaphil",
                "description": "Gentle skin cleanser.",
                "imageUrl": "https://example.com/images/cetaphilcleanser.jpg",
                "inStock": true
              },
              {
                "id": 30205,
                "name": "Kiehl's Eye Cream",
                "price": 29.99,
                "brand": "Kiehl's",
                "description": "Soothing eye treatment.",
                "imageUrl": "https://example.com/images/kiehlseyecream.jpg",
                "inStock": true
              },
              {
                "id": 30206,
                "name": "Clinique Toner",
                "price": 19.99,
                "brand": "Clinique",
                "description": "Clarifying lotion.",
                "imageUrl": "https://example.com/images/cliniquetoner.jpg",
                "inStock": true
              },
              {
                "id": 30207,
                "name": "La Roche-Posay Sunscreen",
                "price": 34.99,
                "brand": "La Roche-Posay",
                "description": "Anthelios SPF 60 sunscreen.",
                "imageUrl": "https://example.com/images/larochesunscreen.jpg",
                "inStock": true
              },
              {
                "id": 30208,
                "name": "Drunk Elephant Night Serum",
                "price": 98.99,
                "brand": "Drunk Elephant",
                "description": "Glycolic night serum.",
                "imageUrl": "https://example.com/images/drunkenightskin.jpg",
                "inStock": true
              },
              {
                "id": 30209,
                "name": "Sunday Riley Oil",
                "price": 40.99,
                "brand": "Sunday Riley",
                "description": "Retinol face oil.",
                "imageUrl": "https://example.com/images/sundayrileyoil.jpg",
                "inStock": true
              },
              {
                "id": 30210,
                "name": "Bioderma Micellar Water",
                "price": 13.99,
                "brand": "Bioderma",
                "description": "Cleansing and makeup removing water.",
                "imageUrl": "https://example.com/images/biodermamicellar.jpg",
                "inStock": true
              }
            ]
          }
        ]
      },
      {
        "id": 4,
        "name": "Office",
        "subcategories": [
          {
            "id": 401,
            "name": "Office Supplies",
            "products": [
              {
                "id": 40101,
                "name": "Staples Paper Clips",
                "price": 2.99,
                "brand": "Staples",
                "description": "Standard paper clips.",
                "imageUrl": "https://example.com/images/paperclips.jpg",
                "inStock": true
              },
              {
                "id": 40102,
                "name": "Post-it Notes",
                "price": 6.99,
                "brand": "Post-it",
                "description": "Sticky notes pack.",
                "imageUrl": "https://example.com/images/postitnotes.jpg",
                "inStock": true
              },
              {
                "id": 40103,
                "name": "Pilot Pens",
                "price": 10.99,
                "brand": "Pilot",
                "description": "Gel ink pens.",
                "imageUrl": "https://example.com/images/pilotpens.jpg",
                "inStock": true
              },
              {
                "id": 40104,
                "name": "Stapler",
                "price": 7.99,
                "brand": "Swingline",
                "description": "Standard office stapler.",
                "imageUrl": "https://example.com/images/stapler.jpg",
                "inStock": true
              },
              {
                "id": 40105,
                "name": "Scotch Tape",
                "price": 3.99,
                "brand": "Scotch",
                "description": "Transparent tape roll.",
                "imageUrl": "https://example.com/images/scotchtape.jpg",
                "inStock": true
              },
              {
                "id": 40106,
                "name": "Paper Mate Markers",
                "price": 5.99,
                "brand": "Paper Mate",
                "description": "Permanent markers.",
                "imageUrl": "https://example.com/images/papermatemarkers.jpg",
                "inStock": true
              },
              {
                "id": 40107,
                "name": "Binders",
                "price": 4.99,
                "brand": "Avery",
                "description": "Standard 3-ring binder.",
                "imageUrl": "https://example.com/images/binder.jpg",
                "inStock": true
              },
              {
                "id": 40108,
                "name": "Notebook",
                "price": 3.99,
                "brand": "Moleskine",
                "description": "Classic ruled notebook.",
                "imageUrl": "https://example.com/images/notebook.jpg",
                "inStock": true
              },
              {
                "id": 40109,
                "name": "File Folders",
                "price": 9.99,
                "brand": "Smead",
                "description": "Manila file folders.",
                "imageUrl": "https://example.com/images/filefolders.jpg",
                "inStock": true
              },
              {
                "id": 40110,
                "name": "Desk Organizer",
                "price": 14.99,
                "brand": "Mind Reader",
                "description": "Desktop organizer.",
                "imageUrl": "https://example.com/images/deskorganizer.jpg",
                "inStock": true
              }
            ]
          },
          {
            "id": 402,
            "name": "Furniture",
            "products": [
              {
                "id": 40201,
                "name": "Office Chair",
                "price": 129.99,
                "brand": "Herman Miller",
                "description": "Ergonomic office chair.",
                "imageUrl": "https://example.com/images/officechair.jpg",
                "inStock": true
              },
              {
                "id": 40202,
                "name": "Standing Desk",
                "price": 299.99,
                "brand": "Uplift Desk",
                "description": "Adjustable standing desk.",
                "imageUrl": "https://example.com/images/standingdesk.jpg",
                "inStock": true
              },
              {
                "id": 40203,
                "name": "Bookshelf",
                "price": 89.99,
                "brand": "Ikea",
                "description": "Modern bookshelf.",
                "imageUrl": "https://example.com/images/bookshelf.jpg",
                "inStock": true
              },
              {
                "id": 40204,
                "name": "File Cabinet",
                "price": 69.99,
                "brand": "Lorell",
                "description": "Lockable file cabinet.",
                "imageUrl": "https://example.com/images/filecabinet.jpg",
                "inStock": true
              },
              {
                "id": 40205,
                "name": "Desk Lamp",
                "price": 29.99,
                "brand": "Philips",
                "description": "LED desk lamp.",
                "imageUrl": "https://example.com/images/desklamp.jpg",
                "inStock": true
              },
              {
                "id": 40206,
                "name": "Conference Table",
                "price": 399.99,
                "brand": "HON",
                "description": "Large conference table.",
                "imageUrl": "https://example.com/images/conferencetable.jpg",
                "inStock": true
              },
              {
                "id": 40207,
                "name": "Office Sofa",
                "price": 499.99,
                "brand": "Ashley Furniture",
                "description": "Comfortable office sofa.",
                "imageUrl": "https://example.com/images/officesofa.jpg",
                "inStock": true
              },
              {
                "id": 40208,
                "name": "Monitor Stand",
                "price": 19.99,
                "brand": "AmazonBasics",
                "description": "Adjustable monitor stand.",
                "imageUrl": "https://example.com/images/monitorstand.jpg",
                "inStock": true
              },
              {
                "id": 40209,
                "name": "Whiteboard",
                "price": 49.99,
                "brand": "Quartet",
                "description": "Magnetic whiteboard.",
                "imageUrl": "https://example.com/images/whiteboard.jpg",
                "inStock": true
              },
              {
                "id": 40210,
                "name": "Foot Rest",
                "price": 24.99,
                "brand": "ComfiLife",
                "description": "Ergonomic foot rest.",
                "imageUrl": "https://example.com/images/footrest.jpg",
                "inStock": true
              }
            ]
          }
        ]
      },
      {
        "id": 5,
        "name": "Sports & Outdoors",
        "subcategories": [
          {
            "id": 501,
            "name": "Sports Equipment",
            "products": [
              {
                "id": 50101,
                "name": "Wilson Basketball",
                "price": 29.99,
                "brand": "Wilson",
                "description": "Official size basketball.",
                "imageUrl": "https://example.com/images/wilsonbasketball.jpg",
                "inStock": true
              },
              {
                "id": 50102,
                "name": "Spalding Football",
                "price": 19.99,
                "brand": "Spalding",
                "description": "Official size football.",
                "imageUrl": "https://example.com/images/spaldingfootball.jpg",
                "inStock": true
              },
              {
                "id": 50103,
                "name": "Adidas Soccer Ball",
                "price": 24.99,
                "brand": "Adidas",
                "description": "Premium soccer ball.",
                "imageUrl": "https://example.com/images/adidassoccerball.jpg",
                "inStock": true
              },
              {
                "id": 50104,
                "name": "Yonex Badminton Set",
                "price": 34.99,
                "brand": "Yonex",
                "description": "Complete badminton set.",
                "imageUrl": "https://example.com/images/yonexbadmintonset.jpg",
                "inStock": true
              },
              {
                "id": 50105,
                "name": "Franklin Baseball Glove",
                "price": 39.99,
                "brand": "Franklin",
                "description": "Leather baseball glove.",
                "imageUrl": "https://example.com/images/franklinglove.jpg",
                "inStock": true
              },
              {
                "id": 50106,
                "name": "Easton Baseball Bat",
                "price": 49.99,
                "brand": "Easton",
                "description": "Aluminum baseball bat.",
                "imageUrl": "https://example.com/images/eastonbat.jpg",
                "inStock": true
              },
              {
                "id": 50107,
                "name": "Wilson Tennis Racket",
                "price": 59.99,
                "brand": "Wilson",
                "description": "Professional tennis racket.",
                "imageUrl": "https://example.com/images/wilsontennisracket.jpg",
                "inStock": true
              },
              {
                "id": 50108,
                "name": "Spalding Volleyball",
                "price": 25.99,
                "brand": "Spalding",
                "description": "Official size volleyball.",
                "imageUrl": "https://example.com/images/spaldingvolleyball.jpg",
                "inStock": true
              },
              {
                "id": 50109,
                "name": "Under Armour Running Shoes",
                "price": 69.99,
                "brand": "Under Armour",
                "description": "Lightweight running shoes.",
                "imageUrl": "https://example.com/images/uarunningshoes.jpg",
                "inStock": true
              },
              {
                "id": 50110,
                "name": "Reebok Gym Bag",
                "price": 29.99,
                "brand": "Reebok",
                "description": "Spacious gym bag.",
                "imageUrl": "https://example.com/images/reebokgymbag.jpg",
                "inStock": true
              }
            ]
          },
          {
            "id": 502,
            "name": "Outdoor Gear",
            "products": [
              {
                "id": 50201,
                "name": "Coleman Tent",
                "price": 129.99,
                "brand": "Coleman",
                "description": "4-person camping tent.",
                "imageUrl": "https://example.com/images/colemanent.jpg",
                "inStock": true
              },
              {
                "id": 50202,
                "name": "CamelBak Hydration Pack",
                "price": 49.99,
                "brand": "CamelBak",
                "description": "Hydration backpack.",
                "imageUrl": "https://example.com/images/camelbakhydrationpack.jpg",
                "inStock": true
              },
              {
                "id": 50203,
                "name": "North Face Sleeping Bag",
                "price": 89.99,
                "brand": "The North Face",
                "description": "Lightweight sleeping bag.",
                "imageUrl": "https://example.com/images/northfacesleepingbag.jpg",
                "inStock": true
              },
              {
                "id": 50204,
                "name": "Garmin GPS",
                "price": 199.99,
                "brand": "Garmin",
                "description": "Handheld GPS device.",
                "imageUrl": "https://example.com/images/garmingps.jpg",
                "inStock": true
              },
              {
                "id": 50205,
                "name": "Therm-a-Rest Sleeping Pad",
                "price": 59.99,
                "brand": "Therm-a-Rest",
                "description": "Ultralight sleeping pad.",
                "imageUrl": "https://example.com/images/thermarestpad.jpg",
                "inStock": true
              },
              {
                "id": 50206,
                "name": "Black Diamond Headlamp",
                "price": 34.99,
                "brand": "Black Diamond",
                "description": "Bright and durable headlamp.",
                "imageUrl": "https://example.com/images/blackdiamondheadlamp.jpg",
                "inStock": true
              },
              {
                "id": 50207,
                "name": "Patagonia Backpack",
                "price": 79.99,
                "brand": "Patagonia",
                "description": "Durable hiking backpack.",
                "imageUrl": "https://example.com/images/patagonibackpack.jpg",
                "inStock": true
              },
              {
                "id": 50208,
                "name": "MSR Camp Stove",
                "price": 44.99,
                "brand": "MSR",
                "description": "Compact camp stove.",
                "imageUrl": "https://example.com/images/msrcampstove.jpg",
                "inStock": true
              },
              {
                "id": 50209,
                "name": "Leatherman Multitool",
                "price": 59.99,
                "brand": "Leatherman",
                "description": "Versatile multitool.",
                "imageUrl": "https://example.com/images/leathermanmultitool.jpg",
                "inStock": true
              },
              {
                "id": 50210,
                "name": "Yeti Cooler",
                "price": 249.99,
                "brand": "Yeti",
                "description": "High-performance cooler.",
                "imageUrl": "https://example.com/images/yeticooler.jpg",
                "inStock": true
              }
            ]
          }
        ]
      }
    ]
  }
  ];
  
  export default Products;
  
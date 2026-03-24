const products = [
  {
    _id: "64b78b80cf982ba18a26b13b",
    sku: "MAP-CAP-001",
    title: "CURPEP Liposomal Nano Curcumin 60 Capsules",
    parent: "Joints",
    children: "Anti-Inflammatory",
    tags: [
      "Bone",
      "joint pain",
      "inflammation"
    ],
    image: "https://res.cloudinary.com/di7xgmxuj/image/upload/v1773833514/CURPEP-LIPOSOMAL-NANO-CURCUMIN-60-CAPSULE-200-CC-BOTTLE-NUTRACEUTICAL_pzqxhc.jpg",
    originalPrice: 1200,
    price: 999,
    discount: 17,
    relatedImages: [
      "https://res.cloudinary.com/di7xgmxuj/image/upload/v1773833514/CURPEP-LIPOSOMAL-NANO-CURCUMIN-60-CAPSULE-200-CC-BOTTLE-NUTRACEUTICAL_pzqxhc.jpg"
     
    ],
    description: "CURPEP is an advanced liposomal nano curcumin formulation designed to provide powerful anti-inflammatory and antioxidant benefits. It helps in reducing joint pain, improving mobility, and supporting overall joint health. The liposomal technology enhances absorption, ensuring better effectiveness compared to regular curcumin supplements. It is ideal for individuals dealing with chronic inflammation and joint-related discomfort.",
     brand: {
      name: "Maathrey Wellness",
      id: "64b7735fae177ed4d70fb5c3"
    },
    category: {
      name: "Joints",
      id: "63a9a063d283e1a02a2a6af8"
    },
    unit: "bottle",
    quantity: 60,
    colors: ["white"],
    type: "Supplement",
    itemInfo: "Take after meals. Store in a cool dry place.",
    status: "active"
  },
  {
    _id: "64b78b80cf982ba18a26b13e",
    sku: "MAP-TAB-002",
    title: "KEEP-D3 Vitamin D3 + K2 60 Tablets",
    parent: "Joints",
    children: "Bone Strength",
    tags: [
      "vitamin d3",
      "k2",
      "bone health"
    ],
    image: "https://res.cloudinary.com/di7xgmxuj/image/upload/v1773833515/KEEP-D3-VITAMIN-D3-_-K2-60-TABLET-200-CC-BOTTLE-NUTRACEUTICAL_mgloqb.jpg",
    originalPrice: 900,
    price: 750,
    discount: 17,
    relatedImages: [
      "https://res.cloudinary.com/di7xgmxuj/image/upload/v1773833515/KEEP-D3-VITAMIN-D3-_-K2-60-TABLET-200-CC-BOTTLE-NUTRACEUTICAL_mgloqb.jpg"
     
    ],
    description: "KEEP-D3 combines Vitamin D3 and Vitamin K2 to support strong bones and improved calcium absorption in the body. This formulation helps in maintaining bone density, reducing the risk of fractures, and supporting overall skeletal health. It is especially beneficial for individuals with vitamin D deficiency or those looking to improve their bone strength and immunity.",
     brand: {
      name: "Maathrey Wellness",
      id: "64b7735fae177ed4d70fb5c3"
    },
   category: {
      name: "Joints",
      id: "63a9a063d283e1a02a2a6af8"
    },
    unit: "bottle",
    quantity: 60,
     colors: ["white"],
    type: "Supplement",
    itemInfo: "Recommended for bone health and immunity.",
    status: "active"
  },
  {
    _id: "64b78b80cf982ba18a26b12c",
    sku: "MAP-TAB-003",
    title: "MAAVIT Multivitamin for Men 60 Tablets",
    parent: "Men Health",
    children: "Energy & Stamina",
    tags: [
      "multivitamin",
      "men",
      "energy"
    ],
    image: "https://res.cloudinary.com/di7xgmxuj/image/upload/v1773833515/MAAVIT-MULTIVITAMIN-FOR-MEN-60-TABLETS-200-CC-BOTTLE-NUTRACEUTICAL_pywzxf.jpg",
    originalPrice: 850,
    price: 699,
    discount: 18,
    relatedImages: [
      "https://res.cloudinary.com/di7xgmxuj/image/upload/v1773833515/MAAVIT-MULTIVITAMIN-FOR-MEN-60-TABLETS-200-CC-BOTTLE-NUTRACEUTICAL_pywzxf.jpg"
      
    ],
    description: "MAAVIT Men is a comprehensive multivitamin supplement formulated to meet the daily nutritional needs of men. It helps boost energy levels, improve stamina, and support overall physical performance. Enriched with essential vitamins and minerals, it also promotes immunity and helps maintain a healthy lifestyle for active individuals.",
      brand: {
      name: "Maathrey Wellness",
      id: "64b7735fae177ed4d70fb5c3"
    },
    category: {
      name: "Men Health",
      id: "63a9a063d283e1a02a2a6afd"
    },
    unit: "bottle",
    quantity: 60,
     colors: ["white"],
    type: "Supplement",
    itemInfo: "Take one tablet daily after food",
    status: "active"
  },
  {
    _id: "64b78b80cf982ba18a26b12d",
    sku: "MAP-TAB-004",
    title: "MAAVIT Women Multivitamin 60 Tablets",
    parent: "Women Health",
    children: "Multivitamin Support",
    tags: [
      "women",
      "multivitamin",
      "hormone"
    ],
    image: "https://res.cloudinary.com/di7xgmxuj/image/upload/v1773833515/MAAVIT-WOMEN-MULTIVITAMIN-FOR-WOMEN-60-TABLETS-200-CC-BOTTLE-NUTRACEUTICAL_skhzpc.jpg",
    originalPrice: 850,
    price: 720,
    discount: 15,
    relatedImages: [
      "https://res.cloudinary.com/di7xgmxuj/image/upload/v1773833515/MAAVIT-WOMEN-MULTIVITAMIN-FOR-WOMEN-60-TABLETS-200-CC-BOTTLE-NUTRACEUTICAL_skhzpc.jpg"
     
    ],
    description: "MAAVIT Women is specially designed to support women's overall health, including hormonal balance, immunity, and energy levels. It contains a blend of essential nutrients that help maintain bone health, improve metabolism, and support daily wellness. This multivitamin is ideal for women looking to maintain an active and healthy lifestyle.",
     brand: {
      name: "Maathrey Wellness",
      id: "64b7735fae177ed4d70fb5c3"
    },
    category: {
      name: "Women Health",
      id: "63a9a063d283e1a02a2a6af9"
    },
    unit: "bottle",
    quantity: 60,
     colors: ["white"],
    type: "Supplement",
    itemInfo: "Ideal for women's daily nutrition.",
    status: "active"
  },
  {
    _id: "64b78b80cf982ba18a26b130",
    sku: "MAP-TAB-005",
    title: "MAGREMA Magnesium Glycinate 60 Tablets",
    parent: "Sleep",
    children: "Stress Relief",
    tags: [
      "magnesium",
      "sleep",
      "stress"
    ],
    image: "https://res.cloudinary.com/di7xgmxuj/image/upload/v1773833514/MAGREMA--MAGNESIUM-GLYCINATE--60-TABLET-200-CC-BOTTLE-NUTRACEUTICAL_ric7q4.jpg",
    originalPrice: 950,
    price: 800,
    discount: 16,
    relatedImages: [
      "https://res.cloudinary.com/di7xgmxuj/image/upload/v1773833514/MAGREMA--MAGNESIUM-GLYCINATE--60-TABLET-200-CC-BOTTLE-NUTRACEUTICAL_ric7q4.jpg"
 
    ],
    description: "MAGREMA is a magnesium glycinate supplement that helps in reducing stress, improving sleep quality, and supporting muscle relaxation. It plays a crucial role in maintaining nerve function and reducing fatigue. This product is ideal for individuals experiencing stress, anxiety, or sleep disturbances.",
    brand: {
      name: "Maathrey Wellness",
      id: "64b7735fae177ed4d70fb5c3"
    },
    category: {
      name: "Sleep",
      id: "63b9a063d214e1a02a2a6af8"
    },
    unit: "bottle",
    quantity: 60,
     colors: ["white"],
    type: "Supplement",
    itemInfo: "Best taken before bedtime.",
    status: "active"
  },
  {
    _id: "64b78b80cf982ba18a26b138",
    sku: "MAP-CAP-006",
    title: "PANCRELIV Liposomal Silymarin 60 Capsules",
    parent: "Liver & Pancreas",
    children: "Liver Detox",
    tags: [
      "liver",
      "detox",
      "silymarin"
    ],
    image: "https://res.cloudinary.com/di7xgmxuj/image/upload/v1773833515/PANCRELIV-LIPOSOMAL-SILYMARIN-60-CAPSULE-200-CC-BOTTLE-NUTRACEUTICAL_h9cq6s.jpg",
    originalPrice: 1100,
    price: 920,
    discount: 16,
    relatedImages: [
      "https://res.cloudinary.com/di7xgmxuj/image/upload/v1773833515/PANCRELIV-LIPOSOMAL-SILYMARIN-60-CAPSULE-200-CC-BOTTLE-NUTRACEUTICAL_h9cq6s.jpg"
    
    ],
    description: "PANCRELIV is a liver support supplement formulated with liposomal silymarin, known for its detoxifying properties. It helps protect liver cells, improve liver function, and support detoxification processes in the body. This supplement is beneficial for individuals looking to maintain a healthy liver and overall digestive health.",
     brand: {
      name: "Maathrey Wellness",
      id: "64b7735fae177ed4d70fb5c3"
    },
    category: {
      name: "Liver & Pancreas",
      id: "63a9a063d283e1a02a2a6afb"
    },
    unit: "bottle",
    quantity: 60,
    colors: ["white"],
    type: "Supplement",
    itemInfo: "Recommended for liver health.",
    status: "active"
  },
  {
    _id: "64b78b80cf982ba18a26b13f",
    sku: "MAP-TAB-007",
    title: "SCORICH Liposomal Iron 60 Tablets",
    parent: "Women Health",
    children: "Anemia Care",
    tags: [
      "iron",
      "hemoglobin",
      "anemia"
    ],
    image: "https://res.cloudinary.com/di7xgmxuj/image/upload/v1773833516/SCORICH-LIPOSOMAL-IRON-60-TABLET-200-CC-BOTTLE-NUTRACEUTICAL_yly89n.jpg",
    originalPrice: 800,
    price: 650,
    discount: 19,
    relatedImages: [
      "https://res.cloudinary.com/di7xgmxuj/image/upload/v1773833516/SCORICH-LIPOSOMAL-IRON-60-TABLET-200-CC-BOTTLE-NUTRACEUTICAL_yly89n.jpg"
    
    ],
    description: "SCORICH is an advanced iron supplement designed to improve hemoglobin levels and combat iron deficiency anemia. The liposomal formulation ensures better absorption and reduces common side effects like stomach discomfort. It is suitable for individuals with low iron levels and those needing improved energy and vitality.",
     brand: {
      name: "Maathrey Wellness",
      id: "64b7735fae177ed4d70fb5c3"
    },
    category: {
      name: "Women Health",
      id: "63a9a063d283e1a02a2a6af9"
    },
    unit: "bottle",
    quantity: 60,
   colors: ["white"],
    type: "Supplement",
    itemInfo: "Take with vitamin C for better absorption.",
    status: "active"
  },
  {
    _id: "64b78b80cf982ba18a26b145",
    sku: "MAP-TAB-008",
    title: "SORFAR 60 Tablets",
    parent: "Diabetic",
    children: "Blood Sugar Control",
    tags: [
      "diabetes",
      "sugar control"
    ],
    image: "https://res.cloudinary.com/di7xgmxuj/image/upload/v1773833515/SORFAR-60-TABLET-200-CC-BOTTLE-NUTRACEUTICAL_abe6kr.jpg",
    originalPrice: 1000,
    price: 850,
    discount: 15,
    relatedImages: [
      "https://res.cloudinary.com/di7xgmxuj/image/upload/v1773833515/SORFAR-60-TABLET-200-CC-BOTTLE-NUTRACEUTICAL_abe6kr.jpg"

    ],
    description: "SORFAR is formulated to help manage blood sugar levels effectively and support overall diabetic health. It works by improving glucose metabolism and maintaining stable energy levels throughout the day. This product is ideal for individuals looking for supportive care in managing diabetes.",
     brand: {
      name: "Maathrey Wellness",
      id: "64b7735fae177ed4d70fb5c3"
    },
    category: {
      name: "Diabetic",
      id: "63a9a063d283e1a02a2a6afc"
    },
    unit: "bottle",
    quantity: 60,
     colors: ["white"],
    type: "Supplement",
    itemInfo: "Use regularly for best results.",
    status: "active"
  },
  {
    _id: "64b78b80cf982ba18a26b13a",
    sku: "MAP-SOFT-009",
    title: "ULTRAREST Melatonin 60 Softgel Capsules",
    parent: "Sleep",
    children: "Sleep Aid Tablets",
    tags: [
      "melatonin",
      "sleep",
      "insomnia"
    ],
    image: "https://res.cloudinary.com/di7xgmxuj/image/upload/v1773833516/ULTRAREST-MELATONIN-60-SOFTGEL-CAPSULE-200-CC-BOTTLE-NUTRACEUTICAL_wcminx.jpg",
    originalPrice: 900,
    price: 780,
    discount: 13,
    relatedImages: [
      "https://res.cloudinary.com/di7xgmxuj/image/upload/v1773833516/ULTRAREST-MELATONIN-60-SOFTGEL-CAPSULE-200-CC-BOTTLE-NUTRACEUTICAL_wcminx.jpg"
    ],
    description: "ULTRAREST contains melatonin, a natural sleep hormone that helps regulate the sleep-wake cycle. It improves sleep quality, reduces insomnia, and promotes relaxation. This supplement is ideal for individuals facing sleep disturbances or irregular sleep patterns.",
      brand: {
      name: "Maathrey Wellness",
      id: "64b7735fae177ed4d70fb5c3"
    },
    category: {
      name: "Sleep",
      id: "63b9a063d214e1a02a2a6af8"
    },
    unit: "bottle",
    quantity: 60,
     colors: ["white"],
    type: "Supplement",
    itemInfo: "Take 30 minutes before bedtime.",
    status: "active"
  },
  {
    _id: "64b78b80cf982ba18a26b141",
    sku: "MAP-TAB-010",
    title: "WELJOINT Liposomal Calcium 60 Tablets",
    parent: "Joints",
    children: "Bone Strength",
    tags: [
      "calcium",
      "bones",
      "joints"
    ],
    image: "https://res.cloudinary.com/di7xgmxuj/image/upload/v1773833516/WELJOINT-LIPOSOMAL-CALCIUM-60-TABLET-200-CC-BOTTLE-NUTRACEUTICAL_cr2mwc.jpg",
    originalPrice: 950,
    price: 800,
    discount: 16,
    relatedImages: [
      "https://res.cloudinary.com/di7xgmxuj/image/upload/v1773833516/WELJOINT-LIPOSOMAL-CALCIUM-60-TABLET-200-CC-BOTTLE-NUTRACEUTICAL_cr2mwc.jpg"
     
    ],
    description: "WELJOINT is a calcium supplement designed to support strong bones and healthy joints. It helps improve bone density and reduce the risk of bone-related issues. The advanced formulation ensures better absorption and effectiveness, making it suitable for daily use.",
     brand: {
      name: "Maathrey Wellness",
      id: "64b7735fae177ed4d70fb5c3"
    },
    category: {
      name: "Joints",
      id: "63a9a063d283e1a02a2a6af8"
    },
    unit: "bottle",
    quantity: 60,
     colors: ["white"],
    type: "Supplement",
    itemInfo: "Supports bone density",
    status: "active"
  },
  {
    _id: "64b78b80cf982ba18a26b143",
    sku: "MAP-CAP-011",
    title: "WELLX Liposomal L-Arginine 60 Capsules",
    parent: "Men Health",
    children: "Performance Support",
    tags: [
      "arginine",
      "performance",
      "blood flow"
    ],
    image: "https://res.cloudinary.com/di7xgmxuj/image/upload/v1773833514/WELLX-LIPOSOMAL-L-ARGININE-60-CAPSULE-200-CC-BOTTLE-NUTRACEUTICAL_ii7uoj.jpg",
    originalPrice: 1100,
    price: 950,
    discount: 14,
    relatedImages: [
      "https://res.cloudinary.com/di7xgmxuj/image/upload/v1773833514/WELLX-LIPOSOMAL-L-ARGININE-60-CAPSULE-200-CC-BOTTLE-NUTRACEUTICAL_ii7uoj.jpg"
   
    ],
    description: "WELLX is formulated with L-Arginine to enhance blood circulation and improve overall physical performance. It supports cardiovascular health, boosts stamina, and helps improve energy levels. This supplement is beneficial for individuals looking to enhance endurance and overall vitality.",
     brand: {
      name: "Maathrey Wellness",
      id: "64b7735fae177ed4d70fb5c3"
    },
    category: {
      name: "Men Health",
      id: "63a9a063d283e1a02a2a6afd"
    },
    unit: "bottle",
    quantity: 60,
 colors: [
      
      "white"
    ],
    type: "Supplement",
    itemInfo: "Useful for stamina and circulation.",
    status: "active"
  }
  
]

module.exports = products;
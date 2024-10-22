
export const color = [
    "White",
    "Black",
    "Red",
    "Marun",
    "Being",
    "Pink",
    "Green",
    "Yellow",
]


export const  filters = [
    {
      id: 'color',
      name: 'Color',
      options: [
        { value: 'white', label: 'White', checked: false },
        { value: 'beige', label: 'Beige', checked: false },
        { value: 'blue', label: 'Blue', checked: true },
        { value: 'brown', label: 'Brown', checked: false },
        { value: 'green', label: 'Green', checked: false },
        { value: 'purple', label: 'Purple', checked: false },
        { value: 'yellow', label: 'yellow', checked: false },
      ],
    },
     
    {
      id: 'size',
      name: 'Size',
      options: [
        { value: 'S', label: 'S', checked: false },
        { value: 'M', label: 'M', checked: false },
        { value: 'L', label: 'L', checked: false },
        
      ],
    },
  ]


  export  const  singleFilter = [
    {
        id:"price",
        name:"Price",
        options:[
            {value:"159-399",label:"₹159 TO ₹399"},
            {value:"399-999",label:"₹399 TO ₹999"},
            {value:"999-1999",label:"₹999 TO ₹1999"},
            {value:"1999-3999",label:"₹999 TO ₹3999"},
            {value:"3999-4999",label:"₹3999 TO ₹4999"},
            {value:"4999-10000",label:"₹4999 TO ₹10000"},

        ]
    
    },
    {
        id:"disccount",
        name:"Discount Range",
        options:[
            {value:"10",label:"10% And Above"},
            {value:"20",label:"20% And Above"},
            {value:"30",label:"30% And Above"},
            {value:"40",label:"40% And Above"},
            {value:"50",label:"50% And Above"},
            {value:"60",label:"60% And Above"},
            {value:"70",label:"70% And Above"},
            {value:"80",label:"80% And Above"},
        ]
    },
    {
        id:"stock",
        name:"Availability",
        options:[
            {value:"in_stock",label:"In Stock"},
            {value:"out_of_stock",label:"Out of Stock"},
            

        ]
    
    }

]
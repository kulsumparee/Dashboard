import image1 from "../assets/cards/money.svg"
import image2 from "../assets/cards/order.svg"
import image3 from "../assets/cards/customer.svg"
import image4 from "../assets/cards/Balance.svg"


const Carddata = [
    {
        id: 1,
        para1: "Total earning",
        para2: "$50 New Sales",
        text1: "$859.25k",
        text2: "2.2%",
        icon: image1,


    },
    {
        id: 2,
        para1: "Order",
        para2: "40+ New Order",
        text1: "66,894", 
        icon: image2,

    },
    {
        id: 3,
        para1: "Customer",
        para2: "90+ New Customer",
        text1: "583.35M",
        icon: image3,

    },
    {
        id: 4,
        para1: "My Balance",
        para2: "40+ New Order",
        text1: "$365.89k",
        text2: "2.2%",
        icon: image4,
        class: "bg-red-500"

    },
]

export default Carddata;
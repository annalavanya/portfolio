import React from "react";
import ReactDOM from "react-dom/client";
import "react/jsx-dev-runtime";

// header
const HeaderComponent = () => {
    return (
        <div className="heading">
            <div className="img-div">
                <img className="img" src="https://i.pinimg.com/474x/59/5f/a5/595fa5ffb3d67f62ceabaa0d9a40d1e2.jpg" alt="Store Logo"/>
            </div>
            <div className="list">
                <ul className="ul-list">
                    <li className="li-style">Home</li>
                    <li className="li-style">About Us</li>
                    <li className="li-style">Contact Us</li>
                    <li className="li-style">Cart</li>
                </ul>
            </div>
        </div>
    )
}

const resList = [
    {
        id: 1,
        resName: "Lavanya Briyani",
        foodName: "Chicken Briyani",
        cuisines: ["Briyani", "Grill", "Tandoori"],
        ratings: "4.9 stars",
        time: "15 minutes",
        imageUrl: "https://vaya.in/recipes/wp-content/uploads/2018/03/South-Indian-Chicken-Biryani.jpg"
    },
    {
        id: 2,
        resName: "KFC",
        foodName: "Burger",
        cuisines: ["Fried Chicken", "Popcorn chicken", "pitza"],
        ratings: "4.5 stars",
        time: "25 minutes",
        imageUrl: "https://thumbs.dreamstime.com/b/unhealthy-fast-food-delivery-menu-featuring-assorted-burgers-cheeseburgers-nuggets-french-fries-soda-high-calorie-low-356045884.jpg"
    },
    {
        id: 3,
        resName: "Aruvi Bakery",
        foodName: "Chocolate Truffle Cake",
        cuisines: ["Varieties of cake", "Bread", "Sweets"],
        ratings: "4.4 stars",
        time: "30 minutes",
        imageUrl: "https://ocakes.in/storage/app/public/images/item/item-642ebb82b7613.jpg"
    },
    {
        id: 4,
        resName: "Dosa Corner",
        foodName: "Special Dosa",
        cuisines: ["Dosa", "Egg Dosa", "Aapam"],
        ratings: "4.2 stars",
        time: "20 minutes",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUAZ8hThSJYm7XyNw5gdEi_0FzYsQnfoyuAg&s"
    },
    {
        id: 5,
        resName: "Chicken World",
        foodName: "Grill",
        cuisines: ["Briyani", "Grill", "Tandoori"],
        ratings: "4.3 stars",
        time: "30 minutes",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfSoV634gXr8ICzWLFPt0b7gEa99yWUNJTeQ&s"
    },
    {
        id: 6,
        resName: "Dessert Corner",
        foodName: "Falooda",
        cuisines: ["Cakes", "Ice Cream", "Brownie"],
        ratings: "4.4 stars",
        time: "20 minutes",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7oV7glQZHt89xQoEazmKE2ElSfUYwPOLoyw&s"
    },
    {
        id: 7,
        resName: "Cakes World",
        foodName: "Caramel Cake",
        cuisines: ["Blueberry Cake", "Chocolate cake", "Plain Cake"],
        ratings: "4.8 stars",
        time: "40 minutes",
        imageUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_366/RX_THUMBNAIL/IMAGES/VENDOR/2025/2/24/e0408a5a-04a3-47b7-b88f-368a674ba6a0_955652.jpg"
    },
    {
        id: 8,
        resName: "Cookie World",
        foodName: "Donat",
        cuisines: ["Cookie", "Cake", "Biscuit"],
        ratings: "4.0 stars",
        time: "23 minutes",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzOKorD51LP7Sm3vJ21UxVIYPyRFnu0mtB1Q&s"
    },
    {
        id: 9,
        resName: "Sampoorna Veg",
        foodName: "Veg Meals",
        cuisines: ["Panner", "Ghee Rice", "Pulav"],
        ratings: "4.7 stars",
        time: "20 minutes",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa5MyL7AQPaqZX_47Af8s0piCfXfYQppTMug&s"
    },
    {
        id: 10,
        resName: "Choco Corner",
        foodName: "Ice Cream",
        cuisines: ["Roll Ice Cream","Blueberry Ice Crream", "Cone Ice Cream"],
        ratings: "4.6 stars",
        time: "30 minutes",
        imageUrl: "https://d4t7t8y8xqo0t.cloudfront.net/resized/750X436/eazytrendz%2F1825%2Ftrend20180327062018.jpg"
    }
]


//CardComponent
const CardComponent = (props) => {
    const { resName, foodName, cuisines, ratings, time, imageUrl } = props?.resData;
    return (
        <div className="card">
            <img className="card-img" 
            src= {imageUrl}
            alt="Food Image"/>
            <div className="card-content">
                <h4>{resName}</h4>
                <h4>{foodName}</h4>
                <h4>{cuisines.join(", ")}</h4>
                <h4>{ratings}</h4>
                <h4>{time}</h4>
            </div>
        </div>
    )
}

// body
const BodyComponent = () => {
    return (
        <div className="body">
            <div className="search-div">
                <h3>Search</h3>
            </div>
            <div className="container">
                {
                   resList.map((res) => (
                    <CardComponent key={res.id} resData = {res}/>
                   )) 
                }
            </div>
        </div>
    )
}



const MainApp = () => {
   return (<div className="main">
        <HeaderComponent/>
        <BodyComponent/>
    </div>)
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<MainApp/>);


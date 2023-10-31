import { useState } from "react";
import Header from "./Header";
import Form from "./Form";
import GroceryList from "./GroceryList";
import Footer from "./Footer";

const groceryItems = [
    {
        id: 1,
        name: "Kopi Tubruk",
        quantity: 4,
        checked: false,
    },
    {
        id: 2,
        name: "Garam Bubuk",
        quantity: 5,
        checked: true,
    },
    {
        id: 3,
        name: "Air Galon",
        quantity: 3,
        checked: true,
    },
    {
        id: 4,
        name: "Ayam Potong",
        quantity: 1,
        checked: false,
    },
];

export default function App() {
    const [items, setItems] = useState(groceryItems);

    function handleAddItem(item) {
        setItems([...items, item]);
    }

    function handleDeteleItem(id) {
        setItems(items.filter((item) => item.id !== id));
    }

    function handleToggleItem(id) {
        setItems(
            items.map((item) => {
                if (item.id === id) {
                    return { ...item, checked: !item.checked };
                }
                return item;
            })
        );
    }

    function handleClearItems() {
        setItems([]);
    }

    return (
        <div className="app">
            <Header />
            <Form onAddItem={handleAddItem} />
            <GroceryList
                items={items}
                onDeleteItem={handleDeteleItem}
                onToggleItem={handleToggleItem}
                onClearItems={handleClearItems}
            />
            <Footer items={items} />
        </div>
    );
}


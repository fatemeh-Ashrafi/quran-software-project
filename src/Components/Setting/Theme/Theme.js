import "./Theme.css";
import React, { createContext, useState, useEffect } from "react";
import ReactSwitch from "react-switch";

export const ThemeContext = createContext("light");

function Theme() {
    const [themeState, setThemeState] = useState(false);

    useEffect(() => {
        const getTheme = localStorage.getItem("Them");
        if (getTheme === "dark") {
            setThemeState(true);
        }
        // این قسمت کارش اینه بره اون مقداری که ست کردیم رو بخونه
    }, []);

    useEffect(() => {
        if (themeState) {
            localStorage.setItem("Them", "dark"); 
            // این میگه اگه اونو خوندی و تم دارک بود
            document.body.classList.add("dark-mode");
            // بیا توی صفحه بگرد و کلس نیم دارک مود رو اجرا کن 
        } else {
            //  این قسمتم مثل بالایی فقط وقتی تم لایت بود 
            localStorage.setItem("Them", "light");
            document.body.classList.remove("dark-mode");
        }
    }, [themeState]);

    return (
        <div className="App">
           
            <div className="switch">
                <ReactSwitch
                    onChange={() => setThemeState(!themeState)}
                    checked={themeState === true}
                />
            </div>

            <div>
                <h1>Theme </h1>
            </div>
        </div>
    );
}

export default Theme;

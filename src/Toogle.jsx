import React from 'react'
import { useEffect, useState } from 'react'
import { ReactComponent as Sun } from "../src/images/Moon.svg";
import { ReactComponent as Moon } from "../src/images/Sun.svg";


function Toogle() {

    const [theme, setTheme] = useState("light-theme")

    useEffect(() => {
        document.body.className = theme;
    }, [theme])

    const toogleTheme = () => {
        if (theme === "light-theme") {
            setTheme('dark-theme');
        }
        else {
            setTheme('light-theme');
        }
    }

    return (
        <>
            <div className="dark_mode">
                <input
                    type="checkbox"
                    className="dark_mode_input"
                    id='darkmode-toggle'
                    onClick={toogleTheme}
                />

                <label
                    className='dark_mode_label'
                    htmlFor='darkmode-toggle'>

                  <Sun/>
                  <Moon/>      
                    </label>
            </div>
        </>
    )
}

export default Toogle

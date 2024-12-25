import { useState } from 'react';
import './main.css';
import { myProjects } from './myProjects';
import { AnimatePresence, motion } from 'framer-motion';

export default function Main() {
    const [currentActive, setCurrentActive] = useState("all");
    const [arr, setArr] = useState(myProjects);

    const handleClick = (buttonCategory) => {
        setCurrentActive(buttonCategory);
        const newArr = myProjects.filter((item) =>
            item.category.includes(buttonCategory)
        );
        setArr(newArr);
    };

    return (
        <>
            <h1 className='header'>My Projects</h1>
            <main className='flex'>
                
                <section className='left-section flex'>
                    <button onClick={() => {
                        setCurrentActive("all");
                        setArr(myProjects);
                    }} className={currentActive === "all" ? 'active' : null}>
                        All Projects
                    </button>

                    <button onClick={() => { handleClick("css") }}
                        className={currentActive === "css" ? 'active' : null}>
                        HTML & CSS
                    </button>

                    <button onClick={() => { handleClick("js") }}
                        className={currentActive === "js" ? 'active' : null}>
                        JavaScript
                    </button>

                    <button onClick={() => { handleClick("react") }}
                        className={currentActive === "react" ? 'active' : null}>
                        React & MUI
                    </button>

                    <button onClick={() => { handleClick("next") }}
                        className={currentActive === "next" ? 'active' : null}>
                        Next.js
                    </button>
                </section>

                <section className='flex right-section'>
                    <AnimatePresence>
                        {arr.map((item) => (
                            <motion.article
                                layout
                                initial={{ transform: "scale(0.4)" }}
                                animate={{ transform: "scale(1)" }}
                                transition={{ type: "spring", damping: 8, stiffness: 50 }}
                                key={item.imgPath}
                                className='card'
                            >
                                <a href={item.projectLink} target="_blank" rel="noopener noreferrer">
                                    <img width={266} src={item.imgPath} alt={item.projectTitle} />
                                </a>
                                <div style={{ width: "266px" }} className="box">
                                    <h1 className='title'>{item.projectTitle}</h1>
                                    <p className='sub-title'>{item.description}</p>
                                    <div className="flex icons">
                                        <div style={{ gap: "11px" }} className='flex'>
                                            <a href={item.githubLink} target="_blank" rel="noopener noreferrer">
                                                <div className="icon-github"></div>
                                            </a>
                                        </div>
                                        <a className='link flex' href={item.projectLink} target="_blank" rel="noopener noreferrer">
                                            more
                                            <span style={{ alignSelf: "end" }} className='icon-arrow-right2'></span>
                                        </a>
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </AnimatePresence>
                </section>
            </main>
        </>
    );
}

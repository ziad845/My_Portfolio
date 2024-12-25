import { useEffect, useState } from 'react';
import './header.css';

export default function Header() {

  const [showModel, setShowModel] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("currentMode") ?? "dark");

  useEffect(() => {
    if (theme === "light") {
      document.body.classList.remove('dark');
      document.body.classList.add("light");
    } else {
      document.body.classList.remove('light');
      document.body.classList.add("dark");
    }
  }, [theme]);

  return (
    <header className='flex'>
      <button onClick={() => setShowModel(true)} className='menu icon-menu flex'></button>

      <div />

      <nav>
        <ul className='flex'>
          <li>
            <a href="#header">About</a> {/* رابط يؤدي إلى بداية الصفحة */}
          </li>
          <li>
            <a href="#skill">Skills</a> {/* رابط يؤدي إلى بداية الصفحة */}
          </li>
          <li>
            <a href="#projects">Projects</a> {/* رابط يؤدي إلى قسم المشاريع */}
          </li>
          <li>
            <a href="#contact">Contact</a> {/* رابط يؤدي إلى قسم الاتصال */}
          </li>
        </ul>
      </nav>

      <button onClick={() => {
        localStorage.setItem("currentMode", theme === "dark" ? "light" : "dark");
        setTheme(localStorage.getItem("currentMode"));
      }} className='mode flex'>
        {theme === "dark" ? (
          <span className='icon-moon-o'></span>
        ) : (
          <span className='icon-sun'></span>
        )}
      </button>

      {showModel && (
        <div className="fixed">
          <ul className="model">
            <li>
              <button className='icon-close' onClick={() => setShowModel(false)} />
            </li>
            {/* الروابط الداخلية في الـ Model */}
            <li><a href="#header">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      )}
    </header>
  );
}

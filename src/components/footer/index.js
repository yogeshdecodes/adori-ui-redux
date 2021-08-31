import React, { useState, useEffect } from 'react';
import Switch from 'react-switch';

const Footer = () => {
  const [checked, setChecked] = useState(() => {
    if (localStorage.getItem('theme') === 'dark') {
      return true;
    } else {
      return false;
    }
  });
  const [currentTheme, setCurrentTheme] = useState(
    localStorage.getItem('theme')
  );

  useEffect(() => {
    if (!currentTheme) {
      localStorage.setItem('theme', 'light');
      setCurrentTheme('light');
    } else if (currentTheme === 'dark') {
      let check = document
        .getElementsByTagName('html')[0]
        .classList.contains('dark-mode');
      if (!check)
        document.getElementsByTagName('html')[0].classList.toggle('dark-mode');
    } //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = (checked) => {
    if (currentTheme === 'dark') {
      document.getElementsByTagName('html')[0].classList.toggle('dark-mode');
      localStorage.setItem('theme', 'light');
      setCurrentTheme('light');
    } else if (currentTheme === 'light') {
      document.getElementsByTagName('html')[0].classList.toggle('dark-mode');
      localStorage.setItem('theme', 'dark');
      setCurrentTheme('dark');
    }

    setChecked(checked);
  };

  return (
    <footer className="wrapper">
      <section className="social-links ">
        <div>
          <a
            title="Facebook"
            target="_blank"
            rel="noreferrer"
            href="https://www.facebook.com/ListenBoise-115626550254875/"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            title="Instagram"
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/boiselisten"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            title="Youtube"
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/boiselisten"
          >
            <i className="fab fa-youtube"></i>
          </a>
          <a
            title="Twitter"
            target="_blank"
            rel="noreferrer"
            href="https://www.facebook.com/ListenBoise-115626550254875/"
          >
            <i className="fab fa-twitter"></i>
          </a>
        </div>
        <div className="dark-mode-container">
          <div className="moon-icon">
            <i className="fas fa-moon"></i>
          </div>
          <Switch
            onChange={handleChange}
            checked={checked}
            onColor="#33cc99"
            onHandleColor="#33cc99"
            uncheckedIcon={false}
            checkedIcon={false}
            handleDiameter={20}
            boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
            activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
            height={20}
            width={48}
            className="react-switch"
            id="material-switch"
          />
        </div>
      </section>
      <section className="footer-copyright ">
        <p> Connect with us and stay updated.</p>
        <p>© 2021 Illiad Media, All Rights Reserved</p>
      </section>
    </footer>
  );
};

export default Footer;

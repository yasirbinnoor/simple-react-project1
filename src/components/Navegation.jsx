import { useState } from 'react';
import styles from './Navegation.module.css';

const Navegation = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(prev => !prev);
    };

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <a href="/" className={styles.logoLink}>
                    <img src="/images/images.png" alt="Logo" className={styles.logo} />
                </a>

                <button className={styles.menuToggle} onClick={toggleMenu}>
                    ☰
                </button>

                <ul className={`${styles.nav} ${menuOpen ? styles.showMenu : ''}`}>
                    <li><a href="#" className={styles.navLink}>Menu</a></li>
                    <li><a href="#" className={styles.navLink}>Location</a></li>
                    <li><a href="#" className={styles.navLink}>About</a></li>
                    <li><a href="#" className={styles.navLink}>Contact</a></li>
                </ul>

                <div className={styles.signin}>
                    <button type="button" className={styles.signinButton}>Sign in</button>
                </div>
            </header>
        </div>
    );
};

export default Navegation;

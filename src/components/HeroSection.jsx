import React from 'react';
import styles from './HeroSection.module.css';
import { FaFacebookF, FaAmazon, FaShoppingCart, FaListUl } from 'react-icons/fa';

const HeroSection = () => {
    return (
        <div className={styles.heroContainer}>
            <div className={styles.textBox}>
                <h1 className={styles.heading}>YOUR FEET DESERVE THE BEST</h1>
                <p className={styles.paragraph}>
                    Your feet deserve the best, and we're here to help you with our shoes. Get comfort, style, and performance all in one place.
                </p>
                <div className={styles.buttonGroup}>
                    <button className={styles.shopBtn}>
                        <FaShoppingCart className={styles.btnIcon} />
                        Shop Now
                    </button>
                    <button className={styles.categoryBtn}>
                        <FaListUl className={styles.btnIcon} />
                        Category
                    </button>
                </div>
                <div className={styles.icons}>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={styles.icon}>
                        <FaFacebookF />
                    </a>
                    <a href="https://amazon.com" target="_blank" rel="noopener noreferrer" className={styles.icon}>
                        <FaAmazon />
                    </a>
                </div>
            </div>

            <div className={styles.imageBox}>
                <img src="/images/shoe1.png" alt="Hero" className={styles.heroImg} />
            </div>
        </div>
    );
};

export default HeroSection;

'use client'

import styles from './Popup.module.css'

interface PopupProps {
    isVisible: boolean
}

const Popup = ({isVisible} : PopupProps) => {
  return (
    <div className={`${styles.popup} ${isVisible ? '' : styles.invisible}`}>
        Copied to clipboard
    </div>
  );
};

export default Popup;

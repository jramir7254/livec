import styles from './Overlays.module.css'
import { createPortal } from 'react-dom';



export default function OverlayModule({ showing, onConfirm, onCancel, message }) {

    if (!showing) return null;


    return createPortal(
        <div className={styles['overlay-backdrop']}>
            <div className={styles['overlay-content']}>
                <p>{message}</p>
                <div className={styles['button-group']}>

                    <button className={`${styles.button} ${styles['button--cancel']}`} onClick={onCancel}>Cancel</button>
                    <button className={`${styles.button} ${styles['button--confirm']}`}onClick={onConfirm} >Confirm</button>
                </div>
            </div>
        </div>,
        document.body
    );
}
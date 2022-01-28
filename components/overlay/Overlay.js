import styles from './overlay.module.scss';

const Overlay = (props) => {
  if (props.inverted) {
    return (
        <div className={[styles.overlay, styles.inverted].join(' ')}></div>
    );
  }

  if (props.rotated) {
    return (
        <div className={[styles.overlay, styles.rotated].join(' ')}></div>
    );
  }

  return (
      <div className={styles.overlay}></div>
  );
};

export default Overlay;
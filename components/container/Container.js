import styles from './container.module.scss';

const Container = (props) => {
    if (props.inverted) {
        return (
            <div className={[styles.container, styles.inverted].join(' ')}>{props.children}</div>
        );
    } else {
        return (
            <div className={styles.container}>{props.children}</div>
        );
    }
};

export default Container;
import styles from '../styles/Row.module.css'
import Square from "./Square";

export default function Row(props) {
    return (
        <div className={styles.row}>
            <Square black={props.black} />
            <Square black={!props.black} />
            <Square black={props.black} />
            <Square black={!props.black} />
            <Square black={props.black} />
            <Square black={!props.black} />
            <Square black={props.black} />
            <Square black={!props.black} />
        </div>
    )
}
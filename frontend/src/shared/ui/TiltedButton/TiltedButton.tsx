import React from 'react'
import styles from './TiltedButton.module.scss'

type TiltedButtonProps = {
    text: string
}

const TiltedButton: React.FC<TiltedButtonProps> = ({ text }) => {
    return <button className={styles.btn}>{text}</button>
}

export default TiltedButton

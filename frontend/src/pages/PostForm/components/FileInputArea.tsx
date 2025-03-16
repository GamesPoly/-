import styles from './FileInputArea.module.scss'
import React, { MutableRefObject, useRef, useState } from 'react'

interface Props {
    onChangeFileInput: (files: FileList | null) => void
    small?: boolean
}

export const FileInputArea: React.FC<Props> = ({
    onChangeFileInput,
    small = false,
}) => {
    const fileInputRef: MutableRefObject<null | HTMLInputElement> =
        useRef<null | HTMLInputElement>(null)
    const [fileInputOnHover, setFileInputOnHover] = useState<boolean>(false)
    const [fileInputFilled, setFileInputFilled] = useState<boolean>(false)

    const handleChangeFileInput = () => {
        onChangeFileInput(fileInputRef.current!.files)
    }

    return (
        <div
            className={`${styles['drag-and-drop-area']} ${small ? styles['drag-and-drop-area-small'] : null} ${fileInputOnHover ? styles['drag-and-drop-area-hover'] : null}`}
            onClick={() => fileInputRef.current?.click()}
            onDragOver={(event) => {
                event.stopPropagation()
                event.preventDefault()
                setFileInputOnHover(true)
            }}
            onDragLeave={() => setFileInputOnHover(false)}
            onDrop={(event) => {
                event.preventDefault()
                setFileInputOnHover(false)
                if (fileInputRef.current) {
                    fileInputRef.current!.files = event.dataTransfer.files
                }
                setFileInputFilled(true)
            }}
        >
            <div className={styles['drag-and-drop-area__text']}>
                {fileInputFilled ? (
                    <div className={styles['drag-and-drop-area__filename']}>
                        <p>{fileInputRef.current?.files?.[0]?.name}</p>
                        <div
                            onClick={(event) => {
                                event.stopPropagation()
                                if (fileInputRef.current) {
                                    fileInputRef.current!.value = ''
                                }
                                handleChangeFileInput()
                                setFileInputFilled(false)
                            }}
                        >
                            &times;
                        </div>
                    </div>
                ) : (
                    <p>
                        <span>Выберите файл</span> или перетащите его сюда
                    </p>
                )}
            </div>
            <input
                onChange={(event) => {
                    if (fileInputRef.current) {
                        fileInputRef.current!.files = event.target.files
                    }
                    handleChangeFileInput()
                    setFileInputFilled(true)
                }}
                type="file"
                ref={fileInputRef}
                hidden
            />
        </div>
    )
}

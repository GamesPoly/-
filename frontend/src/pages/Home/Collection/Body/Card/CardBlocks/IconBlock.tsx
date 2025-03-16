import React from 'react'

type IconBlockProps = {
    srcIcon: string
    text: string
    reverse?: boolean
    alignEnd?: boolean
}

const IconBlock: React.FC<IconBlockProps> = ({
    srcIcon,
    text,
    reverse,
    alignEnd,
}) => {
    return (
        <div
            className={
                reverse ? 'icon-block icon-block--reverse' : 'icon-block'
            }
        >
            <img className={'icon-block__icon'} src={srcIcon}></img>
            <p
                style={alignEnd ? { textAlign: 'end' } : {}}
                className={
                    reverse
                        ? 'icon-block__text icon-block__text--reverse'
                        : 'icon-block__text'
                }
            >
                {text}
            </p>
        </div>
    )
}

export default IconBlock

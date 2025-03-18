import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Sidebar.module.scss'
import Star from '../../../shared/assets/decorate-star-mini.svg'

type Section = { id: number; name: string }

interface SidebarProps {
    sections: Section[]
    activeSectionId: number
    setActiveSectionId: (section: number) => void
}

export const Sidebar: React.FC<SidebarProps> = ({
    sections,
    activeSectionId,
    setActiveSectionId,
}) => {
    return (
        <div className={styles['post-form__sidebar']}>
            <img
                className={styles['sidebar__decoration']}
                src={Star}
                alt="Звезда"
            />
            {sections.map((section) => (
                <button
                    key={section.id}
                    onClick={() => setActiveSectionId(section.id)}
                    className={
                        activeSectionId === section.id
                            ? styles['sidebar__btn_active']
                            : styles['sidebar__btn']
                    }
                >
                    {section.name}
                </button>
            ))}
        </div>
    )
}

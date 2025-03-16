import React, { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import { Link } from 'react-router-dom'
import styles from './TeamDisplay.module.scss'
export default function TeamDisplay({ devTeamId }: { devTeamId: string }) {
    const [teamData, setTeamData] = useState({
        id: '1',
        name: 'Продам игруши',
        members: ['1', '2', '3', '4'],
        description:
            'Команда разработчиков, создавшая игры для MosPolyJam2023.',
    })
    const [isLoading, setIsLoading] = useState(true)

    /*   const fetchUserData = async (userId) => {
    try {
      const response = await fetch(`http://localhost:3001/teams/${devTeamId}`);
      const data = await response.json();

      return data;
    } catch (error) {
      console.error(`Error fetching dev team id ${devTeamId}:`, error);
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:3001/teams/${devTeamId}`,
        );
        const data = await response.json();

        setTeamData(data);
      } catch (error) {
        console.error(`Error fetching dev team id ${devTeamId}:`, error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []); */

    const fetchUserData = (memberId: string) => {
        switch (memberId) {
            case '1':
                return {
                    id: '1',
                    name: 'RuslanitoSS',
                    profileImgUrl:
                        'https://s3-alpha-sig.figma.com/img/af73/d68d/2f4be605ecc9804b6a55ce8143ce5bcd?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RBgHeQ6tlCAuHlww7QDSxQ8XKHreSkB0pR5HR~-8-nQ0UEWhpJomFmuq6Ov7dOvA6DLZmnwL-m6YFubEGun8G5SLrnXL0qAHsrweM-kK0JOK-wRMHXb9x0mKRxzrxsjXXrQ~ffjZNh10ltV51TQP0F8wJa~dprJRJ5TWCLv~MW6U8oUwLGDO-0gWnBb1akW8ABw9hr3ab3qQBkijpL40mVGcIBWRrI5s~IVBLehTRZMy3dZPcZVCxixS2yDo4LACQSg8fuGu0PjqiKcYaNm4M2hKIi6BUjy90e3zL0QebLeF0-4x27RB2MqGw0BTdMdA7zw5oRnwz50oqJFHCcVNhw__',
                }
            case '2':
                return {
                    id: '2',
                    name: 'EthanStorm',
                    profileImgUrl:
                        'https://s3-alpha-sig.figma.com/img/1727/aefa/118304f64ad2399dae96d7f8b2959181?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TO4uQJOomeYdGhviCsNdlpFySRO5gyhHet72qagKwZaH5H7pvxhWW~cwOxsm4SgChZLojzWE6c1rb522aWR4BZfkp4E0kkgIM6ciL3ONR5~U7avubXEBpD4LL4o8udAcbTe0Bg19qhwRTkLAiBDxmewamwYhTnKMaGdmGZHtRJ4xbl4jyAkncE8RRMspqZYM8Kocv9NUk0y1cT3zE9PmOJRLKxznjZpj6juOuOhjO-BuRytcyh3R3kjYYTTtE53cxDtND8-gLc4F~otQzSoKvXtt6Krhx-aybX3sIcp0p~yI6fAdsBDMIQAi~eL8OQhWFi4xSv5i8PGI8kTOwelTDw__',
                }
            case '3':
                return {
                    id: '3',
                    name: 'LilyGamerGirl',
                    profileImgUrl:
                        'https://s3-alpha-sig.figma.com/img/931b/8c25/1611d81f6d5f63158b237e8c0bb60ff6?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZJRgZxBUPzD9TASaqLfTJQpky3GjuEbDsrmKs~y4v~8l3Tqs82Cc2Jj-ksK2I~c5WSh73eVqJ1BA89yJRJG12C--j4qmJbojm9bYh1z501X3syYkFEpYr4L86yBusmYkWGSmBt~jKUkKVeWEWqnywjxudmlDC3fp6nCZYn9MhZ0RxI~gTpkj5UeDF-Zu2C-9UcqHq7zJWvZXqOKkGCm4ckYzVQER6PYfWTsRdeSJOyQ4SAdJYqyrd6RzUuCf4hxx3XCZrlQmRu0GN1pdHasDPP1zarTXb-m6zs4VCEVPd15N1FyDz3Lo4A1z888OhFgLIUfacuI2cgE7m~9iPfec-w__',
                }
            case '4':
                return {
                    id: '4',
                    name: 'OliverTech',
                    profileImgUrl:
                        'https://s3-alpha-sig.figma.com/img/b7e4/f071/5ae3bb1e6ea3da18907e260eb2eca73d?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=T6Jukz2YEK5VcRczDhosuLfGZSGEHp4O0KKhrOMCzBhrMR6tLR7hitE2YkSslQ-BBEHu7ZzE25AplVB9bCfxh4d5NAIzI0MFWmGdQSOELUNjuv5XNjnFw8fwZPsPdDW432KcAuFlObNnG5uaf1rowWLcYYjUftGZtaNi4Q6Br6cw4slpt1CUL~E8gS0gJCyO4U4aYEJxgHKtecPXkMMR4Ca9h68QhKtf4dhsb6SMOb4vulvHY0uXTcGS1qTpRMvkVoOcoHO~mVQfcK8Qk8Dl33XVZjWTmIrQ1P4gfBJMp6l9JK5rHEQmSK5fGDTMioNOKdOekfqYNOKMz8~4K0aLYw__',
                }
        }
    }

    return (
        <>
            <div className={styles['team-display__container']}>
                <div className={styles['team-display__members']}>
                    {teamData.members.map((memberId) => (
                        <Link
                            to={`/users/${memberId}`}
                            key={memberId}
                            className={styles['team-display__member-link']}
                        >
                            <img
                                src={fetchUserData(memberId)?.profileImgUrl}
                                alt={fetchUserData(memberId)?.name}
                                className={styles['team-display__member-img']}
                            />
                        </Link>
                    ))}
                </div>
                <div className={styles['team-display__right']}>
                    <p className={styles['team-display__team-label']}>
                        Команда
                    </p>
                    <p className={styles['team-display__team-name']}>
                        {teamData.name}
                    </p>
                </div>
            </div>
        </>
    )
}

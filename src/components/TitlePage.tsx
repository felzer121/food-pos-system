import React, {useState} from 'react';

interface TitlePageProps {
    title: string
    isDate: boolean
    search: boolean
}
const month = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'June',
    'July',
    'Aug',
    'Sept',
    'Oct',
    'Nov',
    'Dec',
];
const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
]


const TitlePage = ({title, isDate, search}: TitlePageProps) => {
    const currentDate = new Date()
    const [date] = useState(`${days[currentDate.getDay()]}, ${currentDate.getFullYear()} ${month[currentDate.getMonth()]}`)

    return (
        <div className='titlePage'>
            <div className='titlePage__info'>
                <h2>{title}</h2>
                <p>{date}</p>
            </div>
            {
                search && <div className='titlePage__input'>
                  <input type="text" placeholder='Search for food, coffe, etc..' />
                </div>
            }
        </div>
    );
};

export default TitlePage;
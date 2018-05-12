import React from 'react';

import {Doughnut} from 'react-chartjs-2';
import {FaStar} from 'react-icons/lib/fa';

const DoughnutCard = (props) => {

    const data = (canvas) => {
        return {
            labels: ["Javascript", "React", "Others"],
            datasets: [{
                label: 'algo',
                data: [30, 60, 10],
                backgroundColor: [
                    'rgb(254,104,134)',
                    'rgb(87,88,157)',
                ],
                borderWidth: 0,
            }],
        }
    }

    return (
        <div> 
            <h3><FaStar/> Fav<span className={'bold'}>Courses</span></h3>
            <Doughnut data={data} />
        </div>
    )
}
 
export default DoughnutCard;
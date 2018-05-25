import React from 'react';

import {Bar} from 'react-chartjs-2';
import {FaPercent} from 'react-icons/lib/fa';

const BarCard = (props) => {

    const data = (canvas) => {
        return {
            labels: ["Javascript", "React", "Macramé"],
            datasets: [{
                label: 'Average notes',
                data: [7, 9, 5, 0, 10],
                backgroundColor: [
                    'rgb(254,104,134)',
                    'rgb(87,88,157)',
                    'rgb(254,104,134)',                    
                ],
                borderWidth: 0,
            }],
        }
    }

    return (
        <div>
            <h3><FaPercent/> Average<span className={'bold'}>Notes</span></h3>
            <Bar data={data} options={{}}/>
        </div>
    )
}
 
export default BarCard;
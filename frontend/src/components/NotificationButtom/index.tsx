import axios from 'axios';
import icon from '../../assets/img/notification-icon.svg'
import { BASE_URL } from '../../utils/request';
import './style.css'

type Props = {
    saleId: number;
}

function handleClick(id: number){
    axios(`${BASE_URL}/sales/${id}/notification`)
        .then(response => {
            console.log("Sucesso");
        })
}

function NotificationButtom({saleId} : Props) {   

    return (

        <div className="meta-red-btn" onClick={() => handleClick(saleId)}>
            <img src={icon} alt="notificar"/>            
        </div>

    )
}

export default NotificationButtom
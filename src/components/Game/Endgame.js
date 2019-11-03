import React, {Component} from 'react';
import './Endgame.css';

class Endgame extends Component {
    
    render () {
        if (this.props.outcome) {
             return (
            <div className = "ending-page" >
                <p><strong>WINNER WINNER CHICKEN DINNER</strong></p>
                <img src = "https://res.cloudinary.com/teepublic/image/private/s--xRlv7eQ_--/t_Preview/b_rgb:42332c,c_limit,f_jpg,h_630,q_90,w_630/v1541876140/production/designs/3479222_0.jpg" alt = "win"/>
            </div>
            )
        } 
        else {
            return (
                <div className = "ending-page">
                    <p><strong>GAME OVER</strong></p>
                    <img src = "https://fsa.zobj.net/crop.php?r=0ZfAZ3qrrkdCcPeZC4mS_4Cc8RI-uhrv1IL99GWh5jzxRIDm2jead7tvMb0_hHbtbh6Qv9pymBVux2TFQZyVayeU5Zn73C1yGxpGA0ls96ff7pcy1H-jHU03lZhSkqpQ5RkUoM6Ip9NuXR2Y" alt = "lose"/>
                </div>
            )
        }
       
    }
    
}
    


export default Endgame;
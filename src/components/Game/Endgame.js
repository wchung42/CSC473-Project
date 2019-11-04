import React, {Component} from 'react';
import './Endgame.css';
import 'bootstrap/dist/css/bootstrap.css';

class Endgame extends Component {
    
    render () {
        if (this.props.outcome) {
             return (
            <div className = "ending-page" >
                <p id = "message"><strong>WINNER WINNER CHICKEN DINNER</strong></p>
                <img id = "outcome-img" src = "https://res.cloudinary.com/teepublic/image/private/s--xRlv7eQ_--/t_Preview/b_rgb:42332c,c_limit,f_jpg,h_630,q_90,w_630/v1541876140/production/designs/3479222_0.jpg" alt = "win"/>
                    <div className = "container">
                        <form id = "feedback-form">
                            <div className = "form-group" id = "rating">    
                                <label for = "rating" id = "rating-label">Rating:</label>
                                <select class = "form-control" id = "rating-select">
                                    <option defaultValue>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                            </div>
                            <br/>
                            <div className = "form-group">     
                                <label for = "feedback">Review:</label>
                                <textarea className = "form-control" id = "feedback" placeholder = "Write your review"/>
                            </div>      
                        </form>
                    </div>
                </div>
                
            )
        } 
        else {
            return (
                <div className = "ending-page">
                    <p id = "message"><strong>GAME OVER</strong></p>
                    <img id = "outcome-img" src = "https://fsa.zobj.net/crop.php?r=0ZfAZ3qrrkdCcPeZC4mS_4Cc8RI-uhrv1IL99GWh5jzxRIDm2jead7tvMb0_hHbtbh6Qv9pymBVux2TFQZyVayeU5Zn73C1yGxpGA0ls96ff7pcy1H-jHU03lZhSkqpQ5RkUoM6Ip9NuXR2Y" alt = "lose"/>
                </div>
            )
        }
       
    }
    
}
    


export default Endgame;
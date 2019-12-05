import React, { Component } from 'react';
import './Endgame.css';
import 'bootstrap/dist/css/bootstrap.css';
import { API, graphqlOperation } from 'aws-amplify';
import * as mutations from '../../graphql/mutations';
//props this file needs:
// id, AtQuestion,Players

class Endgame extends Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async handleSubmit(e) {
        e.preventDefault();
        const userName = this.props.gameUserName;
        const userRating = Number(e.target.rating.value);
        const userReview = e.target.review.value;
        const reviewId = "00" + this.props.gameId + userName;
        const reviewCount = this.props.gameReviewCount + 1;
        const averageRating = Math.round((Number(this.props.gameAverageRating) + userRating) / reviewCount * 100) / 100;
        console.log('Rating: ' + userRating);
        console.log('Review: ' + userReview);
        console.log('')
        const newReview = {
            id: reviewId,
            rating: userRating,
            review: userReview,
            username: userName,
            reviewGameId: this.props.gameId
        }
        const newReviewCount = {
            id: this.props.gameId,
            ReviewCount: reviewCount,
            Average_Rating: averageRating.toString()
        }
        try {
            await API.graphql(graphqlOperation(mutations.createReview, { input: newReview }));
        } catch (errors) {
            try {
                await API.graphql(graphqlOperation(mutations.updateReview, { input: newReview }));
            } catch (error) { console.log(error) }
        }

        try {
            await API.graphql(graphqlOperation(mutations.updateGame, { input: newReviewCount }));
        } catch (errors) { console.log(errors) }


        // clear form
        // e.target.reset();
    }

    render() {
        if (this.props.outcome) {
            return (
                <div className="ending-page" >
                    <p id="message"><strong>WINNER WINNER CHICKEN DINNER</strong></p>
                    <img id="outcome-img" src="https://res.cloudinary.com/teepublic/image/private/s--xRlv7eQ_--/t_Preview/b_rgb:42332c,c_limit,f_jpg,h_630,q_90,w_630/v1541876140/production/designs/3479222_0.jpg" alt="win" />

                    <div className='section-divider'>
                        <hr />
                    </div>
                    <div className='section-title'>
                        <h3>Tell us about your experience</h3>
                    </div>
                    <div className="review-form-container">
                        <form id="review-form" onSubmit={this.handleSubmit}>
                            <div className="form-group" id="rating">
                                <label for="rating" className="form-label">Rating (Required)</label>
                                <select className="form-control" id="rating" required>
                                    <option defaultValue>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                            </div>
                            <br />
                            <div className="form-group">
                                <label for="feedback" className="form-label">Review (Required)</label>
                                <textarea className="form-control" id="review" rows="5" required />
                            </div>
                            <br />
                            <button className="review-submit-button btn-lg" type="submit">Submit</button>
                        </form>
                    </div>
                </div>

            )
        }
        else {
            return (
                <div className="ending-page">
                    <p id="message"><strong>GAME OVER</strong></p>
                    <img id="outcome-img" src="https://fsa.zobj.net/crop.php?r=0ZfAZ3qrrkdCcPeZC4mS_4Cc8RI-uhrv1IL99GWh5jzxRIDm2jead7tvMb0_hHbtbh6Qv9pymBVux2TFQZyVayeU5Zn73C1yGxpGA0ls96ff7pcy1H-jHU03lZhSkqpQ5RkUoM6Ip9NuXR2Y" alt="lose" />
                    <div className='section-divider'>
                        <p>_________________________________</p>
                    </div>
                    <div className='section-title'>
                        <h3>Tell us about your experience</h3>
                    </div>
                    <div className="review-form-container">
                        <form id="review-form" onSubmit={this.handleSubmit}>
                            <div className="form-group" id="rating">
                                <label for="rating" className="form-label">Rating (Required)</label>
                                <select className="form-control" id="rating-select" required>
                                    <option defaultValue>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                            </div>
                            <br />
                            <div className="form-group">
                                <label for="feedback" className="form-label">Review (Required)</label>
                                <textarea className="form-control" id="feedback" rows="5" required />
                            </div>
                            <br />
                            <button className="review-submit-button btn-lg" type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            )
        }

    }

}



export default Endgame;
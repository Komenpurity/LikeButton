
import { Component } from 'react';

export default class LikeButton extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         count: 100,
         updated: false
      }
      this.handleLikeButton = this.handleLikeButton.bind(this)
    }


    handleLikeButton(){ 
        if(!this.state.updated){
            this.setState(prevstate => ({
                count: prevstate.count + 1,
                updated: true
            }))
        } else {

            this.setState(prevstate => ({
                count: prevstate.count - 1,
                updated: false
            }))

        }
            
        
    }


    render() {
        return (
            <>
                <div>
                    <h2>Like Button</h2>

                    <button className= "like-button" onClick={this.handleLikeButton}>Like | 
                    <span className='likes-counter'>{this.state.count}</span>
                     </button> 

                </div>
                <style>{`
                    .like-button {
                        font-size: 1rem;
                        padding: 5px 10px;
                        color:  #585858;
                    }
                   .liked {
                        font-weight: bold;
                        color: #1565c0;
                   }
                `}</style>
            </>
        );
    }
}

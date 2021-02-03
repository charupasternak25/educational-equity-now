import React, { Component } from 'react';

class Cards extends Component {
    render() {
        return(
            <div className="col s12 m6 l4">
                <div className="card">
                  <div className="card-image">
                    <img style={{height: '177px'}} src={this.props.cardImage} alt={this.props.altText} />
                  </div>
                  <div className="card-content">
                    <span className="card-title green-text">{this.props.cardTitle}</span>                                        
                  </div>
                </div>
              </div>
        );
    }
}

export default Cards;
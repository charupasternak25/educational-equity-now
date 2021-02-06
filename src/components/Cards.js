import React, { Component } from 'react';
import '../components/cards.scss';

class Cards extends Component {
    render() {
        return(
            <div className="col s12 m6 l4">
                <div className="card">
                  <div className="card-image">
                    <img style={{height: '177px'}} src={this.props.cardImage} alt={this.props.altText} responsive-img materialboxed />
                  </div>
                  <div className="card-content">
                    <span className="card-title white-text center">
                      <a className="link-styles" href={this.props.cardLink}>{this.props.cardTitle}</a>
                    </span>
                  </div>
                </div>
              </div>
        );
    }
}

export default Cards;
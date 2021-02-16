import React, { Component } from 'react';
import '../components/cards.scss';

class Cards extends Component {
    render() {
        return(
            <div className="col s12 m6 l4">
                <div className="card hoverable">
                  <div className="card-image" style={{ backgroundColor: this.props.cardColor }}>
                    <img style={{height: '175px', paddingTop: this.props.paddingTop || 0, paddingBottom: this.props.paddingBottom || 0, width: this.props.width || '100%', marginLeft: this.props.marginLeft || 0 }} src={this.props.cardImage} alt={this.props.altText} responsive-img materialboxed />                    
                  </div>
                  <div className="card-content">
                    <span className="card-title white-text center">
                      <a className="link-styles" href={this.props.cardLink} target={this.props.target}>{this.props.cardTitle}</a>
                    </span>
                  </div>
                </div>
              </div>
        );
    }
}

export default Cards;
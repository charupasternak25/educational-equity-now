import React, { Component } from 'react';
import '../components/cards.scss';

class Cards extends Component {
    render() {
        return(
            <div className="col s12 m6 l4">
                <div className="card hoverable">
                  <a className="link-styles" href={this.props.cardLink} target={this.props.target}>
                    <div className="card-image center" style={{ backgroundColor: this.props.cardColor }}>
                      <img 
                        style={{
                          height: '15rem', 
                          paddingTop: this.props.paddingTop || 0, 
                          paddingBottom: this.props.paddingBottom || 0, 
                          width: this.props.width || '100%', 
                          marginLeft: this.props.marginLeft || 0 
                        }} 
                        src={this.props.cardImage} 
                        alt={this.props.altText} 
                        responsive-img 
                        materialboxed
                      />                    
                    </div>
                    <div className="card-content">
                      <span className="card-title white-text center">
                        {this.props.cardTitle}
                      </span>
                    </div>
                  </a>
                </div>
              </div>
        );
    }
}

export default Cards;
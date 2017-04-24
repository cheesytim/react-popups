/**
 *
 * Popup
 *
 */

import React, { Children } from 'react';

import {
  StyledPopup,
  PopupContent,
  PopupBackDrop,
  PopupBtn,
} from './styles';

export class Popup extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);

    this.state = {
      visible: false,
    };

    this.changeVisible = this.changeVisible.bind(this);
    this.hide = this.hide.bind(this);
  }

  changeVisible() {
    this.setState({ visible: !this.state.visible });
  }

  hide() {
    this.setState({ visible: false });
  }

  render() {
    let content;
    if (this.props.isControlled) {
      content = this.props.isVisible && (
        <div>
          <PopupBackDrop onClick={this.props.handleClickOnBackdrop} />
          <PopupContent onClick={(event) => event.stopPropagation()}>
            {Children.toArray(this.props.children)}
          </PopupContent>
        </div>
      );
    } else {
      content = (
        <div>
          <PopupBtn onClick={this.changeVisible} style={this.props.btnStyles}>{this.props.btnSign}</PopupBtn>
          {this.state.visible &&
            <div>
              <PopupBackDrop onClick={this.hide} />
              <PopupContent>
                {Children.toArray(this.props.children)}
              </PopupContent>
            </div>
          }
        </div>
      );
    }
    return (
      <StyledPopup>
        {content}
      </StyledPopup>
    );
  }
}

Popup.propTypes = {
  isControlled: React.PropTypes.bool,
  isVisible: React.PropTypes.bool,
  btnSign: React.PropTypes.string,
  btnStyles: React.PropTypes.object,
  handleClickOnBackdrop: React.PropTypes.func,
  children: React.PropTypes.object,
};

Popup.defaultProps = {
  isControlled: false,
  isVisible: false,
  btnSign: 'Popup button',
  btnStyles: {},
  handleClickOnBackdrop: () => {},
};

export default Popup;

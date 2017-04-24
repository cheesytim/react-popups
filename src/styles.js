import styled from 'styled-components';

const StyledPopup = styled.div`
  position: absolute;
  left: 0;
  top: 0;
`;

const PopupContent = styled.div`
  position: relative;
  z-index: 9999;
`;

const PopupBackDrop = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 9998;
  cursor: arrow;
`;

const PopupBtn = styled.button`
  box-sizing: border-box;
`;

export {
  StyledPopup,
  PopupContent,
  PopupBackDrop,
  PopupBtn,
};


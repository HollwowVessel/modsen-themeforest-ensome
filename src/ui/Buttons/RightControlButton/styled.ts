import styled from 'styled-components';
import arrowEnabled from './../../../assets/images/icons/buttons/rightArrow.png';
import arrowDisabled from './../../../assets/images/icons/buttons/rightArrowDisabled.png';

export const LeftControl = styled.button<Pick<{ arrow: boolean }, 'arrow'>>`
  position: relative;
  background: #f0f9ff;
  border-radius: 20px;
  border: none;
  width: 110px;
  height: 60px;
  cursor: pointer;
  margin: 0 0 0 10px;
  &:after {
    content: '';
    position: absolute;
    width: 30px;
    height: 30px;
    background: url(${({ arrow }) =>
      !arrow ? `${arrowEnabled}` : `${arrowDisabled}`});
    top: 15px;
    right: 40px;
  }
`;

export const Image = styled.img`
  width: 30px;
  height: 30px;
`;

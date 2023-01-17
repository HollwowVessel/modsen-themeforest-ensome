import styled from 'styled-components';
// eslint-disable-next-line import/no-useless-path-segments
import arrowEnabled from './../../../assets/images/icons/buttons/leftArrow.png';
import arrowDisabled from './../../../assets/images/icons/buttons/leftArrowDisabled.png';

export const LeftControl = styled.button<Pick<{ arrow: boolean }, 'arrow'>>`
  background: #f0f9ff;
  width: 110px;
  cursor: pointer;
  height: 60px;
  border-radius: 20px;
  border: none;
  margin: 0 0 0 10px;
  position: relative;
  &:after {
    content: '';
    background: url(${({ arrow }) =>
      !arrow ? `${arrowEnabled}` : `${arrowDisabled}`});
    width: 30px;
    height: 30px;
    position: absolute;
    top: 15px;
    right: 40px;
  }
`;

import { keyframes } from 'styled-components';

export const slideAnimationOut = keyframes`
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
`;

export const slideAnimationIn = keyframes`
    from {
        opacity: 1;
        
    }

    to {
        opacity: 0;        
    }
`;

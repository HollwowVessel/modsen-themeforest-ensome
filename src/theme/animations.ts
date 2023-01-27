import { keyframes } from 'styled-components';

export const slideAnimationOut = keyframes`
    from {
        transform: translateX(0%);
        
    }

    to {
        transform: translateX(-100%);
        
    }
`;

export const slideAnimationIn = keyframes`
    from {
        transform: translateX(100%);
        
    }

    to {
        transform: translateX(0);
        
    }
`;

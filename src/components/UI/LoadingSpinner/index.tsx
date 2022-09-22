import styled from 'styled-components';

const LoadingSpinner = styled.div`
    display: inline-block;
    width: 60px;
    height: 60px;
    margin: 3rem auto;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    &:after {
        content: " ";
        display: block;
        width: 44px;
        height: 44px;
        border-radius: 50%;
        border: 6px solid teal;
        border-color: teal transparent teal transparent;
        animation: spinner 1.2s linear infinite;
    }
    @keyframes spinner {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`;

export default LoadingSpinner;
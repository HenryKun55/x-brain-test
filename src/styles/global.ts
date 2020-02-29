import { createGlobalStyle } from 'styled-components';
import colors from './colors';

export default createGlobalStyle`

    @font-face {
        font-family: 'Gotham';
        src: local('Gotham'), url('./fonts/GothamMedium.ttf') format('truetype');
    }
    
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        height: 100%;
        box-sizing: border-box;
    }

    body {
        -webkit-font-smoothing: antialiased;
    }

    body, input, button {
        font-family: 'Gotham';
        font-size: 14px;
    }

    #root {
        margin: 0 auto;
    }

`;

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

    .react-switch-bg {
        border: 1px solid ${colors.primary};
    }

    .Dropdown-menu {
        height: auto;
    }

    .Dropdown-control {
        border-radius: 20px;
        background-color: ${colors.primary};
        color: ${colors.white};
        font-weight: bold;
        padding: 8px 30px 8px 10px;
    }

    .Dropdown-arrow {
        border-color: ${colors.white} transparent transparent;
    }
    
    .is-open .Dropdown-arrow {
        border-color: transparent transparent ${colors.white};
    }

    table {
        height: auto;
        border-collapse: collapse;
    }

    th, td {
        padding: 5px;
        text-align: left;    
    }
    
    td {
        padding: 15px;
    }

    table thead tr {background: ${colors.backgroundGrey}}

    table tbody tr:nth-child(even) {background: ${colors.backgroundGrey}}
    table tbody tr:nth-child(odd) {background: ${colors.white}}

`;

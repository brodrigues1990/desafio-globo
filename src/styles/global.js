 import { createGlobalStyle } from 'styled-components'

 export default createGlobalStyle`
 @font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  src: local('Roboto'), local('Roboto-Regular'),
       url('./fonts/Roboto/Roboto-Regular.ttf') format('TrueType'), /* IE6-IE8 */

}
    @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,700&display=swap');
@import url('https://fonts.googleapis.com/css?family=Caveat&display=swap');

*{
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;  
}

a{
  text-decoration: none;
  cursor: pointer;
}

html,body, #root {
    height: 100%;
}

body {
    background-color: #FAFAFA;
    -webkit-font-smoothing: antialiased;

   
  }

  body, input, button{
    font-family: -apple-system, BlinkMacSystemFont, 'Roboto', 'Segoe UI', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  }
 `;
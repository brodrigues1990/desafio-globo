import styled from 'styled-components'

export const Container = styled.div`
   display: block;
   max-width: 1360px;
   min-height: 100%;
   margin: 0 auto;
     @media only screen and (max-width: 768px) {
          padding: 0 ;
     }
     @media only screen and (min-width: 768px) {
          padding: 0 5% ;
     }
     @media only screen and (min-width: 1000px) {
          padding: 0 15% ;
     }
`
export const Row = styled.div`
   display: flex;
   flex-direction: row;
   width:100%;
   height:  auto;
   @media only screen and (max-width: 768px) {
          flex-direction: column;
     }
     @media only screen and (min-width: 768px) {
          flex-direction: row;
     }
`
export const Column = styled.div`
   flex: 1;
   min-height: 1px;
`
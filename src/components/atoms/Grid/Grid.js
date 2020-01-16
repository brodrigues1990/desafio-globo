import React, { Component } from 'react';
import styled from 'styled-components';


export const Container = styled.div `
   max-width: 1360px;
   padding-right:20px;
   padding-left: 20px;
   margin-right:auto;
   margin-left:auto;
   box-sizing:border-box;
   &:before,
   &:after {
       content: " ";
       display: table;
   }
   &:after{
       clear: both;
   }

   @media only scren and (min-width: 768px) {
        ${({ mobile }) => mobile && getWidthGrid(mobile)}
   }
   @media only scren and (min-width: 768px) {
        ${({ tablet }) => tablet && getWidthGrid(tablet)}
   }
   @media only scren and (min-width: 768px) {
        ${({ desktop }) => desktop && getWidthGrid(desktop)}
   }
`

export const  Row = styled.div `
   width:100%;
   height:  auto;
   float:left;
   box-sizing:border-box;
   &:before,
   &:after {
       content: " ";
       display: table;
   }
   &:after{
       clear: both;
   }
   @media only scren and (min-width: 768px) {
       width: ${props => (props.grid ? props.grid /12 * 100 : '8.33')}%
   }
`
function getWidthGrid(value){
    if(!value) return;

    let width = value /12 * 100;
    return `width: ${width}%;`

}
export const  Column = styled.div `
   float:left;
   padding: .25rem;
   min-height: 1px;
   box-sizing:border-box;
   width:100%;

   @media only scren and (min-width: 768px) {
        ${({ mobile }) => mobile && getWidthGrid(mobile)}
   }
   @media only scren and (min-width: 768px) {
        ${({ tablet }) => tablet && getWidthGrid(tablet)}
   }
   @media only scren and (min-width: 768px) {
        ${({ desktop }) => desktop && getWidthGrid(desktop)}
   }
`
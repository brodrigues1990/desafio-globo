import React from 'react'
import styled from 'styled-components'
import Loader from 'react-loader-spinner';

export const ContainerLoader = styled.div`
    width: 100%;
    height: 100;
    display: flex;
    justify-content: center;
    align-items: center;
`

export default function Loading (props) {
    return (
        <ContainerLoader>
            <Loader type="ThreeDots" color="#465a65de" height="100" width="100" />
        </ContainerLoader>
    );
}
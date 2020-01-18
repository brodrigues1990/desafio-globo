import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'

const ListContainer = styled.ul`
    background-color: #fff;
    border: 1px solid #e5e5e5;
    font-size: 1rem;
    line-height: 1.75rem;
    font-weight: 400;
    letter-spacing: .009375em;
    text-decoration: inherit;
    text-transform: inherit;
    line-height: 1.5rem;
    margin: 0;
    padding: 0;
    list-style-type: none;
    color: rgba(0,0,0,.87);
    color: var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87));
`
const ListItem = styled.li`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: flex-start;
    padding: 15px 20px;
    overflow: hidden;
    &:hover {
        background: #e1e4e8;
    }
`

const ImageContainer = styled.span`
    margin-left: 0;
    margin-right: 16px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
`
const ImageUser = styled.img`
    width: 100%;
    height: 50px;
`
const UserNameContainer = styled.span`
    font-size: 21px;
    color: #465A65;

`

const Users = [
    { login: 'usuario 1', avatar_url: 'https://avatars0.githubusercontent.com/u/8028407?s=460&v=4' },
    { login: 'usuario 2', avatar_url: 'https://avatars0.githubusercontent.com/u/8028407?s=460&v=4' },
    { login: 'usuario 3', avatar_url: 'https://avatars0.githubusercontent.com/u/8028407?s=460&v=4' },
    { login: 'usuario 4', avatar_url: 'https://avatars0.githubusercontent.com/u/8028407?s=460&v=4' },
    { login: 'usuario 5', avatar_url: 'https://avatars0.githubusercontent.com/u/8028407?s=460&v=4' },
    { login: 'usuario 6', avatar_url: 'https://avatars0.githubusercontent.com/u/8028407?s=460&v=4' },
    { login: 'usuario 7', avatar_url: 'https://avatars0.githubusercontent.com/u/8028407?s=460&v=4' },
    { login: 'usuario 6', avatar_url: 'https://image.flaticon.com/icons/svg/179/179323.svg' },

];

export default class SimpleList extends Component {
    render() {
        return (
            <ListContainer>
                {
                    Users.map((user, i) => {
                        return (
                            <Link to="/user">
                                <ListItem key={i}>
                                    <ImageContainer>
                                        <ImageUser src={user.avatar_url} alt="user" />
                                    </ImageContainer>
                                    <UserNameContainer>
                                        {user.login}
                                    </UserNameContainer>
                                </ListItem>
                            </Link>
                        )
                    })
                }


            </ListContainer>
        );
    }
}
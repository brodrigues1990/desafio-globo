import React, { Component } from 'react';
import styled from 'styled-components';
import { Link, withRouter } from 'react-router-dom'

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
    padding: 15px 35px;
    overflow: hidden;
    border-top: 1px solid #e5e5e5;
    cursor:pointer;
    &:hover {
        background: #e1e4e8;
        -webkit-box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2);
        box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2);
    }
    &:active {
        -webkit-box-shadow: 0 4px 5px 0 rgba(0,0,0,0.14), 0 1px 10px 0 rgba(0,0,0,0.12), 0 2px 4px -1px rgba(0,0,0,0.3);
        box-shadow: 0 4px 5px 0 rgba(0,0,0,0.14), 0 1px 10px 0 rgba(0,0,0,0.12), 0 2px 4px -1px rgba(0,0,0,0.3);
    }
`

const ImageContainer = styled.span`
    margin-left: 0;
    margin-right: 16px;
    width: 60px;
    height: 60px;
    border-radius: 50%;
`
const ImageUser = styled.img`
    width: 100%;
`
const UserNameContainer = styled.span`
    font-size: 21px;
    color: #465A65;
    font-weight: 300;
`

// const Users = [
//     { login: 'usuario 1', avatar_url: 'https://avatars0.githubusercontent.com/u/8028407?s=460&v=4' },
//     { login: 'usuario 2', avatar_url: 'https://avatars0.githubusercontent.com/u/8028407?s=460&v=4' },
//     { login: 'usuario 3', avatar_url: 'https://avatars0.githubusercontent.com/u/8028407?s=460&v=4' },
//     { login: 'usuario 4', avatar_url: 'https://avatars0.githubusercontent.com/u/8028407?s=460&v=4' },
//     { login: 'usuario 5', avatar_url: 'https://avatars0.githubusercontent.com/u/8028407?s=460&v=4' },
//     { login: 'usuario 6', avatar_url: 'https://avatars0.githubusercontent.com/u/8028407?s=460&v=4' },
//     { login: 'usuario 7', avatar_url: 'https://avatars0.githubusercontent.com/u/8028407?s=460&v=4' },
//     { login: 'usuario 6', avatar_url: 'https://image.flaticon.com/icons/svg/179/179323.svg' },
// ];


class SimpleList extends Component {

    UserClick(login) {
        let { history } = this.props;
        
        history.push({
            pathname: `/user/`+login,
            // search: login
        });
    }
    render() {
        
        return (
            <React.Fragment>
                {
                    this.props.users.map((user, i) => {
                        return (

                            <ListItem key={i} onClick={() => this.UserClick(user.login)}>
                                <ImageContainer>
                                    <ImageUser src={user.avatar_url} alt="user" />
                                </ImageContainer>
                                <UserNameContainer>
                                    {user.login}
                                </UserNameContainer>
                            </ListItem>

                        )
                    })
                }
            </React.Fragment>
        );
    }
}

export default withRouter(SimpleList);
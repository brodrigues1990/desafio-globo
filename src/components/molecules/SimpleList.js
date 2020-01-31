import React, { Component } from 'react'
import styled from 'styled-components'
import { withRouter } from 'react-router-dom'
import Text from '../atoms/Text'

export const ListItem = styled.li`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: flex-start;
    padding: 15px 35px;
    overflow: hidden;
    border-bottom: 1px solid #e5e5e5;
    cursor:pointer;
    transition: box-shadow 0.2s;
    -webkit-transition: width 0.2s;
    &:last-child{
        border-bottom: 0;
    }
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
export const ImageContainer = styled.span`
    margin-left: 0;
    margin-right: 16px;
    width: 60px;
    height: 60px;
    border-radius: 50%;
`
const ImageUser = styled.img`
    width: 100%;
`

class SimpleList extends Component {

    UserClick(login) {
        let { history } = this.props;

        history.push({
            pathname: `/user/` + login,
        });
    }
    render() {
        console.log(this.props);
        return (
            <React.Fragment>
                {
                    this.props.users.map((user, i) => {
                        return (
                            <ListItem key={i} onClick={() => this.UserClick(user.login)}>
                                <ImageContainer>
                                    <ImageUser src={user.avatar_url} alt="user" />
                                </ImageContainer>
                                <Text color="#465A65" fontSize="21px" fontWeight="300">
                                    {user.login}
                                </Text>
                            </ListItem>
                        )
                    })
                }
            </React.Fragment>
        );
    }
}

export default withRouter(SimpleList);
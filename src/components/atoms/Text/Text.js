import React from 'react'
import styled from 'styled-components'
import { prop, ifProp, switchProp } from 'styled-tools'

//Component Styles
const typeText = props => {
    switch(props.type) {
        case 'span':
        return <span {...props}>{props.children}</span>
        break
        case 'strong':
        return <strong {...props}>{props.children}</strong>
        break
        case 'abbr':
        return <abbr {...props}>{props.children}</abbr>
        break
        case 'legend':
        return <legend {...props}>{props.children}</legend>
        break
        case 'small':
        return <small {...props}>{props.children}</small>
        break
        case 'sub':
        return <sub {...props}>{props.children}</sub>
        break
        case 'sup':
        return <sup {...props}>{props.children}</sup>
        break
        case 'label':
        return <label {...props}>{props.children}</label>
        break
        default:
        case 'p':
            return <p {...props}>{props.children}</p>
        break
    }
}



const StyledText = styled(typeText)`
    font-family: ${prop('fontFamily')};

    font-weight:  ${ifProp('fontWeight', prop('fontWeight'))}; 
    font-size: ${ifProp('fontSize', prop('fontSize'))};

    color: ${ifProp('fontColor', prop('fontColor'))};

    margin: ${prop('margin')}; 
    padding: ${prop('padding')};   

    text-align:${ifProp('align', prop('align'))};
    line-height: ${ifProp('lineHeight', prop('lineHeight'))};
    ${ifProp('uppercase', `text-transform: uppercase;`)}
    ${ifProp('lowercase', `text-transform: lowercase;`)}
`

//Component Core
const Text = (props) => (
    <StyledText {...props}>{props.children}</StyledText>
);



export { Text }
export default Text
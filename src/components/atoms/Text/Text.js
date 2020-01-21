import React from 'react'
import styled, { css } from 'styled-components'
import { prop, ifProp, switchProp } from 'styled-tools'

//Component Styles
const typeText = props => {
    switch (props.type) {
        case 'h1':
            return <h1 {...props}>{props.children}</h1>
        case 'h2':
            return <h2 {...props}>{props.children}</h2>
        case 'h3':
            return <h3 {...props}>{props.children}</h3>
        case 'h4':
            return <h4 {...props}>{props.children}</h4>
        case 'h5':
            return <h5 {...props}>{props.children}</h5>
        case 'h6':
            return <h6 {...props}>{props.children}</h6>
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
        case 'p':
            return <p {...props}>{props.children}</p>
            break
        default:
            return <span {...props}>{props.children}</span>
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
    ${switchProp("size", {
    small: css`
            font-size: 13px;
            `,
    medium: css`
            font-size: 17px;
            `,
    large: css`
            font-size: 21px;
            `,
    s1: css`
            font-size: 14px;
            `,
    s2: css`
            font-size: 16px;
            `,
    m1: css`
            font-size: 18px;
            `,
    m2: css`
            font-size: 22px;
            `,
    l1: css`
            font-size: 24px;
            `,
    l2: css`
            font-size: 24px;
            `
})}
    ${switchProp('type', {
    span: css`display: inline-block;`,
    strong: css`font-weight: 600;`,
    abbr: css`cursor: help;`,
    legend: css`display: inline-block;margin: 0; padding: 0;`,
    p: css`width: 100%;`,
    h1: css`font-size: 26px;`,
    h2: css`font-size: 24px;`,
    h3: css`font-size: 22px;`,
    h4: css`font-size: 18px;`,
    h5: css`font-size: 14px;`,
    h6: css`font-size: 12px;`
})}
`


//Component Core
const Text = (props) => (
    <StyledText {...props}>{props.children}</StyledText>
);

Text.defaultProps = {
    fontFamily: 'Roboto',
    fontColor: '#465A65'
}

export { Text }
export default Text
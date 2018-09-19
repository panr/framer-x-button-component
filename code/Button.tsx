import * as React from "react"
import { PropertyControls, ControlType } from 'framer'
import styled, { injectGlobal } from 'styled-components'

injectGlobal`
  @import url('https://fonts.googleapis.com/icon?family=Material+Icons');
`

interface Props {
    isPrimary: boolean,
    isOutline: boolean,
    label: string,
    isIcon: boolean,
    icon: string,
    backgroundColor: string,
    textColor: string,
    fontFamily: "-apple-system" | "Arial" | "Courier" | "Courier New" | "Futura" | "Geneva" | "Georgia" | "Gill Sans" | "Helvetica" | "Helvetica Neue" | "Lucida Grande" | "Menlo" | "Monaco" | "Tahoma" | "Times" | "Verdana",
    fontSize: "12" | "14" | "16" | "18" | "20" | "22" | "24",
    fontWeight: "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900",
    letterSpacing: number,
    textTransform: "none" | "lowecase" | "uppercase",
    borderRadius: number,
    borderWidth: number,
}

const StyledButton = styled<Props, any>('button')`
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.isPrimary ? props.backgroundColor : props.isOutline ? 'transparent' : props.backgroundColor};
    color: ${props => props.isPrimary ? props.textColor : props.isOutline ? props.backgroundColor : props.textColor};
    border-width: ${props => props.isOutline ? props.borderWidth : 1}px;
    border-style: solid;
    border-color: ${props => props.backgroundColor};
    border-radius: ${props => props.borderRadius}px;
    box-shadow: ${props => props.isPrimary ? '0 6px 8px rgba(0, 0, 0, .12)' : props.isOutline && 'none'};
    overflow: hidden;
`

const StyledButtonInner = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
`

const IconContainer = styled<Props, any>('span')`
    font-size: ${props => props.fontSize}px;
    margin-right: ${props => Number(props.fontSize) / 2}px;
`

const StyledText = styled<Props, any>('span')`
    font-family: ${props => props.fontFamily};
    font-weight: ${props => props.fontWeight};
    font-size: ${props => props.fontSize}px;
    letter-spacing: ${props => props.letterSpacing / 100}em;
    text-transform: ${props => props.textTransform};
`

export class Button extends React.Component<Props> {

    static defaultProps = {
        width: 160,
        height: 44,
        isPrimary: false,
        isOutline: false,
        label: "Hello Friend!",
        isIcon: true,
        icon: "pan_tool",
        backgroundColor: "#F59D0D",
        textColor: "white",
        fontFamily: "-apple-system",
        fontSize: "16",
        fontWeight: "600",
        letterSpacing: 2,
        textTransform: "none",
        borderRadius: 8,
        borderWidth: 1,
    }

    static propertyControls: PropertyControls<Props> = {
        isPrimary: { type: ControlType.Boolean, title: "Primary" },
        isOutline: { type: ControlType.Boolean, hidden: props => props.isPrimary, title: "Outline" },
        isIcon: { type: ControlType.Boolean, title: "Show Icon" },
        icon: { type: ControlType.String, hidden: props => !props.isIcon, title: "Icon Name" },
        label: { type: ControlType.String, title: "Button Label" },
        backgroundColor: { type: ControlType.Color, title: "Background Color" },
        textColor: { type: ControlType.Color, hidden: props => props.isOutline && !props.isPrimary, title: "Text Color" },
        fontFamily: { type: ControlType.Enum, options: ["-apple-system", "Arial", "Courier", "Courier New", "Futura", "Geneva", "Georgia", "Gill Sans", "Helvetica", "Helvetica Neue", "Lucida Grande", "Menlo", "Monaco", "Tahoma", "Times", "Verdana"], title: "Font Family" },
        fontSize: { type: ControlType.Enum, options: ["12", "14", "16", "18", "20", "22", "24"], title: "Font Size" },
        fontWeight: { type: ControlType.Enum,
            options: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
            title: "Font Weight" },
        textTransform: { type: ControlType.SegmentedEnum, options: ["none", "lowercase", "uppercase"], optionTitles: ["None", "Lower", "Upper"], title: "Text Transform" },
        letterSpacing: { type: ControlType.Number, min: 0, max: 50, title: "Letter Spacing" },
        borderRadius: { type: ControlType.Number, title: "Border Radius" },
        borderWidth: { type: ControlType.Number, title: "Border Width" },
    }

    render() {
        const { isPrimary, isOutline, backgroundColor, textColor, icon, label, fontFamily, fontSize, fontWeight, letterSpacing, textTransform, isIcon, borderRadius, borderWidth } = this.props
        return (
            <StyledButton isPrimary={isPrimary} isOutline={isOutline} backgroundColor={backgroundColor} textColor={textColor} borderRadius={borderRadius} borderWidth={borderWidth}>
                <StyledButtonInner>
                    {isIcon && <IconContainer fontSize={fontSize} className="material-icons">{icon}</IconContainer>}
                    <StyledText fontFamily={fontFamily} fontSize={fontSize} fontWeight={fontWeight} letterSpacing={letterSpacing} textTransform={textTransform}>{label}</StyledText>
                </StyledButtonInner>
            </StyledButton>
        );
    }
}

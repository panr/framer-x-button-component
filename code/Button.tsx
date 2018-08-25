import * as React from "react";
import { PropertyControls, ControlType } from "framer";
import styled, { injectGlobal } from 'styled-components'

injectGlobal`
  @import url('https://fonts.googleapis.com/icon?family=Material+Icons');
`

interface Props {
    isPrimary: boolean,
    isOutline: boolean,
    label: string,
    isIcon: boolean,
    icon: any,
    backgroundColor: any,
    textColor: any,
    fontSize: "12" | "14" | "16" | "18" | "20" | "22" | "24",
    fontWeight: "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900",
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
    font-weight: ${props => props.fontWeight};
    font-size: ${props => props.fontSize}px;
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
        fontSize: "16",
        fontWeight: "600",
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
        fontSize: { type: ControlType.Enum, options: ["12", "14", "16", "18", "20", "22", "24"], title: "Font Size" },
        fontWeight: { type: ControlType.Enum,
            options: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
            title: "Font Weight" },
        borderRadius: { type: ControlType.Number, title: "Border Radius" },
        borderWidth: { type: ControlType.Number, title: "Border Width" },
    }

    render() {
        const { isPrimary, isOutline, backgroundColor, textColor, icon, label, fontSize, fontWeight, isIcon, borderRadius, borderWidth } = this.props
        return (
            <StyledButton isPrimary={isPrimary} isOutline={isOutline} backgroundColor={backgroundColor} textColor={textColor} borderRadius={borderRadius} borderWidth={borderWidth}>
                <StyledButtonInner>
                    {isIcon && <IconContainer fontSize={fontSize} className="material-icons">{icon}</IconContainer>}
                    <StyledText fontSize={fontSize} fontWeight={fontWeight}>{label}</StyledText>
                </StyledButtonInner>
            </StyledButton>
        );
    }
}

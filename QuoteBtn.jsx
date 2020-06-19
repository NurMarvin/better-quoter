const { React, getModuleByDisplayName } = require("powercord/webpack");
const Tooltip = getModuleByDisplayName("Tooltip", false);
module.exports = (({Button, Separator}) => class QuoteBtn extends React.Component {
    render() {
        if(!Button || !Separator) return null;
        return (<div>
            <Tooltip color="black" postion="top" text={document.documentElement.lang == "de" ? "Zitieren" : "Quote"}>
                {({onMouseLeave, onMouseEnter}) => (
                <Button onClick={this.props.onClick.bind(this)} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                    <svg width="26" height="26" style={{position: "relative", top: "-2px"}} className="icon-3Gkjwa">
                        <path fill="currentColor" d="M19.8401 5.39392C20.1229 4.73405 19.6389 4 18.921 4H17.1231C16.7417 4 16.3935 4.21695 16.2254 4.55933L13.3297 10.4581C13.195 10.7324 13.125 11.0339 13.125 11.3394V19C13.125 19.5523 13.5727 20 14.125 20H20C20.5523 20 21 19.5523 21 19V12.875C21 12.3227 20.5523 11.875 20 11.875H17.8208C17.4618 11.875 17.2198 11.508 17.3612 11.178L19.8401 5.39392ZM9.71511 5.39392C9.99791 4.73405 9.51388 4 8.79596 4H6.99809C6.61669 4 6.2685 4.21695 6.10042 4.55933L3.20466 10.4581C3.07001 10.7324 3 11.0339 3 11.3394V19C3 19.5523 3.44772 20 4 20H9.875C10.4273 20 10.875 19.5523 10.875 19V12.875C10.875 12.3227 10.4273 11.875 9.875 11.875H7.69577C7.33681 11.875 7.0948 11.508 7.2362 11.178L9.71511 5.39392Z"></path>
                    </svg>
                </Button>
                )}
            </Tooltip>
            <Separator />
        </div>)
    }
})
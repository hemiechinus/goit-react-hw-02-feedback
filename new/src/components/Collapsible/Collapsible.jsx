import { Component } from "react";
import { Wrapper, TriggerButton} from './Collapsible.style'

export class Collapsible extends Component {
    static defaultProps = {
        isOpen:false,
        isDisabled:false,
        triggerPosition: 'top',
        mt:0,
        mb:0,
        mr:0,
        ml:0,
    };
    state ={
        isOpen: this.props.isOpen,
    };
    toogle = () => {
        this.setState(state => ({isOpen:!state.isOpen}));
    };
    render() {
        const {isOpen} = this.state;
        const {children, isDisabled, triggerText, triggerPosition, mt, mb, mr, ml} = this.props;
        return <Wrapper mt={mt} mb={mb} mr={mr} ml={ml}>
            <TriggerButton 
            position={triggerPosition}
            type='button' disabled={isDisabled} 
            onClick={this.toogle}>
                {triggerText}
            </TriggerButton>
            <br/> 
            {isOpen && children}
        </Wrapper>;
    }
}
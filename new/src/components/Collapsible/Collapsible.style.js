import styled  from "styled-components";

export const Wrapper = styled.div`
display: flex;
flex-direction:column;
margin-top: ${props =>props.theme.spacing(props.mt)};
margin-bottom: ${props =>props.theme.spacing(props.mb)};
margin-right: ${props =>props.theme.spacing(props.mr)};
margin-left: ${props =>props.theme.spacing(props.ml)};

`;

export const TriggerButton = styled.button`
order: ${props=>(props.position === 'top' ? 0 : 1)};
`;
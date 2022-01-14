import styled from "styled-components"

const ListItem = styled.li`
padding: ${props => props.theme.spacing(1)};
cursor: pointer;

&:hover{
    color: ${props =>props.theme.colors.secondaryText};
}
`;
export const VideoList = ({videos,selected, onSelect})=> {
    console.log(selected);
    return <ul>{
        videos.map(video=>
        <ListItem key={video.id} onClick={()=>onSelect(video.link)}>{video.link}</ListItem>)
}</ul>
}
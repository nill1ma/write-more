import { Link } from 'react-router-dom'
import styled from 'styled-components'

type ItemProps = {
    isActive: boolean
}

export const AppContainer = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0;
`

export const Nav = styled.nav`
    width: 50%;
    display: flex;
`

export const Item = styled(Link)`
    background-color: ${(props: ItemProps) => props.isActive ? '#00BFFF' : ''};
    text-decoration:none;
    padding:10px;
    color: #1C1C1C;
    &:nth-child(2){
        margin-left: 10px;
    }
`
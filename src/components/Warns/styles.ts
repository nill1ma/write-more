import styled from 'styled-components'

type TWarns = {
    backGroundColor: string
}

export const Container = styled.div`
    display: flex;
    padding: 10px;
    background-color: ${(props: TWarns) => props.backGroundColor};
`
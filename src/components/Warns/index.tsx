import { useEffect, useState } from "react";
import { IWarn } from "../../Entities/Warn";
import { Container } from "./styles";



export default function Warns(props: IWarn) {
    const { message, type } = props
    const [backgroundColor, setBackgroundColor] = useState('')

    useEffect(() => { checktype() }, [type])

    const checktype = () => {
        switch (type) {
            case 'warn':
                setBackgroundColor('#FFD700')
                break
            case 'error':
                setBackgroundColor('#FF4500')
                break
            default:
                setBackgroundColor('#00FF7F')
        }
    }

    return <Container backGroundColor={backgroundColor}>
        {message}
    </Container>
}

import { Button } from "./styles";

type TCustonButton = {
    label: string
    action: () => void
}

export default function CustonButton(props: TCustonButton) {
    const { label, action } = props
    return <Button onClick={() => action()}>{label}</Button>
}

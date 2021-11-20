import { useEffect, useState } from "react";
import CustonButton from "../../components/CustomButton";
import { User } from "../../Entities/User";
import { getLocalStorage } from "../../helpers/persistense";
import * as Style from "./styles";


type FormAccount = {
    label: string,
    name: string,
    type: string,
    placeholder?: string
}


export default function CreateAccount() {

    const [formAccount, setFormAccount] = useState<FormAccount[]>([
        { placeholder: 'Type your name', label: 'Name', name: 'name', type: 'text' },
        { placeholder: 'Type your nickname', label: 'Nickname', name: 'nickName', type: 'text' },
        { placeholder: 'Type your email', label: 'Email', name: 'email', type: 'email' },
        { placeholder: 'Type your password', label: 'Password', name: 'password', type: 'password' }
    ])

    const [account, setAccount] = useState<User>({} as User)

    const handleAccount = (event: any) => {
        const { name, value } = event.target
        setAccount(prev => {
            return {
                ...prev,
                [name]: value
            }
        })
    }

    const save = () => {
        const accounts = getLocalStorage('accounts')
        localStorage.setItem('accounts', JSON.stringify([...accounts, account]))
    }

    return <Style.Contianer>
        <Style.Section>
            {formAccount.map((item: FormAccount) =>
                <Style.FieldArea key={item.name}>
                    <Style.Label>{item.label}</Style.Label>
                    <Style.Field placeholder={item.placeholder} type={item.type} name={item.name} onChange={(event) => handleAccount(event)} />
                </Style.FieldArea>
            )}
            <Style.FieldArea>
                <CustonButton action={save} label={'Save'} />
            </Style.FieldArea>
        </Style.Section>
    </Style.Contianer>
}
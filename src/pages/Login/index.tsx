import { useEffect, useState } from "react";
import { User } from "../../Entities/User";
import { getLocalStorage } from "../../helpers/persistense";
import { useNavigate } from 'react-router-dom'
import CustonButton from "../../components/CustomButton";
import * as Style from "./styles";
import Warns from "../../components/Warns";
import { IWarn } from "../../Entities/Warn";


type FormLogin = {
    label: string,
    name: string,
    type: string,
    placeholder?: string
}

export default function Login() {

    const [formLogin, setformLogin] = useState<FormLogin[]>([
        { placeholder: 'Type your email', label: 'Email', name: 'email', type: 'email' },
        { placeholder: 'Type your password', label: 'Password', name: 'password', type: 'password' }
    ])

    useEffect(() => {
        console.log('warn.message')
        console.log(warn.message)
    }, [])

    const history = useNavigate()

    const [user, setUser] = useState<User>({} as User)
    const [warn, setWarn] = useState<IWarn>({} as IWarn)

    const handleUser = (event: any) => {
        const { name, value } = event.target
        setUser(prev => {
            return {
                ...prev,
                [name]: value
            }
        })
    }

    const login = () => {
        const account = getLocalStorage('accounts')
        const hasAccount = isThereAnAccount(account)
        getStatusInformation(hasAccount)
        hasAccount && history('/create')
    }

    const isThereAnAccount = (account: User[]) => {
        return account.some((acc: User) => acc.email === user.email && acc.password === user.password)
    }

    const getStatusInformation = (hasAccount: boolean) => {
        hasAccount ? setWarn({ message: 'You are in', type: 'info' })
            : setWarn({ message: `Username or password aren't correct`, type: 'error' })
    }

    return <Style.Contianer>
        <Style.Section>
            {formLogin.map((item: FormLogin) =>
                <Style.FieldArea key={item.name}>
                    <Style.Label>{item.label}</Style.Label>
                    <Style.Field placeholder={item.placeholder} type={item.type} name={item.name} onChange={(event) => handleUser(event)} />
                </Style.FieldArea>
            )}
            <Style.FieldArea>
                <CustonButton action={login} label={'Enter'} />
            </Style.FieldArea>
            {warn.message && warn.message !== '' ? <Warns message={warn.message} type={warn.type} /> : <></>}
        </Style.Section>
    </Style.Contianer>
}
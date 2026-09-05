export interface values_Signup {
    name: string
    email: string
    password: string
}
export interface values_Login {
    email: string
    password: string
}
export interface propsForInputControl {
    label?: string
    placeholder?: string
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}
export interface homeProps {
    name: string
}

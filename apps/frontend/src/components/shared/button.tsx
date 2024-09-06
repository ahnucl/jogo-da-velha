import { Card } from './card'

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    color?: 'primary' | 'secondary' | 'dark' | 'light'
}

export function Button(props: ButtonProps) {
    return (
        <button {...props} className="text-black">
            <Card color={props.color} hover>
                {props.children}
            </Card>
        </button>
    )
}
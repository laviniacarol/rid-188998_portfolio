import { MyButton } from "./styles";

function Button({ children }: { children: React.ReactNode }) {
    return <MyButton>{children}</MyButton>;
}

export default Button;

//props/propriedade/parâmetro
import { Container } from "./style"

export function Componente({nome, idade}) {
    return (
        <Container>
            <p>{nome}</p>
            <p>{idade}</p>
        </Container>
    )
}


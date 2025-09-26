import type { ReactNode } from "react"
import { ContainerApp } from "./Container.styles"

interface ContainerProps {
    children: ReactNode;
    overflow: boolean;
}

export const Container: React.FC<ContainerProps> = ({children, overflow}) => {
    return(
        <ContainerApp desableOverflow={overflow}>
            {children}
        </ContainerApp>
    )
}
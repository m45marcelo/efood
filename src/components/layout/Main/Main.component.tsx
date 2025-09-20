
import { MainContainer } from "./main.styles";

import type { ReactNode } from "react";
interface MainProps {
    children: ReactNode;
    gap: string;
}

export const Main: React.FC<MainProps> = ({children, gap}) => {
    return (
        <MainContainer gapMain={gap}>
            {children}
        </MainContainer>
    );
};

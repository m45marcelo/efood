
import { MainContainer, MainContent } from "./main.styles";

import type { ReactNode } from "react";
interface MainProps {
    children?: ReactNode;
    gap: string;
}

export const Main: React.FC<MainProps> = ({children, gap}) => {
    return (
        <MainContainer>
            <MainContent gapMain={gap}>
                {children}
            </MainContent>
        </MainContainer>
    );
};

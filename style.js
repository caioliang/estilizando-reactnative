import { Colors } from 'react-native/Libraries/NewAppScreen'
import styled from 'styled-components/native' 
//importa as bibliotecas do framework


//objeto para usar como base das components (que se repete)
//considerado como Variavel Global
//Objeto Dicionario

export const theme = {
    colors :{
        primary : "#4A6FA5",
        secondary : "#6b8b42",
        background : "#FFFFFF",
        border : "#e0e0e0"
    },
    spacing : {
        sm : "8px",
        md  : "16px",
        lg : "24px"
    },
    radii : {
        sm : "8px",
        md  : "12px",
        lg : "40px"
    }
}

//criacao de estilo de components
// export const Container = styled.View`
//     background-color: "#FFFFFF";
//     border-radius: 12px;
//     padding: 16px;
// `
export const Container = styled.View`
    background-color: ${theme.colors.background} ;
    border-radius: ${theme.radii.md};
    padding: ${theme.spacing.md};
`

export const ProfileHeader = styled.View`
    flex-direction: row;
    align-items: center;
    margin-bottom: ${theme.spacing.md};
    `
export const Avatar = styled.Image`
    width: 80px;
    height: 80px;
    border-radius: ${theme.radii.lg};
    border-width: 2px;
    border-color: ${theme.colors.border};
`
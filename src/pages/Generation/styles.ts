import styled from 'styled-components';

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
        display: flex;
        align-items: center;
        text-decoration: none;
        color: #3d3d4d;
        transition: color 0.2s;
        background: #fff;
        border-radius: 5px;
        padding: 10px;
        width: 100px;
        display: block;

        &:hover {
            color: #666;
            transform: translateX(2px);
        }

        svg {
            margin-right: 4px;
        }
    }
`;

export const Logo = styled.img`
    width: 100px;
    height: 100px;
`;

export const GenerationInfo = styled.section`
    margin-top: 30px;

    header {
        display: flex;
        align-items: center;

        img {
            width: 120px;
            height: 120px;
            border-radius: 50%;
        }

        div {
            margin-left: 24px;

            strong {
                font-size: 36px;
                color: #3d3d4d;
                text-transform: capitalize;
            }

            p {
                font-size: 18px;
                color: #737380;
                margin-top: 4px; 
            }
        }
    }

    ul {
        display: flex;
        list-style: none;
        margin-top: 40px;

        li {

            div {
                padding: 20px;
                background-color: white;
                border-radius: 5px;
                margin-left: 65px;
            }

            & + li {
                margin-left: 80px;
            }

            strong {
                display: block;
                font-size: 36px;
                color: #3d3d4d;
            }

            span {
                display: block;
                margin-top: 4px;
                color: #6c6c80;
            }
        }
    }
`;

export const Pokemons = styled.div`
    margin-top: 50px;

    div {
        background: #fff;
        border-radius: 5px;
        margin-right: 19px;
        margin-bottom: 19px;
        width: 20%;
        padding: 28px;
        text-decoration: none;
        float: left;
        strong {
                font-size: 20px;
                color: #3D3D4D;
                text-transform: capitalize;
            }
    }
`;
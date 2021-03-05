import styled from 'styled-components';

export const Title = styled.h1`
    font-size: 50px;
    color: #3d3d4d;
    max-width: 890px;
    height: 100%;
    line-height: 16px;
    padding: 30px;
`;

export const Logo = styled.img`
    width: 100px;
    height: 100px;
`;

export const Generations = styled.div`
    margin-top: 80px;
    max-width: 700px;

    a {
        background: #fff;
        border-radius: 5px;
        width: 100%;
        padding: 24px;
        display: block;
        text-decoration: none;
        display: flex;
        align-items: center;
        transition: transform 0.2s;

        &:hover {
            transform: translateX(10px);
        }

        & + a {
            margin-top: 16px;
        }

        img {
            width: 64px;
            height: 64px;
            border-radius: 50%;
        }

        div {
            margin-left: 16px;

            strong {
                font-size: 20px;
                color: #3D3D4D;
                text-transform: capitalize;
            }

            p {
                font-size: 18px;
                color: #A8A8B3;
                margin-top: 4px;
            }
        }

        svg {
            margin-left: auto;
            color: #A8A8B3;
        }
    }
`;
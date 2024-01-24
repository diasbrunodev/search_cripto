import styled from "styled-components";

export const Container = styled.div`
    margin: 0 auto;
    width: 100%;
    max-width: 1080px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    h1 {
        margin-top: 24px;
        margin-bottom: 14px;
        color: #fff;
    }

    .link {
        text-decoration: none;
        color: #fff;
        background-color: #575757;
        padding: 8px 24px;
        border-radius: 8px;
        transition: all .3s;
    }

    :hover {
        transform: scale(1.08);
        background-color: #30beff;
    }
`
import styled from "styled-components";

export const Container = styled.div`
    padding: 0 14px;
    color: #fff;

    .center {
        text-align: center;
        margin-bottom: 14px;
    }

    .content {
        max-width: 420px;
        background-color: #0f0f0f;
        margin: 24px auto;
        padding: 24px;
        border-radius: 8px;

        p {
            display: flex;
            width: 100%;
            justify-content: space-between;
        }

        p:not(:last-of-type) {
            margin-bottom: 16px;
        }

        .profit {
            color: #12f98a;
        }

        .loss {
            color: #f91257;
        }
    }
`
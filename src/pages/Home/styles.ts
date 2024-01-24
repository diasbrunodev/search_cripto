import styled from "styled-components";

export const Container = styled.div`
    margin: 0 14px;
`

export const Form = styled.form`
    width: 100%;
    display: flex;
    gap: 14px;

    input {
        width: 100%;
        height: 44px;
        border-radius: 8px;
        padding: 0 8px;
        outline: none;
        border: 0;
    }

    button {
        background: transparent;
        border: 0;
    }
`

export const Table = styled.table`
    margin: 0;
    padding: 0;
    width: 100%;
    table-layout: fixed;
    border-collapse: separate;
    border-spacing: 0 14px;

    th {
        font-size: 14px;
        letter-spacing: 3px;
        text-transform: uppercase;
        color: #fff;
    }

    td:first-child,
    th:first-child{
        border-radius: 8px 0 0 8px;

        @media (max-width: 600px) {
            border-radius: 0;
        }
    }

    td:last-child,
    th:last-child{
        border-radius: 8px 0 0 8px;

        @media (max-width: 600px) {
            border-radius: 0;
        }
    }

    th, td {
        padding: 14px;
        text-align: center;
    }

    @media (max-width: 600px) {
        border: 0;

        thead {
            border: none;
            clip: rect(0 0 0 0);
            height: 1px;
            overflow: hidden;
            padding: 0;
            position: absolute;
            margin: -1px;
            width: 1px;
        }
    }
`

export const Tr = styled.tr`
    background-color: #1d1c20;

    .tdLabel {
        span{
            font-weight: bold;
            font-size: 18px;
            color: #fff;
        }

        
    }

    .tdLabel, .tdProfit, .tdLoss {
        color: #bbb;
    }

    .tdProfit {
        color: #12f98a;
    }

    .tdLoss {
        color: #f91257;
    }

    .link {
        text-decoration: none;
        color: #fff;

        :hover {
        color: #30beff;
        transition: color .5s;
    }
    }

    .link:hover {
        color: #30beff;
        transition: color .5s;
    }

    @media (max-width: 600px) {
        border-bottom: 1px solid #ddd;
        display: block;
        margin-bottom: 14px;

        td {
            border-bottom: 1px solid rgba(221, 221, 221, .160);
            display: block;
            font-size: 14px;
            text-align: right;

            :last-child {
                border-bottom: 0;
            }
        }

        td::before {
                content: attr(data-label);
                float: left;
                font-weight: bold;
                color: #fff;
                text-transform: uppercase;
            }
    }
`


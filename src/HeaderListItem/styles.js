import styled from "styled-components";

export const List = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    list-style: none;
    font-size: 14px;
    font-family: "Ubuntu";
    margin: auto;

a {
    color: #333333;
    font-weight: 500;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-decoration: none;
}

li {
    margin: 0 2em;
}

li:hover {
    border-bottom: 0.2em solid #3a5dff;
}

li:last-child a{
    font-weight: 700;
}

img {
    max-height: 2em;
}
`;

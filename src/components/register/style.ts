import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;


    form {
        margin-top: 2rem;
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        section {
            display: flex;
            flex-direction: column;

            input {
                height: 3rem;
                width: 20rem;

                border: none;
                border-radius: 0.25rem;

                padding: 1rem 2rem;
            }

            input[type="radio"] {
                height: 1rem;
                width: 1rem;

                margin: 1rem 1rem 0 0;
            }

            & + section {
                margin-top: 1rem;
            }
        }

        button {
            margin-top: 2rem;

            background: white;
            border: none;
            border-radius: 0.25rem;

            height: 3rem;
            width: 20rem;

            color: #000;
            font-size: 1rem;
            font-weight: 700;
        }
    }
`;
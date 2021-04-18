import styled, { css } from "styled-components";

type Props = {
  ghost?: boolean;
};

export const Button = styled.button<Props>`
  ${({ ghost }) =>
    ghost
      ? css`
          background: transparent;
          color: var(--main-color);
        `
      : css`
          background: var(--main-color);
          color: white;
          width: 50%;
          place-self: center;
        `};
  border-radius: 3px;
  border: 2px solid var(--main-color);
  margin: 0 1em;
  padding: 0.25em 1em;
`;

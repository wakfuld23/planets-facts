import styled from "styled-components";
import { FaExternalLinkSquareAlt } from "react-icons/fa";
import theme from "../../theme";


export const ConentDiv = styled.div`
  padding: 0 1.5rem;
  margin-bottom: 1.75rem;

  h1 {
    font-family: ${theme.fonts.secondary};
    font-weight: 500;
    text-transform: uppercase;
    margin-bottom: 1rem;
    text-align: center;
    font-size: 2.5rem;
  }

  p {
    text-align: center;
    line-height: 22px;
    font-size: 0.6875rem;
    color: ${theme.colors.whiteAlpha75};
    margin-bottom: 10px;

  }
`;

export const Text = styled.div``;

export const MoreInfoDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;

  p {
    text-align: center;
    line-height: 25px;
    font-size: 0.75rem;
    color: ${theme.colors.lightGray};
    margin: 0;
  }
  a {
    text-align: center;
    line-height: 25px;
    font-weight: 600;
    font-size: 0.75rem;
    color: ${theme.colors.lightGray};
    display: flex;
    gap: 5px;
    align-items: center;
  }
`;

export const ExternalIcon = styled(FaExternalLinkSquareAlt)`
  width: 14px;
  height: 14px;
`;

import React from 'react'
import styled from '@emotion/styled'

const Container = styled.div`
display: flex;
  flex-direction: row; /* Default: Arrange children side by side */

  @media (max-width: 600px) {
    flex-direction: column; /* On smaller screens, arrange children in a column */
  }

  > * + * {
    margin-left: 1rem;
  }
`;

const Pane = styled.div`
flex: ${props => props.weight};
`;


const SplitScreen = ({
    children,
    leftWeight = 1,
    rightWeight = 1,
}) => {
    const [left, right] = children;
    return (
        <Container>
            <Pane weight={leftWeight}>
                {left}
            </Pane>
            <Pane weight={rightWeight}>
                {right}
            </Pane>
        </Container>
    )
}

export default SplitScreen
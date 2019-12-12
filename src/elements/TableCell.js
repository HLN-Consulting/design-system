// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledCell = styled(({ ...rest }) => <td {...rest} />)`
    margin: 0;
    padding: 0.66rem;

    span {
        color: ${(props) => props.theme.colors.text.default};
        font-family: ${(props) => props.theme.typography.fonts.ui};
        font-size: 0.9rem;
        font-weight: 400;
    }
`;

export const TableCell = ({ children, ...props }) => {
    const a11yProps = {};

    return (
        <StyledCell {...a11yProps} {...props}>
            <span>{children}</span>
        </StyledCell>
    );
};

TableCell.propTypes = {
    children: PropTypes.node.isRequired
};

TableCell.defaultProps = {};

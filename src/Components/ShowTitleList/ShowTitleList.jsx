import React from 'react';
import PropTypes from 'prop-types';

ShowTitleList.propTypes = {
    titleList: PropTypes.array,
};

function ShowTitleList(props) {
    const { titleList } = props;
    return (
        <ul>
            { titleList.map((title, index) =>(
                <li key={index}>{title}</li>
            ))}
        </ul>
    );
}

export default ShowTitleList;
import React from 'react';
import Header from './Header';
import PartiesVote from './PartiesVote';


const Status = (props) => {
    const {goToPage, page} = props;

    return (
        <>
            <Header page={page} goToPage={goToPage} />
            <PartiesVote />
        </>
    );
}
export default Status;
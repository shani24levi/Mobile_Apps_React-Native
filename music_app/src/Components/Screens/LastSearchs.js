import React from 'react';
import { connect } from 'react-redux';
import ListOfSearches from '../ListOfSearches';

import { setSearchQury, fatchSongsByQury } from '../../Redux/searchAction';

function mapStateToProps(state) {
    return {
        lastSearches: state.search.lastSearches
    };
}

const LastSearchs = (props) => {
    console.log(props.lastSearches);
    return (
        <>
            <ListOfSearches lastSearches={props.lastSearches} />
        </>
    );
}

export default connect(mapStateToProps, { setSearchQury, fatchSongsByQury })(LastSearchs);


import React from 'react';
import axios from 'axios';
import Header from './Header';
import SelectBox from './SelectBox';

const Home = (props) => {
  const { goToPage, page } = props;

  const partiesPress = (id) => {
    console.log(`clike ${id}`);
    axios({
      method: 'POST',
      url: `https://isr-elections.herokuapp.com/api/parties/vote/${id}`
    })
      .then((data) => {
        alert("Thank you for voting !");
        return;
      })
      .catch((error) => {
        console.log(error.response);
        return;
      })
  }

  return (
    <>
      <Header page={page} goToPage={goToPage} />
      <SelectBox partiesPress={partiesPress} />
    </>
  );
}
export default Home;
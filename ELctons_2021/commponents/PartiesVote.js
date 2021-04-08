import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { View, StyleSheet } from 'react-native';
import Loading from './Loading';
import PartiesVoteItem from './PartiesVoteItem';


const PartiesVote = () => {
    const [partiesVotes, setPartiesVote] = useState([]);
    const [loding, setLoding] = useState(true);

    function Comparator(a, b) {
        if (a[1].currentVotes > b[1].currentVotes) return -1;
        if (a[1].currentVotes > b[1].currentVotes) return 1;
        return 0;
    }

    const getTop5 = (data) => {
        let top5 = [];
        for (let i = 0; i < 5; i++) {
            top5.push(data[i]);
        }
        return top5;
    }

    useEffect(() => {
        axios({
            method: 'GET',
            url: 'https://isr-elections.herokuapp.com/api/parties/poll-status'
        })
            .then((data) => {
                let dataArry = Object.entries(data.data);
                dataArry = dataArry.sort(Comparator);
                let top5 = getTop5(dataArry);

                setPartiesVote(top5);
                setLoding(false);
                return;
            })
            .catch((error) => {
                console.log(error.response);
                return;
            })
    }, [])

    return (
        <View>
            {
                loding ? <Loading /> :
                    <View style={styles.continer}>{
                        partiesVotes.map((item) => {
                            return (<PartiesVoteItem key={item[0]} name={item[0]} amount={item[1].currentVotes} />);
                        })
                    }
                    </View>
            }
        </View>
    );
}
export default PartiesVote;

const styles = StyleSheet.create({
    continer: {
        padding: 20
    }
})
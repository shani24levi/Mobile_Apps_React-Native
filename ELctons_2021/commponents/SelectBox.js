import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { View, StyleSheet } from 'react-native';
import PartiesItem from './PartiesItem';
import Loading from './Loading';

const SelcetBox = (props) => {
    const { partiesPress } = props;
    const [partiesData, setParties] = useState([]);
    const [loding, setLoding] = useState(true);

    const setPartiesImg = (parties) => {
        parties.map((item, i) => {
            switch (item.id) {
                case 'avoda':
                    parties[i].img = 'https://lh3.googleusercontent.com/proxy/xLzuW2YARdCOI6P-15NINXoqqaoyIAsitUczrWeI1CHZJF79K-RKpWL8rXXrKJmElvLtRSRSQ7LYIzjxYZeZQJQ8mLbgbiEgE15y24YCUL31fPWMgT7qXf6bpKineWg'
                    break;
                case 'gesher':
                    parties[i].img = 'https://res.cloudinary.com/thewhistle/image/upload/w_200,h_200,c_thumb/e_tint:95:604597:ae9fd1:e2ddee/v1575280206/statement/ylnj6n52r0nu6nxwd9p6.png'
                    break;
                case 'kahol-lavan':
                    parties[i].img = 'https://cdn1.bgu4u.co.il/wp-content/uploads/2019/08/25134639/%D7%9C%D7%95%D7%92%D7%95-%D7%9B%D7%97%D7%95%D7%9C-%D7%9C%D7%91%D7%9F-450x253.jpg'
                    break;
                case "likud":
                    parties[i].img = 'https://res.cloudinary.com/thewhistle/image/upload/w_200,h_200,c_thumb/e_tint:95:015a84:5f90ad:b8d3e0/v1501061868/statement/c8rakyruvjtswb3kuiy6.jpg'
                    break;
                case 'merez':
                    parties[i].img = 'https://healthletters.files.wordpress.com/2015/03/meretz.png'
                    break;
                case 'shas':
                    parties[i].img = 'https://www.120plus1.org.il/wp-content/uploads/2019/07/%D7%9C%D7%95%D7%92%D7%95-%D7%9E%D7%A4%D7%9C%D7%92%D7%AA-%D7%A9%D7%A1-03.png'
                    break;
                case 'tikva-hadasha':
                    parties[i].img = 'https://davidyabo.com/wp-content/uploads/2020/12/Tikvalogo.png'
                    break;
                case 'yahadut-hatora':
                    parties[i].img = 'https://www.120plus1.org.il/wp-content/uploads/2019/07/%D7%9C%D7%95%D7%92%D7%95-%D7%9E%D7%A4%D7%9C%D7%92%D7%AA-%D7%99%D7%94%D7%93%D7%95%D7%AA-%D7%94%D7%AA%D7%95%D7%A8%D7%94-03.png'
                    break;
                case 'yesh-atid':
                    parties[i].img = 'https://www.makorrishon.co.il/nrg/images/archive/300x225/1/428/110.jpg'
                    break;
                case 'zionut-datit':
                    parties[i].img = 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/%D7%9C%D7%95%D7%92%D7%95_%D7%9E%D7%A4%D7%9C%D7%92%D7%AA_%D7%9E%D7%A0%D7%94%D7%99%D7%92%D7%95%D7%AA_%D7%9E%D7%A7%D7%95%D7%9E%D7%99%D7%AA.jpg/200px-%D7%9C%D7%95%D7%92%D7%95_%D7%9E%D7%A4%D7%9C%D7%92%D7%AA_%D7%9E%D7%A0%D7%94%D7%99%D7%92%D7%95%D7%AA_%D7%9E%D7%A7%D7%95%D7%9E%D7%99%D7%AA.jpg'
                    break;
                case 'yamina':
                    parties[i].img = 'https://pbs.twimg.com/profile_images/1355626523307466754/ryJ_M-gT.jpg'
                    break;
                case 'israel-beitenu':
                    parties[i].img = 'https://beytenu.org.il/wp-content/uploads/2014/05/431488_370271293005516_416204043_n.jpg'
                    break;

                default:
                    parties[i].img = 'https://static.vecteezy.com/system/resources/thumbnails/000/550/980/small/user_icon_001.jpg'
                    break;
            }
        })
        return parties;
    }

    useEffect(() => {
        axios({
            method: 'GET',
            url: 'https://isr-elections.herokuapp.com/api/parties'
        })
            .then((data) => {
                let newParties = setPartiesImg(data.data.parties);
                setParties(newParties);
                setLoding(false);
                return;
            })
            .catch((error) => {
                console.log(error.response);
                return;
            })
    }, [])

    return (
        <View style={styles.contoner}>
            {
                loding ? <Loading /> :
                    partiesData.map((item) => {
                        return (<PartiesItem key={item.id} i={item.id} img={item.img} partiesPress={() => { partiesPress(item.id) }} />);
                    })
            }
        </View>
    );
}
export default SelcetBox;

const styles = StyleSheet.create({
    contoner: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        alignContent: 'center'

    }
})
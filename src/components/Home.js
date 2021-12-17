import React, { useEffect } from "react";
import styled from "styled-components";
import ImgSlider from "./ImgSlider";
import Movies from "./Movies";
import Viewers from "./Viewers";
import db from "../Firebase";
import { useDispatch } from "react-redux";
import { setMovies } from "../features/movie/movieSlice";

function Home() {

    const dispatch = useDispatch();
    let recommended = [];
    let newToDisney = [];
    let originals = [];
    let trending = [];



    useEffect(() => {
        db.collection("movies").onSnapshot((snapshot) => {
            let tempMovies = snapshot.docs.map((doc) => {
                // console.log(doc.data());


                switch (doc.data().type) {
                    case "recommended":
                        recommended = [...recommended, { id: doc.id, ...doc.data() }];
                        break;
                    case "new":
                        newToDisney = [...newToDisney, { id: doc.id, ...doc.data() }];
                        break;
                    case "original":
                        originals = [...originals, { id: doc.id, ...doc.data() }];
                        break;
                    case "trending":
                        trending = [...trending, { id: doc.id, ...doc.data() }];
                        break;

                    default:
                        break;
                }

            });
            dispatch(setMovies({
                recommended: recommended,
                newToDisney: newToDisney,
                originals: originals,
                trending: trending
            }));
        })
    }, [])

    return (
        <Container>
            <ImgSlider />
            <Viewers />
            <Movies />
        </Container>
    )
}

export default Home;

const Container = styled.main`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    overflow-x: hidden;
    position: relative;

    &:before {
        content:"";
        background: url("images/home-background.png") center center / cover 
        no-repeat fixed;
        position: absolute;
        top:0;
        bottom:0;
        left:0;
        right:0;
        z-index:-1;
    }
`


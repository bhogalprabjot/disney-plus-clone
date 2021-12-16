import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useParams } from "react-router-dom"
import db from "../Firebase"

function Details() {
    const { id } = useParams();
    console.log(id);
    const [movie, setMovie] = useState();



    useEffect(() => {
        db.collection("movies")
            .doc(id)
            .get()
            .then((doc) => {
                if (doc.exists) {
                    console.log(doc.data());
                    setMovie(doc.data());
                }
                // console.log(doc.data())
            })
    }, [])

    // console.log("movie is "+movie)

    return (
        <Container>
            {movie &&
                <>
                    <Background>
                        <img src={movie.backgroundImg} alt="" />
                    </Background>
                    <ImageTitle>
                        <img src={movie.titleImg} alt="" />
                    </ImageTitle>
                    <Controls>
                        <PlayButton>
                            <img src="/images/play-icon-black.png" alt="" />
                            <span>PLAY</span>
                        </PlayButton>
                        <TrailerButton>
                            <img src="/images/play-icon-white.png" alt="" />
                            <span>TRAILER</span>
                        </TrailerButton>
                        <AddButton>
                            <span> + </span>
                        </AddButton>
                        <GroupWatchButton>
                            <img src="/images/group-icon.png" alt="" />
                        </GroupWatchButton>
                    </Controls>
                    <SubTitle>
                        {movie.subTitle}
                    </SubTitle>
                    <Description>
                        {movie.description}
                    </Description>
                </>
            }

        </Container>
    )
}

export default Details

const Container = styled.div`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
`
const Background = styled.div`
    position: fixed;
    top:0;
    bottom:0;
    left:0;
    right:0;
    z-index:-1;
    opacity:0.8;

    img{
        width:100%;
        height:100%;
        object-fit: cover; 

    }
`

const ImageTitle = styled.div`
    height: 30vh;
    min-height: 170px;
    width: 35vw;
    min-width: 200px;
    margin-top:60px;

    img{
        width:100%;
        height:100%;
        object-fit:contain;
    }
`
const Controls = styled.div`
    display:flex;
    align-items:center;
    margin-top:30px;
`
const PlayButton = styled.div`
    border-radius:4px;
    padding: 0px 24px;
    margin-right:22px;
    font-size: 15px;
    display:flex;
    align-items: center;
    height: 56px;
    background-color: rgb(249,249,249);
    border: none;
    cursor: pointer;
    letter-spacing:1.8px;
    color: black;

    &:hover{
        background: rgb(198,198,198)
    }
`
const TrailerButton = styled(PlayButton)`
    background-color: rgba(0, 0, 0, 0.3);
    border: 1px solid rgb(249, 249, 249);
    color: rgb(249, 249, 249);
    
`
const AddButton = styled.div`
    width:44px;
    height:44px;
    display:flex;
    margin-right:16px;
    align-items: center;
    justify-content: center;
    border-radius:50%;
    border: 2px solid white;
    background-color:rgba(0, 0, 0, 0.6);
    cursor:pointer;
    span{
        font-size:30px;
        color: white;
        
    }
`
const GroupWatchButton = styled(AddButton)`
    background: black;
`

const SubTitle = styled.div`
    color: rgb(249, 249, 249);
    font-size: 15px;
    min-height: 20px;
    margin-top:26px;
`
const Description = styled.div`
    line-height: 1.4;
    max-width: 760px;
    font-size:20px;
    margin-top:16px;
    color: rgb(249, 249, 249);
`
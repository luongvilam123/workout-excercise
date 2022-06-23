/* eslint-disable no-unused-vars */
import React,{useState,useEffect} from 'react';
import { Box } from '@mui/material';
import {useParams} from 'react-router-dom';
import {exerciseOptions,fetchData,youtubeOptions} from '../utils/fetchData';
import Detail from '../components/Detail';
import SimilarExercises from '../components/SimilarExercises';
import ExerciseVideos from '../components/ExerciseVideos';


const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const {id} = useParams();
  const [exerciseVideos, setExerciseVideos] = useState([])

  useEffect(() => {
    const fetchExercisesData=async()=>{
      const exerciseDbUrl=`https://exercisedb.p.rapidapi.com`;
      const youtubeSearchUrl=`https://youtube-search-and-download.p.rapidapi.com`;
      const exerciseDetailData= await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`,exerciseOptions);
      setExerciseDetail(exerciseDetailData);

      const exerciseVideosData= await fetchData(`${youtubeSearchUrl}/search?q=${exerciseDetailData.name}`,youtubeOptions);
      setExerciseVideos(exerciseVideosData);
    } 
  
    fetchExercisesData();
  }, [id])
  
  return (
   <Box>
    <Detail exerciseDetail={exerciseDetail} />
    <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name} />
    <SimilarExercises/>
   </Box>
  )
}

export default ExerciseDetail
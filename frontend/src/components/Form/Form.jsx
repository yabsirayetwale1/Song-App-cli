// import React, { useState, useEffect } from "react";
// import { TextField, Button, Typography, Paper, Select,Container, MenuItem, FormControl, InputLabel } from "@mui/material";
// import { useDispatch, useSelector } from "react-redux";
// import { CREATE_SONG, UPDATE_SONG_BY_ID } from "../../redux/actionTypes";
// import FileBase from "react-file-base64";
// import styled from "@emotion/styled";
// import { space, layout} from "styled-system";
// import {useNavigate} from 'react-router-dom'

// const FormContainer = styled(Paper)(space,{borderRadius: '10px',});
// const FormTextField = styled(TextField)(space);
// const FormButton = styled(Button)(space, layout);
// const FormSelect = styled(Select)(space);
// const Form = ({ currentId, setCurrentId }) => {
//   const [postData, setPostData] = useState({
//     singer: "",
//     title: "",
//     genre: "",
//     imgUrl: "",
//     audio: ""
//   });
//   const history=useNavigate()
//   const song = useSelector((state) =>
//     currentId ? state.songs.songs.find((msg) => msg._id === currentId) : null
//   );

//   useEffect(() => {
//     if (song) {
//       setPostData(song);
//     }
//   }, [song]);

//   // Function to compress the Base64 audio data
// const compressBase64 = async (base64Data) => {
//   // Convert the Base64 data to a Blob
//   const blob = await fetch(base64Data).then((res) => res.blob());

//   // Create a new FileReader
//   const reader = new FileReader();

//   return new Promise((resolve, reject) => {
//     // Set the FileReader's onload event handler
//     reader.onload = () => {
//       const compressedBase64 = reader.result;

//       // Resolve with the compressed Base64 data
//       resolve(compressedBase64);
//     };

//     // Set the FileReader's onerror event handler
//     reader.onerror = () => {
//       // Reject with an error message
//       reject(new Error('Failed to compress audio data.'));
//     };

//     // Read the blob data as Data URL (Base64)
//     reader.readAsDataURL(blob);
//   });
// };

// //
// const handleFileUpload = async ({ base64 }) => {
//   try {
//     // Compress the Base64 audio data
//     const compressedBase64 = await compressBase64(base64);

//     // Set the compressed data in the postData state
//     setPostData({ ...postData, audio: compressedBase64 });
//   } catch (error) {
//     console.error(error);
//     // Handle the error
//   }
// };
// const dispatch = useDispatch();
//   const handleSubmit =async (e) => {
//     e.preventDefault();
//     // if(!postData.audio){
//     //   alert ("upload mp3 is required")
//     // }
 
//     if( currentId ){
//       dispatch({ type: UPDATE_SONG_BY_ID,currentId , song: postData})
//       history('/songs')
//      }
//      else{
//        dispatch({ type: CREATE_SONG,song: postData })
//        history('/')
//      }
  
//     clear();
//   };

//   const clear = () => {
//     setCurrentId(null);
//     setPostData({
//       singer: "",
//       title: "",
//       genre: "",
//       imgUrl: "",
//       audio: ""
//     });
//   };

//   return (
//    <>
//    <FormContainer p={3} mb={3}>
//       <Typography variant="h6">{currentId ? "Edit" : "Add"} Song</Typography>
//       <form autoComplete="off" noValidate onSubmit={handleSubmit}>
//         <FormTextField
//           name="singer"
//           variant="outlined"
//           label="Singer"
//           fullWidth
//           value={postData.singer}
//           onChange={(e) => setPostData({ ...postData, singer: e.target.value })}
//           mb={2}
//         />
//         <FormTextField
//           name="title"
//           variant="outlined"
//           label="Title"
//           fullWidth
//           value={postData.title}
//           onChange={(e) => setPostData({ ...postData, title: e.target.value })}
//           mb={2}
//         />
//         <FormControl fullWidth variant="outlined" mb={2}>
//           <InputLabel>Genre</InputLabel>
//           <FormSelect
//             value={postData.genre}
//             onChange={(e) => setPostData({ ...postData, genre: e.target.value })}
//             label="Genre"
//           >
//             <MenuItem value="Rock">Rock</MenuItem>
//             <MenuItem value="Pop">Pop</MenuItem>
//             <MenuItem value="Hip Hop">Hip Hop</MenuItem>
//             <MenuItem value="Dance">Dance</MenuItem>
//             <MenuItem value="Electronic">Electronic</MenuItem>
//           </FormSelect>
//         </FormControl>
//         <div>
//         <div style={{position:'relative',color:'blue',top:'20px',zIndex:'5',width:'90px',height:'20px',background:'white'}}>
//            upload imgUrl
//           </div>
//           <FileBase
//             type="file"
//             multiple={false}
//             onDone={({ base64 }) =>
//               setPostData({ ...postData, imgUrl: base64 })
//             }
//           />
//         </div>
        
//         <div >
//          <Container  mt={3}>
//           <div style={{position:'relative',color:'blue',top:'20px',zIndex:'5',width:'90px',height:'20px',background:'white'}}>
//             upload mp3
//           </div>
//            <FileBase
//             type="file"
//              multiple={false}
//              onDone={handleFileUpload}
//            />
//          </Container>
//         </div>
//         <FormButton
//           variant="contained"
//           color="primary"
//           size="large"
//           type="submit"
//           fullWidth
//           mt={2}
//         >
//           {currentId ? "Update" : "Add"} Song
//         </FormButton>
//         <FormButton
//           variant="contained"
//           color="secondary"
//           size="small"
//           onClick={clear}
//           fullWidth
//           mt={2}
//         >
//           Clear
//         </FormButton>
//       </form>
//     </FormContainer>
//     </>
//   );
// };

// export default Form;




import React, { useState, useEffect } from "react";
import { TextField, Button, Typography, Paper, Select,Container, MenuItem, FormControl, InputLabel } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { CREATE_SONG, UPDATE_SONG_BY_ID } from "../../redux/actionTypes";
import FileBase from "react-file-base64";
import styled from "@emotion/styled";
import { space, layout} from "styled-system";
import {useNavigate} from 'react-router-dom'

const FormContainer = styled(Paper)(space,{borderRadius: '10px',});
const FormTextField = styled(TextField)(space);
const FormButton = styled(Button)(space, layout);
const FormSelect = styled(Select)(space);
const Form = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({
    singer: "",
    title: "",
    genre: "",
    imgUrl: "",
    audio: ""
  });
  const history=useNavigate()
  const song = useSelector((state) =>
    currentId ? state.songs.songs.find((msg) => msg._id === currentId) : null
  );

  useEffect(() => {
    if (song) {
      setPostData(song);
    }
  }, [song]);

  const dispatch = useDispatch();
  const handleSubmit =async (e) => {
    e.preventDefault();
    if(!postData.audio){
      alert ("upload mp3 is required")
    }
  else{
    if( currentId ){
      dispatch({ type: UPDATE_SONG_BY_ID,currentId , song: postData})
      history('/songs')
     }
     else{
       dispatch({ type: CREATE_SONG,song: postData })
       history('/')
     }
  }
    clear();
  };

  const clear = () => {
    setCurrentId(null);
    setPostData({
      singer: "",
      title: "",
      genre: "",
      imgUrl: "",
      audio: ""
    });
  };

  return (
   <>
   <FormContainer p={3} mb={3}>
      <Typography variant="h6">{currentId ? "Edit" : "Add"} Song</Typography>
      <form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <FormTextField
          name="singer"
          variant="outlined"
          label="Singer"
          fullWidth
          value={postData.singer}
          onChange={(e) => setPostData({ ...postData, singer: e.target.value })}
          mb={2}
        />
        <FormTextField
          name="title"
          variant="outlined"
          label="Title"
          fullWidth
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
          mb={2}
        />
        <FormControl fullWidth variant="outlined" mb={2}>
          <InputLabel>Genre</InputLabel>
          <FormSelect
            value={postData.genre}
            onChange={(e) => setPostData({ ...postData, genre: e.target.value })}
            label="Genre"
          >
            <MenuItem value="Rock">Rock</MenuItem>
            <MenuItem value="Pop">Pop</MenuItem>
            <MenuItem value="Hip Hop">Hip Hop</MenuItem>
            <MenuItem value="Dance">Dance</MenuItem>
            <MenuItem value="Electronic">Electronic</MenuItem>
          </FormSelect>
        </FormControl>
        <div>
        <div style={{position:'relative',color:'blue',top:'20px',zIndex:'5',width:'90px',height:'20px',background:'white'}}>
           upload imgUrl
          </div>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setPostData({ ...postData, imgUrl: base64 })
            }
          />
        </div>
        
        <div >
         <Container  mt={3}>
          <div style={{position:'relative',color:'blue',top:'20px',zIndex:'5',width:'90px',height:'20px',background:'white'}}>
            upload mp3
          </div>
         <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setPostData({ ...postData, audio: base64 })
            }
          />
         </Container>
        </div>
        <FormButton
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
          mt={2}
        >
          {currentId ? "Update" : "Add"} Song
        </FormButton>
        <FormButton
          variant="contained"
          color="secondary"
          size="small"
          onClick={clear}
          fullWidth
          mt={2}
        >
          Clear
        </FormButton>
      </form>
    </FormContainer>
    </>
  );
};

export default Form;

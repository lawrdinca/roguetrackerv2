import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';

import useStyles from './styles';
import { createPost, updatePost } from '../../actions/posts';

const Form = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({ reporter: '', title: '', description: '', languages: '', selectedFile: '' });
  const post = useSelector((state) => (currentId ? state.posts.find((description) => description._id === currentId) : null));
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const clear = () => {
    setCurrentId(0);
    setPostData({ reporter: '', title: '', description: '', languages: '', selectedFile: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId === 0) {
      dispatch(createPost(postData));
      clear();
    } else {
      dispatch(updatePost(currentId, postData));
      clear();
    }
  };

  return (
    <Paper className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography variant="h6">{currentId ? `Editing "${post.title}"` : 'Reporting a Bug'}</Typography>
        <TextField 
          name="reporter" 
          variant="outlined" 
          label="Reporter" 
          fullWidth value={postData.reporter} 
          onChange={(e) => setPostData({ ...postData, reporter: e.target.value })}
        />
        <TextField 
          name="title" 
          variant="outlined" 
          label="Title" 
          fullWidth 
          value={postData.title} 
          onChange={(e) => setPostData({ ...postData, title: e.target.value })} 
        />
        <TextField 
          name="description" 
          variant="outlined" 
          label="Description" 
          fullWidth multiline 
          rows={4} value={postData.description} 
          onChange={(e) => setPostData({ ...postData, description: e.target.value })} 
        />
        <TextField 
          name="languages" 
          variant="outlined" 
          label="Languages" 
          fullWidth value={postData.languages} 
          onChange={(e) => setPostData({ ...postData, languages: e.target.value.split(',') })} 
        />
        <div className={classes.fileInput}>
          <FileBase 
            type="file" 
            multiple={false} 
            onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} 
          />
        </div>
        <Button 
          className={classes.buttonSubmit} 
          variant="contained" 
          style={{
            borderRadius: 35,
            backgroundColor: "green",
            padding: "18px 36px",
            fontSize: "18px",
            color: "white"
          }}
          size="large" 
          type="submit" 
          fullWidth
        >
          Add Report
        </Button>
        <Button
          variant="contained" 
          style={{
            borderRadius: 30,
            backgroundColor: "purple",
            padding: "7px 25px",
            fontSize: "14px",
            color: "white"
          }}
          size="small" 
          onClick={clear} 
          fullWidth
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
};

export default Form;

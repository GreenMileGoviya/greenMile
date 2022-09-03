import React from 'react';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import classes from './ImageUploader.module.css';
import { Button, CardMedia, Fab, IconButton, InputLabel } from '@mui/material';
import CenteredBox from '../CenteredBox';
import UseImageInput from '../../../hooks/use-imageInput';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import { useDispatch } from 'react-redux';
import { imageUploadActions } from '../../../store/uploadImage-slice';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
function ImageUploader({ label }) {
    const {
        handleUploadClick: handleUploadHandler,
        imagePreview: imagePreview,
        fileInput: imageInput,
        imageData: imageData,
        delteImageClick: delteImageClick
    } = UseImageInput(() => { })

    const dispatch = useDispatch();
    const uploadHandler = () => {
        imageData.map((image) => {
            dispatch(imageUploadActions.addImage(image));
        })
    }
    console.log(imageData)
    console.log(imagePreview)

    return (
        <React.Fragment>
            <InputLabel htmlFor="outlined-adornment-password">{label}</InputLabel>
            <div className={classes["file-card"]}>
                <div className={classes["file-inputs"]}>
                    <input
                        accept="image/*"
                        ref={imageInput}
                        multiple
                        type="file"
                        onChange={handleUploadHandler}
                        style={{ display: "none" }}
                    />
                    <CenteredBox align="center">
                        <Button variant="extended" onClick={() => imageInput.current.click()}>
                            <AddPhotoAlternateIcon sx={{ mr: 1 }} />
                            Add Image
                        </Button>
                    </CenteredBox>
                    {imagePreview.length !== 0 && imagePreview.map((image) => (
                        <div key={image.id} id={image.id}>
                            <CenteredBox align="right">
                                <IconButton onClick={delteImageClick(image.id)} sx={{ p: 0 }}>
                                    <HighlightOffIcon />
                                </IconButton>
                            </CenteredBox>
                            <CardMedia component="img"
                                image={image.image}
                                sx={{ pr: "30px", mb: "30px" }}
                            />
                        </div>
                    ))}
                    <CenteredBox align="center">
                        <Button variant="extended" disabled={imagePreview.length === 0} onClick={uploadHandler}>
                            <CloudUploadIcon sx={{ mr: 1 }} />
                            Upload Image
                        </Button>
                    </CenteredBox>
                </div>
                <p className={classes.main}>Supported files</p>
                <p className={classes.info}>JPG, PNG</p>
            </div>

        </React.Fragment>
    )
}

export default ImageUploader
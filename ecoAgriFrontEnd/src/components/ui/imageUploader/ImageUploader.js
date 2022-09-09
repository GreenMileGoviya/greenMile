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
function ImageUploader(props) {
    const {
        handleUploadClick: handleUploadHandler,
        imagePreview: imagePreview,
        fileInput: imageInput,
        imageData: imageData,
        deleteImageClick: deleteImageClick
    } = UseImageInput(() => { })

    const dispatch = useDispatch();
    const uploadHandler = () => {
        imageData.map((image) => {
            dispatch(imageUploadActions.addImage(image));
        })
    }

    return (
        <React.Fragment>
            <InputLabel htmlFor="outlined-adornment-password">{props.label}</InputLabel>

            <Button sx={{ p: imagePreview === null && 1 }} onClick={() => imageInput.current.click()} className={classes["file-card"]} >
                <div className={classes["file-inputs"]}>
                    <input
                        accept="image/*"
                        ref={imageInput}
                        multiple
                        type="file"
                        onChange={handleUploadHandler}
                        style={{ display: "none" }}
                    />
                    {imagePreview === null &&
                        <CenteredBox align="center">
                            add image
                        </CenteredBox>
                    }
                    {imagePreview &&
                        <div>
                            <CardMedia component="img"
                                image={imagePreview.image}
                                sx={{ height: props.size, width: props.size }}
                            />
                        </div>
                    }
                </div>
            </Button>
            {imagePreview &&
                <CenteredBox align="center">
                    <Button onClick={() => deleteImageClick(imagePreview)} style={{textTransform: "none"}} color="error"> Delete Image</Button>
                </CenteredBox>
            }
        </React.Fragment>
    )
}

export default ImageUploader
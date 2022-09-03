import { useState } from 'react';
import { useRef } from 'react';

const UseImageInput = () => {
    const fileInput = useRef();
    const [imageData, setImageData] = useState([]);
    const [imagePreview, setImagePreview] = useState([]);

    const handleUploadClick = event => {
        let file = event.target.files[0];
        // setImageData([...imageData, file]);

        imageData.push({
            id: file.name,
            file: file
        })
        console.log(imageData);
        // const imageData = new FormData();
        // imageData.append('imageFile', file);
        setImagePreview([...imagePreview,{id: file.name, image: URL.createObjectURL(file)}]);
    };

    const delteImageClick = (id) => {
        console.log(id)
    }
    return {
        delteImageClick,
        handleUploadClick,
        imagePreview,
        fileInput,
        imageData
    }
}

export default UseImageInput;
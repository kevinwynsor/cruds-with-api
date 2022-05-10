import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

function Index() {

  const key = process.env.REACT_APP_UNSPLASH_ACCESSKEY;

  const [imageUrl, setImageUrl] = useState<string>('');
  const [reset, setReset] = useState<boolean>(false);

  useEffect(() => {
    fetch(
      `https://api.unsplash.com/photos/random/?client_id=${key}`
    )
      .then((response) => response.json())
      .then((data) => setImageUrl(data.urls.regular))
      .catch(error => {
        alert('max request for image api reached');
    })
  }, [reset]);

  const Container = styled.div`
  background-image: url(${imageUrl});
  height: 100%;
  width: 1000px;
  height: 700px;
  background-repeat: no-repeat;
`;

  return (
    <Container><button onClick={() => setReset(!reset)}>CLICK CHANGE PHOTO</button></Container>
  )
}



export default Index
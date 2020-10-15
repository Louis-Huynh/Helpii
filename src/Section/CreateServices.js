import React, { useState, useEffect } from "react";
import styled from "styled-components";
// import { connect } from "react-redux";
import { COLORS } from "../Styles/Color";
import { useSelector, useDispatch } from "react-redux";
import Button from "@material-ui/core/Button";
import FieldInput from "../Components/FieldInput";
import ImageUploader from "react-images-upload";

const CreateServices = () => {
  // declaration of useStates
  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null);
  const [price, setPrice] = useState(null);
  const [category, setCategory] = useState(null);
  const [location, setLocation] = useState(null);
  const [phone, setPhone] = useState(null);
  const [email, setEmail] = useState(null);
  const [pictures, setPictures] = useState([]);

  const isLogged = useSelector((state) => state.isLogged);
  const username = useSelector((state) => state.username);
  const getEmail = useSelector((state) => state.email);

  let submitForm = () => {
    console.log("Submitted");
  };

  let onDrop = (picture) => {
    setPictures(pictures.concat(picture));
  };

  return (
    <Wrapper>
      <TitleContainer>
        <Title>Create your service</Title>
        <SubTitle>Fill in the form and we'll post your service</SubTitle>
      </TitleContainer>
      <FormContainer>
        <MainTitle>
          <ItemContainer>
            <FormHeader>Title</FormHeader>
            <FieldInput multiline={true} />
          </ItemContainer>
        </MainTitle>
        <Description>
          <ItemContainer>
            <FormHeader>Description</FormHeader>
            <FieldInput />
          </ItemContainer>
        </Description>
        <GeneralInfoContainer>
          <ItemContainer>
            <FormHeader>Category</FormHeader>
            <FieldInput />
          </ItemContainer>
          <ItemContainer>
            <FormHeader>Price</FormHeader>
            <FieldInput />
          </ItemContainer>
        </GeneralInfoContainer>
        <Bar />
        <LocationContainer>
          <ItemContainer>
            <FormHeader>Location</FormHeader>
            <FieldInput />
          </ItemContainer>
        </LocationContainer>
        <Bar />
        <PicturesContainer>
          <ItemContainer>
            <FormHeader>Pictures</FormHeader>
            <ImageUploaderContainer
              withIcon={true}
              withPreview={true}
              singleImage={false}
              buttonText="Choose images"
              onChange={onDrop}
              imgExtension={[".jpg", ".gif", ".png", ".gif"]}
              maxFileSize={5242880}
            />
          </ItemContainer>
        </PicturesContainer>
        <Bar />
        <ContactUser>
          <ItemContainer>
            <TitleWrapper>
              <FormHeader>phone number</FormHeader>
              <FormSubtitle>(optional)</FormSubtitle>
            </TitleWrapper>
            <FieldInput />
          </ItemContainer>

          <ItemContainer>
            <TitleWrapper>
              <FormHeader>Email</FormHeader>
              <FormSubtitle>(Use your current email?)</FormSubtitle>
              <p>Yes/No</p>
            </TitleWrapper>

            <FieldInput />
          </ItemContainer>
          <ItemContainer></ItemContainer>
        </ContactUser>
        <SubmitButton onClick={submitForm}>Submit</SubmitButton>
      </FormContainer>
    </Wrapper>
  );
};

export default CreateServices;

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
`;

const FormContainer = styled.div`
  margin: 2% 5%;
  padding: 2% 4%;
  width: 50%;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgb(196, 196, 196, 0.4);
`;

const Title = styled.div`
  font-weight: 500;
  font-size: 2em;
`;

const SubTitle = styled.div`
  font-weight: 400;
  font-size: 1.5em;
`;

const GeneralInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const LocationContainer = styled.div`
  width: 100%;
`;

const PicturesContainer = styled.div`
  width: 100%;
`;

const ContactUser = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const ItemContainer = styled.div`
  width: 100%;
`;

const Bar = styled.div`
  border: 2px solid black;
  margin-bottom: 2%;
  width: 100%;
`;

const MainTitle = styled.div`
  width: 100%;
`;

const Description = styled.div`
  width: 100%;
`;

const TitleContainer = styled.div`
  margin: 1% 0;
`;

const ImageUploaderContainer = styled(ImageUploader)`
  .fileContainer .deleteImage {
    background: black;
  }

  .uploadPicture {
    height: 300px;
    width: 300px;
  }
`;

const FormHeader = styled.div`
  text-align: left;
  font-weight: 400;
  font-size: 1.5em;
`;

const FormSubtitle = styled.div`
  font-weight: 300;
  font-size: 1.5em;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const SubmitButton = styled(Button)`
  width: 100%;
`;

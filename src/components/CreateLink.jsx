import React, { useState } from "react";
import { gql,useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";


const CREATE_LINK_MUTATION = gql`
  mutation PostMutation($description: String!, $url: String!) {
    post(description: $description, url: $url) {
      id
      createdAt
      url
      description
    }
  }
`;

const CreateLink=()=>{
    const [formState, setFormState]=useState({
        description:'',
        url:''
    });
    const navigate = useNavigate();

    const [createLink]=useMutation(CREATE_LINK_MUTATION,{
        variables:{
            description: formState.description,
            url:formState.url
        },
        onCompleted: ()=> navigate('/')
    });

    return (
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            createLink();
          }}
        >
          <div className="form-div">
            <input
              className="form-input"
              value={formState.description}
              onChange={(e) => {
                setFormState({
                  ...formState,
                  description: e.target.value,
                });
              }}
              type="text"
              placeholder="Enter description"
            />
            <input
              className="form-input"
              value={formState.url}
              onChange={(e) => {
                setFormState({
                  ...formState,
                  url: e.target.value,
                });
              }}
              type="text"
              placeholder="Enter URL"
            />
            <div className="button-div">
              <button type="submit" className="post-button">
                Post
              </button>
            </div>
          </div>
        </form>
      </div>
    );

}

export default CreateLink;
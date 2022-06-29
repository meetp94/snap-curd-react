import React from "react";
import {useRef} from "react";
import Card from "../ui/Card";
import classes from "./NewMeetupForm.module.css";

const NewMeetupForm = (props) => {

    const titleInputRef =useRef();
    const imageInputRef =useRef();
    const addressInputRef =useRef();
    const descriptionInputRef =useRef();


    function submitHandler(event){
        event.preventDefault();

        const entredTitle = titleInputRef.current.value;
        const entredImage = imageInputRef.current.value;
        const entredAddress = addressInputRef.current.value;
        const entredDescription = descriptionInputRef.current.value;


        const meetupData = {
                title: entredTitle,
                image: entredImage,
                address: entredAddress,
                description: entredDescription,
        }

        props.onAddMeetup(meetupData);
    }
  
    return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" required id="title" ref={titleInputRef}/>
        </div>
        <div className={classes.control}>
          <label htmlFor="image" >Meetup Image</label>
          <input type="url" required id="image" ref={imageInputRef}/>
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Address</label>
          <input type="text" required id="address" ref={addressInputRef}/>
        </div>
        <div className={classes.control}>
          <label htmlFor="Description">Description</label>
          <textarea id="description" required row="5" ref={descriptionInputRef}></textarea>
        </div>
        <div className={classes.actions }>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
};
export default NewMeetupForm;

import React from "react";
import { useHistory } from "react-router-dom";
import NewMeetupForm from "../components/meetups/NewMeetupForm";


const NewMeetupPage = () => {
    const history = useHistory();

    function addMeetupHandler(meetupData){
        fetch('https://snap-curd-react-default-rtdb.firebaseio.com/meetups.json',
        {
            method: 'POST',
            body: JSON.stringify(meetupData),
            headers: {
                'Content-Type': 'application/json'
            }

        }
        ).then(()=>{
            history.replace('/');
        });
    }


    return (
    <>
    <h1>New Meetup Here</h1>
    <NewMeetupForm onAddMeetup={addMeetupHandler}/>
    </>
    );
};

export default NewMeetupPage;
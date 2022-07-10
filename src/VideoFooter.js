import React from 'react';
import './VideoFooter.css';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import Ticker from 'react-ticker';
// const Paragraph = ({textContent}) => {
//     return <p>{textContent}</p>
//   }
const VideoFooter = ({channel,description,song}) => {
    return (
        <div className="videofooter">
            <div className="videofooter_text">
                <h3>@{channel}</h3>
                <p>{description}</p>
                <div className="videofooter_ticker">
                    <MusicNoteIcon className="videofooter_icon" />
                    <Ticker mode="smooth">
                        {() => (
                            <>
                            <p>{song}</p>
                            </>
                        )}
                    </Ticker>
                </div>
            </div>
             <img className="videofooter_record" src="https://static.thenounproject.com/png/934821-200.png" alt=""/> 
        </div>
    );
}

export default VideoFooter;
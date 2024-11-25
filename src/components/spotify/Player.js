import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleLeft, faAngleRight, faPlay} from "@fortawesome/free-solid-svg-icons";

const PLayer= () => {
    return (
        <div className="player">
           <div className="time-control">
               <p>start time</p>
               <input type="range"/>
               <p>end time</p>
           </div>
            <div className="player-control">
                <FontAwesomeIcon size="2xl" className="left" icon={faAngleLeft} />
                <FontAwesomeIcon size="2xl" className="play" icon={faPlay} />
                <FontAwesomeIcon size="2xl" className="right" icon={faAngleRight} />

            </div>
        </div>
    );
};
export default PLayer;
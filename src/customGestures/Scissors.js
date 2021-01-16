import { Finger, FingerCurl, FingerDirection } from 'fingerpose/src/FingerDescription';
import GestureDescription from 'fingerpose/src/GestureDescription';


// describe scissors gesture
const scissorsDescription = new GestureDescription('scissors');


// thumb:
scissorsDescription.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 0.5);
scissorsDescription.addCurl(Finger.Thumb, FingerCurl.NoCurl, 0.5);
scissorsDescription.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1.0);
scissorsDescription.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 1.0);

// index:
scissorsDescription.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
scissorsDescription.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.75);
scissorsDescription.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 1.0);

// middle:
scissorsDescription.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
scissorsDescription.addDirection(Finger.Middle, FingerDirection.VerticalUp, 1.0);
scissorsDescription.addDirection(Finger.Middle, FingerDirection.DiagonalUpLeft, 0.75);

// ring:
scissorsDescription.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
scissorsDescription.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.2);
scissorsDescription.addDirection(Finger.Ring, FingerDirection.DiagonalUpLeft, 1.0);
scissorsDescription.addDirection(Finger.Ring, FingerDirection.HorizontalLeft, 0.2);

// pinky:
scissorsDescription.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
scissorsDescription.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.2);
scissorsDescription.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 1.0);
scissorsDescription.addDirection(Finger.Pinky, FingerDirection.HorizontalLeft, 0.2);

// give additional weight to index and ring fingers
scissorsDescription.setWeight(Finger.Index, 2);
scissorsDescription.setWeight(Finger.Middle, 2);

export default scissorsDescription;